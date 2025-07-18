import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    TrendingUp,
    TrendingDown,
    DollarSign,
    Hotel,
    Calendar,
    Users,
    Plus,
    BarChart3,
    UtensilsCrossed,
    BookOpen,
    MapPin,
    MessageSquare,
    Bell,
    Settings,
    ClipboardList,
    Wifi,
    Car,
    Coffee,
    Clock,
    Gift,
    Heart,
    Star,
    Phone,
    Mail,
    Globe,
    FileText
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RoomStatus } from "@/components/admin/RoomStatus";
import { RecentOrders } from "@/components/admin/RecentOrders";
import { CalendarView } from "@/components/admin/CalendarView";
interface Room {
    number: string;
    type: string;
    status: "available" | "occupied" | "maintenance" | "reserved";
    guest?: string;
}
const AdminDashboard = () => {
    // Dashboard statistics
    const dashboardStats = [
        { title: "Total Revenue", value: "₹2,34,567", change: "+12.5%", trend: "up", icon: DollarSign },
        { title: "Occupied Rooms", value: "45/50", change: "90%", trend: "up", icon: Hotel },
        { title: "Today's Bookings", value: "12", change: "+3", trend: "up", icon: Calendar },
        { title: "Guest Satisfaction", value: "4.8/5", change: "+0.2", trend: "up", icon: Users },
        { title: "Restaurant Orders", value: "28", change: "+5", trend: "up", icon: UtensilsCrossed },
        { title: "Event Bookings", value: "3", change: "+1", trend: "up", icon: BookOpen },
    ];

    // Recent bookings
    const recentBookings = [
        { id: "1", guest: "John Smith", room: "Deluxe Suite", checkIn: "2024-01-15", status: "confirmed" },
        { id: "2", guest: "Sarah Johnson", room: "Standard Room", checkIn: "2024-01-16", status: "pending" },
        { id: "3", guest: "Mike Wilson", room: "Presidential Suite", checkIn: "2024-01-17", status: "confirmed" },
        { id: "4", guest: "Emma Davis", room: "Deluxe Room", checkIn: "2024-01-18", status: "cancelled" },
    ];

    // Room status data
    const rooms: Room[] = [
        { number: "101", type: "Standard", status: "occupied", guest: "John Smith" },
        { number: "102", type: "Standard", status: "available", guest: "Emma Davis" },
        { number: "201", type: "Deluxe", status: "maintenance" , guest: "John Smith"},
        { number: "202", type: "Deluxe", status: "occupied", guest: "Sarah Johnson" },
        { number: "301", type: "Suite", status: "available", guest: "Emma Davis" },
        { number: "302", type: "Suite", status: "reserved", guest: "Mike Wilson" },
    ];

    // Amenities data
    const amenities = [
        { name: "Free WiFi", icon: Wifi, available: true },
        { name: "Parking", icon: Car, available: true },
        { name: "Breakfast", icon: Coffee, available: true },
        { name: "24/7 Room Service", icon: Clock, available: true },
        { name: "AC", icon: Globe, available: true },
        { name: "Special Offers", icon: Gift, available: true },
    ];
    return (
        <div className="space-y-6">
            {/* Welcome Banner */}
            <Card className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
                <CardHeader>
                    <CardTitle>Welcome back, Admin!</CardTitle>
                    <CardDescription className="text-primary-foreground/80">
                        Here's what's happening with your hotel today.
                    </CardDescription>
                </CardHeader>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                {dashboardStats.map((stat, index) => (
                    <motion.div
                        key={stat.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card>
                            <CardContent className="p-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs font-medium text-muted-foreground">{stat.title}</p>
                                        <p className="text-xl font-bold">{stat.value}</p>
                                        <div className="flex items-center mt-1">
                                            {stat.trend === "up" ? (
                                                <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                                            ) : (
                                                <TrendingDown className="w-3 h-3 text-red-500 mr-1" />
                                            )}
                                            <span className={`text-xs ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                                                {stat.change}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-2 bg-primary/10 rounded-full">
                                        <stat.icon className="w-4 h-4 text-primary" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="space-y-6 lg:col-span-2">
                    {/* Room Status */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle>Room Status</CardTitle>
                                    <CardDescription>Current status of all rooms</CardDescription>
                                </div>
                                <Button size="sm" variant="outline">
                                    <Plus className="w-4 h-4 mr-2" />
                                    Add Room
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <RoomStatus rooms={rooms} />
                        </CardContent>
                    </Card>

                    {/* Bookings & Calendar */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Bookings Overview</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="recent">
                                <TabsList>
                                    <TabsTrigger value="recent">Recent Bookings</TabsTrigger>
                                    <TabsTrigger value="calendar">Calendar View</TabsTrigger>
                                    <TabsTrigger value="events">Events</TabsTrigger>
                                </TabsList>
                                <TabsContent value="recent" className="pt-4">
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
                                </TabsContent>
                                <TabsContent value="calendar" className="pt-4">
                                    <CalendarView />
                                </TabsContent>
                                <TabsContent value="events" className="pt-4">
                                    <div className="text-center py-8 text-muted-foreground">
                                        <BookOpen className="mx-auto h-8 w-8" />
                                        <h3 className="mt-4 text-sm font-medium">No upcoming events</h3>
                                        <p className="mt-1 text-sm">When you have events, they'll appear here.</p>
                                        <Button className="mt-4">Add Event</Button>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* Quick Actions */}
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
                            <Button variant="outline" className="w-full justify-start">
                                <MessageSquare className="w-4 h-4 mr-2" />
                                Respond to Messages
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                                <Settings className="w-4 h-4 mr-2" />
                                System Settings
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Recent Orders */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Orders</CardTitle>
                            <CardDescription>Latest restaurant and room service orders</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <RecentOrders />
                        </CardContent>
                    </Card>

                    {/* Amenities Status */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Hotel Amenities</CardTitle>
                            <CardDescription>Status of hotel facilities</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 gap-4">
                                {amenities.map((amenity) => (
                                    <div key={amenity.name} className="flex items-center space-x-3">
                                        <div className={`p-2 rounded-lg ${amenity.available ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                            <amenity.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-medium">{amenity.name}</p>
                                            <p className="text-xs text-muted-foreground">
                                                {amenity.available ? 'Available' : 'Unavailable'}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Bottom Row - Additional Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Guest Reviews */}
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Reviews</CardTitle>
                        <CardDescription>Guest feedback and ratings</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-4">
                                <Avatar>
                                    <AvatarFallback>JS</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-medium">John Smith</h4>
                                        <div className="flex items-center">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">Deluxe Suite • Jan 15, 2024</p>
                                    <p className="mt-2 text-sm">"Excellent service and comfortable rooms. Will definitely come back!"</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Avatar>
                                    <AvatarFallback>ED</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-medium">Emma Davis</h4>
                                        <div className="flex items-center">
                                            {[1, 2, 3, 4].map((star) => (
                                                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                            <Star className="w-4 h-4 text-muted-foreground" />
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">Standard Room • Jan 10, 2024</p>
                                    <p className="mt-2 text-sm">"Great location but the WiFi was a bit slow in my room."</p>
                                </div>
                            </div>
                        </div>
                        <Button variant="outline" className="w-full mt-4">
                            View All Reviews
                        </Button>
                    </CardContent>
                </Card>

                {/* Contact & Support */}
                <Card>
                    <CardHeader>
                        <CardTitle>Contact & Support</CardTitle>
                        <CardDescription>Quick access to guest support</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                            <Button variant="outline" className="h-24 flex-col">
                                <Phone className="w-6 h-6 mb-2" />
                                <span>Call Support</span>
                            </Button>
                            <Button variant="outline" className="h-24 flex-col">
                                <MessageSquare className="w-6 h-6 mb-2" />
                                <span>Live Chat</span>
                            </Button>
                            <Button variant="outline" className="h-24 flex-col">
                                <Mail className="w-6 h-6 mb-2" />
                                <span>Email</span>
                            </Button>
                            <Button variant="outline" className="h-24 flex-col">
                                <FileText className="w-6 h-6 mb-2" />
                                <span>Tickets</span>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AdminDashboard;