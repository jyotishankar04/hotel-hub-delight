import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, User, Lock, Bell, CreditCard, Database } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AdminSettings = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">System Settings</h2>

            <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-6">
                    <TabsTrigger value="general">
                        <Settings className="w-4 h-4 mr-2" />
                        General
                    </TabsTrigger>
                    <TabsTrigger value="profile">
                        <User className="w-4 h-4 mr-2" />
                        Profile
                    </TabsTrigger>
                    <TabsTrigger value="security">
                        <Lock className="w-4 h-4 mr-2" />
                        Security
                    </TabsTrigger>
                    <TabsTrigger value="notifications">
                        <Bell className="w-4 h-4 mr-2" />
                        Notifications
                    </TabsTrigger>
                    <TabsTrigger value="billing">
                        <CreditCard className="w-4 h-4 mr-2" />
                        Billing
                    </TabsTrigger>
                    <TabsTrigger value="advanced">
                        <Database className="w-4 h-4 mr-2" />
                        Advanced
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>General Settings</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label>Hotel Name</Label>
                                <Input placeholder="Enter hotel name" />
                            </div>
                            <div className="space-y-2">
                                <Label>Timezone</Label>
                                <Input placeholder="Select timezone" />
                            </div>
                            <div className="space-y-2">
                                <Label>Default Currency</Label>
                                <Input placeholder="Select currency" />
                            </div>
                            <Button className="mt-4">Save Changes</Button>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="profile" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Profile Settings</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label>Full Name</Label>
                                <Input placeholder="Enter your name" />
                            </div>
                            <div className="space-y-2">
                                <Label>Email</Label>
                                <Input placeholder="Enter your email" type="email" />
                            </div>
                            <div className="space-y-2">
                                <Label>Phone Number</Label>
                                <Input placeholder="Enter your phone number" />
                            </div>
                            <Button className="mt-4">Update Profile</Button>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="security" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Security Settings</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-4">
                                <h3 className="font-medium">Change Password</h3>
                                <div className="space-y-2">
                                    <Label>Current Password</Label>
                                    <Input placeholder="Enter current password" type="password" />
                                </div>
                                <div className="space-y-2">
                                    <Label>New Password</Label>
                                    <Input placeholder="Enter new password" type="password" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Confirm New Password</Label>
                                    <Input placeholder="Confirm new password" type="password" />
                                </div>
                                <Button>Update Password</Button>
                            </div>

                            <div className="space-y-4 pt-4">
                                <h3 className="font-medium">Two-Factor Authentication</h3>
                                <Button variant="outline">Enable 2FA</Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default AdminSettings;