import { motion } from "framer-motion";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Wifi, 
  Car, 
  Coffee, 
  Dumbbell, 
  Waves, 
  Utensils, 
  ShieldCheck, 
  Clock, 
  Users, 
  Zap,
  Wind,
  Car as CarIcon,
  MapPin,
  Phone,
  Star,
  CheckCircle
} from "lucide-react";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import restaurantImg from "@/assets/restaurant.jpg";

const Facilities = () => {
  const facilities = [
    {
      category: "Accommodation",
      icon: <Users className="w-8 h-8" />,
      items: [
        {
          name: "24/7 Room Service",
          description: "Round-the-clock service for all your needs",
          icon: <Clock className="w-6 h-6" />,
          available: true
        },
        {
          name: "Air Conditioning",
          description: "Climate-controlled comfort in all rooms",
          icon: <Wind className="w-6 h-6" />,
          available: true
        },
        {
          name: "High-Speed Wi-Fi",
          description: "Complimentary wireless internet throughout",
          icon: <Wifi className="w-6 h-6" />,
          available: true
        },
        {
          name: "Housekeeping",
          description: "Daily housekeeping and turndown service",
          icon: <ShieldCheck className="w-6 h-6" />,
          available: true
        }
      ]
    },
    {
      category: "Dining & Recreation",
      icon: <Utensils className="w-8 h-8" />,
      items: [
        {
          name: "Multi-Cuisine Restaurant",
          description: "Fine dining with international and local cuisine",
          icon: <Utensils className="w-6 h-6" />,
          available: true
        },
        {
          name: "Coffee Shop",
          description: "Freshly brewed coffee and light snacks",
          icon: <Coffee className="w-6 h-6" />,
          available: true
        },
        {
          name: "Swimming Pool",
          description: "Outdoor pool with poolside service",
          icon: <Waves className="w-6 h-6" />,
          available: true
        },
        {
          name: "Fitness Center",
          description: "State-of-the-art gym equipment",
          icon: <Dumbbell className="w-6 h-6" />,
          available: true
        }
      ]
    },
    {
      category: "Business & Events",
      icon: <Users className="w-8 h-8" />,
      items: [
        {
          name: "Conference Rooms",
          description: "Fully equipped meeting and conference facilities",
          icon: <Users className="w-6 h-6" />,
          available: true
        },
        {
          name: "Wedding Hall",
          description: "Elegant banquet hall for special occasions",
          icon: <Star className="w-6 h-6" />,
          available: true
        },
        {
          name: "Business Center",
          description: "Printing, scanning, and office services",
          icon: <Zap className="w-6 h-6" />,
          available: true
        },
        {
          name: "AV Equipment",
          description: "Professional audio-visual setup",
          icon: <Zap className="w-6 h-6" />,
          available: true
        }
      ]
    },
    {
      category: "Transportation & Location",
      icon: <CarIcon className="w-8 h-8" />,
      items: [
        {
          name: "Free Parking",
          description: "Complimentary parking for all guests",
          icon: <Car className="w-6 h-6" />,
          available: true
        },
        {
          name: "Airport Transfer",
          description: "Convenient transportation to/from airport",
          icon: <CarIcon className="w-6 h-6" />,
          available: true
        },
        {
          name: "Prime Location",
          description: "Central location with easy access to attractions",
          icon: <MapPin className="w-6 h-6" />,
          available: true
        },
        {
          name: "Concierge Service",
          description: "Local recommendations and booking assistance",
          icon: <Phone className="w-6 h-6" />,
          available: true
        }
      ]
    }
  ];

  const highlights = [
    {
      title: "Premium Amenities",
      description: "World-class facilities designed for your comfort and convenience",
      image: roomDeluxe,
      features: ["Luxury bedding", "Premium toiletries", "Mini bar", "Smart TV", "Safety deposit box"]
    },
    {
      title: "Dining Excellence",
      description: "Exceptional culinary experiences from our award-winning chefs",
      image: restaurantImg,
      features: ["Multi-cuisine restaurant", "Room service", "Bar & lounge", "Coffee shop", "Special dietary options"]
    },
    {
      title: "Business Ready",
      description: "Everything you need for successful meetings and events",
      image: roomDeluxe,
      features: ["High-speed internet", "Meeting rooms", "AV equipment", "Business center", "Secretarial services"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 to-primary-glow/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              World-Class <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Facilities</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Experience premium amenities and services designed to make your stay comfortable, convenient, and memorable.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Premium Amenities</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Service Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
                <div className="text-sm text-muted-foreground">Facility Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Guest Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {facilities.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-full mb-4 text-primary">
                    {category.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">{category.category}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.1 }}
                    >
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                        <CardContent className="p-6 text-center h-full flex flex-col">
                          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-lg mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                          </div>
                          <h3 className="text-lg font-semibold mb-3 flex-grow">{item.name}</h3>
                          <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                          <Badge 
                            variant={item.available ? "secondary" : "destructive"}
                            className="w-fit mx-auto"
                          >
                            {item.available ? "Available" : "Coming Soon"}
                          </Badge>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-glow/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Experience <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover what makes our facilities truly exceptional
            </p>
          </motion.div>

          <div className="space-y-16">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <img 
                    src={highlight.image} 
                    alt={highlight.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{highlight.title}</h3>
                    <p className="text-lg text-muted-foreground">{highlight.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    {highlight.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="gradient" size="lg">
                    Learn More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="border-0 shadow-2xl bg-gradient-to-r from-primary/5 to-primary-glow/5">
              <CardContent className="p-12">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Accessibility & Comfort
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    We're committed to providing an inclusive experience for all our guests. 
                    Our facilities are designed with accessibility in mind, ensuring everyone 
                    can enjoy their stay comfortably.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-3">
                        <ShieldCheck className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">Wheelchair Accessible</h3>
                      <p className="text-sm text-muted-foreground">All public areas and select rooms</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">Assistance Available</h3>
                      <p className="text-sm text-muted-foreground">24/7 staff support for special needs</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-3">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold mb-2">Emergency Systems</h3>
                      <p className="text-sm text-muted-foreground">Advanced safety and alert systems</p>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="lg">
                    Contact for Special Requirements
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;