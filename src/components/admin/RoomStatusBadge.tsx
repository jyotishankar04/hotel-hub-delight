import { Badge } from "@/components/ui/badge";

interface RoomStatusBadgeProps {
    status: "available" | "occupied" | "maintenance" | "reserved";
}

export const RoomStatusBadge = ({ status }: RoomStatusBadgeProps) => {
    const statusMap = {
        available: { label: "Available", color: "bg-green-100 text-green-800" },
        occupied: { label: "Occupied", color: "bg-blue-100 text-blue-800" },
        maintenance: { label: "Maintenance", color: "bg-yellow-100 text-yellow-800" },
        reserved: { label: "Reserved", color: "bg-purple-100 text-purple-800" },
    };

    return (
        <Badge className={`${statusMap[status].color} text-xs`}>
            {statusMap[status].label}
        </Badge>
    );
};