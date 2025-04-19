"use client";

import {useState} from "react";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center pb-4">CONTACT</h1>

      <form
        name="contact"
        action="/success"
        method="POST"
        data-netlify="true"
        className="space-y-6"
        onSubmit={() => setIsSubmitting(true)}
      >
        {/* Netlify hidden input */}
        <input type="hidden" name="form-name" value="contact"/>

        {/* お名前 */}
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
          />
        </div>

        {/* メールアドレス */}
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
          />
        </div>

        {/* お問い合わせ内容 */}
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
          ></textarea>
        </div>

        {/* 送信ボタン */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50"
        >
          {isSubmitting ? "送信中..." : "送信"}
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
