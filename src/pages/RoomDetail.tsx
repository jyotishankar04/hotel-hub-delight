import { useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Star, 
  Wifi, 
  Car, 
  Coffee, 
  Tv, 
  Wind, 
  Bath, 
  Bed,
  Users,
  ArrowLeft,
  Heart,
  Share2,
  MapPin,
  Phone,
  Calendar
} from "lucide-react";
import roomDeluxe from "@/assets/room-deluxe.jpg";

const RoomDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // Mock room data - in real app, fetch based on ID
  const room = {
    id: id || "1",
    name: "The Ritz-Carlton Deluxe Suite",
    type: "Deluxe Suite",
    price: 12400,
    originalPrice: 15000,
    rating: 4.9,
    reviews: 234,
    description: "Experience the epitome of luxury in our Deluxe Suite, featuring panoramic city views, premium amenities, and personalized service that exceeds expectations.",
    images: [roomDeluxe, roomDeluxe, roomDeluxe, roomDeluxe],
    capacity: 2,
    bedType: "King Bed",
    area: "45 sq.m",
    floor: "10th Floor",
    view: "City View",
    amenities: [
      { icon: <Wifi className="w-5 h-5" />, name: "Free Wi-Fi" },
      { icon: <Car className="w-5 h-5" />, name: "Free Parking" },
      { icon: <Coffee className="w-5 h-5" />, name: "Coffee Machine" },
      { icon: <Tv className="w-5 h-5" />, name: "Smart TV" },
      { icon: <Wind className="w-5 h-5" />, name: "Air Conditioning" },
      { icon: <Bath className="w-5 h-5" />, name: "Luxury Bathroom" },
    ],
    features: [
      "King size bed with premium linens",
      "Marble bathroom with rain shower",
      "Private balcony with city views",
      "Mini-bar and coffee station",
      "24/7 room service",
      "Complimentary breakfast",
      "Express check-in/out",
      "Concierge service"
    ],
    policies: [
      "Check-in: 3:00 PM",
      "Check-out: 11:00 AM",
      "No smoking",
      "Pets allowed (additional charge)",
      "Free cancellation up to 24 hours",
      "Valid ID required at check-in"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20">
        {/* Breadcrumb & Back */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link to="/rooms" className="hover:text-primary">Rooms</Link>
              <span>/</span>
              <span className="text-foreground">{room.name}</span>
            </div>
            <Link to="/rooms">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Rooms
              </Button>
            </Link>
          </div>
        </div>

        {/* Room Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{room.type}</Badge>
                {room.originalPrice && (
                  <Badge variant="outline" className="text-primary">
                    {Math.round(((room.originalPrice - room.price) / room.originalPrice) * 100)}% OFF
                  </Badge>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {room.name}
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {room.floor} • {room.view}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  Up to {room.capacity} guests
                </div>
                <div className="flex items-center">
                  <Bed className="w-4 h-4 mr-1" />
                  {room.bedType}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <Star className="w-5 h-5 fill-primary text-primary mr-1" />
                  <span className="font-semibold">{room.rating}</span>
                </div>
                <span className="text-muted-foreground">({room.reviews} reviews)</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsLiked(!isLiked)}
                className={isLiked ? "text-red-500 border-red-500" : ""}
              >
                <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-3">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative aspect-[16/10] rounded-2xl overflow-hidden"
              >
                <img
                  src={room.images[selectedImage]}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            <div className="lg:col-span-1 grid grid-cols-4 lg:grid-cols-1 gap-2">
              {room.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${room.name} ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content & Booking */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="policies">Policies</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">About this room</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {room.description}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-foreground">Room Size</span>
                        <p className="text-muted-foreground">{room.area}</p>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Bed Type</span>
                        <p className="text-muted-foreground">{room.bedType}</p>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Capacity</span>
                        <p className="text-muted-foreground">{room.capacity} guests</p>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">View</span>
                        <p className="text-muted-foreground">{room.view}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="amenities" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Room Amenities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {room.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/20">
                          <div className="text-primary">{amenity.icon}</div>
                          <span className="text-foreground">{amenity.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="features" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Special Features</h3>
                    <ul className="space-y-3">
                      {room.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="policies" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Hotel Policies</h3>
                    <ul className="space-y-3">
                      {room.policies.map((policy, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{policy}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-primary">₹{room.price.toLocaleString()}</span>
                    {room.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        ₹{room.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">per night</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Check-in Date</label>
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="w-4 h-4 mr-2" />
                      Select Date
                    </Button>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Check-out Date</label>
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="w-4 h-4 mr-2" />
                      Select Date
                    </Button>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Guests</label>
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="w-4 h-4 mr-2" />
                      1 Adult
                    </Button>
                  </div>
                </div>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">₹{room.price.toLocaleString()} × 1 night</span>
                    <span className="text-foreground">₹{room.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service fee</span>
                    <span className="text-foreground">₹500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Taxes</span>
                    <span className="text-foreground">₹{Math.round(room.price * 0.12).toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>₹{(room.price + 500 + Math.round(room.price * 0.12)).toLocaleString()}</span>
                  </div>
                </div>

                <Button className="w-full mb-3" size="lg">
                  Book Now
                </Button>
                
                <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-1" />
                    Call for booking
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Spacer */}
        <div className="h-20"></div>
      </div>
    </div>
  );
};

export default RoomDetail;