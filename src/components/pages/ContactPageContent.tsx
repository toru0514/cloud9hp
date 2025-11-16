"use client";

import {useState} from "react";
import {Locale, defaultLocale} from "@/lib/i18n";

type ContactPageContentProps = {
  locale?: Locale;
};

const ContactPageContent = ({locale = defaultLocale}: ContactPageContentProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitted(true);
      setFormData({name: "", email: "", content: ""});
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

