import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Users, Heart, Camera, Music, Utensils, Star, CheckCircle, Clock } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import weddingHallImg from "@/assets/wedding-hall.jpg";

const Events = () => {
  const [eventDate, setEventDate] = useState<Date>();
  const [eventType, setEventType] = useState("");
  const [guestCount, setGuestCount] = useState("");

  const eventTypes = [
    {
      id: "wedding",
      name: "Wedding",
      icon: <Heart className="w-8 h-8" />,
      description: "Celebrate your special day in our elegant ballroom",
      capacity: "50-500 guests",
      price: "Starting from ₹2,50,000",
      features: ["Decorated Stage", "Catering", "Photography", "Music System"]
    },
    {
      id: "corporate",
      name: "Corporate Events",
      icon: <Users className="w-8 h-8" />,
      description: "Professional venues for meetings and conferences",
      capacity: "10-200 attendees",
      price: "Starting from ₹50,000",
      features: ["AV Equipment", "Wi-Fi", "Catering", "Parking"]
    },
    {
      id: "birthday",
      name: "Birthday Parties",
      icon: <Music className="w-8 h-8" />,
      description: "Make birthdays memorable with our party packages",
      capacity: "20-100 guests",
      price: "Starting from ₹25,000",
      features: ["Decoration", "Cake", "Entertainment", "Photography"]
    }
  ];

  const packages = [
    {
      name: "Silver Package",
      price: "₹1,50,000",
      features: [
        "Basic decoration",
        "Standard catering for 100 guests",
        "Basic sound system",
        "Standard photography (2 hours)",
        "Basic lighting"
      ],
      isPopular: false
    },
    {
      name: "Gold Package",
      price: "₹2,50,000",
      features: [
        "Premium decoration with themes",
        "Deluxe catering for 200 guests",
        "Professional sound & lighting",
        "Photography & videography (4 hours)",
        "Bridal room access",
        "Welcome drinks"
      ],
      isPopular: true
    },
    {
      name: "Platinum Package",
      price: "₹4,00,000",
      features: [
        "Luxury decoration with flowers",
        "Premium catering for 300 guests",
        "Complete AV setup with LED walls",
        "Full day photography & videography",
        "Luxury bridal suite",
        "Pre-wedding photoshoot",
        "Live music arrangement"
      ],
      isPopular: false
    }
  ];

  const galleryImages = [
    { src: weddingHallImg, title: "Wedding Ceremony", type: "wedding" },
    { src: weddingHallImg, title: "Corporate Conference", type: "corporate" },
    { src: weddingHallImg, title: "Birthday Celebration", type: "birthday" },
    { src: weddingHallImg, title: "Anniversary Party", type: "wedding" },
    { src: weddingHallImg, title: "Product Launch", type: "corporate" },
    { src: weddingHallImg, title: "Family Gathering", type: "birthday" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${weddingHallImg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Unforgettable <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">Events</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
              From intimate gatherings to grand celebrations, we create magical moments that last a lifetime
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button variant="hero" size="lg">
                <CalendarIcon className="w-5 h-5 mr-2" />
                Check Availability
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white/30">
                <Camera className="w-5 h-5 mr-2" />
                View Gallery
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <span className="text-2xl font-bold">4.9</span>
                </div>
                <span className="text-sm text-white/80">Event Rating</span>
              </div>
              <div>
                <span className="text-2xl font-bold mb-2 block">500+</span>
                <span className="text-sm text-white/80">Events Hosted</span>
              </div>
              <div>
                <span className="text-2xl font-bold mb-2 block">50-500</span>
                <span className="text-sm text-white/80">Guest Capacity</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Booking Form */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-8">Check Event Availability</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <Label>Event Type</Label>
                    <Select value={eventType} onValueChange={setEventType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="birthday">Birthday Party</SelectItem>
                        <SelectItem value="anniversary">Anniversary</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Event Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !eventDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {eventDate ? format(eventDate, "dd MMM yyyy") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={eventDate}
                          onSelect={setEventDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label>Guest Count</Label>
                    <Select value={guestCount} onValueChange={setGuestCount}>
                      <SelectTrigger>
                        <div className="flex items-center">
                          <Users className="mr-2 h-4 w-4" />
                          <SelectValue placeholder="Number of guests" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50">50-100 guests</SelectItem>
                        <SelectItem value="100">100-200 guests</SelectItem>
                        <SelectItem value="200">200-300 guests</SelectItem>
                        <SelectItem value="300">300-500 guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button variant="gradient" className="h-10 mt-7">
                    Check Availability
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Event Types</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in creating memorable experiences for every occasion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 text-primary">
                      {event.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{event.name}</h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-2" />
                        {event.capacity}
                      </div>
                      <div className="text-lg font-semibold text-primary">{event.price}</div>
                    </div>
                    <div className="space-y-2 mb-6">
                      {event.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-glow/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Event Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully curated packages or let us create a custom solution for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                  pkg.isPopular ? 'ring-2 ring-primary shadow-2xl transform scale-105' : ''
                }`}>
                  {pkg.isPopular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-primary-glow">
                      Most Popular
                    </Badge>
                  )}
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-semibold mb-4">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-primary mb-6">{pkg.price}</div>
                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      variant={pkg.isPopular ? "gradient" : "outline"} 
                      className="w-full"
                    >
                      Choose Package
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Event Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take a look at some of the beautiful events we've hosted
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                      <Badge variant="secondary">{image.type}</Badge>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Plan Your Event</h2>
                  <p className="text-lg text-muted-foreground">
                    Let us help you create an unforgettable experience
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="+91 9000000000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="event-type">Event Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="birthday">Birthday Party</SelectItem>
                          <SelectItem value="anniversary">Anniversary</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Event Details</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your event requirements, guest count, preferred date, and any special requests..."
                      rows={5}
                    />
                  </div>

                  <Button variant="gradient" size="lg" className="w-full">
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;