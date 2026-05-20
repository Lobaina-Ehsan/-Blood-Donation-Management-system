import { Outlet, Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { Heart, Bell, User, Menu, X, Home, Droplet, Users, LayoutDashboard, HelpCircle, Settings } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationCount] = useState(3);

  const isHome = location.pathname === "/";
  const isDashboard = location.pathname.includes("dashboard") ||
                      location.pathname.includes("request") ||
                      location.pathname.includes("donors") ||
                      location.pathname.includes("admin") ||
                      location.pathname.includes("notifications");

  const navLinks = [
    { path: "/", label: "Home", show: true },
    { path: "/dashboard", label: "Dashboard", show: !isHome },
    { path: "/request", label: "Request Blood", show: !isHome },
    { path: "/faq", label: "FAQ", show: true },
  ];

  const sidebarLinks = [
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/request", label: "Request Blood", icon: Droplet },
    { path: "/donors", label: "Donor List", icon: Users },
    { path: "/admin", label: "Admin Panel", icon: Settings },
    { path: "/faq", label: "FAQ & Support", icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Heart className="w-8 h-8 text-[var(--blood-red)] fill-[var(--blood-red)] transition-transform group-hover:scale-110" />
                <motion.div
                  className="absolute inset-0 bg-[var(--blood-red)] rounded-full blur-lg opacity-0 group-hover:opacity-20"
                  initial={false}
                  whileHover={{ scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div>
                <div className="font-bold text-lg tracking-tight text-foreground">OneDrop OneLove</div>
                <div className="text-xs text-muted-foreground -mt-1">Save Lives Together</div>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.filter(link => link.show).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative text-sm font-medium text-foreground hover:text-[var(--blood-red)] transition-colors"
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-[var(--blood-red)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {!isHome && (
                <Link to="/notifications" className="relative p-2 hover:bg-secondary rounded-lg transition-colors">
                  <Bell className="w-5 h-5 text-foreground" />
                  {notificationCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--blood-red)] text-white text-xs rounded-full flex items-center justify-center"
                    >
                      {notificationCount}
                    </motion.span>
                  )}
                </Link>
              )}
              <Link to={isHome ? "/login" : "/dashboard"} className="p-2 hover:bg-secondary rounded-lg transition-colors hidden md:block">
                <User className="w-5 h-5 text-foreground" />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-white"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.filter(link => link.show).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Main Content with Sidebar */}
      <div className="flex-1 flex">
        {/* Sidebar for Dashboard Pages */}
        {isDashboard && (
          <aside className="hidden lg:block w-64 border-r border-border bg-[var(--sidebar)]">
            <div className="sticky top-16 p-6 space-y-2">
              {sidebarLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      isActive
                        ? "bg-[var(--blood-red)] text-white shadow-md"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </aside>
        )}

        {/* Page Content */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
