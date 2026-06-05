"use client";

import { useState } from "react";
import { FloatingInput } from "@/components/FloatingInput";

interface SignInScreenProps {
  onLogin: () => void;
}

export function SignInScreen({ onLogin }: SignInScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col flex-1 bg-[#F7F8F9] px-6 pt-8">
      <div className="space-y-2 mb-8">
        <h1 className="text-heading font-medium text-app-text font-rubik leading-tight">
          Signin to your<br />PopX account
        </h1>
        <p className="text-body-md text-app-placeholder font-rubik leading-relaxed">
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
        <button onClick={onLogin} className="btn-primary">
          Login
        </button>
      </div>
    </div>
  );
}
