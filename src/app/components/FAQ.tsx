import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown, Mail, Phone, MessageSquare, Send, HelpCircle } from "lucide-react";

export function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I request blood?",
      answer: "To request blood, log in to your account and navigate to the 'Request Blood' page. Fill out the form with details including blood type, units needed, location, and urgency. For emergency requests, toggle the emergency switch to notify donors immediately.",
    },
    {
      question: "Who can donate blood?",
      answer: "Most healthy adults aged 18-65 can donate blood. You should weigh at least 110 pounds, be in good health, and not have donated in the last 56 days (8 weeks). Some medical conditions and medications may temporarily or permanently prevent donation.",
    },
    {
      question: "How often can I donate blood?",
      answer: "You can donate whole blood every 56 days (8 weeks). Our system automatically tracks your last donation date and will show your eligibility status. You'll receive a notification when you become eligible to donate again.",
    },
    {
      question: "Is my personal information safe?",
      answer: "Yes, we take data security seriously. All personal information is encrypted and stored securely. We only share your contact information with matched recipients when you approve a donation request. You can control your privacy settings in your account dashboard.",
    },
    {
      question: "What happens after I submit a blood request?",
      answer: "Once you submit a request, our system immediately matches you with compatible donors in your area. Donors receive notifications via SMS and app alerts. You'll be notified as donors respond, and you can select up to 3 donors to contact. The entire matching process typically takes 15-30 minutes.",
    },
    {
      question: "Can I cancel a donation commitment?",
      answer: "Yes, we understand that circumstances change. If you've committed to donate but can no longer do so, please cancel through the app as soon as possible so we can notify the recipient and find alternative donors. However, please only commit if you're certain you can donate.",
    },
    {
      question: "What blood types are compatible?",
      answer: "Blood type compatibility is crucial. O- is the universal donor (can donate to anyone). AB+ is the universal recipient (can receive from anyone). The compatibility chart on the home page shows detailed matching. Our system automatically filters donors based on compatibility.",
    },
    {
      question: "How does emergency mode work?",
      answer: "Emergency mode prioritizes your request and sends immediate push notifications to all compatible donors within a 10km radius. Emergency requests are highlighted in red and appear at the top of donor feeds. Use this only for genuine emergencies.",
    },
    {
      question: "Do I need to pay to use this platform?",
      answer: "No, OneDrop OneLove is completely free for both donors and recipients. We believe blood donation should be accessible to everyone. The platform is supported by grants and donations from healthcare organizations.",
    },
    {
      question: "Can I donate if I have a tattoo?",
      answer: "In most cases, yes. If you got a tattoo from a licensed facility using sterile needles and ink, you can typically donate after 3 months. Tattoos from unlicensed facilities may require a 12-month wait. Our eligibility checker will provide specific guidance.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-2xl mb-4">
            <HelpCircle className="w-8 h-8 text-[var(--blood-red)]" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">Find answers to common questions about blood donation</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
                  >
                    <span className="text-lg font-bold text-foreground pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[var(--blood-red)] flex-shrink-0 transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? "auto" : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-muted-foreground">{faq.answer}</div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact & Feedback */}
          <div className="space-y-6">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-2xl border border-border shadow-sm"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Email</div>
                    <a href="mailto:support@onedrop.org" className="text-sm text-[var(--blood-red)] hover:underline">
                      support@onedrop.org
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Phone</div>
                    <a href="tel:+15551234567" className="text-sm text-[var(--blood-red)] hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-[var(--blood-red)]" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">Emergency</div>
                    <a href="tel:911" className="text-sm text-[var(--blood-red)] hover:underline">
                      911
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Feedback Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-2xl border border-border shadow-sm"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">Send Feedback</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--blood-red)] focus:border-transparent bg-[var(--input-background)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--blood-red)] focus:border-transparent bg-[var(--input-background)]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Your feedback..."
                    className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--blood-red)] focus:border-transparent bg-[var(--input-background)] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[var(--blood-red)] text-white rounded-xl font-medium hover:bg-[var(--blood-red-dark)] transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>

            {/* Quick Tips */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200"
            >
              <h4 className="font-bold text-foreground mb-3">Quick Tips</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Drink plenty of water before donating</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Eat a healthy meal before donation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Bring a valid ID to the donation center</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Rest for 15 minutes after donating</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
