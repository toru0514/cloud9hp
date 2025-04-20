"use client";

import {useState} from "react";

const ContactPage = () => {
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

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center pb-4">CONTACT</h1>

      {submitted && (
        <p className="text-green-600 text-center font-medium mb-6">送信完了しました！</p>
      )}

      {!submitted && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium">
              お名前（必須）
            </label>
            <input
              name="name"
              type="text"
              required
              placeholder="お名前を入力してください。"
              className="w-full bg-white border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              メールアドレス（必須）
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="例：example@cloud9.com"
              className="w-full bg-white border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="content" className="block mb-1 text-sm font-medium">
              お問い合わせ内容
            </label>
            <textarea
              name="content"
              rows={10}
              required
              placeholder="お問い合わせ内容をご記入ください。"
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
            {isSubmitting ? "送信中..." : "送信"}
          </button>

          {error && (
            <p className="text-red-600 text-center mt-4">
              送信に失敗しました。しばらくしてから再度お試しください。
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default ContactPage;
