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
              Our Premium Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              Experience luxury dining, elegant events, and world-class amenities all under one roof
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={restaurantImg} 
                  alt="Fine Dining Restaurant" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Fine Dining Restaurant</h3>
                  <p className="text-sm opacity-90">Authentic Indian & Continental Cuisine</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={weddingHallImg} 
                  alt="Wedding & Events Hall" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Wedding & Events</h3>
                  <p className="text-sm opacity-90">Magical venues for your special day</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src={roomDeluxe} 
                  alt="Luxury Spa & Wellness" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Spa & Wellness</h3>
                  <p className="text-sm opacity-90">Rejuvenate your mind, body & soul</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Happy Guests</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Luxury Rooms</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Service Available</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              What Our Guests Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              Read the experiences of our valued guests who have made memories with us
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                role: "Business Traveler",
                rating: 5,
                comment: "Exceptional service and luxurious amenities. The staff went above and beyond to make my stay comfortable.",
                avatar: "RS"
              },
              {
                name: "Priya Patel",
                role: "Wedding Guest",
                rating: 5,
                comment: "The wedding hall was absolutely stunning. The decoration and catering services were world-class.",
                avatar: "PP"
              },
              {
                name: "Michael Johnson",
                role: "Leisure Traveler",
                rating: 5,
                comment: "Beautiful rooms with amazing views. The restaurant serves the best Indian cuisine I've ever tasted.",
                avatar: "MJ"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary mr-1" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">"{testimonial.comment}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
