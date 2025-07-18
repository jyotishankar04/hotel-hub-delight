import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BookingWidget from "@/components/BookingWidget";
import RoomCard from "@/components/RoomCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Wifi, Car, Coffee, MapPin, Phone, Clock, Users } from "lucide-react";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import restaurantImg from "@/assets/restaurant.jpg";
import weddingHallImg from "@/assets/wedding-hall.jpg";

const Index = () => {
  const featuredRooms = [
    {
      id: "1",
      name: "The Ritz-Carlton, Melbourne",
      image: roomDeluxe,
      price: 12400,
      originalPrice: 15000,
      rating: 4.9,
      reviews: 234,
      amenities: ["WiFi", "Parking", "Breakfast"],
      capacity: 2,
      bedType: "King Bed",
      isPopular: true,
    },
    {
      id: "2",
      name: "The Langham, Gold Coast",
      image: roomDeluxe,
      price: 12400,
      rating: 4.8,
      reviews: 189,
      amenities: ["WiFi", "Pool", "Spa"],
      capacity: 4,
      bedType: "Twin Beds",
    },
    {
      id: "3",
      name: "Longitude 131° Uluru",
      image: roomDeluxe,
      price: 12400,
      rating: 4.9,
      reviews: 156,
      amenities: ["WiFi", "Restaurant", "Bar"],
      capacity: 2,
      bedType: "Queen Bed",
    },
  ];

  const services = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Hospitality",
      description: "Warm hospitality from the moment you arrive",
      number: "01"
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Rooms",
      description: "Stylish rooms designed and dedicated to total comfort",
      number: "02"
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Location",
      description: "Great access & prime location close to everything you love",
      number: "03"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Booking Widget Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Find Your Perfect Stay
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Search and book your ideal room with our real-time availability checker
            </motion.p>
          </div>
          <BookingWidget />
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              Our Hotel Picks
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              At velit lorem eget beatae nihil vitae duis tellus vestibulum. In massa, 
              vel quis lorem nulla sit lorem malesuada et fermentum consectetur.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <RoomCard {...room} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg">
              View All Rooms
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-glow/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              More than just a room
              <br />
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                It's an experience.
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="border-0 bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-4xl font-bold text-primary/20 mr-2">{service.number}</span>
                      <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              Choose with Confidence
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              At our Resorts and Residences, we foster genuine connections — to nature, to others, 
              and to your inner self.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-1"
            >
              <img 
                src={restaurantImg} 
                alt="Restaurant" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-2 space-y-6"
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/80 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-primary mr-4">01</span>
                  <h3 className="text-2xl font-semibold text-foreground">Find Your Future Home</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  We help you find a home by offering smart real estate experience
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/80 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-primary mr-4">02</span>
                  <h3 className="text-2xl font-semibold text-foreground">Experienced Agent</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Find your ideal Agent who knows your market best
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/80 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-primary mr-4">03</span>
                  <h3 className="text-2xl font-semibold text-foreground">Buy Or Rent Home</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Millions of houses and apartments in your favorite cities
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-glow rounded-md flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <span className="text-xl font-bold">Stayeva</span>
              </div>
              <p className="text-white/80 mb-6 max-w-md">
                Experience luxury redefined with breathtaking views, world-class amenities, 
                and unforgettable moments at Stayeva.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white/10">
                  <Phone className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white/10">
                  <MapPin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-white/20 text-white hover:bg-white/10">
                  <Clock className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="/rooms" className="hover:text-primary transition-colors">Rooms</a></li>
                <li><a href="/restaurant" className="hover:text-primary transition-colors">Restaurant</a></li>
                <li><a href="/events" className="hover:text-primary transition-colors">Events</a></li>
                <li><a href="/facilities" className="hover:text-primary transition-colors">Facilities</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-white/80">
                <p>+91 9000000000</p>
                <p>info@stayeva.com</p>
                <p>123 Luxury Lane, City</p>
                <p>Open 24/7</p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
            <p>&copy; 2024 Stayeva. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
