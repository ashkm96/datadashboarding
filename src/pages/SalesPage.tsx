import { DashboardLayout } from "@/components/dashboard/layout";
import { SalesAnalytics } from "@/components/dashboard/sales-analytics";

export default function SalesPage() {
  return (
    <DashboardLayout title="Sales Analytics">
      <SalesAnalytics />
    </DashboardLayout>
  );
}