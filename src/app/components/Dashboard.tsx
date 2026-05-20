import { motion } from "motion/react";
import { Link } from "react-router";
import { Droplet, Users, Clock, CheckCircle, Plus, ArrowRight, TrendingUp } from "lucide-react";

export function Dashboard() {
  const stats = [
    {
      icon: Droplet,
      label: "Active Requests",
      value: "3",
      change: "+2 this week",
      color: "bg-red-50 text-[var(--blood-red)]",
      trend: "up",
    },
    {
      icon: CheckCircle,
      label: "Completed",
      value: "12",
      change: "+4 this month",
      color: "bg-green-50 text-green-600",
      trend: "up",
    },
    {
      icon: Clock,
      label: "Pending",
      value: "1",
      change: "Awaiting donors",
      color: "bg-orange-50 text-orange-600",
      trend: "neutral",
    },
    {
      icon: Users,
      label: "Available Donors",
      value: "156",
      change: "In your area",
      color: "bg-blue-50 text-blue-600",
      trend: "neutral",
    },
  ];

  const recentRequests = [
    { id: "REQ-001", bloodType: "O+", location: "New York, NY", units: 2, status: "Active", date: "2026-04-12", urgency: "Normal" },
    { id: "REQ-002", bloodType: "A-", location: "Los Angeles, CA", units: 1, status: "Matched", date: "2026-04-11", urgency: "Emergency" },
    { id: "REQ-003", bloodType: "B+", location: "Chicago, IL", units: 3, status: "Completed", date: "2026-04-10", urgency: "Normal" },
    { id: "REQ-004", bloodType: "AB+", location: "Houston, TX", units: 1, status: "Active", date: "2026-04-09", urgency: "Urgent" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-foreground mb-2">Welcome back, John!</h1>
            <p className="text-lg text-muted-foreground">Here's your blood donation dashboard</p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  {stat.trend === "up" && (
                    <div className="flex items-center gap-1 text-green-600 text-sm">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                  )}
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.change}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              to="/request"
              className="group p-6 bg-gradient-to-br from-[var(--blood-red)] to-red-700 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between mb-3">
                <Plus className="w-8 h-8" />
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
              <h3 className="text-xl font-bold mb-1">New Blood Request</h3>
              <p className="text-sm text-red-100">Create an urgent request</p>
            </Link>
            <Link
              to="/donors"
              className="group p-6 bg-white border-2 border-border rounded-2xl hover:border-[var(--blood-red)] transition-all hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <Users className="w-8 h-8 text-[var(--blood-red)]" />
                <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
              <h3 className="text-xl font-bold mb-1 text-foreground">Browse Donors</h3>
              <p className="text-sm text-muted-foreground">Find compatible donors</p>
            </Link>
            <Link
              to="/notifications"
              className="group p-6 bg-white border-2 border-border rounded-2xl hover:border-[var(--blood-red)] transition-all hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
              <h3 className="text-xl font-bold mb-1 text-foreground">View Updates</h3>
              <p className="text-sm text-muted-foreground">Check notifications</p>
            </Link>
          </div>
        </motion.div>

        {/* Recent Requests Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden"
        >
          <div className="p-6 border-b border-border">
            <h2 className="text-2xl font-bold text-foreground">Recent Requests</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Request ID</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Blood Type</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Location</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Units</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Urgency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {recentRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-secondary/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{request.id}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-50 text-[var(--blood-red)] rounded-full text-sm font-medium">
                        <Droplet className="w-3 h-3" />
                        {request.bloodType}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{request.location}</td>
                    <td className="px-6 py-4 text-sm text-foreground">{request.units}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          request.status === "Active"
                            ? "bg-blue-50 text-blue-600"
                            : request.status === "Matched"
                            ? "bg-orange-50 text-orange-600"
                            : "bg-green-50 text-green-600"
                        }`}
                      >
                        {request.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{request.date}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          request.urgency === "Emergency"
                            ? "bg-red-50 text-[var(--emergency-red)]"
                            : request.urgency === "Urgent"
                            ? "bg-orange-50 text-orange-600"
                            : "bg-gray-50 text-gray-600"
                        }`}
                      >
                        {request.urgency}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
