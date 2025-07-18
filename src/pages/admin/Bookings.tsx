import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Calendar, Search, Filter, RefreshCw } from "lucide-react";
import { Input } from "@/components/ui/input";

const AdminBookings = () => {
    const bookings = [
        { id: "BK001", guest: "John Smith", room: "Deluxe Suite", checkIn: "2024-01-15", checkOut: "2024-01-20", status: "confirmed" },
        { id: "BK002", guest: "Sarah Johnson", room: "Standard Room", checkIn: "2024-01-16", checkOut: "2024-01-18", status: "pending" },
        { id: "BK003", guest: "Mike Wilson", room: "Presidential Suite", checkIn: "2024-01-17", checkOut: "2024-01-22", status: "confirmed" },
        { id: "BK004", guest: "Emma Davis", room: "Deluxe Room", checkIn: "2024-01-18", checkOut: "2024-01-21", status: "cancelled" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Bookings Management</h2>
                <div className="flex gap-2">
                    <Button variant="outline">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Refresh
                    </Button>
                    <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        New Booking
                    </Button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search bookings..." className="pl-10" />
                </div>
                <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Bookings</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {bookings.map((booking) => (
                            <div key={booking.id} className="grid grid-cols-1 md:grid-cols-5 items-center p-4 border rounded-lg gap-4">
                                <div>
                                    <p className="font-medium">#{booking.id}</p>
                                    <p className="text-sm text-muted-foreground">{booking.guest}</p>
                                </div>
                                <div>
                                    <p className="font-medium">{booking.room}</p>
                                </div>
                                <div>
                                    <p className="text-sm">{booking.checkIn} to {booking.checkOut}</p>
                                </div>
                                <div className="md:text-center">
                                    <Badge
                                        variant={
                                            booking.status === "confirmed" ? "default" :
                                                booking.status === "pending" ? "secondary" : "destructive"
                                        }
                                    >
                                        {booking.status}
                                    </Badge>
                                </div>
                                <div className="flex justify-end gap-2">
                                    <Button variant="outline" size="sm">
                                        <Calendar className="w-4 h-4" />
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        View
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default AdminBookings;