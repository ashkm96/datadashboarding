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

// Data from Zoho CRM, Google Sheets, and Payment integrations
const zohoCRMFunnelData = [
  { month: "Jan", zohoLeads: 150, gsheetLeads: 25, meetings: 85, conversions: 28, deals: 25 },
  { month: "Feb", zohoLeads: 165, gsheetLeads: 30, meetings: 92, conversions: 32, deals: 30 },
  { month: "Mar", zohoLeads: 140, gsheetLeads: 22, meetings: 78, conversions: 26, deals: 24 },
  { month: "Apr", zohoLeads: 180, gsheetLeads: 35, meetings: 105, conversions: 38, deals: 35 },
  { month: "May", zohoLeads: 195, gsheetLeads: 28, meetings: 118, conversions: 42, deals: 39 },
  { month: "Jun", zohoLeads: 210, gsheetLeads: 32, meetings: 125, conversions: 45, deals: 42 },
];

const paymentProcessorRevenue = [
  { service: "Digital Marketing", stripeRevenue: 25000, paypalRevenue: 3000, wiseRevenue: 800, clients: 24 },
  { service: "Executive Admin", stripeRevenue: 16000, paypalRevenue: 1800, wiseRevenue: 400, clients: 18 },
  { service: "Website Design", stripeRevenue: 14500, paypalRevenue: 1200, wiseRevenue: 300, clients: 12 },
  { service: "Ecommerce Management", stripeRevenue: 21000, paypalRevenue: 2500, wiseRevenue: 500, clients: 15 },
];

const zohoCRMPipeline = [
  { name: "TechStart Inc.", service: "Digital Marketing", value: "$5,200", stage: "Proposal", probability: 85, source: "Zoho CRM" },
  { name: "GrowthCorp", service: "Ecommerce Mgmt", value: "$8,500", stage: "Negotiation", probability: 70, source: "Zoho CRM" },
  { name: "StartupX", service: "Website Design", value: "$3,200", stage: "Discovery", probability: 45, source: "Google Sheets" },
  { name: "ScaleUp Ltd", service: "Executive Admin", value: "$2,800", stage: "Proposal", probability: 90, source: "Zoho CRM" },
  { name: "InnovateCo", service: "Digital Marketing", value: "$6,200", stage: "Contract", probability: 95, source: "Zoho CRM" },
];

const lostClientsAnalysis = [
  { name: "OldCorp", reason: "Budget constraints", value: "$4,200", date: "2024-06-15", source: "Zoho CRM" },
  { name: "TechLoss", reason: "Internal hiring", value: "$3,800", date: "2024-06-10", source: "Zoho CRM" },
  { name: "QuickExit", reason: "Timeline mismatch", value: "$2,400", date: "2024-06-05", source: "Google Sheets" },
];

export function SalesAnalytics() {
  return (
    <div className="space-y-6">
      {/* Key Sales Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Zoho CRM Leads"
          value="210"
          change={{ value: 7.7, label: "from Zoho + Sheets" }}
          icon={Users}
          variant="success"
        />
        <MetricCard
          title="Payment Success Rate"
          value="98.6%"
          change={{ value: 1.2, label: "Stripe + PayPal + Wise" }}
          icon={TrendingUp}
          variant="success"
        />
        <MetricCard
          title="Active Deals"
          value="$26,900"
          change={{ value: 18.5, label: "in Zoho CRM" }}
          icon={DollarSign}
          variant="default"
        />
        <MetricCard
          title="Revenue Sources"
          value="3"
          change={{ value: 15.3, label: "integrated processors" }}
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
              Zoho CRM + Google Sheets Lead Flow
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={zohoCRMFunnelData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '0.75rem'
                }} />
                <Area type="monotone" dataKey="zohoLeads" stackId="1" stroke="hsl(217, 91%, 60%)" fill="hsl(217, 91%, 60%)" fillOpacity={0.3} name="Zoho CRM Leads" />
                <Area type="monotone" dataKey="gsheetLeads" stackId="2" stroke="hsl(142, 71%, 45%)" fill="hsl(142, 71%, 45%)" fillOpacity={0.3} name="Google Sheets Leads" />
                <Area type="monotone" dataKey="deals" stackId="3" stroke="hsl(45, 93%, 47%)" fill="hsl(45, 93%, 47%)" fillOpacity={0.3} name="Closed Deals" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Revenue by Payment Processor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={paymentProcessorRevenue}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="service" />
                <YAxis />
                <Tooltip contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '0.75rem'
                }} />
                <Bar dataKey="stripeRevenue" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} name="Stripe" />
                <Bar dataKey="paypalRevenue" fill="hsl(142, 71%, 45%)" radius={[4, 4, 0, 0]} name="PayPal" />
                <Bar dataKey="wiseRevenue" fill="hsl(45, 93%, 47%)" radius={[4, 4, 0, 0]} name="Wise" />
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
              {zohoCRMPipeline.map((client, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div>
                    <p className="font-medium">{client.name}</p>
                    <p className="text-sm text-muted-foreground">{client.service}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {client.stage}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {client.source}
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
              {lostClientsAnalysis.map((client, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-destructive/5 rounded-lg border border-destructive/20">
                  <div>
                    <p className="font-medium">{client.name}</p>
                    <p className="text-sm text-muted-foreground">{client.reason}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {client.source}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        Lost on {new Date(client.date).toLocaleDateString()}
                      </span>
                    </div>
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

      {/* Multi-Platform Sales Integration Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-soft bg-gradient-secondary">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <span className="text-2xl">📊</span>
              <div>
                <h3 className="font-semibold mb-2">Zoho CRM Integration</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Sync deals, leads, contacts, and pipeline data in real-time from your Zoho CRM.
                </p>
                <Badge variant="default">Connected</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft bg-gradient-secondary">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <span className="text-2xl">💳</span>
              <div>
                <h3 className="font-semibold mb-2">Payment Processors</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Track revenue from Stripe, PayPal, and Wise payment processors.
                </p>
                <div className="flex gap-2">
                  <Badge variant="default">Stripe</Badge>
                  <Badge variant="secondary">PayPal</Badge>
                  <Badge variant="outline">Wise</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft bg-gradient-secondary">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <span className="text-2xl">📈</span>
              <div>
                <h3 className="font-semibold mb-2">Google Sheets</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Import custom lead tracking and sales data from Google Sheets.
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