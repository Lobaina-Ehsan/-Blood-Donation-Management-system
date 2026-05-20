import { motion } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Droplet, MapPin, AlertCircle, Phone, User, Send } from "lucide-react";

export function BloodRequest() {
  const navigate = useNavigate();
  const [isEmergency, setIsEmergency] = useState(false);

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/donors");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-2xl mb-4">
              <Droplet className="w-8 h-8 text-[var(--blood-red)]" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Request Blood</h1>
            <p className="text-lg text-muted-foreground">
              Fill out the form below to submit your blood request
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl border border-border shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Patient Information */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-[var(--blood-red)]" />
                  Patient Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Patient Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter patient name"
                      className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--blood-red)] focus:border-transparent bg-[var(--input-background)]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Contact Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="w-full pl-10 pr-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--blood-red)] focus:border-transparent bg-[var(--input-background)]"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Blood Request Details */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Droplet className="w-5 h-5 text-[var(--blood-red)]" />
                  Request Details
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Blood Group *
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--blood-red)] focus:border-transparent bg-[var(--input-background)] appearance-none"
                      required
                    >
                      <option value="">Select blood group</option>
                      {bloodGroups.map((group) => (
                        <option key={group} value={group}>
                          {group}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Units Needed *
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      placeholder="Number of units"
                      className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--blood-red)] focus:border-transparent bg-[var(--input-background)]"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Location *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Hospital name or address"
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--blood-red)] focus:border-transparent bg-[var(--input-background)]"
                    required
                  />
                </div>
              </div>

              {/* Emergency Toggle */}
              <div className={`p-6 rounded-2xl border-2 transition-all ${
                isEmergency
                  ? "bg-red-50 border-[var(--emergency-red)]"
                  : "bg-gray-50 border-border"
              }`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className={`w-5 h-5 ${isEmergency ? "text-[var(--emergency-red)]" : "text-muted-foreground"}`} />
                      <h4 className="text-lg font-bold text-foreground">Emergency Request</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Mark this as an emergency to notify all nearby donors immediately
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsEmergency(!isEmergency)}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                      isEmergency ? "bg-[var(--emergency-red)]" : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                        isEmergency ? "translate-x-7" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  rows={4}
                  placeholder="Any additional information or special requirements..."
                  className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--blood-red)] focus:border-transparent bg-[var(--input-background)] resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="flex-1 px-6 py-4 border-2 border-border rounded-xl font-medium text-foreground hover:bg-secondary transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`flex-1 px-6 py-4 rounded-xl font-medium text-white transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2 ${
                    isEmergency
                      ? "bg-[var(--emergency-red)] hover:bg-red-800"
                      : "bg-[var(--blood-red)] hover:bg-[var(--blood-red-dark)]"
                  }`}
                >
                  {isEmergency && <AlertCircle className="w-5 h-5" />}
                  Submit Request
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 p-6 bg-blue-50 border border-blue-200 rounded-2xl"
          >
            <h4 className="font-bold text-foreground mb-2">What happens next?</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Your request will be matched with compatible donors in your area</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Donors will be notified via SMS and app notifications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>You'll receive updates as donors respond to your request</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Emergency requests receive priority notifications</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
