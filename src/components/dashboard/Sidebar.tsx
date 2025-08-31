"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("dashboard");

  const navigation = [
    {
      name: "Dashboard",
      id: "dashboard",
      description: "Overview & Analytics"
    },
    {
      name: "Recent Activity",
      id: "activity", 
      description: "Latest System Events"
    },
    {
      name: "Quick Actions",
      id: "actions",
      description: "Common Tasks"
    },
    {
      name: "Reports",
      id: "reports",
      description: "Generated Reports"
    }
  ];

  const quickLinks = [
    { name: "System Health", id: "health" },
    { name: "User Sessions", id: "sessions" },
    { name: "Error Logs", id: "errors" },
    { name: "Backup Status", id: "backup" }
  ];

  return (
    <div className={cn("pb-12 w-64", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Navigation
          </h2>
          <div className="space-y-1">
            {navigation.map((item) => (
              <Button
                key={item.id}
                variant={activeItem === item.id ? "secondary" : "ghost"}
                className="w-full justify-start h-auto p-3"
                onClick={() => setActiveItem(item.id)}
              >
                <div className="text-left">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-xs text-muted-foreground">{item.description}</div>
                </div>
              </Button>
            ))}
          </div>
        </div>
        
        <Separator />
        
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Quick Links
          </h2>
          <div className="space-y-1">
            {quickLinks.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setActiveItem(item.id)}
              >
                {item.name}
              </Button>
            ))}
          </div>
        </div>

        <Separator />

        <div className="px-3 py-2">
          <div className="rounded-lg bg-muted/50 p-4">
            <h3 className="font-medium text-sm mb-2">System Status</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Server</span>
                <span className="text-green-600 font-medium">Online</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Database</span>
                <span className="text-green-600 font-medium">Connected</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">API</span>
                <span className="text-green-600 font-medium">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}