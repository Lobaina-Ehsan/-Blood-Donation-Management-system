import { motion } from "motion/react";
import { Bell, Droplet, AlertCircle, CheckCircle, Info, X } from "lucide-react";

export function Notifications() {
  const notifications = [
    {
      id: 1,
      type: "emergency",
      icon: AlertCircle,
      title: "Emergency Blood Request",
      message: "Urgent O+ blood needed at NYC General Hospital. 2 units required immediately.",
      time: "5 minutes ago",
      read: false,
    },
    {
      id: 2,
      type: "match",
      icon: CheckCircle,
      title: "Donor Matched",
      message: "Your blood request REQ-001 has been matched with 3 compatible donors.",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      type: "donation",
      icon: Droplet,
      title: "Donation Confirmed",
      message: "Sarah Johnson confirmed donation for your request. Scheduled for tomorrow at 10:00 AM.",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 4,
      type: "info",
      icon: Info,
      title: "Eligibility Reminder",
      message: "You'll be eligible to donate again starting from April 20, 2026.",
      time: "1 day ago",
      read: true,
    },
    {
      id: 5,
      type: "success",
      icon: CheckCircle,
      title: "Request Completed",
      message: "Your blood request REQ-002 has been successfully completed. Thank you!",
      time: "2 days ago",
      read: true,
    },
    {
      id: 6,
      type: "info",
      icon: Bell,
      title: "New Donor in Your Area",
      message: "3 new O+ donors registered in your area. They are now available for requests.",
      time: "3 days ago",
      read: true,
    },
    {
      id: 7,
      type: "emergency",
      icon: AlertCircle,
      title: "Critical Request Update",
      message: "Emergency request at LA Medical Center requires immediate attention.",
      time: "4 days ago",
      read: true,
    },
    {
      id: 8,
      type: "donation",
      icon: Droplet,
      title: "Thank You for Donating",
      message: "Your donation saved a life! The recipient and family are grateful for your contribution.",
      time: "1 week ago",
      read: true,
    },
  ];

  const getNotificationStyle = (type: string) => {
    switch (type) {
      case "emergency":
        return "bg-red-50 border-red-200 text-red-700";
      case "match":
        return "bg-orange-50 border-orange-200 text-orange-700";
      case "donation":
        return "bg-blue-50 border-blue-200 text-blue-700";
      case "success":
        return "bg-green-50 border-green-200 text-green-700";
      default:
        return "bg-gray-50 border-gray-200 text-gray-700";
    }
  };

  const getIconStyle = (type: string) => {
    switch (type) {
      case "emergency":
        return "bg-red-100 text-red-600";
      case "match":
        return "bg-orange-100 text-orange-600";
      case "donation":
        return "bg-blue-100 text-blue-600";
      case "success":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Notifications</h1>
              <p className="text-lg text-muted-foreground">
                {notifications.filter(n => !n.read).length} unread notifications
              </p>
            </div>
            <button className="px-4 py-2 text-sm font-medium text-[var(--blood-red)] hover:bg-red-50 rounded-lg transition-colors">
              Mark all as read
            </button>
          </div>
        </motion.div>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map((notification, index) => {
            const Icon = notification.icon;
            return (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`relative p-6 rounded-2xl border-2 transition-all ${
                  notification.read
                    ? "bg-white border-border hover:border-gray-300"
                    : getNotificationStyle(notification.type)
                } ${!notification.read ? "shadow-md" : "hover:shadow-sm"}`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${getIconStyle(notification.type)}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <h3 className={`text-lg font-bold ${notification.read ? "text-foreground" : "text-foreground"}`}>
                        {notification.title}
                      </h3>
                      <button className="p-1 hover:bg-white/50 rounded-lg transition-colors flex-shrink-0">
                        <X className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                    <p className={`text-sm mb-2 ${notification.read ? "text-muted-foreground" : "text-current"}`}>
                      {notification.message}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-muted-foreground">{notification.time}</span>
                      {!notification.read && (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-current">
                          <div className="w-2 h-2 rounded-full bg-current" />
                          Unread
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Unread Indicator */}
                {!notification.read && (
                  <div className="absolute left-0 top-6 w-1 h-12 bg-current rounded-r-full" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Empty State (hidden when there are notifications) */}
        {notifications.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
              <Bell className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">No notifications yet</h3>
            <p className="text-muted-foreground">
              You'll receive notifications about blood requests, donations, and updates here
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
