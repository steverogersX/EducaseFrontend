interface WelcomeScreenProps {
  onCreateAccount: () => void;
  onLogin: () => void;
}

export function WelcomeScreen({ onCreateAccount, onLogin }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col flex-1 bg-app-bg">
      {/* Large empty space fills the top */}
      <div className="flex-1" />

      {/* Bottom content */}
      <div className="px-5 pb-10 space-y-6">
        <div className="space-y-2">
          <h1 className="text-heading font-medium text-app-text font-rubik">
            Welcome to PopX
          </h1>
          <p className="text-body-md text-app-text/60 font-rubik">
            Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
          </p>
        </div>

        <div className="space-y-3">
          <button onClick={onCreateAccount} className="btn-primary">
            Create Account
          </button>

          <button onClick={onLogin} className="btn-secondary">
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}
