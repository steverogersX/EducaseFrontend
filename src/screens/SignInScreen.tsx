"use client";

import { useState } from "react";
import { FloatingInput } from "@/components/FloatingInput";

interface SignInScreenProps {
  onLogin: () => void;
}

export function SignInScreen({ onLogin }: SignInScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = email.length > 0 && password.length > 0;

  return (
    <div className="flex flex-col flex-1 bg-app-bg px-6 pt-8">
      <div className="space-y-2 mb-8">
        <h1 className="text-heading font-medium text-app-text font-rubik leading-tight">
          Signin to your<br />PopX account
        </h1>
        <p className="text-input-label text-app-placeholder font-rubik leading-relaxed">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>
      </div>

      <div className="space-y-4">
        <FloatingInput
          id="email"
          label="Email Address"
          placeholder="Enter email address"
          type="email"
          value={email}
          onChange={setEmail}
        />
        <FloatingInput
          id="password"
          label="Password"
          placeholder="Enter password"
          type="password"
          value={password}
          onChange={setPassword}
        />
      </div>

      <div className="mt-6">
        <button
          onClick={isValid ? onLogin : undefined}
          className={
            isValid
              ? "btn-primary"
              : "w-full h-btn rounded-btn bg-app-placeholder/30 text-app-placeholder text-btn font-medium font-rubik text-center cursor-not-allowed"
          }
        >
          Login
        </button>
      </div>
    </div>
  );
}
