import { useState } from "react";
import api from "./api";
import { Toaster } from "sonner";
import { toast } from "sonner";
import { ACCESS, REFRESH } from "./constants";
import { HugeiconsIcon } from "@hugeicons/react";
import { useNavigate } from "react-router-dom";
import {
  Loading03Icon,
  ViewIcon,
  ViewOffIcon,
  UserIcon,
  Mail01Icon,
  AccessIcon,
} from "@hugeicons/core-free-icons";

export default function Register() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    const endpoint = isLogin ? "/token/" : "/register/";
    const payload = isLogin
      ? { username, password }
      : { username, email, password };

    try {
      localStorage.clear();
      const res = await api.post(endpoint, payload);

      if (isLogin) {
        localStorage.setItem(ACCESS, res.data.access);
        localStorage.setItem(REFRESH, res.data.refresh);
        toast.success("Login Successful!");
        navigate("/");
      } else {
        toast.success("Account Created! Please Login.");
        setIsLogin(true);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(
        isLogin
          ? "Invalid Credentials"
          : error.response.data.email
            ? error.response.data.email
            : error.response.data.username
              ? error.response.data.username
              : error.response.data.detail,
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa] p-6 font-mono">
      <Toaster position="top-center" richColors />

      {/* Main Auth Card */}
      <div className="w-full max-w-md bg-white border-4 border-foreground shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-10 rotate-[-1deg]">
        {/* Toggle Switch */}
        <div className="flex border-4 border-foreground mb-8 bg-foreground p-1">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 font-foreground uppercase text-sm transition-all ${
              isLogin
                ? "bg-yellow-300 text-foreground"
                : "text-white hover:bg-zinc-800"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 font-foreground uppercase text-sm transition-all ${
              !isLogin
                ? "bg-secondary text-foreground"
                : "text-white hover:bg-zinc-800"
            }`}
          >
            Signup
          </button>
        </div>

        <div className="mb-8">
          <h2 className="text-4xl font-foreground uppercase tracking-tighter leading-none italic">
            {isLogin ? "Welcome Back" : "New Member?"}
          </h2>
          <p className="text-xs font-bold uppercase mt-2 text-zinc-500">
            {isLogin ? "// Access Granted Only" : "// Join the network"}
          </p>
        </div>

        <form onSubmit={handleAuth} className="space-y-6">
          {/* Username */}
          <div className="space-y-1">
            <label className="text-xs font-foreground uppercase flex items-center gap-2">
              <HugeiconsIcon icon={UserIcon} size={14} /> Username
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              type="text"
              required
              className="w-full px-4 py-3 border-4 border-foreground focus:outline-none focus:bg-yellow-100 font-bold transition-colors"
            />
          </div>

          {/* Email (Signup Only) */}
          {!isLogin && (
            <div className="space-y-1">
              <label className="text-xs font-foreground uppercase flex items-center gap-2">
                <HugeiconsIcon icon={Mail01Icon} size={14} /> Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                required
                className="w-full px-4 py-3 border-4 border-foreground focus:outline-none focus:bg-pink-100 font-bold transition-colors"
              />
            </div>
          )}

          {/* Password */}
          <div className="space-y-1">
            <label className="text-xs font-foreground uppercase flex items-center gap-2">
              <HugeiconsIcon icon={AccessIcon} size={14} /> Password
            </label>
            <div className="relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={showPassword ? "text" : "password"}
                required
                className="w-full px-4 pr-12 py-3 border-4 border-foreground focus:outline-none focus:bg-cyan-100 font-bold transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 border-2 border-foreground bg-white p-1 hover:bg-foreground hover:text-white transition-colors"
              >
                <HugeiconsIcon
                  icon={showPassword ? ViewOffIcon : ViewIcon}
                  size={18}
                />
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            disabled={loading}
            type="submit"
            className={`
              w-full py-4 border-4 border-foreground font-foreground uppercase text-xl
              shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
              active:shadow-none active:translate-x-[6px] active:translate-y-[6px]
              transition-all
              ${isLogin ? "bg-yellow-300" : "bg-secondary"}
              ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-foreground hover:text-white"}
            `}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-3">
                Processing...
                <HugeiconsIcon
                  icon={Loading03Icon}
                  size={24}
                  className="animate-spin"
                />
              </div>
            ) : isLogin ? (
              "Log In →"
            ) : (
              "Join Now ★"
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t-2 border-foreground border-dashed text-center">
          <p className="text-xs font-foreground uppercase">
            {isLogin ? "No account yet?" : "Already a member?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 underline decoration-2 underline-offset-2 hover:text-pink-500"
            >
              {isLogin ? "Create one here" : "Login instead"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
