import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          {/* <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm">
            <div className="flex items-center justify-between h-full px-6">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="hover:bg-accent transition-colors md:hidden" />
                <h1 className="text-xl font-semibold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Dashboard
                </h1>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-primary-glow shadow-lg shadow-primary/25"></div>
              </div>
            </div>
          </header> */}

          {/* Main content */}
          <main className="flex-1 p-6 bg-gradient-to-br from-background to-muted/20">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}