import { DashboardLayout } from "@/components/dashboard/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, CheckCircle, AlertCircle, Info } from "lucide-react";

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: "success",
      title: "New Client Onboarded",
      message: "TechCorp successfully onboarded with 3 VAs assigned",
      time: "2 hours ago",
      icon: CheckCircle
    },
    {
      id: 2,
      type: "warning",
      title: "Team Capacity Alert",
      message: "Digital Marketing team at 95% capacity",
      time: "4 hours ago",
      icon: AlertCircle
    },
    {
      id: 3,
      type: "info",
      title: "Weekly Report Ready",
      message: "Team analytics report for this week is available",
      time: "1 day ago",
      icon: Info
    }
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'success': return 'text-success';
      case 'warning': return 'text-warning';
      case 'info': return 'text-primary';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <DashboardLayout title="Notifications">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Bell className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold text-foreground">Notifications</h1>
        </div>

        <div className="grid gap-4">
          {notifications.map((notification) => (
            <Card key={notification.id} className="transition-colors hover:bg-muted/50">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <notification.icon className={`h-5 w-5 mt-0.5 ${getIconColor(notification.type)}`} />
                  <div className="flex-1 space-y-1">
                    <CardTitle className="text-base text-foreground">{notification.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {notification.message}
                    </CardDescription>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}