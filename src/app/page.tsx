"use client";

import { Header } from "@/components/dashboard/Header";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecentActivity } from "@/components/dashboard/RecentActivity";

export default function DashboardPage() {
  const stats = [
    {
      title: "Total Users",
      value: "2,847",
      description: "Active user accounts",
      trend: { value: 12, isPositive: true }
    },
    {
      title: "Open Complaints",
      value: "23",
      description: "Pending resolution",
      trend: { value: -8, isPositive: false }
    },
    {
      title: "System Uptime",
      value: "99.9%",
      description: "Last 30 days",
      trend: { value: 0.1, isPositive: true }
    },
    {
      title: "Monthly Revenue",
      value: "$84,293",
      description: "Current month",
      trend: { value: 15, isPositive: true }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <aside className="hidden md:block border-r bg-muted/40">
          <Sidebar />
        </aside>

        <main className="flex-1">
          <div className="p-6 space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>
              <p className="text-muted-foreground mt-2">
                Welcome back! Here's what's happening with your system today.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <StatsCard
                  key={index}
                  title={stat.title}
                  value={stat.value}
                  description={stat.description}
                  trend={stat.trend}
                />
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <QuickActions />
              <RecentActivity />
            </div>
            
            <div className="grid gap-6">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">45ms</div>
                    <div className="text-sm text-muted-foreground">Avg Response Time</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">1,247</div>
                    <div className="text-sm text-muted-foreground">Requests/Hour</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">98.5%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}