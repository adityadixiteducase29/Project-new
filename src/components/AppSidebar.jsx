import { People, Help } from "@mui/icons-material";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { PiNotepad } from "react-icons/pi";
import { HiUsers } from "react-icons/hi";
import { useEffect } from "react";
import { Pin, PinOff } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const items = [
  { title: "Dashboard", url: "/dashboard", icon: TbLayoutDashboardFilled },
  { title: "Clients", url: "/dashboard/client", icon: People },
  { title: "Employees", url: "/dashboard/employees", icon: HiUsers },
  { title: "Applications", url: "/dashboard/application", icon: PiNotepad },
  { title: "Help", url: "/dashboard/help", icon: Help },
];

// Custom Pin Sidebar component
function PinSidebar() {
  const { state, setOpen } = useSidebar();
  const isExpanded = state === "expanded";

  const togglePin = () => {
    setOpen(!isExpanded);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={togglePin}
      className="hover:bg-accent transition-colors"
      title={isExpanded ? "Unpin sidebar" : "Pin sidebar"}
    >
      {isExpanded ? <PinOff size={16} /> : <Pin size={16} />}
    </Button>
  );
}

export function AppSidebar() {
  const { state, setOpen, isMobile } = useSidebar();
  const isCollapsed = state === "collapsed";

  // Responsive behavior - auto-collapse when screen width < 1180px (desktop only)
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Only auto-collapse on desktop (not mobile) when width < 1180px
      if (!isMobile && width < 1180 && state !== "collapsed") {
        setOpen(false);
      }
      // Auto-expand when width >= 1180px and sidebar is collapsed
      if (!isMobile && width >= 1180 && state === "collapsed") {
        setOpen(true);
      }
    };

    // Check on mount
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [state, setOpen, isMobile]);

  // No longer need custom isActive function as we're using NavLink's built-in isActive

  return (
    <Sidebar
      className="border-r border-border bg-sidebar shadow-2xl"
      collapsible="icon"
    >
      <SidebarContent className="bg-gradient-to-b from-sidebar to-sidebar/95">
        {/* Pin Sidebar Button - positioned in corner when expanded, normal flow when collapsed */}
        {isCollapsed ? (
          <div className="border-b border-sidebar-border flex justify-center items-center">
            <PinSidebar />
          </div>
        ) : (
          <div className="relative">
            <div className="absolute top-2 right-2 z-10">
              <PinSidebar />
            </div>
          </div>
        )}

        {/* Logo section */}
        <div className={`border-b border-sidebar-border ${isCollapsed ? '' : 'p-6'}`}>
          <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'}`}>
            <span className="font-bold text-lg text-sidebar-foreground">
              <img 
                src="/Logo.svg" 
                alt="logo" 
                className={`transition-all duration-200 ${isCollapsed ? 'w-[71px] h-[71px]' : 'w-[71px] h-[71px]'}`} 
              />
            </span>
          </div>
        </div>

        <SidebarGroup className={`${isCollapsed ? 'px-1 py-2' : 'px-3 py-4'}`}>
          {!isCollapsed && (
            <SidebarGroupLabel className="text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider mb-2">
              Navigation
            </SidebarGroupLabel>
          )}

          <SidebarGroupContent>
            <SidebarMenu className={`space-y-1 ${isCollapsed ? 'flex flex-col items-center' : ''}`}>
              {items.map((item) => {
                const IconComponent = item.icon;
                const isDashboard = item.url === "/dashboard";
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      className={`relative group transition-all duration-200 rounded-lg hover:bg-sidebar-accent/50 text-sidebar-foreground/80 hover:text-sidebar-foreground ${isCollapsed ? 'justify-center !text-center' : ''}`}
                    >
                      <NavLink 
                        to={item.url} 
                        {...(isDashboard ? { end: true } : {})}
                        className={({ isActive }) => `
                          flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} ${isCollapsed ? 'px-2' : 'px-3'} py-2 rounded-lg ${isCollapsed ? 'w-auto' : 'w-full'}
                          ${isActive 
                            ? "bg-[#EADDFF] text-primary" 
                            : ""}
                        `}
                      >
                        <IconComponent size ={20} className=" transition-colors" />
                        {!isCollapsed && (
                          <span className="font-medium transition-colors">
                            {item.title}
                          </span>
                        )}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-primary to-primary-glow rounded-l-full hidden navlink-indicator"></div>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}