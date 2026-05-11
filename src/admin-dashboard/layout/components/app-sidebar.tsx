import { ChevronDown, Home } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { NavLink } from "react-router-dom";
import { sideBarItems } from "@/admin-dashboard/data";

export function AppSidebar() {
  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="p-4">
        <span className="font-bold text-xl group-data-[collapsible=icon]:hidden text-primary">
          Foodzy
        </span>
      </SidebarHeader>

      <SidebarContent>
          <SidebarMenu>
            {sideBarItems.main.map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton className="py-6" asChild tooltip={item.name}>
                  <NavLink to={item.path}>
                    {item.icon}
                    <span>{item.name}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>

        <SidebarGroup>
          <SidebarMenu>
            <Collapsible defaultOpen className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="py-6" tooltip="Home">
                    <Home className="w-4 h-4" />
                    <span>Home</span>
                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenuSub>
                    {sideBarItems.homeGroup.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.id}>
                        <SidebarMenuSubButton className="py-4" asChild>
                          <NavLink
                            to={subItem.path}
                            className={({ isActive }) =>
                              isActive
                                ? "text-primary font-medium"
                                : "text-muted-foreground"
                            }
                          >
                            {subItem.name}
                          </NavLink>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        {/* ممكن تضيف هنا زرار Logout أو بروفايل المستخدم مستقبلاً */}
      </SidebarFooter>
    </Sidebar>
  );
}
