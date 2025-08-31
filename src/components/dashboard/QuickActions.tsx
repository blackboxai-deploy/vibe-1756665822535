import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function QuickActions() {
  const actions = [
    {
      title: "Create New User",
      description: "Add a new user account",
      action: () => console.log("Creating new user"),
      variant: "default" as const
    },
    {
      title: "Generate Report", 
      description: "Create system analytics report",
      action: () => console.log("Generating report"),
      variant: "secondary" as const
    },
    {
      title: "Send Notification",
      description: "Broadcast system message",
      action: () => console.log("Sending notification"),
      variant: "outline" as const
    },
    {
      title: "Backup Data",
      description: "Create system backup",
      action: () => console.log("Starting backup"),
      variant: "default" as const
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>
          Frequently used administrative tasks
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              className="h-auto p-4 flex flex-col items-start text-left"
              onClick={action.action}
            >
              <div className="font-medium text-sm">{action.title}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {action.description}
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}