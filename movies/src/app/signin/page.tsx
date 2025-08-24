"use client";

import { useState } from "react";
import Link from 'next/link';

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Email: ${email}\nPassword: ${password}\nForm Submitted!`);
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://i.pinimg.com/1200x/f5/f1/6d/f5f16d6b33c0078389c9b452138421c6.jpg')",
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />
            <form
                onSubmit={handleSubmit}
                className="relative w-full max-w-md rounded bg-white p-8 shadow-md"
            >
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
                    className="mb-4 w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-600 focus:outline-none text-black"
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
                <Link href= "/">
                    <button
                        type="submit"
                        className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700 transition"
                    >
                        Sign In
                    </button>
                </Link>
            </form>
        </div>
    );
}
