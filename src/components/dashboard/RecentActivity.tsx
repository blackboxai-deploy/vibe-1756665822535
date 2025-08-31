import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "user_login",
      message: "User john.doe@company.com logged in",
      timestamp: "2 minutes ago",
      severity: "info" as const
    },
    {
      id: 2, 
      type: "complaint_created",
      message: "New complaint submitted: Order delivery issue",
      timestamp: "15 minutes ago",
      severity: "warning" as const
    },
    {
      id: 3,
      type: "user_created",
      message: "New user account created for sarah.wilson@company.com",
      timestamp: "1 hour ago", 
      severity: "success" as const
    },
    {
      id: 4,
      type: "system_backup",
      message: "Scheduled system backup completed successfully",
      timestamp: "2 hours ago",
      severity: "success" as const
    },
    {
      id: 5,
      type: "failed_login",
      message: "Failed login attempt from IP 192.168.1.100",
      timestamp: "3 hours ago",
      severity: "error" as const
    },
    {
      id: 6,
      type: "content_updated",
      message: "Homepage content updated by admin",
      timestamp: "4 hours ago",
      severity: "info" as const
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "success": return "bg-green-100 text-green-800";
      case "warning": return "bg-yellow-100 text-yellow-800";
      case "error": return "bg-red-100 text-red-800";
      default: return "bg-blue-100 text-blue-800";
    }
  };

  const getSeverityLabel = (severity: string) => {
    switch (severity) {
      case "success": return "Success";
      case "warning": return "Warning";
      case "error": return "Error";
      default: return "Info";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>
          Latest system events and user actions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-3 pb-3 border-b border-border/40 last:border-0 last:pb-0"
            >
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium leading-relaxed">
                    {activity.message}
                  </p>
                  <Badge 
                    variant="secondary" 
                    className={`text-xs ${getSeverityColor(activity.severity)}`}
                  >
                    {getSeverityLabel(activity.severity)}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  {activity.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t">
          <Button variant="ghost" className="w-full text-sm">
            View All Activity
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}