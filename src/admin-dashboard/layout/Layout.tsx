import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./components/app-sidebar"
import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      
      <div className="flex flex-col w-full">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <Navbar />
        </header>

        <main className="flex-1 px-6 ">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  )
}