import type { ReactNode } from "react";
import SyncDrawLogo from "../../assets/SyncDrawLogo";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
      <div
        className="
  w-full max-w-md
  bg-white/80 dark:bg-gray-900/80
  backdrop-blur-lg
  shadow-xl
  rounded-2xl
  p-8
  border border-gray-200 dark:border-gray-700
"
      >
        <SyncDrawLogo className="w-56 mx-auto mb-4" />{" "}
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
