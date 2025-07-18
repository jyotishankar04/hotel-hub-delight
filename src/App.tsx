import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Rooms from "./pages/Rooms";
import Restaurant from "./pages/Restaurant";
import Events from "./pages/Events";
import Facilities from "./pages/Facilities";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Auth from "./pages/Auth";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminRooms from "./pages/admin/Rooms";
import AdminRestaurant from "./pages/admin/Restaurant";
import AdminBookings from "./pages/admin/Bookings";
import AdminGuests from "./pages/admin/Guests";
import AdminReports from "./pages/admin/Reports";
import AdminMessages from "./pages/admin/Messages";
import AdminContent from "./pages/admin/Content";
import AdminSettings from "./pages/admin/Settings";
import RoomDetail from "./pages/RoomDetail";
import MenuItemDetail from "./pages/MenuItemDetail";
import NotFound from "./pages/NotFound";
import RestaurantItemDetails from "./pages/RestaurantItemDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:id" element={<RoomDetail />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/restaurant/item/:id" element={<RestaurantItemDetails />} />
          <Route path="/menu/:id" element={<MenuItemDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/auth" element={<Auth />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="rooms" element={<AdminRooms />} />
            <Route path="restaurant" element={<AdminRestaurant />} />
            <Route path="bookings" element={<AdminBookings />} />
            <Route path="guests" element={<AdminGuests />} />
            <Route path="reports" element={<AdminReports />} />
            <Route path="messages" element={<AdminMessages />} />
            <Route path="content" element={<AdminContent />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;