import { DashboardLayout } from "@/components/dashboard/layout";
import { HRAnalytics } from "@/components/dashboard/hr-analytics";

export default function HRPage() {
  return (
    <DashboardLayout title="HR Management">
      <HRAnalytics />
    </DashboardLayout>
  );
}