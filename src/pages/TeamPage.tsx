import { DashboardLayout } from "@/components/dashboard/layout";
import { TeamAnalytics } from "@/components/dashboard/team-analytics";

export default function TeamPage() {
  return (
    <DashboardLayout title="Team Analytics">
      <TeamAnalytics />
    </DashboardLayout>
  );
}