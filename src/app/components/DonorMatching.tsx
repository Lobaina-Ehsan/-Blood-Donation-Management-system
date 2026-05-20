import { motion } from "motion/react";
import { useState } from "react";
import { Droplet, MapPin, Calendar, Phone, Mail, Check } from "lucide-react";

export function DonorMatching() {
  const [selectedDonors, setSelectedDonors] = useState<string[]>([]);

  const donors = [
    {
      id: "1",
      name: "Sarah Johnson",
      bloodGroup: "O+",
      location: "New York, NY",
      distance: "2.5 km",
      lastDonation: "2025-10-15",
      phone: "+1 (555) 123-4567",
      email: "sarah.j@example.com",
      available: true,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    {
      id: "2",
      name: "Michael Chen",
      bloodGroup: "O+",
      location: "Brooklyn, NY",
      distance: "3.8 km",
      lastDonation: "2026-01-20",
      phone: "+1 (555) 234-5678",
      email: "m.chen@example.com",
      available: true,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      bloodGroup: "O+",
      location: "Queens, NY",
      distance: "5.2 km",
      lastDonation: "2025-12-05",
      phone: "+1 (555) 345-6789",
      email: "emily.r@example.com",
      available: true,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    },
    {
      id: "4",
      name: "David Park",
      bloodGroup: "O+",
      location: "Manhattan, NY",
      distance: "6.1 km",
      lastDonation: "2026-02-10",
      phone: "+1 (555) 456-7890",
      email: "d.park@example.com",
      available: false,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    },
    {
      id: "5",
      name: "Lisa Thompson",
      bloodGroup: "O+",
      location: "Bronx, NY",
      distance: "7.3 km",
      lastDonation: "2025-11-30",
      phone: "+1 (555) 567-8901",
      email: "lisa.t@example.com",
      available: true,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
    {
      id: "6",
      name: "James Wilson",
      bloodGroup: "O+",
      location: "Staten Island, NY",
      distance: "8.9 km",
      lastDonation: "2026-01-05",
      phone: "+1 (555) 678-9012",
      email: "j.wilson@example.com",
      available: true,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    },
  ];

  const toggleDonor = (donorId: string) => {
    if (selectedDonors.includes(donorId)) {
      setSelectedDonors(selectedDonors.filter((id) => id !== donorId));
    } else {
      if (selectedDonors.length < 3) {
        setSelectedDonors([...selectedDonors, donorId]);
      }
    }
  };

  const getDaysSinceLastDonation = (lastDonation: string) => {
    const today = new Date("2026-04-13");
    const donationDate = new Date(lastDonation);
    const diffTime = Math.abs(today.getTime() - donationDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-foreground mb-2">Available Donors</h1>
          <p className="text-lg text-muted-foreground">
            Showing {donors.filter(d => d.available).length} compatible donors for <span className="text-[var(--blood-red)] font-medium">O+ blood type</span>
          </p>
        </motion.div>

        {/* Selection Info */}
        {selectedDonors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-900">
                {selectedDonors.length} donor{selectedDonors.length > 1 ? "s" : ""} selected (max 3)
              </span>
            </div>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Send Requests
            </button>
          </motion.div>
        )}

        {/* Donors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {donors.map((donor, index) => {
            const isSelected = selectedDonors.includes(donor.id);
            const daysSince = getDaysSinceLastDonation(donor.lastDonation);
            const isEligible = daysSince >= 56; // 8 weeks

            return (
              <motion.div
                key={donor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`bg-white rounded-2xl border-2 overflow-hidden transition-all ${
                  isSelected
                    ? "border-green-500 shadow-lg shadow-green-100"
                    : donor.available
                    ? "border-border hover:border-[var(--blood-red)] hover:shadow-md"
                    : "border-border opacity-60"
                }`}
              >
                {/* Card Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={donor.image}
                        alt={donor.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{donor.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-50 text-[var(--blood-red)] rounded-full text-sm font-bold">
                            <Droplet className="w-3 h-3 fill-current" />
                            {donor.bloodGroup}
                          </span>
                          {isEligible ? (
                            <span className="inline-flex px-2 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                              Eligible
                            </span>
                          ) : (
                            <span className="inline-flex px-2 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-medium">
                              {56 - daysSince} days
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Donor Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-[var(--blood-red)]" />
                      <span>{donor.location}</span>
                      <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">{donor.distance}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-[var(--blood-red)]" />
                      <span>Last donation: {new Date(donor.lastDonation).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4 text-[var(--blood-red)]" />
                      <span>{donor.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4 text-[var(--blood-red)]" />
                      <span>{donor.email}</span>
                    </div>
                  </div>

                  {/* Select Button */}
                  <button
                    onClick={() => donor.available && toggleDonor(donor.id)}
                    disabled={!donor.available && !isSelected}
                    className={`w-full py-3 rounded-xl font-medium transition-all ${
                      isSelected
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : donor.available
                        ? "bg-[var(--blood-red)] text-white hover:bg-[var(--blood-red-dark)] hover:scale-[1.02]"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {isSelected ? (
                      <span className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5" />
                        Selected
                      </span>
                    ) : donor.available ? (
                      "Select Donor"
                    ) : (
                      "Not Available"
                    )}
                  </button>
                </div>

                {/* Highlighted Badge */}
                {index < 3 && (
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 px-4 py-2 text-center">
                    <span className="text-xs font-bold text-white uppercase tracking-wide">
                      ⭐ Recommended Match
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-2xl"
        >
          <h4 className="font-bold text-foreground mb-2">Selection Guidelines</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span>You can select up to 3 donors at once</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span>Donors must wait 56 days (8 weeks) between donations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span>Recommended matches are sorted by distance and availability</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600">•</span>
              <span>All donors are verified and have completed health screenings</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
