import { MetricCard } from "./metric-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  UserPlus,
  Calendar,
  CheckCircle,
  AlertCircle,
  ExternalLink
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar
} from "recharts";

// Mock data
const salesFunnelData = [
  { month: "Jan", leads: 150, meetings: 85, conversions: 28, onboardings: 25 },
  { month: "Feb", leads: 165, meetings: 92, conversions: 32, onboardings: 30 },
  { month: "Mar", leads: 140, meetings: 78, conversions: 26, onboardings: 24 },
  { month: "Apr", leads: 180, meetings: 105, conversions: 38, onboardings: 35 },
  { month: "May", leads: 195, meetings: 118, conversions: 42, onboardings: 39 },
  { month: "Jun", leads: 210, meetings: 125, conversions: 45, onboardings: 42 },
];

const revenueByService = [
  { service: "Digital Marketing", revenue: 28000, clients: 24, growth: 15.3 },
  { service: "Executive Admin", revenue: 18000, clients: 18, growth: 8.7 },
  { service: "Website Design", revenue: 16000, clients: 12, growth: 22.1 },
  { service: "Ecommerce Management", revenue: 24000, clients: 15, growth: 12.4 },
];

const clientPipeline = [
  { name: "TechStart Inc.", service: "Digital Marketing", value: "$5,200", stage: "Proposal", probability: 85 },
  { name: "GrowthCorp", service: "Ecommerce Mgmt", value: "$8,500", stage: "Negotiation", probability: 70 },
  { name: "StartupX", service: "Website Design", value: "$3,200", stage: "Discovery", probability: 45 },
  { name: "ScaleUp Ltd", service: "Executive Admin", value: "$2,800", stage: "Proposal", probability: 90 },
  { name: "InnovateCo", service: "Digital Marketing", value: "$6,200", stage: "Contract", probability: 95 },
];

const lostClients = [
  { name: "OldCorp", reason: "Budget constraints", value: "$4,200", date: "2024-06-15" },
  { name: "TechLoss", reason: "Internal hiring", value: "$3,800", date: "2024-06-10" },
  { name: "QuickExit", reason: "Timeline mismatch", value: "$2,400", date: "2024-06-05" },
];

export function SalesAnalytics() {
  return (
    <div className="space-y-6">
      {/* Key Sales Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Monthly Leads"
          value="210"
          change={{ value: 7.7, label: "from last month" }}
          icon={Users}
          variant="success"
        />
        <MetricCard
          title="Conversion Rate"
          value="21.4%"
          change={{ value: 3.2, label: "improvement" }}
          icon={TrendingUp}
          variant="success"
        />
        <MetricCard
          title="Pipeline Value"
          value="$26,900"
          change={{ value: 18.5, label: "this month" }}
          icon={DollarSign}
          variant="default"
        />
        <MetricCard
          title="New Onboardings"
          value="42"
          change={{ value: 7.7, label: "from last month" }}
          icon={UserPlus}
          variant="success"
        />
      </div>

      {/* Sales Funnel & Revenue Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Sales Funnel Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={salesFunnelData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '0.75rem'
                }} />
                <Area type="monotone" dataKey="leads" stackId="1" stroke="hsl(217, 91%, 60%)" fill="hsl(217, 91%, 60%)" fillOpacity={0.3} />
                <Area type="monotone" dataKey="meetings" stackId="2" stroke="hsl(142, 71%, 45%)" fill="hsl(142, 71%, 45%)" fillOpacity={0.3} />
                <Area type="monotone" dataKey="conversions" stackId="3" stroke="hsl(45, 93%, 47%)" fill="hsl(45, 93%, 47%)" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Revenue by Service Line
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueByService}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="service" />
                <YAxis />
                <Tooltip contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '0.75rem'
                }} />
                <Bar dataKey="revenue" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Pipeline & Lost Clients */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-soft">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Active Pipeline</CardTitle>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                View in CRM
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {clientPipeline.map((client, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div>
                    <p className="font-medium">{client.name}</p>
                    <p className="text-sm text-muted-foreground">{client.service}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {client.stage}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {client.probability}% probability
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">{client.value}</p>
                    {client.probability >= 80 ? (
                      <CheckCircle className="h-4 w-4 text-success ml-auto" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-warning ml-auto" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-destructive" />
              Recently Lost Clients
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lostClients.map((client, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-destructive/5 rounded-lg border border-destructive/20">
                  <div>
                    <p className="font-medium">{client.name}</p>
                    <p className="text-sm text-muted-foreground">{client.reason}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Lost on {new Date(client.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-destructive">{client.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">Key Insights</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 60% of losses due to budget constraints</li>
                <li>• Average time to churn: 8.5 months</li>
                <li>• Focus on mid-market retention strategies</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Google Sheets Integration Note */}
      <Card className="shadow-soft bg-gradient-secondary">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <ExternalLink className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Google Sheets Integration</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Connect your sales data from Google Sheets to automatically sync leads, 
                client information, and project requirements in real-time.
              </p>
              <Button variant="outline" size="sm">
                Configure Integration
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}