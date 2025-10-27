import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Users, Clock, CheckCircle, AlertTriangle } from "lucide-react";

const DashboardHeader = () => {
  // Placeholder data for the administrative dashboard
  const stats = [
    { title: "Total Patients Today", value: "25", icon: Users, color: "bg-blue-100 text-blue-800" },
    { title: "Patients Completed", value: "18", icon: CheckCircle, color: "bg-green-100 text-green-800" },
    { title: "Patients Waiting", value: "7", icon: Clock, color: "bg-yellow-100 text-yellow-800" },
    { title: "Daily Income", value: "$1250", icon: DollarSign, color: "bg-purple-100 text-purple-800" },
    { title: "Pending Investigations", value: "3", icon: AlertTriangle, color: "bg-red-100 text-red-800" },
  ];

  return (
    <header className="border-b bg-background p-4">
      <h2 className="mb-4 text-2xl font-bold">Administrative Dashboard Overview</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              {/* <p className="text-xs text-muted-foreground">+20.1% from last month</p> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </header>
  );
};

export default DashboardHeader;