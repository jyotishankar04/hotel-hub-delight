import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Image, Globe, Edit, Trash2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const AdminContent = () => {
    const pages = [
        { id: "P001", title: "Home Page", lastUpdated: "2024-01-10", status: "published" },
        { id: "P002", title: "About Us", lastUpdated: "2024-01-05", status: "published" },
        { id: "P003", title: "Contact", lastUpdated: "2023-12-20", status: "draft" },
    ];

    const media = [
        { id: "M001", name: "Hotel Exterior", type: "image", size: "2.4 MB" },
        { id: "M002", name: "Promo Video", type: "video", size: "45.2 MB" },
        { id: "M003", name: "Menu PDF", type: "document", size: "1.1 MB" },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Content Management</h2>
                <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Content
                </Button>
            </div>

            <Tabs defaultValue="pages" className="w-full">
                <TabsList>
                    <TabsTrigger value="pages">
                        <FileText className="w-4 h-4 mr-2" />
                        Pages
                    </TabsTrigger>
                    <TabsTrigger value="media">
                        <Image className="w-4 h-4 mr-2" />
                        Media
                    </TabsTrigger>
                    <TabsTrigger value="seo">
                        <Globe className="w-4 h-4 mr-2" />
                        SEO
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="pages" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Website Pages</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {pages.map((page) => (
                                    <div key={page.id} className="flex items-center justify-between p-4 border rounded-lg">
                                        <div>
                                            <p className="font-medium">{page.title}</p>
                                            <p className="text-sm text-muted-foreground">Last updated: {page.lastUpdated}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Badge variant={page.status === "published" ? "default" : "secondary"}>
                                                {page.status}
                                            </Badge>
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
                </TabsContent>

                <TabsContent value="media" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Media Library</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {media.map((item) => (
                                    <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                                        <div className="flex items-center gap-4">
                                            {item.type === "image" && <Image className="w-6 h-6 text-primary" />}
                                            {item.type === "video" && <FileText className="w-6 h-6 text-primary" />}
                                            {item.type === "document" && <FileText className="w-6 h-6 text-primary" />}
                                            <div>
                                                <p className="font-medium">{item.name}</p>
                                                <p className="text-sm text-muted-foreground">{item.type} • {item.size}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
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
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default AdminContent;