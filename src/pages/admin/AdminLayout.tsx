import { useState } from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    SidebarProvider,
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
import {
    LayoutDashboard,
    Hotel,
    UtensilsCrossed,
    Calendar,
    Users,
    Settings,
    BarChart3,
    MessageSquare,
    FileText,
    Bell,
    Search,
} from "lucide-react";

const AdminLayout = () => {
    const sidebarItems = [
        { id: "dashboard", icon: LayoutDashboard, label: "Dashboard", path: "/admin/dashboard" },
        { id: "rooms", icon: Hotel, label: "Room Management", path: "/admin/rooms" },
        { id: "restaurant", icon: UtensilsCrossed, label: "Restaurant", path: "/admin/restaurant" },
        { id: "bookings", icon: Calendar, label: "Events & Bookings", path: "/admin/bookings" },
        { id: "guests", icon: Users, label: "Guest Management", path: "/admin/guests" },
        { id: "reports", icon: BarChart3, label: "Reports & Analytics", path: "/admin/reports" },
        { id: "messages", icon: MessageSquare, label: "Messages", path: "/admin/messages" },
        { id: "content", icon: FileText, label: "Content Management", path: "/admin/content" },
        { id: "settings", icon: Settings, label: "Settings", path: "/admin/settings" },
    ];

    const AppSidebar = () => {
        const { state } = useSidebar();

        return (
            <Sidebar className={state === "collapsed" ? "w-14" : "w-64"} collapsible="icon">
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-glow rounded-md flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">S</span>
                                </div>
                                {state !== "collapsed" && <span className="font-bold text-primary">Stayeva Admin</span>}
                            </div>
                        </SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {sidebarItems.map((item) => (
                                    <SidebarMenuItem key={item.id}>
                                        <SidebarMenuButton asChild>
                                            <a
                                                href={item.path}
                                                className={`flex items-center w-full cursor-pointer hover:bg-primary/10 hover:text-primary ${window.location.pathname === item.path ? "bg-primary/10 text-primary" : ""
                                                    }`}
                                            >
                                                <item.icon className="mr-3 h-4 w-4" />
                                                {state !== "collapsed" && <span>{item.label}</span>}
                                            </a>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
        );
    };

    return (
        <SidebarProvider>
            <div className="min-h-screen flex w-full">
                <AppSidebar />

                <main className="flex-1 flex flex-col">
                    {/* Header */}
                    <header className="h-16 border-b bg-background flex items-center justify-between px-6">
                        <div className="flex items-center space-x-4">
                            <SidebarTrigger />
                            <h1 className="text-xl font-semibold">
                                {sidebarItems.find(item => window.location.pathname === item.path)?.label || 'Dashboard'}
                            </h1>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Button variant="outline" size="sm">
                                <Search className="w-4 h-4 mr-2" />
                                Search
                            </Button>
                            <Button variant="outline" size="sm">
                                <Bell className="w-4 h-4" />
                            </Button>
                            <Avatar>
                                <AvatarFallback>AD</AvatarFallback>
                            </Avatar>
                        </div>
                    </header>

                    {/* Main Content */}
                    <div className="flex-1 p-6 bg-muted/30">
                        <div className="max-w-7xl mx-auto">
                            <Outlet />
                        </div>
                    </div>
                </main>
            </div>
        </SidebarProvider>
    );
};

export default AdminLayout;