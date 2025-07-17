import { MetricCard } from "./metric-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  Clock, 
  Target,
  Star,
  TrendingUp,
  Calendar,
  BarChart3
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";

// Mock data
const teamUtilization = [
  { name: "Sarah Chen", role: "Digital Marketing Lead", hours_available: 40, hours_booked: 38, efficiency: 95, skills: ["SEO", "PPC", "Analytics"] },
  { name: "Marcus Rodriguez", role: "Executive Admin Manager", hours_available: 40, hours_booked: 35, efficiency: 92, skills: ["Project Mgmt", "CRM", "Scheduling"] },
  { name: "Emily Johnson", role: "Web Design Specialist", hours_available: 40, hours_booked: 39, efficiency: 97, skills: ["React", "UI/UX", "Figma"] },
  { name: "David Kim", role: "Ecommerce Coordinator", hours_available: 40, hours_booked: 36, efficiency: 89, skills: ["Shopify", "WooCommerce", "Analytics"] },
  { name: "Lisa Wang", role: "VA - Digital Marketing", hours_available: 40, hours_booked: 32, efficiency: 88, skills: ["Content", "Social Media", "Email"] },
  { name: "James Thompson", role: "VA - Admin Support", hours_available: 40, hours_booked: 28, efficiency: 85, skills: ["Data Entry", "Research", "Support"] },
];

const skillDistribution = [
  { skill: "Digital Marketing", available: 3, booked: 2, capacity: 95 },
  { skill: "Executive Admin", available: 2, booked: 2, capacity: 98 },
  { skill: "Web Design", available: 1, booked: 1, capacity: 97 },
  { skill: "Ecommerce", available: 1, booked: 1, capacity: 89 },
];

const clientFeedback = [
  { client: "TechStart Inc.", score: 4.8, feedback: "Exceptional work quality", team_member: "Sarah Chen", date: "2024-06-20" },
  { client: "GrowthCorp", score: 4.6, feedback: "Very responsive and professional", team_member: "Marcus Rodriguez", date: "2024-06-18" },
  { client: "InnovateCo", score: 4.9, feedback: "Outstanding design work", team_member: "Emily Johnson", date: "2024-06-15" },
  { client: "ScaleUp Ltd", score: 4.7, feedback: "Great attention to detail", team_member: "David Kim", date: "2024-06-12" },
];

const billableData = [
  { week: "Week 1", billable: 285, non_billable: 35 },
  { week: "Week 2", billable: 295, non_billable: 25 },
  { week: "Week 3", billable: 275, non_billable: 45 },
  { week: "Week 4", billable: 310, non_billable: 30 },
];

export function TeamAnalytics() {
  const totalTeamMembers = teamUtilization.length;
  const avgUtilization = Math.round(teamUtilization.reduce((acc, member) => acc + (member.hours_booked / member.hours_available * 100), 0) / totalTeamMembers);
  const avgEfficiency = Math.round(teamUtilization.reduce((acc, member) => acc + member.efficiency, 0) / totalTeamMembers);
  const avgClientScore = (clientFeedback.reduce((acc, feedback) => acc + feedback.score, 0) / clientFeedback.length).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Key Team Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Team Members"
          value={totalTeamMembers}
          change={{ value: 20, label: "growth this quarter" }}
          icon={Users}
          variant="default"
        />
        <MetricCard
          title="Avg Utilization"
          value={`${avgUtilization}%`}
          change={{ value: 5.2, label: "efficiency boost" }}
          icon={Clock}
          variant="success"
        />
        <MetricCard
          title="Avg Efficiency"
          value={`${avgEfficiency}%`}
          change={{ value: 2.8, label: "performance increase" }}
          icon={Target}
          variant="success"
        />
        <MetricCard
          title="Client Satisfaction"
          value={avgClientScore}
          change={{ value: 0.3, label: "rating improvement" }}
          icon={Star}
          variant="success"
        />
      </div>

      {/* Team Utilization & Billable Hours */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Team Member Utilization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teamUtilization.map((member, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">
                        {member.hours_booked}/{member.hours_available}h
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {Math.round(member.hours_booked / member.hours_available * 100)}% utilized
                      </p>
                    </div>
                  </div>
                  <Progress 
                    value={member.hours_booked / member.hours_available * 100} 
                    className="h-2"
                  />
                  <div className="flex gap-1 mt-2">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Billable vs Non-Billable Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={billableData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '0.75rem'
                }} />
                <Bar dataKey="billable" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="non_billable" fill="hsl(45, 93%, 47%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Skill Distribution & Client Feedback */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Skill Distribution & Capacity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {skillDistribution.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{skill.skill}</p>
                    <div className="text-right">
                      <p className="text-sm font-medium">
                        {skill.booked}/{skill.available} specialists
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {skill.capacity}% capacity
                      </p>
                    </div>
                  </div>
                  <Progress value={skill.capacity} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Available for new projects</span>
                    <span className={skill.capacity > 90 ? "text-warning" : "text-success"}>
                      {skill.capacity > 90 ? "At capacity" : "Available"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              Recent Client Feedback
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {clientFeedback.map((feedback, index) => (
                <div key={index} className="p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-medium">{feedback.client}</p>
                      <p className="text-sm text-muted-foreground">{feedback.team_member}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold">{feedback.score}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {new Date(feedback.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm italic">"{feedback.feedback}"</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Integration Notes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-soft bg-gradient-secondary">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-2">ProofHub Integration</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Sync time tracking data from ProofHub to automatically calculate billable hours and project efficiency metrics.
                </p>
                <Badge variant="outline">Coming Soon</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft bg-gradient-secondary">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <TrendingUp className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-2">TeamLogger Integration</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Connect TeamLogger for real-time productivity tracking and automated time categorization between billable and non-billable work.
                </p>
                <Badge variant="outline">Coming Soon</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}