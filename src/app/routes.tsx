import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { BloodRequest } from "./components/BloodRequest";
import { DonorMatching } from "./components/DonorMatching";
import { AdminPanel } from "./components/AdminPanel";
import { Notifications } from "./components/Notifications";
import { FAQ } from "./components/FAQ";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "dashboard", Component: Dashboard },
      { path: "request", Component: BloodRequest },
      { path: "donors", Component: DonorMatching },
      { path: "admin", Component: AdminPanel },
      { path: "notifications", Component: Notifications },
      { path: "faq", Component: FAQ },
    ],
  },
]);
