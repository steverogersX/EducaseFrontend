"use client";

import { useState } from "react";
import { FloatingInput } from "@/components/FloatingInput";

interface CreateAccountScreenProps {
  onCreateAccount: () => void;
}

export function CreateAccountScreen({ onCreateAccount }: CreateAccountScreenProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [isAgency, setIsAgency] = useState<"yes" | "no">("yes");

  return (
    <div className="flex flex-col flex-1 bg-app-bg overflow-y-auto">
      <div className="px-6 pt-8 pb-6 space-y-4">
        <h1 className="text-heading font-medium font-rubik tracking-0">
          Create your<br />PopX account
        </h1>

        <FloatingInput
          id="fullName"
          label="Full Name"
          placeholder="Marry Doe"
          required
          value={fullName}
          onChange={setFullName}
        />
        <FloatingInput
          id="phone"
          label="Phone number"
          placeholder="Marry Doe"
          type="tel"
          required
          value={phone}
          onChange={setPhone}
        />
        <FloatingInput
          id="email"
          label="Email address"
          placeholder="Marry Doe"
          type="email"
          required
          value={email}
          onChange={setEmail}
        />
        <FloatingInput
          id="password"
          label="Password"
          placeholder="Marry Doe"
          type="password"
          required
          value={password}
          onChange={setPassword}
        />
        <FloatingInput
          id="company"
          label="Company name"
          placeholder="Marry Doe"
          value={company}
          onChange={setCompany}
        />

        <div className="space-y-3 pt-1">
          <p className="text-input-label text-app-text font-rubik">
            Are you an Agency?<span className="text-brand"> *</span>
          </p>
          <div className="flex items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <div
                onClick={() => setIsAgency("yes")}
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer transition-colors ${
                  isAgency === "yes"
                    ? "border-brand bg-brand"
                    : "border-app-border bg-white"
                }`}
              >
                {isAgency === "yes" && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              <span className="text-input-label text-app-text font-rubik">Yes</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <div
                onClick={() => setIsAgency("no")}
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer transition-colors ${
                  isAgency === "no"
                    ? "border-brand bg-brand"
                    : "border-app-border bg-white"
                }`}
              >
                {isAgency === "no" && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              <span className="text-input-label text-app-text font-rubik">No</span>
            </label>
          </div>
        </div>
      </div>

      {/* Spacer pushes button to bottom */}
      <div className="flex-1" />

      <div className="px-6 pb-10">
        <button onClick={onCreateAccount} className="btn-primary">
          Create Account
        </button>
      </div>
    </div>
  );
}
