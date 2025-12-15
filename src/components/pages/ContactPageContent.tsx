"use client";

import {useEffect, useState, useRef} from "react";
import {Locale, defaultLocale} from "@/lib/i18n";

declare global {
  interface Window {
    turnstile?: {
      render: (element: Element, options: {sitekey: string; callback: (token: string) => void; "error-callback"?: () => void}) => void;
    };
  }
}

type ContactPageContentProps = {
  locale?: Locale;
};

const ContactPageContent = ({locale = defaultLocale}: ContactPageContentProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
    website: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileError, setTurnstileError] = useState("");
  const turnstileRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  useEffect(() => {
    const existing = document.getElementById("turnstile-script");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "turnstile-script";
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    const interval = setInterval(() => {
      if (turnstileRef.current && window.turnstile) {
        window.turnstile.render(turnstileRef.current, {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "",
          callback: (token: string) => {
            setTurnstileToken(token);
            setTurnstileError("");
          },
          "error-callback": () => setTurnstileError("Verification failed"),
        });
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const hasMeaningfulText = (value: string) => {
    return /[一-龠ぁ-ゔァ-ヴーａ-ｚＡ-Ｚa-zA-Z0-9]/.test(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    setTurnstileError("");

    if (!hasMeaningfulText(formData.content)) {
      setError(true);
      setIsSubmitting(false);
      return;
    }

    if (!turnstileToken) {
      setTurnstileError("We could not verify you are human.");
      setIsSubmitting(false);
      return;
    }

    if (formData.website) {
      setError(true);
      setIsSubmitting(false);
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({...formData, turnstileToken}),
    });

    if (res.ok) {
      setSubmitted(true);
      setFormData({name: "", email: "", content: "", website: ""});
    } else {
      setError(true);
    }

    setIsSubmitting(false);
  };

  const text = {
    submitted:
      locale === "en" ? "Your message has been sent." : "送信完了しました！",
    nameLabel:
      locale === "en" ? "Name (required)" : "お名前（必須）",
    namePlaceholder:
      locale === "en" ? "Please enter your name." : "お名前を入力してください。",
    emailLabel:
      locale === "en" ? "Email address (required)" : "メールアドレス（必須）",
    emailPlaceholder:
      locale === "en" ? "e.g. example@cloud9.com" : "例：example@cloud9.com",
    contentLabel:
      locale === "en" ? "Message" : "お問い合わせ内容",
    contentPlaceholder:
      locale === "en" ? "Please enter your message." : "お問い合わせ内容をご記入ください。",
    submitSending:
      locale === "en" ? "Sending..." : "送信中...",
    submitLabel:
      locale === "en" ? "Send" : "送信",
    error:
      locale === "en"
        ? "Failed to send. Please try again later."
        : "送信に失敗しました。しばらくしてから再度お試しください。",
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center pb-4">
        CONTACT
      </h1>

      {submitted && (
        <p className="text-green-600 text-center font-medium mb-6">
          {text.submitted}
        </p>
      )}

      {!submitted && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium">
              {text.nameLabel}
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder={text.namePlaceholder}
              className="w-full bg-white border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              {text.emailLabel}
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder={text.emailPlaceholder}
              className="w-full bg-white border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="content" className="block mb-1 text-sm font-medium">
              {text.contentLabel}
            </label>
            <textarea
              name="content"
              rows={10}
              required
              placeholder={text.contentPlaceholder}
              className="w-full bg-white border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.content}
              onChange={handleChange}
            />
          </div>

          <input
            name="website"
            type="text"
            value={formData.website}
            onChange={handleChange}
            className="sr-only"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="h-14">
            <div ref={turnstileRef} />
            {turnstileError && (
              <p className="text-xs text-red-500 mt-2" role="alert">
                {turnstileError}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50"
          >
            {isSubmitting ? text.submitSending : text.submitLabel}
          </button>

          {error && (
            <p className="text-red-600 text-center mt-4">
              {text.error}
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default ContactPageContent;
