import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Mail, Search, Filter, RefreshCw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const AdminMessages = () => {
    const messages = [
        { id: "MSG001", from: "John Smith", subject: "Room service inquiry", date: "2024-01-15", read: false },
        { id: "MSG002", from: "Sarah Johnson", subject: "Booking confirmation", date: "2024-01-14", read: true },
        { id: "MSG003", from: "Mike Wilson", subject: "Special request", date: "2024-01-13", read: true },
        { id: "MSG004", from: "Emma Davis", subject: "Complaint", date: "2024-01-12", read: false },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Guest Messages</h2>
                <div className="flex gap-2">
                    <Button variant="outline">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Refresh
                    </Button>
                    <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        New Message
                    </Button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search messages..." className="pl-10" />
                </div>
                <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Inbox</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex items-start p-4 border rounded-lg gap-4 ${!message.read ? "bg-primary/5" : ""}`}
                            >
                                <Avatar>
                                    <AvatarFallback>{message.from.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <p className={`font-medium ${!message.read ? "text-primary" : ""}`}>{message.from}</p>
                                        <p className="text-sm text-muted-foreground">{message.date}</p>
                                    </div>
                                    <p className="text-sm">{message.subject}</p>
                                </div>
                                {!message.read && (
                                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                                )}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default AdminMessages;