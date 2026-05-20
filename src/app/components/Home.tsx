import { motion } from "motion/react";
import { Link } from "react-router";
import { Heart, Zap, Bell, Shield, Users, ArrowRight, Check } from "lucide-react";

export function Home() {
  const features = [
    {
      icon: Zap,
      title: "Emergency Mode",
      description: "Fast-track urgent blood requests with priority notifications to nearby donors",
    },
    {
      icon: Bell,
      title: "Real-time Notifications",
      description: "Instant alerts when matching blood requests are made in your area",
    },
    {
      icon: Users,
      title: "Smart Donor Matching",
      description: "AI-powered matching based on blood type, location, and availability",
    },
    {
      icon: Shield,
      title: "Auto Eligibility Tracking",
      description: "Automatic tracking of donation eligibility based on last donation date",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Request Blood",
      description: "Submit your blood requirement with type, location, and urgency level",
    },
    {
      number: "02",
      title: "Match with Donors",
      description: "Our system finds and notifies compatible donors in your area instantly",
    },
    {
      number: "03",
      title: "Save Lives",
      description: "Connect with donors and coordinate the life-saving donation",
    },
  ];

  const compatibility = [
    { type: "O-", canDonateTo: ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"], canReceiveFrom: ["O-"] },
    { type: "O+", canDonateTo: ["O+", "A+", "B+", "AB+"], canReceiveFrom: ["O-", "O+"] },
    { type: "A-", canDonateTo: ["A-", "A+", "AB-", "AB+"], canReceiveFrom: ["O-", "A-"] },
    { type: "A+", canDonateTo: ["A+", "AB+"], canReceiveFrom: ["O-", "O+", "A-", "A+"] },
    { type: "B-", canDonateTo: ["B-", "B+", "AB-", "AB+"], canReceiveFrom: ["O-", "B-"] },
    { type: "B+", canDonateTo: ["B+", "AB+"], canReceiveFrom: ["O-", "O+", "B-", "B+"] },
    { type: "AB-", canDonateTo: ["AB-", "AB+"], canReceiveFrom: ["O-", "A-", "B-", "AB-"] },
    { type: "AB+", canDonateTo: ["AB+"], canReceiveFrom: ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"] },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Blood Recipient",
      content: "OneDrop OneLove saved my life during an emergency surgery. Within 20 minutes, I had three compatible donors ready to help.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    {
      name: "Michael Chen",
      role: "Regular Donor",
      content: "The platform makes it so easy to donate. I get notified when there's a need nearby, and I can respond instantly.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Hospital Administrator",
      content: "This platform has revolutionized how we manage blood emergencies. The response time is incredible.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-red-50/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-red-50 border border-red-100 rounded-full mb-6">
                <span className="text-sm font-medium text-[var(--blood-red)]">Connecting Donors & Recipients</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Save Lives with{" "}
                <span className="text-[var(--blood-red)] relative">
                  OneDrop
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-[var(--blood-red)] opacity-30"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  />
                </span>{" "}
                OneLove
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                The fastest way to connect blood donors with those in need. Real-time matching, emergency alerts, and a community dedicated to saving lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/request"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[var(--blood-red)] text-white rounded-xl font-medium hover:bg-[var(--blood-red-dark)] transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Request Blood
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-foreground border-2 border-border rounded-xl font-medium hover:border-[var(--blood-red)] hover:text-[var(--blood-red)] transition-all"
                >
                  Become a Donor
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=800&h=600&fit=crop"
                  alt="Blood donation"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-border"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-green-600 fill-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">10,000+</div>
                    <div className="text-sm text-muted-foreground">Lives Saved</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground">Everything you need to save and donate blood efficiently</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-white border border-border rounded-2xl hover:shadow-lg transition-all hover:border-[var(--blood-red)] group"
                >
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--blood-red)] transition-colors">
                    <Icon className="w-6 h-6 text-[var(--blood-red)] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Three simple steps to save a life</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[var(--blood-red)] text-white rounded-full text-2xl font-bold mb-6 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[var(--blood-red)] to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blood Compatibility */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Blood Type Compatibility</h2>
            <p className="text-xl text-muted-foreground">Understanding who can donate to whom</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {compatibility.map((blood, index) => (
                <motion.div
                  key={blood.type}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-red-50 to-white border-2 border-red-100 rounded-2xl hover:shadow-lg transition-all hover:border-[var(--blood-red)]"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[var(--blood-red)] mb-2">{blood.type}</div>
                    <div className="text-xs text-muted-foreground mb-3">Can donate to</div>
                    <div className="text-sm font-medium text-foreground">{blood.canDonateTo.length} types</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-2">Universal Donor & Recipient</h4>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-[var(--blood-red)]">O-</span> is the universal donor (can donate to all blood types).
                    <span className="font-medium text-[var(--blood-red)]"> AB+</span> is the universal recipient (can receive from all blood types).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What People Say</h2>
            <p className="text-xl text-muted-foreground">Stories from our community</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white border border-border rounded-2xl shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-[var(--blood-red)] fill-[var(--blood-red)]" />
                <span className="font-bold text-lg">OneDrop OneLove</span>
              </div>
              <p className="text-gray-400 text-sm">Connecting blood donors with those in need, saving lives one drop at a time.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                <li><Link to="/request" className="hover:text-white transition-colors">Request Blood</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: support@onedrop.org</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Emergency: 911</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--blood-red)] transition-colors">
                  <span className="sr-only">Facebook</span>
                  F
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--blood-red)] transition-colors">
                  <span className="sr-only">Twitter</span>
                  T
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--blood-red)] transition-colors">
                  <span className="sr-only">Instagram</span>
                  I
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 OneDrop OneLove. All rights reserved. Made with ❤️ for humanity.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
