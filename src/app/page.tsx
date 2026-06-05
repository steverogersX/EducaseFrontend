"use client";

import { useState } from "react";
import { WelcomeScreen } from "@/screens/WelcomeScreen";
import { SignInScreen } from "@/screens/SignInScreen";
import { CreateAccountScreen } from "@/screens/CreateAccountScreen";
import { AccountSettingsScreen } from "@/screens/AccountSettingsScreen";

type Screen = "welcome" | "signin" | "create" | "settings";

export default function Page() {
  const [screen, setScreen] = useState<Screen>("welcome");

  return (
    <main className="min-h-screen bg-[#FAFAFA] flex items-start justify-center py-10">
      <div className="ui-scale w-frame h-screen-mobile bg-app-bg border-[2.5px] border-app-border/30 flex flex-col overflow-hidden">
        <div key={screen} className="animate-slide-in flex flex-col flex-1 overflow-hidden">
          {screen === "welcome" && (
            <WelcomeScreen
              onCreateAccount={() => setScreen("create")}
              onLogin={() => setScreen("signin")}
            />
          )}
          {screen === "signin" && (
            <SignInScreen onLogin={() => setScreen("settings")} />
          )}
          {screen === "create" && (
            <CreateAccountScreen onCreateAccount={() => setScreen("settings")} />
          )}
          {screen === "settings" && <AccountSettingsScreen />}
        </div>
      </div>
    </main>
  );
}
