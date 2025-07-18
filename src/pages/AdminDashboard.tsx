import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Plus,
  Eye,
  Edit,
  Trash2,
  TrendingUp,
  TrendingDown,
  DollarSign
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  
  const sidebarItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "rooms", icon: Hotel, label: "Room Management" },
    { id: "restaurant", icon: UtensilsCrossed, label: "Restaurant" },
    { id: "events", icon: Calendar, label: "Events & Bookings" },
    { id: "guests", icon: Users, label: "Guest Management" },
    { id: "reports", icon: BarChart3, label: "Reports & Analytics" },
    { id: "messages", icon: MessageSquare, label: "Messages" },
    { id: "content", icon: FileText, label: "Content Management" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  const dashboardStats = [
    { title: "Total Revenue", value: "₹2,34,567", change: "+12.5%", trend: "up", icon: DollarSign },
    { title: "Occupied Rooms", value: "45/50", change: "90%", trend: "up", icon: Hotel },
    { title: "Today's Bookings", value: "12", change: "+3", trend: "up", icon: Calendar },
    { title: "Guest Satisfaction", value: "4.8/5", change: "+0.2", trend: "up", icon: Users },
  ];

  const recentBookings = [
    { id: "1", guest: "John Smith", room: "Deluxe Suite", checkIn: "2024-01-15", status: "confirmed" },
    { id: "2", guest: "Sarah Johnson", room: "Standard Room", checkIn: "2024-01-16", status: "pending" },
    { id: "3", guest: "Mike Wilson", room: "Presidential Suite", checkIn: "2024-01-17", status: "confirmed" },
    { id: "4", guest: "Emma Davis", room: "Deluxe Room", checkIn: "2024-01-18", status: "cancelled" },
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
                    <SidebarMenuButton
                      asChild
                      className={`cursor-pointer ${
                        activeSection === item.id ? "bg-primary/10 text-primary" : ""
                      }`}
                    >
                      <button
                        onClick={() => setActiveSection(item.id)}
                        className="flex items-center w-full"
                      >
                        <item.icon className="mr-3 h-4 w-4" />
                        {state !== "collapsed" && <span>{item.label}</span>}
                      </button>
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

  const DashboardContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dashboardStats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                          <p className="text-2xl font-bold">{stat.value}</p>
                          <div className="flex items-center mt-1">
                            {stat.trend === "up" ? (
                              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                            ) : (
                              <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                            )}
                            <span className={`text-sm ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                              {stat.change}
                            </span>
                          </div>
                        </div>
                        <div className="p-3 bg-primary/10 rounded-full">
                          <stat.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Bookings</CardTitle>
                  <CardDescription>Latest room reservations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBookings.map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback>{booking.guest.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{booking.guest}</p>
                            <p className="text-sm text-muted-foreground">{booking.room}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm">{booking.checkIn}</p>
                          <Badge 
                            variant={
                              booking.status === "confirmed" ? "default" :
                              booking.status === "pending" ? "secondary" : "destructive"
                            }
                          >
                            {booking.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common administrative tasks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start">
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Room
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Manage Bookings
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <UtensilsCrossed className="w-4 h-4 mr-2" />
                    Update Menu
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Reports
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case "rooms":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Room Management</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add New Room
              </Button>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    { name: "Deluxe Suite", type: "Suite", price: "₹12,400", status: "Available" },
                    { name: "Standard Room", type: "Standard", price: "₹6,500", status: "Occupied" },
                    { name: "Presidential Suite", type: "Suite", price: "₹25,000", status: "Maintenance" },
                  ].map((room, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{room.name}</h3>
                        <p className="text-sm text-muted-foreground">{room.type} • {room.price}/night</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge 
                          variant={
                            room.status === "Available" ? "default" :
                            room.status === "Occupied" ? "secondary" : "destructive"
                          }
                        >
                          {room.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "restaurant":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Restaurant Management</h2>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Menu Item
              </Button>
            </div>

            <Tabs defaultValue="menu" className="w-full">
              <TabsList>
                <TabsTrigger value="menu">Menu Items</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="reservations">Reservations</TabsTrigger>
              </TabsList>
              
              <TabsContent value="menu" className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {[
                        { name: "Butter Chicken", category: "Main Course", price: "₹450", status: "Available" },
                        { name: "Paneer Tikka", category: "Appetizer", price: "₹320", status: "Available" },
                        { name: "Biryani", category: "Main Course", price: "₹380", status: "Out of Stock" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">{item.category} • {item.price}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant={item.status === "Available" ? "default" : "destructive"}>
                              {item.status}
                            </Badge>
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        );

      default:
        return (
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 capitalize">{activeSection}</h2>
              <p className="text-muted-foreground">
                {activeSection} management interface will be implemented here.
              </p>
            </CardContent>
          </Card>
        );
    }
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
              <h1 className="text-xl font-semibold capitalize">{activeSection}</h1>
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
              <DashboardContent />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;