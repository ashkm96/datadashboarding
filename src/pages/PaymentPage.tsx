import { DashboardLayout } from "@/components/dashboard/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  CreditCard, 
  DollarSign, 
  Calendar, 
  Download,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock
} from "lucide-react";

export default function PaymentPage() {
  const paymentMethods = [
    { name: "Stripe", status: "Active", volume: "65%", icon: CreditCard },
    { name: "Wise", status: "Active", volume: "20%", icon: DollarSign },
    { name: "PayPal", status: "Active", volume: "10%", icon: CreditCard },
    { name: "Fiverr", status: "Limited", volume: "5%", icon: TrendingUp }
  ];

  const invoices = [
    { 
      id: "INV-2024-001", 
      client: "TechCorp", 
      amount: "$4,500", 
      period: "Monthly", 
      status: "Paid", 
      dueDate: "Jan 15, 2024",
      paymentMethod: "Stripe"
    },
    { 
      id: "INV-2024-002", 
      client: "StartupXYZ", 
      amount: "$12,000", 
      period: "Quarterly", 
      status: "Pending", 
      dueDate: "Jan 20, 2024",
      paymentMethod: "Wise"
    },
    { 
      id: "INV-2024-003", 
      client: "DesignStudio", 
      amount: "$2,800", 
      period: "Weekly", 
      status: "Overdue", 
      dueDate: "Jan 10, 2024",
      paymentMethod: "PayPal"
    },
    { 
      id: "INV-2024-004", 
      client: "EcomBrand", 
      amount: "$45,000", 
      period: "Yearly", 
      status: "Draft", 
      dueDate: "Feb 1, 2024",
      paymentMethod: "Stripe"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Paid': return <Badge variant="default" className="bg-success text-success-foreground">Paid</Badge>;
      case 'Pending': return <Badge variant="secondary" className="bg-warning text-warning-foreground">Pending</Badge>;
      case 'Overdue': return <Badge variant="destructive">Overdue</Badge>;
      case 'Draft': return <Badge variant="outline">Draft</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Paid': return <CheckCircle className="h-4 w-4 text-success" />;
      case 'Pending': return <Clock className="h-4 w-4 text-warning" />;
      case 'Overdue': return <AlertCircle className="h-4 w-4 text-destructive" />;
      case 'Draft': return <Calendar className="h-4 w-4 text-muted-foreground" />;
      default: return null;
    }
  };

  return (
    <DashboardLayout title="Payments & Billing">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <CreditCard className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold text-foreground">Payments & Billing</h1>
        </div>

        {/* Payment Methods Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {paymentMethods.map((method) => (
            <Card key={method.name}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground">{method.name}</CardTitle>
                <method.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Volume</span>
                    <span className="text-foreground">{method.volume}</span>
                  </div>
                  <Progress value={parseInt(method.volume)} className="h-2" />
                  <Badge 
                    variant={method.status === 'Active' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {method.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Revenue Summary */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-foreground">Weekly Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$8,400</div>
              <p className="text-xs text-muted-foreground">+12% from last week</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-foreground">Monthly Revenue</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$32,500</div>
              <p className="text-xs text-muted-foreground">+8% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-foreground">Quarterly Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$96,800</div>
              <p className="text-xs text-muted-foreground">+15% from last quarter</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-foreground">Yearly Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$385,200</div>
              <p className="text-xs text-muted-foreground">Target: $400k</p>
            </CardContent>
          </Card>
        </div>

        {/* Invoices Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground">Recent Invoices</CardTitle>
            <CardDescription>Manage your client invoices and payment tracking</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(invoice.status)}
                    <div>
                      <p className="font-medium text-foreground">{invoice.id}</p>
                      <p className="text-sm text-muted-foreground">{invoice.client}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-medium text-foreground">{invoice.amount}</p>
                      <p className="text-sm text-muted-foreground">{invoice.period}</p>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-sm text-foreground">Due: {invoice.dueDate}</p>
                      <p className="text-xs text-muted-foreground">via {invoice.paymentMethod}</p>
                    </div>
                    
                    {getStatusBadge(invoice.status)}
                    
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
    </DashboardLayout>
  );
}