import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Room {
    number: string;
    type: string;
    status: "available" | "occupied" | "maintenance" | "reserved";
    guest?: string;
}

interface RoomStatusProps {
    rooms: Room[];
}

export const RoomStatus = ({ rooms }: RoomStatusProps) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case "available":
                return "bg-green-100 text-green-800";
            case "occupied":
                return "bg-blue-100 text-blue-800";
            case "maintenance":
                return "bg-yellow-100 text-yellow-800";
            case "reserved":
                return "bg-purple-100 text-purple-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {rooms.map((room) => (
                <div
                    key={room.number}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-bold text-lg">Room {room.number}</h3>
                            <p className="text-sm text-muted-foreground">{room.type}</p>
                        </div>
                        <Badge className={`${getStatusColor(room.status)} text-xs`}>
                            {room.status.charAt(0).toUpperCase() + room.status.slice(1)}
                        </Badge>
                    </div>

                    {room.guest && (
                        <div className="mt-3 flex items-center space-x-2">
                            <Avatar className="h-6 w-6">
                                <AvatarFallback>{room.guest.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm truncate">{room.guest}</span>
                        </div>
                    )}

                    <div className="mt-4 flex space-x-2">
                        <button className="text-xs text-primary hover:underline">
                            Details
                        </button>
                        {room.status === "occupied" && (
                            <button className="text-xs text-destructive hover:underline">
                                Checkout
                            </button>
                        )}
                        {room.status === "available" && (
                            <button className="text-xs text-green-600 hover:underline">
                                Book
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};