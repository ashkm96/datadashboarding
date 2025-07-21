import { MetricCard } from "./metric-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  Users, 
  Clock, 
  Target,
  Star,
  TrendingUp,
  Calendar,
  BarChart3,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
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

// Data from TeamLogger and ProofHub integrations
const teamLoggerUtilization = [
  { name: "Sarah Chen", role: "Digital Marketing Lead", hours_available: 40, hours_tracked: 38, productivity_score: 95, billable_hours: 35, proorhub_tasks: 24 },
  { name: "Marcus Rodriguez", role: "Executive Admin Manager", hours_available: 40, hours_tracked: 35, productivity_score: 92, billable_hours: 32, proorhub_tasks: 18 },
  { name: "Emily Johnson", role: "Web Design Specialist", hours_available: 40, hours_tracked: 39, productivity_score: 97, billable_hours: 36, proorhub_tasks: 16 },
  { name: "David Kim", role: "Ecommerce Coordinator", hours_available: 40, hours_tracked: 36, productivity_score: 89, billable_hours: 33, proorhub_tasks: 22 },
  { name: "Lisa Wang", role: "VA - Digital Marketing", hours_available: 40, hours_tracked: 32, productivity_score: 88, billable_hours: 28, proorhub_tasks: 19 },
  { name: "James Thompson", role: "VA - Admin Support", hours_available: 40, hours_tracked: 28, productivity_score: 85, billable_hours: 25, proorhub_tasks: 15 },
];

const proorhubDepartmentData = [
  {
    department: "Digital Marketing",
    active_projects: 8,
    team_size: 3,
    avg_completion: 92,
    skills: [
      { name: "SEO/SEM", capacity: 85, projects: 3, members: 1 },
      { name: "Content Marketing", capacity: 90, projects: 2, members: 1 },
      { name: "Social Media", capacity: 88, projects: 3, members: 1 }
    ]
  },
  {
    department: "Executive Admin",
    active_projects: 6,
    team_size: 2,
    avg_completion: 88,
    skills: [
      { name: "Client Relations", capacity: 92, projects: 3, members: 1 },
      { name: "Operations", capacity: 85, projects: 2, members: 1 },
      { name: "Documentation", capacity: 87, projects: 1, members: 1 }
    ]
  },
  {
    department: "Web Design and Ecommerce",
    active_projects: 9,
    team_size: 2,
    avg_completion: 91,
    skills: [
      { name: "UI/UX Design", capacity: 94, projects: 4, members: 1 },
      { name: "Frontend Development", capacity: 89, projects: 2, members: 1 },
      { name: "Ecommerce Setup", capacity: 90, projects: 3, members: 1 }
    ]
  },
  {
    department: "CRM",
    active_projects: 4,
    team_size: 2,
    avg_completion: 86,
    skills: [
      { name: "Data Management", capacity: 88, projects: 2, members: 1 },
      { name: "Customer Analytics", capacity: 85, projects: 1, members: 1 },
      { name: "Process Automation", capacity: 84, projects: 1, members: 1 }
    ]
  }
];

const slackClientFeedback = [
  { client: "TechStart Inc.", score: 4.8, feedback: "Exceptional work quality", team_member: "Sarah Chen", date: "2024-06-20", response_time: "8 min" },
  { client: "GrowthCorp", score: 4.6, feedback: "Very responsive and professional", team_member: "Marcus Rodriguez", date: "2024-06-18", response_time: "12 min" },
  { client: "InnovateCo", score: 4.9, feedback: "Outstanding design work", team_member: "Emily Johnson", date: "2024-06-15", response_time: "5 min" },
  { client: "ScaleUp Ltd", score: 4.7, feedback: "Great attention to detail", team_member: "David Kim", date: "2024-06-12", response_time: "15 min" },
];

const teamLoggerBillableData = [
  { week: "Week 1", billable: 285, non_billable: 35, breaks: 20, meetings: 15 },
  { week: "Week 2", billable: 295, non_billable: 25, breaks: 18, meetings: 12 },
  { week: "Week 3", billable: 275, non_billable: 45, breaks: 22, meetings: 18 },
  { week: "Week 4", billable: 310, non_billable: 30, breaks: 19, meetings: 14 },
];

export function TeamAnalytics() {
  const [openDepartments, setOpenDepartments] = useState<Record<string, boolean>>({});
  const [openSkills, setOpenSkills] = useState<Record<string, boolean>>({});
  
  const totalTeamMembers = teamLoggerUtilization.length;
  const avgUtilization = Math.round(teamLoggerUtilization.reduce((acc, member) => acc + (member.hours_tracked / member.hours_available * 100), 0) / totalTeamMembers);
  const avgEfficiency = Math.round(teamLoggerUtilization.reduce((acc, member) => acc + member.productivity_score, 0) / totalTeamMembers);
  const avgClientScore = (slackClientFeedback.reduce((acc, feedback) => acc + feedback.score, 0) / slackClientFeedback.length).toFixed(1);

  const toggleDepartment = (department: string) => {
    setOpenDepartments(prev => ({ ...prev, [department]: !prev[department] }));
  };

  const toggleSkill = (skillKey: string) => {
    setOpenSkills(prev => ({ ...prev, [skillKey]: !prev[skillKey] }));
  };

  return (
    <div className="space-y-6">
      {/* Key Team Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="TeamLogger Active"
          value={totalTeamMembers}
          change={{ value: 20, label: "tracked employees" }}
          icon={Users}
          variant="default"
        />
        <MetricCard
          title="Avg Productivity"
          value={`${avgUtilization}%`}
          change={{ value: 5.2, label: "from TeamLogger" }}
          icon={Clock}
          variant="success"
        />
        <MetricCard
          title="ProofHub Tasks"
          value="520"
          change={{ value: 2.8, label: "completed this month" }}
          icon={Target}
          variant="success"
        />
        <MetricCard
          title="Slack Response"
          value="9.7 min"
          change={{ value: -15, label: "avg response time" }}
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
              TeamLogger Productivity Tracking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teamLoggerUtilization.map((member, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">
                        {member.hours_tracked}h tracked | {member.billable_hours}h billable
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {member.proorhub_tasks} ProofHub tasks | {member.productivity_score}% productivity
                      </p>
                    </div>
                  </div>
                  <Progress 
                    value={member.hours_tracked / member.hours_available * 100} 
                    className="h-2"
                  />
                  <div className="flex gap-2 mt-2">
                    <Badge variant="secondary" className="text-xs">
                      TeamLogger: {member.productivity_score}%
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      ProofHub: {member.proorhub_tasks} tasks
                    </Badge>
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
              TeamLogger Time Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={teamLoggerBillableData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '0.75rem'
                }} />
                <Bar dataKey="billable" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} name="Billable" />
                <Bar dataKey="non_billable" fill="hsl(45, 93%, 47%)" radius={[4, 4, 0, 0]} name="Non-Billable" />
                <Bar dataKey="meetings" fill="hsl(142, 71%, 45%)" radius={[4, 4, 0, 0]} name="Meetings" />
                <Bar dataKey="breaks" fill="hsl(0, 84%, 60%)" radius={[4, 4, 0, 0]} name="Breaks" />
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
              ProofHub Project Capacity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {proorhubDepartmentData.map((dept, index) => (
                <Collapsible 
                  key={index} 
                  open={openDepartments[dept.department]} 
                  onOpenChange={() => toggleDepartment(dept.department)}
                >
                  <CollapsibleTrigger className="w-full">
                    <div className="p-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border-l-4 border-primary hover:from-primary/15 hover:to-primary/8 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {openDepartments[dept.department] ? 
                            <ChevronDown className="h-4 w-4" /> : 
                            <ChevronRight className="h-4 w-4" />
                          }
                          <h4 className="font-semibold text-lg text-left">{dept.department}</h4>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">
                            {dept.active_projects} active projects | {dept.team_size} members
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {dept.avg_completion}% avg completion
                          </p>
                        </div>
                      </div>
                      <Progress value={dept.avg_completion} className="h-2 mt-2" />
                    </div>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent className="ml-4 mt-2">
                    <div className="space-y-2">
                      {dept.skills.map((skill, skillIndex) => {
                        const skillKey = `${dept.department}-${skill.name}`;
                        return (
                          <Collapsible 
                            key={skillIndex}
                            open={openSkills[skillKey]} 
                            onOpenChange={() => toggleSkill(skillKey)}
                          >
                            <CollapsibleTrigger className="w-full">
                              <div className="p-2 bg-muted/20 rounded border-l-2 border-muted hover:bg-muted/30 transition-colors">
                                <div className="flex items-center justify-between mb-1">
                                  <div className="flex items-center gap-2">
                                    {openSkills[skillKey] ? 
                                      <ChevronDown className="h-3 w-3" /> : 
                                      <ChevronRight className="h-3 w-3" />
                                    }
                                    <p className="font-medium text-sm text-left">{skill.name}</p>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-xs font-medium">
                                      {skill.projects} projects | {skill.members} member{skill.members > 1 ? 's' : ''}
                                    </p>
                                  </div>
                                </div>
                                <Progress value={skill.capacity} className="h-1.5" />
                              </div>
                            </CollapsibleTrigger>
                            
                            <CollapsibleContent className="ml-4 mt-1">
                              <div className="p-2 bg-muted/10 rounded text-xs space-y-1">
                                <div className="flex justify-between items-center">
                                  <span className="text-muted-foreground">Capacity: {skill.capacity}%</span>
                                  <Badge variant={skill.capacity > 90 ? "default" : skill.capacity > 80 ? "secondary" : "outline"} className="text-xs">
                                    {skill.capacity > 90 ? "High Load" : skill.capacity > 80 ? "Good" : "Available"}
                                  </Badge>
                                </div>
                                <div className="text-muted-foreground">
                                  <p>Active Projects: {skill.projects}</p>
                                  <p>Team Members: {skill.members}</p>
                                  <p>Workload Status: {skill.capacity > 90 ? "At capacity" : skill.capacity > 80 ? "Well utilized" : "Can take more work"}</p>
                                </div>
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        );
                      })}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              Client Feedback + Slack Response Times
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {slackClientFeedback.map((feedback, index) => (
                <div key={index} className="p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-medium">{feedback.client}</p>
                      <p className="text-sm text-muted-foreground">{feedback.team_member}</p>
                      <Badge variant="outline" className="text-xs mt-1">
                        Slack: {feedback.response_time}
                      </Badge>
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

      {/* Real-time Integration Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-soft bg-gradient-secondary">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <span className="text-2xl">📋</span>
              <div>
                <h3 className="font-semibold mb-2">ProofHub Integration</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  API Key: 732a820f7a600653f0a8f171e8ccf8a7e849f14f
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  Real-time project tracking, task completion, and time management data.
                </p>
                <Badge variant="secondary">In Progress</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft bg-gradient-secondary">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <span className="text-2xl">⏱️</span>
              <div>
                <h3 className="font-semibold mb-2">TeamLogger Integration</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  API Key: 14e15d45cf7b4648a987cb06b86811ba
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  Employee productivity tracking, time categorization, and automated reporting.
                </p>
                <Badge variant="secondary">In Progress</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft bg-gradient-secondary">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <span className="text-2xl">💬</span>
              <div>
                <h3 className="font-semibold mb-2">Slack Integration</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Team communication metrics, response times, and client interaction analysis.
                </p>
                <Badge variant="default">Connected</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}