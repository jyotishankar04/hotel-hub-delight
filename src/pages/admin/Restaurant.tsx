import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Edit } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AdminRestaurant = () => {
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
                        <CardHeader>
                            <CardTitle>Menu Items</CardTitle>
                        </CardHeader>
                        <CardContent>
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
};

export default AdminRestaurant;