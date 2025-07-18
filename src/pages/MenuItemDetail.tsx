import { useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  ArrowLeft,
  Heart,
  Share2,
  Plus,
  Minus,
  Clock,
  Users,
  Flame,
  Leaf
} from "lucide-react";
import restaurantImg from "@/assets/restaurant.jpg";

const MenuItemDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("regular");
  const [isLiked, setIsLiked] = useState(false);

  // Mock menu item data
  const menuItem = {
    id: id || "1",
    name: "Butter Chicken Masala",
    category: "Main Course",
    price: 450,
    originalPrice: 550,
    rating: 4.8,
    reviews: 89,
    description: "Tender chicken pieces cooked in rich, creamy tomato gravy with aromatic spices. Served with basmati rice and fresh naan bread.",
    image: restaurantImg,
    prepTime: "25-30 mins",
    serves: "2-3 people",
    spiceLevel: "Medium",
    dietType: "Non-Vegetarian",
    calories: 320,
    isVeg: false,
    isSpicy: true,
    isPopular: true,
    ingredients: [
      "Tender chicken pieces",
      "Fresh tomatoes",
      "Heavy cream",
      "Butter",
      "Garam masala",
      "Ginger-garlic paste",
      "Kasuri methi",
      "Basmati rice"
    ],
    nutritionalInfo: {
      calories: 320,
      protein: "28g",
      carbs: "15g",
      fat: "18g",
      fiber: "3g"
    },
    sizes: [
      { name: "regular", label: "Regular", price: 450, serves: "1-2" },
      { name: "large", label: "Large", price: 650, serves: "2-3" },
      { name: "family", label: "Family", price: 950, serves: "4-5" }
    ],
    addOns: [
      { name: "Extra Rice", price: 50 },
      { name: "Garlic Naan", price: 80 },
      { name: "Raita", price: 60 },
      { name: "Pickle", price: 30 }
    ]
  };

  const selectedSizeData = menuItem.sizes.find(size => size.name === selectedSize);
  const totalPrice = (selectedSizeData?.price || menuItem.price) * quantity;

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
              <Link to="/restaurant" className="hover:text-primary">Restaurant</Link>
              <span>/</span>
              <span className="text-foreground">{menuItem.name}</span>
            </div>
            <Link to="/restaurant">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Menu
              </Button>
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary-glow/10"
              >
                <img
                  src={menuItem.image}
                  alt={menuItem.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <div className="absolute top-4 right-4 flex gap-2">
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => setIsLiked(!isLiked)}
                  className={`backdrop-blur-sm ${isLiked ? "text-red-500" : ""}`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                </Button>
                <Button variant="secondary" size="icon" className="backdrop-blur-sm">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {menuItem.isPopular && (
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-primary to-primary-glow">
                  Popular Choice
                </Badge>
              )}
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant={menuItem.isVeg ? "outline" : "secondary"} className="text-xs">
                  <div className={`w-2 h-2 rounded-full mr-1 ${menuItem.isVeg ? "bg-green-500" : "bg-red-500"}`} />
                  {menuItem.dietType}
                </Badge>
                <Badge variant="outline">{menuItem.category}</Badge>
                {menuItem.isSpicy && (
                  <Badge variant="outline" className="text-orange-600 border-orange-600">
                    <Flame className="w-3 h-3 mr-1" />
                    Spicy
                  </Badge>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {menuItem.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 fill-primary text-primary mr-1" />
                  <span className="font-semibold">{menuItem.rating}</span>
                  <span className="text-muted-foreground ml-1">({menuItem.reviews} reviews)</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {menuItem.description}
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-secondary/20 rounded-lg">
              <div className="text-center">
                <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="text-sm font-medium">{menuItem.prepTime}</p>
                <p className="text-xs text-muted-foreground">Prep Time</p>
              </div>
              <div className="text-center">
                <Users className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="text-sm font-medium">{menuItem.serves}</p>
                <p className="text-xs text-muted-foreground">Serves</p>
              </div>
              <div className="text-center">
                <Flame className="w-5 h-5 text-primary mx-auto mb-1" />
                <p className="text-sm font-medium">{menuItem.calories} cal</p>
                <p className="text-xs text-muted-foreground">Per Serving</p>
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Choose Size</h3>
              <div className="grid grid-cols-3 gap-3">
                {menuItem.sizes.map((size) => (
                  <button
                    key={size.name}
                    onClick={() => setSelectedSize(size.name)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selectedSize === size.name
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="text-sm font-medium">{size.label}</div>
                    <div className="text-xs text-muted-foreground">{size.serves}</div>
                    <div className="text-sm font-semibold text-primary">₹{size.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center justify-between p-6 bg-white border border-border rounded-lg">
              <div>
                <div className="flex items-baseline space-x-2 mb-1">
                  <span className="text-2xl font-bold text-primary">
                    ₹{selectedSizeData?.price || menuItem.price}
                  </span>
                  {menuItem.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      ₹{menuItem.originalPrice}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">per {selectedSizeData?.label.toLowerCase()}</p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>

                <Button size="lg" className="px-8">
                  Add to Cart - ₹{totalPrice}
                </Button>
              </div>
            </div>

            {/* Ingredients */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Ingredients</h3>
                <div className="grid grid-cols-2 gap-2">
                  {menuItem.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Leaf className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-muted-foreground">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Nutritional Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Nutritional Information</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                  {Object.entries(menuItem.nutritionalInfo).map(([key, value]) => (
                    <div key={key} className="p-3 bg-secondary/20 rounded-lg">
                      <div className="font-semibold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
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

export default MenuItemDetail;