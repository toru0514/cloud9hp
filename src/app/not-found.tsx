// app/not-found.tsx
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-100 px-4">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-800">404 NOT FOUND</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        お探しのページは存在しないか、移動された可能性があります。
      </p>
      <Link
        href="/"
        className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
      >
        ホームに戻る
      </Link>
    </div>
  );
}
