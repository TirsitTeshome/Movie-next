"use client";

import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}\nForm Submitted!`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-700">Sign In</h2>
        <label className="mb-2 block font-semibold text-gray-600" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-600 focus:outline-none"
          placeholder="you@example.com"
        />
        <label className="mb-2 block font-semibold text-gray-600" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-6 w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-600 focus:outline-none"
          placeholder="Your password"
        />
        <button
          type="submit"
          className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700 transition"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
