import { motion } from "motion/react";
import { useState } from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Users, Droplet, Activity, TrendingUp, Search, Filter, Trash2, Ban } from "lucide-react";

export function AdminPanel() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBloodGroup, setFilterBloodGroup] = useState("all");

  const stats = [
    {
      icon: Users,
      label: "Total Users",
      value: "2,547",
      change: "+12% this month",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Droplet,
      label: "Active Requests",
      value: "89",
      change: "+23 today",
      color: "bg-red-50 text-[var(--blood-red)]",
    },
    {
      icon: Activity,
      label: "Completed Donations",
      value: "1,234",
      change: "+45 this week",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: TrendingUp,
      label: "Success Rate",
      value: "94.2%",
      change: "+2.1% vs last month",
      color: "bg-purple-50 text-purple-600",
    },
  ];

  const donationData = [
    { month: "Jan", donations: 65, requests: 72 },
    { month: "Feb", donations: 78, requests: 85 },
    { month: "Mar", donations: 92, requests: 95 },
    { month: "Apr", donations: 45, requests: 48 },
  ];

  const bloodTypeData = [
    { type: "O+", count: 450 },
    { type: "A+", count: 380 },
    { type: "B+", count: 290 },
    { type: "O-", count: 210 },
    { type: "A-", count: 185 },
    { type: "B-", count: 145 },
    { type: "AB+", count: 120 },
    { type: "AB-", count: 90 },
  ];

  const users = [
    { id: 1, name: "Sarah Johnson", email: "sarah.j@example.com", bloodType: "O+", role: "Donor", status: "Active", joined: "2025-08-15" },
    { id: 2, name: "Michael Chen", email: "m.chen@example.com", bloodType: "A-", role: "Both", status: "Active", joined: "2025-09-20" },
    { id: 3, name: "Emily Rodriguez", email: "emily.r@example.com", bloodType: "B+", role: "Recipient", status: "Active", joined: "2025-10-10" },
    { id: 4, name: "David Park", email: "d.park@example.com", bloodType: "AB+", role: "Donor", status: "Inactive", joined: "2025-11-05" },
    { id: 5, name: "Lisa Thompson", email: "lisa.t@example.com", bloodType: "O-", role: "Both", status: "Active", joined: "2026-01-12" },
  ];

  const requests = [
    { id: "REQ-001", patient: "John Doe", bloodType: "O+", units: 2, location: "NYC General", status: "Pending", date: "2026-04-13" },
    { id: "REQ-002", patient: "Jane Smith", bloodType: "A-", units: 1, location: "LA Medical", status: "Matched", date: "2026-04-12" },
    { id: "REQ-003", patient: "Bob Wilson", bloodType: "B+", units: 3, location: "Chicago Central", status: "Completed", date: "2026-04-11" },
    { id: "REQ-004", patient: "Alice Brown", bloodType: "AB+", units: 1, location: "Houston Care", status: "Cancelled", date: "2026-04-10" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-lg text-muted-foreground">Platform analytics and management</p>
        </motion.div>

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
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-green-600">{stat.change}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Donations vs Requests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-2xl border border-border shadow-sm"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">Donations vs Requests</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={donationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#6b6b6b" />
                <YAxis stroke="#6b6b6b" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="donations" stroke="#4CAF50" strokeWidth={3} />
                <Line type="monotone" dataKey="requests" stroke="#E53935" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Blood Type Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white p-6 rounded-2xl border border-border shadow-sm"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">Blood Type Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={bloodTypeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="type" stroke="#6b6b6b" />
                <YAxis stroke="#6b6b6b" />
                <Tooltip />
                <Bar dataKey="count" fill="#E53935" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Users Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl border border-border shadow-sm mb-8"
        >
          <div className="p-6 border-b border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-foreground">User Management</h3>
              <div className="flex gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--blood-red)] bg-[var(--input-background)]"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <select
                    value={filterBloodGroup}
                    onChange={(e) => setFilterBloodGroup(e.target.value)}
                    className="pl-10 pr-8 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--blood-red)] bg-[var(--input-background)] appearance-none"
                  >
                    <option value="all">All Blood Types</option>
                    <option value="O+">O+</option>
                    <option value="A+">A+</option>
                    <option value="B+">B+</option>
                    <option value="AB+">AB+</option>
                    <option value="O-">O-</option>
                    <option value="A-">A-</option>
                    <option value="B-">B-</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Blood Type</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Role</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Joined</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-secondary/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{user.name}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{user.email}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-50 text-[var(--blood-red)] rounded-full text-sm font-medium">
                        <Droplet className="w-3 h-3" />
                        {user.bloodType}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">{user.role}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          user.status === "Active"
                            ? "bg-green-50 text-green-600"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{user.joined}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-red-50 rounded-lg text-muted-foreground hover:text-[var(--blood-red)] transition-colors">
                          <Ban className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-red-50 rounded-lg text-muted-foreground hover:text-[var(--blood-red)] transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Requests Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-2xl border border-border shadow-sm"
        >
          <div className="p-6 border-b border-border">
            <h3 className="text-2xl font-bold text-foreground">Recent Requests</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Request ID</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Patient</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Blood Type</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Units</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Location</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {requests.map((request) => (
                  <tr key={request.id} className="hover:bg-secondary/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{request.id}</td>
                    <td className="px-6 py-4 text-sm text-foreground">{request.patient}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-50 text-[var(--blood-red)] rounded-full text-sm font-medium">
                        <Droplet className="w-3 h-3" />
                        {request.bloodType}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">{request.units}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{request.location}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          request.status === "Pending"
                            ? "bg-blue-50 text-blue-600"
                            : request.status === "Matched"
                            ? "bg-orange-50 text-orange-600"
                            : request.status === "Completed"
                            ? "bg-green-50 text-green-600"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {request.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{request.date}</td>
                    <td className="px-6 py-4">
                      <button className="p-2 hover:bg-red-50 rounded-lg text-muted-foreground hover:text-[var(--blood-red)] transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
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
