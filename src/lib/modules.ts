export interface Module {
  id: string;
  title: string;
  description: string;
  category: "management" | "analytics" | "system";
  color: string;
  path: string;
}

export const modules: Module[] = [
  {
    id: "complaints",
    title: "Complaint Management",
    description: "Handle customer complaints, feedback, and support tickets efficiently",
    category: "management",
    color: "bg-red-500",
    path: "/admin/complaints"
  },
  {
    id: "users",
    title: "User Management",
    description: "Manage user accounts, permissions, roles, and profile information",
    category: "management", 
    color: "bg-blue-500",
    path: "/admin/users"
  },
  {
    id: "analytics",
    title: "Analytics & Reports",
    description: "View detailed statistics, generate reports, and track system performance",
    category: "analytics",
    color: "bg-green-500",
    path: "/admin/analytics"
  },
  {
    id: "content",
    title: "Content Management",
    description: "Manage website content, media files, and digital assets",
    category: "management",
    color: "bg-purple-500", 
    path: "/admin/content"
  },
  {
    id: "settings",
    title: "Settings & Configuration",
    description: "Configure system settings, preferences, and application parameters",
    category: "system",
    color: "bg-gray-500",
    path: "/admin/settings"
  },
  {
    id: "security",
    title: "Security & Audit",
    description: "Monitor security logs, audit trails, and access control management",
    category: "system",
    color: "bg-orange-500",
    path: "/admin/security"
  },
  {
    id: "billing",
    title: "Billing & Payments",
    description: "Manage financial transactions, invoices, and payment processing",
    category: "management",
    color: "bg-yellow-500",
    path: "/admin/billing"
  },
  {
    id: "notifications",
    title: "Notifications",
    description: "Configure and manage system notifications, alerts, and messaging",
    category: "system",
    color: "bg-indigo-500",
    path: "/admin/notifications"
  }
];

export const getModulesByCategory = (category: Module["category"]) => {
  return modules.filter(module => module.category === category);
};

export const searchModules = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return modules.filter(module => 
    module.title.toLowerCase().includes(lowercaseQuery) ||
    module.description.toLowerCase().includes(lowercaseQuery)
  );
};