import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Star, ChefHat, MapPin, Phone, ShoppingCart, Plus, Minus } from "lucide-react";
import restaurantImg from "@/assets/restaurant.jpg";

const Restaurant = () => {
  const [cart, setCart] = useState<{[key: string]: number}>({});

  const menuCategories = [
    {
      id: "breakfast",
      name: "Breakfast",
      description: "Start your day right",
      items: [
        { id: "1", name: "Continental Breakfast", price: 850, description: "Fresh fruits, cereals, bread, and beverages", image: restaurantImg, rating: 4.8, isVeg: true },
        { id: "2", name: "Indian Breakfast", price: 650, description: "Parathas, curd, pickle, and chai", image: restaurantImg, rating: 4.9, isVeg: true },
        { id: "3", name: "Eggs Benedict", price: 950, description: "Poached eggs on English muffins with hollandaise", image: restaurantImg, rating: 4.7, isVeg: false }
      ]
    },
    {
      id: "lunch",
      name: "Lunch",
      description: "Hearty midday meals",
      items: [
        { id: "4", name: "Grilled Chicken Salad", price: 1200, description: "Fresh greens with grilled chicken and vinaigrette", image: restaurantImg, rating: 4.8, isVeg: false },
        { id: "5", name: "Paneer Butter Masala", price: 850, description: "Rich and creamy paneer in tomato gravy", image: restaurantImg, rating: 4.9, isVeg: true },
        { id: "6", name: "Fish & Chips", price: 1450, description: "Crispy battered fish with golden fries", image: restaurantImg, rating: 4.6, isVeg: false }
      ]
    },
    {
      id: "dinner",
      name: "Dinner",
      description: "Elegant evening dining",
      items: [
        { id: "7", name: "Lobster Thermidor", price: 2850, description: "Fresh lobster in creamy cognac sauce", image: restaurantImg, rating: 4.9, isVeg: false },
        { id: "8", name: "Vegetarian Thali", price: 1200, description: "Complete Indian vegetarian meal", image: restaurantImg, rating: 4.8, isVeg: true },
        { id: "9", name: "Wagyu Beef Steak", price: 3200, description: "Premium wagyu with seasonal vegetables", image: restaurantImg, rating: 5.0, isVeg: false }
      ]
    },
    {
      id: "beverages",
      name: "Beverages",
      description: "Refreshing drinks",
      items: [
        { id: "10", name: "Signature Cocktail", price: 650, description: "House special with tropical fruits", image: restaurantImg, rating: 4.7, isVeg: true },
        { id: "11", name: "Fresh Juice", price: 350, description: "Seasonal fruit juices", image: restaurantImg, rating: 4.6, isVeg: true },
        { id: "12", name: "Premium Wine", price: 1200, description: "Curated selection of fine wines", image: restaurantImg, rating: 4.8, isVeg: true }
      ]
    }
  ];

  const updateCart = (itemId: string, change: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) + change)
    }));
  };

  const getTotalItems = () => Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const getTotalPrice = () => {
    return menuCategories.flatMap(cat => cat.items)
      .reduce((total, item) => total + (item.price * (cart[item.id] || 0)), 0);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${restaurantImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Culinary <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
              Experience exceptional dining with our world-class chefs and premium ingredients
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button variant="hero" size="lg">
                <ChefHat className="w-5 h-5 mr-2" />
                View Menu
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white/30">
                <Phone className="w-5 h-5 mr-2" />
                Reserve Table
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <span className="text-2xl font-bold">4.9</span>
                </div>
                <span className="text-sm text-white/80">Restaurant Rating</span>
              </div>
              <div>
                <span className="text-2xl font-bold mb-2 block">200+</span>
                <span className="text-sm text-white/80">Menu Items</span>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 mr-1" />
                  <span className="text-2xl font-bold">24/7</span>
                </div>
                <span className="text-sm text-white/80">Room Service</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Menu</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully crafted dishes made with the finest ingredients
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Menu Content */}
            <div className="flex-1">
              <Tabs defaultValue="breakfast" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8">
                  {menuCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id} className="text-sm">
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {menuCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-foreground mb-2">{category.name}</h3>
                        <p className="text-muted-foreground">{category.description}</p>
                      </div>

                      <div className="grid gap-6">
                        {category.items.map((item) => (
                          <Card key={item.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                            <CardContent className="p-6">
                              <div className="flex flex-col md:flex-row gap-6">
                                <img 
                                  src={item.image} 
                                  alt={item.name}
                                  className="w-full md:w-32 h-32 object-cover rounded-lg"
                                />
                                
                                <div className="flex-1">
                                  <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                      <h4 className="text-xl font-semibold text-foreground">{item.name}</h4>
                                      <Badge variant={item.isVeg ? "secondary" : "destructive"} className="text-xs">
                                        {item.isVeg ? "VEG" : "NON-VEG"}
                                      </Badge>
                                    </div>
                                    <div className="flex items-center">
                                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                                      <span className="text-sm font-medium">{item.rating}</span>
                                    </div>
                                  </div>
                                  
                                  <p className="text-muted-foreground mb-4">{item.description}</p>
                                  
                                  <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold text-primary">₹{item.price}</span>
                                    
                                    <div className="flex items-center gap-2">
                                      {cart[item.id] ? (
                                        <div className="flex items-center gap-2">
                                          <Button 
                                            size="icon" 
                                            variant="outline"
                                            onClick={() => updateCart(item.id, -1)}
                                          >
                                            <Minus className="w-4 h-4" />
                                          </Button>
                                          <span className="w-8 text-center font-medium">{cart[item.id]}</span>
                                          <Button 
                                            size="icon" 
                                            variant="outline"
                                            onClick={() => updateCart(item.id, 1)}
                                          >
                                            <Plus className="w-4 h-4" />
                                          </Button>
                                        </div>
                                      ) : (
                                        <Button 
                                          variant="gradient"
                                          onClick={() => updateCart(item.id, 1)}
                                        >
                                          Add to Cart
                                        </Button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </motion.div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>

            {/* Cart Sidebar */}
            {getTotalItems() > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:w-80"
              >
                <Card className="border-0 shadow-lg sticky top-24">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <ShoppingCart className="w-5 h-5 mr-2 text-primary" />
                      <h3 className="text-lg font-semibold">Your Order ({getTotalItems()} items)</h3>
                    </div>

                    <div className="space-y-4 mb-6">
                      {Object.entries(cart).filter(([_, qty]) => qty > 0).map(([itemId, qty]) => {
                        const item = menuCategories.flatMap(cat => cat.items).find(i => i.id === itemId);
                        if (!item) return null;
                        
                        return (
                          <div key={itemId} className="flex justify-between items-center">
                            <div className="flex-1">
                              <h4 className="font-medium text-sm">{item.name}</h4>
                              <p className="text-xs text-muted-foreground">₹{item.price} each</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button 
                                size="icon" 
                                variant="ghost" 
                                className="h-6 w-6"
                                onClick={() => updateCart(itemId, -1)}
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="w-6 text-center text-sm">{qty}</span>
                              <Button 
                                size="icon" 
                                variant="ghost" 
                                className="h-6 w-6"
                                onClick={() => updateCart(itemId, 1)}
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold">Total</span>
                        <span className="text-2xl font-bold text-primary">₹{getTotalPrice()}</span>
                      </div>
                      <Button variant="gradient" className="w-full">
                        Place Order
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Dining Options</h2>
            <p className="text-lg text-muted-foreground">Choose how you'd like to enjoy our cuisine</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                    <ChefHat className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Dine-In</h3>
                  <p className="text-muted-foreground mb-6">Experience our elegant restaurant ambiance with full-service dining</p>
                  <Button variant="outline" className="w-full">Reserve Table</Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Takeaway</h3>
                  <p className="text-muted-foreground mb-6">Order your favorite dishes to enjoy anywhere you prefer</p>
                  <Button variant="outline" className="w-full">Order Takeaway</Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Room Service</h3>
                  <p className="text-muted-foreground mb-6">Enjoy gourmet meals delivered directly to your room 24/7</p>
                  <Button variant="outline" className="w-full">Order to Room</Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurant;