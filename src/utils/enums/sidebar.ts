import { Database, Settings, Users, NetworkIcon } from "lucide-react";

const sidebarItems = [
  {
    name: "Overview",
    icon: Database, // Replace with the actual Lucid icon name
    link: "/dashboard",
    description: "View the overall dashboard",
  },
  {
    name: "Business",
    icon: NetworkIcon, // Replace with the actual Lucid icon name
    link: "/dashboard/business",
    description: "Manage and create new businesses",
  },
  {
    name: "Customers",
    icon: Users, // Replace with the actual Lucid icon name
    link: "/dashboard/customers",
    description: "Manage and create new customers",
  },
  {
    name: "Settings",
    icon: Settings, // Replace with the actual Lucid icon name
    link: "/dashboard/settings",
    description:
      "Configure your account settings, members, and user activity log",
  },
];

export default sidebarItems;
