import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Wifi, Car, Coffee, Users, Bed } from "lucide-react";

interface RoomCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  amenities: string[];
  capacity: number;
  bedType: string;
  isPopular?: boolean;
}

const RoomCard = ({ 
  name, 
  image, 
  price, 
  originalPrice, 
  rating, 
  reviews, 
  amenities, 
  capacity, 
  bedType,
  isPopular 
}: RoomCardProps) => {
  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <Wifi className="w-4 h-4" />;
      case 'parking':
        return <Car className="w-4 h-4" />;
      case 'breakfast':
        return <Coffee className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
        <div className="relative">
          <img 
            src={image} 
            alt={name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {isPopular && (
            <Badge className="absolute top-4 left-4 bg-gradient-to-r from-primary to-primary-glow text-white">
              Most Popular
            </Badge>
          )}
          
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-xs text-muted-foreground ml-1">({reviews})</span>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{name}</h3>
              <div className="flex items-center text-sm text-muted-foreground space-x-4">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>{capacity} Guests</span>
                </div>
                <div className="flex items-center">
                  <Bed className="w-4 h-4 mr-1" />
                  <span>{bedType}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              {originalPrice && (
                <div className="text-sm text-muted-foreground line-through">
                  ₹{originalPrice.toLocaleString()}
                </div>
              )}
              <div className="text-2xl font-bold text-primary">
                ₹{price.toLocaleString()}
                <span className="text-sm font-normal text-muted-foreground">/night</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {amenities.slice(0, 3).map((amenity, index) => (
              <div 
                key={index}
                className="flex items-center bg-secondary/50 rounded-full px-3 py-1 text-xs text-secondary-foreground"
              >
                {getAmenityIcon(amenity)}
                <span className="ml-1">{amenity}</span>
              </div>
            ))}
            {amenities.length > 3 && (
              <div className="bg-secondary/50 rounded-full px-3 py-1 text-xs text-secondary-foreground">
                +{amenities.length - 3} more
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="flex-1">
              View Details
            </Button>
            <Button variant="gradient" className="flex-1">
              Book Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RoomCard;