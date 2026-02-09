import SyncDrawLogo from "../assets/SyncDrawLogo";
import ThemeToggle from "../components/atoms/ThemeToggle";
import LoginForm from "../components/molecules/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div
        className="
    w-full max-w-md
    bg-white/80 dark:bg-gray-900/70
    backdrop-blur-lg
    shadow-xl
    rounded-2xl
    p-8
    border border-gray-200 dark:border-gray-700
    transition-all
  "
      >
        <div className="flex flex-col items-center mb-6">
          <SyncDrawLogo />
        </div>

        <LoginForm />
      </div>
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default LoginPage;
