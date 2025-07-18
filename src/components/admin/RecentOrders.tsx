import { Button } from "@/components/ui/button";
import { UtensilsCrossed, Clock, CheckCircle2, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const RecentOrders = () => {
    const orders = [
        {
            id: "ORD-001",
            type: "Restaurant",
            items: 3,
            total: "₹1,250",
            status: "completed",
            time: "12:30 PM",
        },
        {
            id: "ORD-002",
            type: "Room Service",
            items: 2,
            total: "₹850",
            status: "preparing",
            time: "1:45 PM",
        },
        {
            id: "ORD-003",
            type: "Restaurant",
            items: 5,
            total: "₹2,100",
            status: "pending",
            time: "2:15 PM",
        },
        {
            id: "ORD-004",
            type: "Room Service",
            items: 1,
            total: "₹350",
            status: "cancelled",
            time: "3:00 PM",
        },
    ];

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "completed":
                return <CheckCircle2 className="w-4 h-4 text-green-500" />;
            case "preparing":
                return <Clock className="w-4 h-4 text-yellow-500" />;
            case "pending":
                return <Clock className="w-4 h-4 text-orange-500" />;
            case "cancelled":
                return <XCircle className="w-4 h-4 text-red-500" />;
            default:
                return <Clock className="w-4 h-4 text-gray-500" />;
        }
    };

    return (
        <div className="space-y-4">
            {orders.map((order) => (
                <div
                    key={order.id}
                    className="flex items-center justify-between p-3 border rounded-lg"
                >
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-full">
                            <UtensilsCrossed className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                            <p className="font-medium">{order.id}</p>
                            <p className="text-sm text-muted-foreground">
                                {order.type} • {order.items} items
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="font-medium">{order.total}</p>
                        <Badge
                            variant={
                                order.status === "completed"
                                    ? "default"
                                    : order.status === "cancelled"
                                        ? "destructive"
                                        : "secondary"
                            }
                            className="flex items-center gap-1"
                        >
                            {getStatusIcon(order.status)}
                            <span>
                                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </span>
                        </Badge>
                    </div>
                </div>
            ))}
            <Button variant="outline" className="w-full mt-2">
                View All Orders
            </Button>
        </div>
    );
};