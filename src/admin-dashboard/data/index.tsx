import { LayoutDashboard } from "lucide-react";

export const sideBarItems = {
  main: [
    {
      id: "dashboard",
      name: "Dashboard",
      path: "/",
      icon: <LayoutDashboard className="w-6 h-6" />,
    },
  ],
  homeGroup: [
    { id: "cat", name: "Categories", path: "/home/categories" },
    { id: "best", name: "Daily Best Seller", path: "/home/best-seller" },
    { id: "spec", name: "Special Dishes", path: "/home/special-dishes" },
    { id: "opin", name: "User Opinion", path: "/home/users-opinions" },
    { id: "ban", name: "Banners", path: "/home/banners" },
  ]
};