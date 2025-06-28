
import { HomeIcon, InfoIcon, ShoppingCartIcon, PhoneIcon, HelpCircleIcon } from "lucide-react";
import Index from "./pages/Index";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Shop",
    to: "/shop", 
    icon: <ShoppingCartIcon className="h-4 w-4" />,
    page: <Shop />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <PhoneIcon className="h-4 w-4" />,
    page: <Contact />,
  },
  {
    title: "FAQ",
    to: "/faq",
    icon: <HelpCircleIcon className="h-4 w-4" />,
    page: <FAQ />,
  },
];
