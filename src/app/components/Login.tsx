import { motion } from "motion/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Heart, Mail, Lock, User, MapPin, Droplet, UserCircle } from "lucide-react";
import API from "../../api";

export function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Register state
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regRole, setRegRole] = useState("Donor");
  const [regBloodGroup, setRegBloodGroup] = useState("A+");
  const [regLocation, setRegLocation] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const roles = ["Donor", "Recipient", "Both"];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await API.post("/login", {
        email: loginEmail,
        password: loginPassword,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await API.post("/register", {
        name: regName,
        email: regEmail,
        password: regPassword,
        role: regRole,
        blood_group: regBloodGroup,
        location: regLocation,
      });
      // Auto-switch to login after successful registration
      setIsLogin(true);
      setLoginEmail(regEmail);
      setError("");
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side - Illustration */}
      <div className="hidden lg:flex bg-gradient-to-br from-[var(--blood-red)] to-red-700 p-12 items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-white"
        >
          <div className="mb-8">
            <Heart className="w-20 h-20 fill-white text-white mb-6" />
            <h1 className="text-5xl font-bold mb-4">Save Lives,<br />One Drop at a Time</h1>
            <p className="text-xl text-red-100">Join thousands of donors making a difference every day</p>
          </div>
          <div className="space-y-6 mt-12">
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold">50,000+ Donors</div>
                <div className="text-sm text-red-100">Active community</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold">10,000+ Lives Saved</div>
                <div className="text-sm text-red-100">And counting</div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex items-center justify-center p-8 bg-white">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <Heart className="w-8 h-8 text-[var(--blood-red)] fill-[var(--blood-red)]" />
              <span className="text-2xl font-bold">OneDrop OneLove</span>
            </Link>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              {isLogin ? "Welcome Back" : "Join Our Community"}
            </h2>
            <p className="text-muted-foreground">
              {isLogin ? "Sign in to your account" : "Create your account to start saving lives"}
            </p>
          </div>

          {/* Toggle */}
          <div className="flex gap-2 mb-8 p-1 bg-secondary rounded-xl">
            <button
              onClick={() => { setIsLogin(true); setError(""); }}
              className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                isLogin ? "bg-white shadow-sm text-[var(--blood-red)]" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => { setIsLogin(false); setError(""); }}
              className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                !isLogin ? "bg-white shadow-sm text-[var(--blood-red)]" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Register
            </button>
          </div>

          {/* Error message */}
          {error && (
            <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm">
              {error}
            </div>
          )}

          {/* Login Form */}
          {isLogin ? (
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--blood-red)] focus:border-transparent bg-[var(--input-background)]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--blood-red)] focus:border-transparent bg-[var(--input-background)]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 rounded border-border" />
                  <span className="text-muted-foreground">Remember me</span>
                </label>
                <a href="#" className="text-[var(--blood-red)] hover:underline">Forgot password?</a>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[var(--blood-red)] text-white rounded-xl font-medium hover:bg-[var(--blood-red-dark)] transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>
          ) : (
            /* Register Form */
            <form onSubmit={handleRegister} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--blood-red)] focus:border-transparent bg-[var(--input-background)]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--blood-red)] focus:border-transparent bg-[var(--input-background)]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--blood-red)] focus:border-transparent bg-[var(--input-background)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Role</label>
                  <div className="relative">
                    <UserCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <select
                      value={regRole}
                      onChange={(e) => setRegRole(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--blood-red)] focus:border-transparent bg-[var(--input-background)] appearance-none"
                    >
                      {roles.map((role) => (
                        <option key={role} value={role}>{role}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Blood Group</label>
                  <div className="relative">
                    <Droplet className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <select
                      value={regBloodGroup}
                      onChange={(e) => setRegBloodGroup(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--blood-red)] focus:border-transparent bg-[var(--input-background)] appearance-none"
                    >
                      {bloodGroups.map((group) => (
                        <option key={group} value={group}>{group}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="City, State"
                    value={regLocation}
                    onChange={(e) => setRegLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--blood-red)] focus:border-transparent bg-[var(--input-background)]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[var(--blood-red)] text-white rounded-xl font-medium hover:bg-[var(--blood-red-dark)] transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? "Creating account..." : "Create Account"}
              </button>
            </form>
          )}

          <div className="mt-6 text-center text-sm text-muted-foreground">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => { setIsLogin(!isLogin); setError(""); }}
              className="text-[var(--blood-red)] font-medium hover:underline"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
