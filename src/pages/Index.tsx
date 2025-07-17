import { DashboardLayout } from "@/components/dashboard/layout";
import { DashboardOverview } from "@/components/dashboard/overview";

const Index = () => {
  return (
    <DashboardLayout title="Dashboard Overview">
      <DashboardOverview />
    </DashboardLayout>
  );
};

export default Index;
