import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Search, Filter, User, Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const AdminGuests = () => {
    const guests = [
        { id: "GU001", name: "John Smith", email: "john@example.com", phone: "+1 234 567 890", visits: 3, status: "active" },
        { id: "GU002", name: "Sarah Johnson", email: "sarah@example.com", phone: "+1 987 654 321", visits: 1, status: "active" },
        { id: "GU003", name: "Mike Wilson", email: "mike@example.com", phone: "+1 555 123 456", visits: 5, status: "vip" },
        { id: "GU004", name: "Emma Davis", email: "emma@example.com", phone: "+1 222 333 444", visits: 2, status: "inactive" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Guest Management</h2>
                <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Guest
                </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search guests..." className="pl-10" />
                </div>
                <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Guest Directory</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {guests.map((guest) => (
                            <div key={guest.id} className="flex items-center justify-between p-4 border rounded-lg">
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarFallback>{guest.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">{guest.name}</p>
                                        <div className="flex gap-2 text-sm text-muted-foreground">
                                            <span className="flex items-center">
                                                <Mail className="w-3 h-3 mr-1" />
                                                {guest.email}
                                            </span>
                                            <span className="flex items-center">
                                                <Phone className="w-3 h-3 mr-1" />
                                                {guest.phone}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-right">
                                        <p className="text-sm">Visits: {guest.visits}</p>
                                        <Badge
                                            variant={
                                                guest.status === "vip" ? "default" :
                                                    guest.status === "active" ? "secondary" : "destructive"
                                            }
                                        >
                                            {guest.status}
                                        </Badge>
                                    </div>
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

export default AdminGuests;