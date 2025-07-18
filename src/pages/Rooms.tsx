import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import RoomCard from "@/components/RoomCard";
import BookingWidget from "@/components/BookingWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Filter, SlidersHorizontal, Users, Star } from "lucide-react";
import roomDeluxe from "@/assets/room-deluxe.jpg";

const Rooms = () => {
  const [priceRange, setPriceRange] = useState([5000, 25000]);
  const [selectedRoomType, setSelectedRoomType] = useState("all");
  const [selectedCapacity, setSelectedCapacity] = useState("all");

  const rooms = [
    {
      id: "1",
      name: "Deluxe Ocean View",
      image: roomDeluxe,
      price: 12400,
      originalPrice: 15000,
      rating: 4.9,
      reviews: 234,
      amenities: ["WiFi", "Parking", "Breakfast", "Ocean View", "Balcony"],
      capacity: 2,
      bedType: "King Bed",
      isPopular: true,
      type: "deluxe"
    },
    {
      id: "2",
      name: "Standard Double Room",
      image: roomDeluxe,
      price: 8500,
      rating: 4.7,
      reviews: 189,
      amenities: ["WiFi", "AC", "TV"],
      capacity: 2,
      bedType: "Double Bed",
      type: "standard"
    },
    {
      id: "3",
      name: "Suite with Kitchenette",
      image: roomDeluxe,
      price: 18900,
      rating: 4.9,
      reviews: 156,
      amenities: ["WiFi", "Kitchenette", "Living Area", "Balcony"],
      capacity: 4,
      bedType: "King + Sofa Bed",
      type: "suite"
    },
    {
      id: "4",
      name: "Family Suite",
      image: roomDeluxe,
      price: 22000,
      rating: 4.8,
      reviews: 98,
      amenities: ["WiFi", "Two Bedrooms", "Kitchen", "Living Room"],
      capacity: 6,
      bedType: "2 Queen Beds",
      type: "suite"
    },
    {
      id: "5",
      name: "Premium Deluxe",
      image: roomDeluxe,
      price: 15600,
      rating: 4.9,
      reviews: 201,
      amenities: ["WiFi", "Premium View", "Minibar", "Spa Access"],
      capacity: 2,
      bedType: "King Bed",
      type: "deluxe"
    },
    {
      id: "6",
      name: "Executive Suite",
      image: roomDeluxe,
      price: 28500,
      rating: 5.0,
      reviews: 67,
      amenities: ["WiFi", "Executive Lounge", "Butler Service", "City View"],
      capacity: 3,
      bedType: "King Bed + Sofa",
      type: "suite"
    }
  ];

  const filteredRooms = rooms.filter(room => {
    const matchesPrice = room.price >= priceRange[0] && room.price <= priceRange[1];
    const matchesType = selectedRoomType === "all" || room.type === selectedRoomType;
    const matchesCapacity = selectedCapacity === "all" || room.capacity.toString() === selectedCapacity;
    
    return matchesPrice && matchesType && matchesCapacity;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 to-primary-glow/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Rooms</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our collection of beautifully designed rooms and suites, each offering unique comfort and luxury.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Widget */}
      <section className="py-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingWidget />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Filters Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-80 space-y-6"
            >
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <SlidersHorizontal className="w-5 h-5 mr-2 text-primary" />
                    <h3 className="text-lg font-semibold">Filters</h3>
                  </div>

                  {/* Price Range */}
                  <div className="space-y-4 mb-6">
                    <h4 className="font-medium text-foreground">Price Range</h4>
                    <div className="px-2">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={30000}
                        min={5000}
                        step={500}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>₹{priceRange[0].toLocaleString()}</span>
                        <span>₹{priceRange[1].toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Room Type */}
                  <div className="space-y-4 mb-6">
                    <h4 className="font-medium text-foreground">Room Type</h4>
                    <Select value={selectedRoomType} onValueChange={setSelectedRoomType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="deluxe">Deluxe</SelectItem>
                        <SelectItem value="suite">Suite</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Capacity */}
                  <div className="space-y-4">
                    <h4 className="font-medium text-foreground">Capacity</h4>
                    <Select value={selectedCapacity} onValueChange={setSelectedCapacity}>
                      <SelectTrigger>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          <SelectValue />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Any Capacity</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                        <SelectItem value="6">6 Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Stats Card */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary-glow/5">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">4.9/5</h3>
                  <p className="text-muted-foreground">Average Guest Rating</p>
                  <Badge variant="secondary" className="mt-2">500+ Reviews</Badge>
                </CardContent>
              </Card>
            </motion.div>

            {/* Rooms Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-foreground">
                  {filteredRooms.length} Rooms Available
                </h2>
                <Select defaultValue="popular">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredRooms.map((room, index) => (
                  <motion.div
                    key={room.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <RoomCard {...room} />
                  </motion.div>
                ))}
              </div>

              {filteredRooms.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <Filter className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">No rooms found</h3>
                  <p className="text-muted-foreground mb-6">Try adjusting your filters to see more options.</p>
                  <Button 
                    onClick={() => {
                      setPriceRange([5000, 25000]);
                      setSelectedRoomType("all");
                      setSelectedCapacity("all");
                    }}
                  >
                    Clear Filters
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rooms;