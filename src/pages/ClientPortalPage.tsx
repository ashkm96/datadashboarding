import { DashboardLayout } from "@/components/dashboard/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Clock, 
  CheckCircle, 
  DollarSign, 
  MessageCircle,
  Star,
  Download,
  Calendar
} from "lucide-react";

export default function ClientPortalPage() {
  const activeProjects = [
    {
      name: "Digital Marketing Campaign",
      progress: 75,
      team: ["Sarah M.", "John D.", "Mike R."],
      deadline: "Jan 30, 2024",
      status: "In Progress"
    },
    {
      name: "Website Redesign",
      progress: 45,
      team: ["Lisa K.", "Tom B."],
      deadline: "Feb 15, 2024",
      status: "In Progress"
    },
    {
      name: "E-commerce Setup",
      progress: 90,
      team: ["Anna P.", "Chris L."],
      deadline: "Jan 25, 2024",
      status: "Review"
    }
  ];

  const recentInvoices = [
    { id: "INV-001", amount: "$4,500", period: "Monthly", status: "Paid", date: "Jan 1, 2024" },
    { id: "INV-002", amount: "$4,500", period: "Monthly", status: "Pending", date: "Feb 1, 2024" },
  ];

  const teamMembers = [
    { name: "Sarah Martinez", role: "Digital Marketing VA", hours: "40h/week", rating: 4.9 },
    { name: "John Davis", role: "Social Media Manager", hours: "25h/week", rating: 4.8 },
    { name: "Lisa Kim", role: "Web Designer", hours: "30h/week", rating: 5.0 },
  ];

  return (
    <DashboardLayout title="Client Portal">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <User className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold text-foreground">Client Portal - TechCorp</h1>
        </div>

        {/* Client Overview */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-foreground">Active Projects</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">3</div>
              <p className="text-xs text-muted-foreground">2 on track, 1 in review</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-foreground">Team Members</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">3</div>
              <p className="text-xs text-muted-foreground">95h total weekly capacity</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-foreground">Monthly Investment</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$4,500</div>
              <p className="text-xs text-muted-foreground">Next billing: Feb 1</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-foreground">Satisfaction Score</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">4.9</div>
              <p className="text-xs text-muted-foreground">Excellent performance</p>
            </CardContent>
          </Card>
        </div>

        {/* Active Projects */}
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground">Active Projects</CardTitle>
            <CardDescription>Track progress of your ongoing projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeProjects.map((project, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-medium text-foreground">{project.name}</h4>
                      <p className="text-sm text-muted-foreground">Team: {project.team.join(", ")}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant={project.status === "Review" ? "secondary" : "default"}>
                        {project.status}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">Due: {project.deadline}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="text-foreground">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Your Team */}
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">Your Dedicated Team</CardTitle>
              <CardDescription>Virtual assistants assigned to your account</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-warning fill-current" />
                        <span className="text-sm text-foreground">{member.rating}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{member.hours}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Invoices */}
          <Card>
            <CardHeader>
              <CardTitle className="text-foreground">Recent Invoices</CardTitle>
              <CardDescription>Your billing history and payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentInvoices.map((invoice) => (
                  <div key={invoice.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">{invoice.id}</p>
                      <p className="text-sm text-muted-foreground">{invoice.date} • {invoice.period}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="font-medium text-foreground">{invoice.amount}</p>
                        <Badge variant={invoice.status === "Paid" ? "default" : "secondary"}>
                          {invoice.status}
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground">Quick Actions</CardTitle>
            <CardDescription>Manage your account and communicate with your team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Button>
                <MessageCircle className="h-4 w-4 mr-2" />
                Message Team
              </Button>
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Meeting
              </Button>
              <Button variant="outline">
                <CheckCircle className="h-4 w-4 mr-2" />
                Request Changes
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}