import { MetricCard } from "./metric-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  UserCheck,
  BarChart3,
  PieChart,
  Activity,
  Clock,
  MessageSquare,
  FileText,
  Zap
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell
} from "recharts";

// Data from integrated software stack
const zohoRevenueData = [
  { month: "Jan", zohoDeals: 45000, stripeRevenue: 42000, paypalRevenue: 3000 },
  { month: "Feb", zohoDeals: 52000, stripeRevenue: 48000, paypalRevenue: 4000 },
  { month: "Mar", zohoDeals: 48000, stripeRevenue: 45000, paypalRevenue: 3000 },
  { month: "Apr", zohoDeals: 61000, stripeRevenue: 57000, paypalRevenue: 4000 },
  { month: "May", zohoDeals: 58000, stripeRevenue: 54000, paypalRevenue: 4000 },
  { month: "Jun", zohoDeals: 67000, stripeRevenue: 62000, paypalRevenue: 5000 },
];

const prooHubProjectData = [
  { service: "Digital Marketing", completedTasks: 156, activeProjects: 24, teamEfficiency: 92 },
  { service: "Executive Admin", completedTasks: 128, activeProjects: 18, teamEfficiency: 88 },
  { service: "Website Design", completedTasks: 94, activeProjects: 16, teamEfficiency: 94 },
  { service: "Ecommerce Mgmt", completedTasks: 142, activeProjects: 20, teamEfficiency: 90 },
];

const slackEngagementData = [
  { name: "Messages/Day", value: 234, color: "hsl(217, 91%, 60%)" },
  { name: "Active Channels", value: 18, color: "hsl(142, 71%, 45%)" },
  { name: "Response Time", value: 12, color: "hsl(45, 93%, 47%)", unit: "min" },
  { name: "Team Mentions", value: 156, color: "hsl(0, 84%, 60%)" },
];

const integrationStatus = [
  { name: "Zoho CRM", status: "Connected", lastSync: "2 min ago", icon: "📊" },
  { name: "ProofHub", status: "In Progress", lastSync: "Pending", icon: "📋" },
  { name: "TeamLogger", status: "In Progress", lastSync: "Pending", icon: "⏱️" },
  { name: "Slack", status: "Connected", lastSync: "5 min ago", icon: "💬" },
  { name: "GreatipHR", status: "Pending", lastSync: "Not connected", icon: "👥" },
  { name: "Google Sheets", status: "Connected", lastSync: "1 min ago", icon: "📈" },
];

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Key Metrics Row - Data from Multiple Sources */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Monthly Revenue"
          value="$67,000"
          change={{ value: 15.3, label: "from Zoho + Payments" }}
          icon={DollarSign}
          variant="success"
        />
        <MetricCard
          title="Active Projects"
          value="78"
          change={{ value: 8.1, label: "from ProofHub" }}
          icon={BarChart3}
          variant="default"
        />
        <MetricCard
          title="Team Productivity"
          value="87%"
          change={{ value: 3.2, label: "from TeamLogger" }}
          icon={TrendingUp}
          variant="success"
        />
        <MetricCard
          title="Slack Engagement"
          value="234"
          change={{ value: 12, label: "msgs/day average" }}
          icon={MessageSquare}
          variant="success"
        />
      </div>

      {/* Charts Row - Multi-Source Data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue from Zoho & Payment Processors */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Revenue Sources (Zoho + Payments)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={zohoRevenueData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '0.75rem'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="zohoDeals" 
                  stroke="hsl(217, 91%, 60%)" 
                  strokeWidth={3}
                  name="Zoho Deals"
                />
                <Line 
                  type="monotone" 
                  dataKey="stripeRevenue" 
                  stroke="hsl(142, 71%, 45%)" 
                  strokeWidth={2}
                  name="Stripe Revenue"
                />
                <Line 
                  type="monotone" 
                  dataKey="paypalRevenue" 
                  stroke="hsl(45, 93%, 47%)" 
                  strokeWidth={2}
                  name="PayPal Revenue"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* ProofHub Project Data */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              ProofHub Project Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={prooHubProjectData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="service" />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '0.75rem'
                  }}
                />
                <Bar 
                  dataKey="completedTasks" 
                  fill="hsl(217, 91%, 60%)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Slack Engagement & Integration Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Slack Team Engagement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {slackEngagementData.map((item, index) => (
                <div key={index} className="text-center p-3 bg-muted/30 rounded-lg">
                  <div 
                    className="w-4 h-4 rounded-full mx-auto mb-2" 
                    style={{ backgroundColor: item.color }}
                  />
                  <p className="text-2xl font-bold">
                    {item.value}{item.unit || ''}
                  </p>
                  <p className="text-xs text-muted-foreground">{item.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Integration Status Dashboard */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Software Integration Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {integrationStatus.map((integration, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{integration.icon}</span>
                  <div>
                    <p className="font-medium text-sm">{integration.name}</p>
                    <p className="text-xs text-muted-foreground">{integration.lastSync}</p>
                  </div>
                </div>
                <Badge 
                  variant={
                    integration.status === "Connected" ? "default" :
                    integration.status === "In Progress" ? "secondary" :
                    "outline"
                  }
                  className="text-xs"
                >
                  {integration.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity from All Platforms */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Cross-Platform Activity Feed</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
              <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium">📊 Zoho CRM: New deal created</p>
                <p className="text-xs text-muted-foreground">TechStart Inc. - Digital Marketing package ($5,200)</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-warning/10 rounded-lg">
              <div className="w-2 h-2 bg-warning rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium">⏱️ TeamLogger: Capacity alert triggered</p>
                <p className="text-xs text-muted-foreground">Website Design team at 95% utilization</p>
                <p className="text-xs text-muted-foreground">4 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium">📋 ProofHub: Project milestone completed</p>
                <p className="text-xs text-muted-foreground">GrowthCorp website redesign - Phase 2 done</p>
                <p className="text-xs text-muted-foreground">6 hours ago</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
              <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium">💬 Slack: High team engagement</p>
                <p className="text-xs text-muted-foreground">Average response time: 8 minutes (target: &lt;15min)</p>
                <p className="text-xs text-muted-foreground">8 hours ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}