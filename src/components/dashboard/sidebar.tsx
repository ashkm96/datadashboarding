import { NavLink, useLocation } from "react-router-dom";
import {
  BarChart3,
  Users,
  UserCheck,
  Building2,
  TrendingUp,
  Settings,
  Bell
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Overview", url: "/", icon: BarChart3 },
  { title: "Sales Analytics", url: "/sales", icon: TrendingUp },
  { title: "Team Analytics", url: "/team", icon: Users },
  { title: "HR Management", url: "/hr", icon: UserCheck },
];

const companyItems = [
  { title: "Company Settings", url: "/settings", icon: Settings },
  { title: "Notifications", url: "/notifications", icon: Bell },
];

export function DashboardSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary text-primary-foreground font-medium shadow-soft" 
      : "hover:bg-muted/60 transition-colors text-foreground";

  return (
    <Sidebar className={isCollapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-card border-r">
        {/* Company Logo/Header */}
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <Building2 className="h-8 w-8 text-primary" />
            {!isCollapsed && (
              <div>
                <h2 className="font-bold text-lg text-foreground">VirtualPro</h2>
                <p className="text-xs text-muted-foreground">Founders Dashboard</p>
              </div>
            )}
          </div>
        </div>

        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground">Analytics</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Company Settings */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground">Settings</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {companyItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}