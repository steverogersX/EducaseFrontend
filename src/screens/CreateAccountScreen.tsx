"use client";

import { useState } from "react";
import { FloatingInput } from "@/components/FloatingInput";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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
      <div className="px-6 pt-8 pb-6">
        <h1 className="text-heading font-medium font-rubik text-app-text tracking-normal">
          Create your<br />PopX account
        </h1>

        <div className="mt-6 space-y-6">
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
        </div>

        <div className="space-y-2 pt-4">
          <p className="text-input-label text-app-text font-rubik">
            Are you an Agency?<span className="text-app-error"> *</span>
          </p>
          <RadioGroup
            value={isAgency}
            onValueChange={(val) => setIsAgency(val as "yes" | "no")}
            className="flex flex-row gap-6"
          >
            <label className="flex items-center gap-2 cursor-pointer">
              <RadioGroupItem
                value="yes"
                className="size-5 border-app-border data-checked:border-brand data-checked:bg-brand"
              />
              <span className="text-input-label text-app-text font-rubik">Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <RadioGroupItem
                value="no"
                className="size-5 border-app-border data-checked:border-brand data-checked:bg-brand"
              />
              <span className="text-input-label text-app-text font-rubik">No</span>
            </label>
          </RadioGroup>
        </div>
      </div>

      <div className="flex-1" />

      <div className="px-6 pb-10">
        <button onClick={onCreateAccount} className="btn-primary">
          Create Account
        </button>
      </div>
    </div>
  );
}
