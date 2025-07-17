import { MetricCard } from "./metric-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  UserPlus, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Calendar,
  Target,
  BrainCircuit
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

// Mock data for HR analytics
const hiringNeeds = [
  { 
    level: "Management Team", 
    current: 2, 
    needed: 1, 
    priority: "Medium",
    skills: ["Leadership", "Strategy", "Client Relations"],
    timeline: "Q3 2024"
  },
  { 
    level: "Project Managers", 
    current: 3, 
    needed: 2, 
    priority: "High",
    skills: ["Project Management", "Agile", "Team Leadership"],
    timeline: "Q2 2024"
  },
  { 
    level: "Project Coordinators", 
    current: 4, 
    needed: 1, 
    priority: "Medium",
    skills: ["Organization", "Communication", "Tool Proficiency"],
    timeline: "Q3 2024"
  },
  { 
    level: "Virtual Assistants", 
    current: 6, 
    needed: 3, 
    priority: "High",
    skills: ["Digital Marketing", "Admin", "Technical Skills"],
    timeline: "Immediate"
  },
];

const teamGrowthData = [
  { month: "Jan", management: 2, pm: 2, coordinator: 3, va: 4 },
  { month: "Feb", management: 2, pm: 2, coordinator: 4, va: 4 },
  { month: "Mar", management: 2, pm: 3, coordinator: 4, va: 5 },
  { month: "Apr", management: 2, pm: 3, coordinator: 4, va: 6 },
  { month: "May", management: 2, pm: 3, coordinator: 4, va: 6 },
  { month: "Jun", management: 2, pm: 3, coordinator: 4, va: 6 },
];

const recruitmentTriggers = [
  {
    trigger: "Digital Marketing Team Capacity",
    status: "CRITICAL",
    metric: "95% utilization for 2+ weeks",
    action: "Hire 1 Digital Marketing VA",
    timeline: "Immediate",
    automated: true
  },
  {
    trigger: "Project Manager Workload",
    status: "WARNING", 
    metric: "Avg 45+ hours/week for 3+ weeks",
    action: "Hire 1 Senior Project Manager",
    timeline: "Within 30 days",
    automated: true
  },
  {
    trigger: "Client Acquisition Growth",
    status: "OPPORTUNITY",
    metric: "20+ new clients/quarter",
    action: "Scale coordinator team",
    timeline: "Q3 Planning",
    automated: false
  },
];

const retentionData = [
  { role: "Management", retention: 95, satisfaction: 4.8, tenure: 2.5 },
  { role: "Project Managers", retention: 88, satisfaction: 4.6, tenure: 1.8 },
  { role: "Coordinators", retention: 85, satisfaction: 4.4, tenure: 1.2 },
  { role: "Virtual Assistants", retention: 82, satisfaction: 4.3, tenure: 1.0 },
];

export function HRAnalytics() {
  const totalEmployees = hiringNeeds.reduce((acc, level) => acc + level.current, 0);
  const totalNeeded = hiringNeeds.reduce((acc, level) => acc + level.needed, 0);
  const criticalOpenings = hiringNeeds.filter(level => level.priority === "High").length;
  const avgRetention = Math.round(retentionData.reduce((acc, role) => acc + role.retention, 0) / retentionData.length);

  return (
    <div className="space-y-6">
      {/* Key HR Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Employees"
          value={totalEmployees}
          change={{ value: 20, label: "growth this year" }}
          icon={Users}
          variant="default"
        />
        <MetricCard
          title="Open Positions"
          value={totalNeeded}
          change={{ value: 25, label: "hiring demand" }}
          icon={UserPlus}
          variant="warning"
        />
        <MetricCard
          title="Critical Openings"
          value={criticalOpenings}
          change={{ value: 50, label: "urgent priority" }}
          icon={AlertTriangle}
          variant="destructive"
        />
        <MetricCard
          title="Retention Rate"
          value={`${avgRetention}%`}
          change={{ value: 3.2, label: "improvement" }}
          icon={TrendingUp}
          variant="success"
        />
      </div>

      {/* Hiring Needs & Automated Triggers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Organizational Hiring Needs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {hiringNeeds.map((level, index) => (
                <div key={index} className="p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-medium">{level.level}</h4>
                      <p className="text-sm text-muted-foreground">
                        Current: {level.current} | Need: +{level.needed}
                      </p>
                    </div>
                    <Badge 
                      variant={level.priority === "High" ? "destructive" : "outline"}
                      className="ml-2"
                    >
                      {level.priority}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex gap-1 flex-wrap">
                      {level.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Timeline:</span>
                      <span className="font-medium">{level.timeline}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BrainCircuit className="h-5 w-5 text-primary" />
              Automated Recruitment Triggers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recruitmentTriggers.map((trigger, index) => (
                <div key={index} className={`p-4 rounded-lg border-l-4 ${
                  trigger.status === "CRITICAL" ? "bg-destructive/5 border-l-destructive" :
                  trigger.status === "WARNING" ? "bg-warning/5 border-l-warning" :
                  "bg-success/5 border-l-success"
                }`}>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium">{trigger.trigger}</h4>
                      <p className="text-sm text-muted-foreground">{trigger.metric}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={
                          trigger.status === "CRITICAL" ? "destructive" :
                          trigger.status === "WARNING" ? "destructive" : "default"
                        }
                        className="text-xs"
                      >
                        {trigger.status}
                      </Badge>
                      {trigger.automated && (
                        <CheckCircle className="h-4 w-4 text-success" />
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-foreground">
                      Action: {trigger.action}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Timeline: {trigger.timeline}
                    </p>
                  </div>
                  
                  {trigger.status === "CRITICAL" && (
                    <Button size="sm" className="mt-3 w-full" variant="destructive">
                      Initiate Hiring Process
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Team Growth & Retention */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Team Growth by Level
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={teamGrowthData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '0.75rem'
                }} />
                <Line type="monotone" dataKey="management" stroke="hsl(217, 91%, 60%)" strokeWidth={2} />
                <Line type="monotone" dataKey="pm" stroke="hsl(142, 71%, 45%)" strokeWidth={2} />
                <Line type="monotone" dataKey="coordinator" stroke="hsl(45, 93%, 47%)" strokeWidth={2} />
                <Line type="monotone" dataKey="va" stroke="hsl(0, 84%, 60%)" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              Retention & Satisfaction by Role
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {retentionData.map((role, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{role.role}</p>
                      <p className="text-sm text-muted-foreground">
                        Avg tenure: {role.tenure} years | Satisfaction: {role.satisfaction}/5.0
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">{role.retention}%</p>
                      <p className="text-xs text-muted-foreground">retention</p>
                    </div>
                  </div>
                  <Progress value={role.retention} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Automation Summary */}
      <Card className="shadow-soft bg-gradient-secondary">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <BrainCircuit className="h-8 w-8 text-primary mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold mb-2">HR Automation Intelligence</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our system automatically monitors team capacity, workload distribution, and client growth patterns 
                to trigger recruitment recommendations based on data-driven thresholds across the organizational hierarchy.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-card rounded-lg border">
                  <h4 className="font-medium text-sm mb-1">Capacity Monitoring</h4>
                  <p className="text-xs text-muted-foreground">
                    Tracks team utilization rates and automatically flags when departments exceed optimal capacity
                  </p>
                </div>
                <div className="p-3 bg-card rounded-lg border">
                  <h4 className="font-medium text-sm mb-1">Growth Correlation</h4>
                  <p className="text-xs text-muted-foreground">
                    Analyzes client acquisition patterns to predict staffing needs before bottlenecks occur
                  </p>
                </div>
                <div className="p-3 bg-card rounded-lg border">
                  <h4 className="font-medium text-sm mb-1">Efficiency Analytics</h4>
                  <p className="text-xs text-muted-foreground">
                    Measures team performance to optimize hiring priorities and skill mix requirements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}