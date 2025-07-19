import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Eye, Edit, Trash2, Search, Hotel, Sliders, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { RoomStatusBadge } from "@/components/admin/RoomStatusBadge";

const AdminRooms = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const roomTypes = ["All", "Standard", "Deluxe", "Suite", "Villa"];
    const [activeTab, setActiveTab] = useState("All");

    const rooms = [
        {
            id: "R001",
            name: "Deluxe Suite",
            type: "Suite",
            price: "₹12,400",
            status: "available",
            amenities: ["AC", "King Bed", "Ocean View", "Minibar"],
            capacity: 2
        },
        {
            id: "R002",
            name: "Standard Room",
            type: "Standard",
            price: "₹6,500",
            status: "occupied",
            amenities: ["AC", "Queen Bed"],
            capacity: 2
        },
        {
            id: "R003",
            name: "Presidential Suite",
            type: "Suite",
            price: "₹25,000",
            status: "maintenance",
            amenities: ["AC", "King Bed", "Jacuzzi", "Living Room", "Kitchen"],
            capacity: 4
        },
        {
            id: "R004",
            name: "Deluxe Ocean View",
            type: "Deluxe",
            price: "₹15,000",
            status: "available",
            amenities: ["AC", "King Bed", "Ocean View", "Balcony"],
            capacity: 2
        },
        {
            id: "R005",
            name: "Family Suite",
            type: "Suite",
            price: "₹18,000",
            status: "available",
            amenities: ["AC", "Two Queen Beds", "Living Area"],
            capacity: 4
        },
    ];

    const filteredRooms = rooms.filter(room => {
        const matchesSearch = room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            room.type.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTab = activeTab === "All" || room.type === activeTab;
        return matchesSearch && matchesTab;
    });

    const handleDelete = (roomId: string) => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            console.log(`Deleting room ${roomId}`);
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h2 className="text-2xl font-bold">Room Management</h2>
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search rooms..."
                            className="pl-9 w-full sm:w-[200px] lg:w-[300px]"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Add New Room
                    </Button>
                </div>
            </div>

            <Tabs defaultValue="All" onValueChange={setActiveTab}>
                <TabsList className="w-full overflow-x-auto">
                    {roomTypes.map((type) => (
                        <TabsTrigger key={type} value={type} className="flex items-center gap-2">
                            {type === "All" ? <Hotel className="w-4 h-4" /> : null}
                            {type}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>

            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>
                            {activeTab === "All" ? "All Rooms" : `${activeTab} Rooms`}
                            <span className="ml-2 text-sm font-normal text-muted-foreground">
                                ({filteredRooms.length} {filteredRooms.length === 1 ? "room" : "rooms"})
                            </span>
                        </CardTitle>
                        <Button variant="outline" size="sm">
                            <Sliders className="w-4 h-4 mr-2" />
                            Filters
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    {filteredRooms.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <Hotel className="w-12 h-12 text-muted-foreground mb-4" />
                            <h3 className="text-lg font-medium">No rooms found</h3>
                            <p className="text-sm text-muted-foreground">
                                {searchTerm ? "Try a different search term" : "No rooms available in this category"}
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {filteredRooms.map((room) => (
                                <div key={room.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                                    <div className="mb-3 sm:mb-0">
                                        <div className="flex items-center gap-3">
                                            <h3 className="font-medium">{room.name}</h3>
                                            <RoomStatusBadge status={room.status as "available" | "occupied" | "maintenance" | "reserved"} />
                                        </div>
                                        <div className="flex flex-wrap items-center gap-2 mt-2">
                                            <p className="text-sm text-muted-foreground">
                                                {room.type} • {room.price}/night • {room.capacity} {room.capacity === 1 ? "guest" : "guests"}
                                            </p>
                                            <div className="hidden md:flex items-center gap-1 text-xs text-muted-foreground">
                                                {room.amenities.slice(0, 3).map((amenity, idx) => (
                                                    <span key={idx} className="bg-muted px-2 py-1 rounded-full">
                                                        {amenity}
                                                    </span>
                                                ))}
                                                {room.amenities.length > 3 && (
                                                    <span className="bg-muted px-2 py-1 rounded-full">
                                                        +{room.amenities.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 self-end sm:self-auto">
                                        <Button variant="outline" size="sm">
                                            <Eye className="w-4 h-4" />
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            <Edit className="w-4 h-4" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleDelete(room.id)}
                                            disabled={isLoading}
                                        >
                                            {isLoading ? (
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                            ) : (
                                                <Trash2 className="w-4 h-4" />
                                            )}
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default AdminRooms;