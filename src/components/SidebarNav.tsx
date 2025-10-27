import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Stethoscope,
  FlaskConical,
  Pill,
  FileText,
  Book,
  Settings,
  Users,
  DollarSign,
} from "lucide-react";

interface NavLink {
  to: string;
  icon: React.ElementType;
  label: string;
}

const navLinks: NavLink[] = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" }, // Updated link to /dashboard
  { to: "/patient-management", icon: Users, label: "Patient Management" },
  { to: "/examination", icon: Stethoscope, label: "Examination" },
  { to: "/investigations", icon: FlaskConical, label: "Investigations" },
  { to: "/prescription-services", icon: Pill, label: "Prescription & Services" },
  { to: "/referral-followup", icon: FileText, label: "Referral & Follow-up" },
  { to: "/library", icon: Book, label: "Library" },
  { to: "/reports", icon: DollarSign, label: "Financial & Statistics" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

const SidebarNav = () => {
  const location = useLocation();

  return (
    <div className="flex h-full flex-col border-r bg-sidebar-background text-sidebar-foreground">
      <div className="flex h-16 items-center justify-center border-b p-4">
        <img src="/logo.png" alt="Habib Pediatric Clinic Logo" className="h-12" />
      </div>
      <ScrollArea className="flex-1 py-4">
        <nav className="grid items-start gap-2 px-4">
          {navLinks.map((link) => (
            <Button
              key={link.to}
              asChild
              variant={location.pathname === link.to ? "secondary" : "ghost"}
              className={cn(
                "justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                location.pathname === link.to && "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary hover:text-sidebar-primary-foreground"
              )}
            >
              <Link to={link.to} className="flex items-center gap-3">
                <link.icon className="h-5 w-5" />
                {link.label}
              </Link>
            </Button>
          ))}
        </nav>
      </ScrollArea>
    </div>
  );
};

export default SidebarNav;