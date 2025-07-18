import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Star, ChefHat, MapPin, Phone, ShoppingCart, Plus, Minus, Search, Filter, Heart } from "lucide-react";
import restaurantImg from "@/assets/restaurant.jpg";
import { Link } from "react-router-dom";

const Restaurant = () => {
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const menuCategories = [
    {
      id: "breakfast",
      name: "Breakfast",
      description: "Start your day right",
      items: [
        { id: "1", name: "Continental Breakfast", price: 850, description: "Fresh fruits, cereals, bread, and beverages", image: restaurantImg, rating: 4.8, isVeg: true, isChefSpecial: true },
        { id: "2", name: "Indian Breakfast", price: 650, description: "Parathas, curd, pickle, and chai", image: restaurantImg, rating: 4.9, isVeg: true, isBestseller: true },
        { id: "3", name: "Eggs Benedict", price: 950, description: "Poached eggs on English muffins with hollandaise", image: restaurantImg, rating: 4.7, isVeg: false }
      ]
    },
    {
      id: "lunch",
      name: "Lunch",
      description: "Hearty midday meals",
      items: [
        { id: "4", name: "Grilled Chicken Salad", price: 1200, description: "Fresh greens with grilled chicken and vinaigrette", image: restaurantImg, rating: 4.8, isVeg: false, isBestseller: true },
        { id: "5", name: "Paneer Butter Masala", price: 850, description: "Rich and creamy paneer in tomato gravy", image: restaurantImg, rating: 4.9, isVeg: true },
        { id: "6", name: "Fish & Chips", price: 1450, description: "Crispy battered fish with golden fries", image: restaurantImg, rating: 4.6, isVeg: false }
      ]
    },
    {
      id: "dinner",
      name: "Dinner",
      description: "Elegant evening dining",
      items: [
        { id: "7", name: "Lobster Thermidor", price: 2850, description: "Fresh lobster in creamy cognac sauce", image: restaurantImg, rating: 4.9, isVeg: false, isChefSpecial: true },
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
        { id: "11", name: "Fresh Juice", price: 350, description: "Seasonal fruit juices", image: restaurantImg, rating: 4.6, isVeg: true, isBestseller: true },
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

  const filteredCategories = menuCategories.map(category => ({
    ...category,
    items: category.items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = activeFilter === "all" ||
        (activeFilter === "veg" && item.isVeg) ||
        (activeFilter === "specials" && (item.isChefSpecial || item.isBestseller));
      return matchesSearch && matchesFilter;
    })
  })).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Gourmet</span> Dining Experience
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground">
              Savor exquisite flavors crafted by our award-winning chefs
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button variant="gradient" size="lg">
                <ChefHat className="w-5 h-5 mr-2" />
                View Menu
              </Button>
              <Button variant="outline" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Reserve Table
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-background p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <span className="text-2xl font-bold">4.9</span>
                </div>
                <span className="text-sm text-muted-foreground">Restaurant Rating</span>
              </div>
              <div className="bg-background p-6 rounded-xl shadow-sm">
                <span className="text-2xl font-bold mb-2 block">200+</span>
                <span className="text-sm text-muted-foreground">Menu Items</span>
              </div>
              <div className="bg-background p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 mr-1" />
                  <span className="text-2xl font-bold">24/7</span>
                </div>
                <span className="text-sm text-muted-foreground">Room Service</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Culinary Offerings</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully crafted dishes made with the finest ingredients
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search menu items..."
                className="pl-10 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              <Button
                variant={activeFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter("all")}
              >
                All Items
              </Button>
              <Button
                variant={activeFilter === "veg" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter("veg")}
              >
                Vegetarian
              </Button>
              <Button
                variant={activeFilter === "specials" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter("specials")}
              >
                <Star className="w-4 h-4 mr-1" />
                Specials
              </Button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Menu Content */}
            <div className="flex-1">
              {filteredCategories.length > 0 ? (
                <Tabs defaultValue={filteredCategories[0].id} className="w-full">
                  <TabsList className="flex w-full overflow-x-auto mb-8">
                    {filteredCategories.map((category) => (
                      <TabsTrigger key={category.id} value={category.id} className="text-sm">
                        {category.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {filteredCategories.map((category) => (
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
                            <motion.div
                              key={item.id}
                              whileHover={{ y: -5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Link to={`/restaurant/item/${item.id}`} className="border-0 shadow-sm hover:shadow-md transition-all">
                                <CardContent className="p-6">
                                  <div className="flex flex-col md:flex-row gap-6">
                                    <div className="relative w-full md:w-40 h-40 rounded-lg overflow-hidden">
                                      <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                      />
                                      <div className="absolute top-2 right-2 flex gap-1">
                                        {item.isChefSpecial && (
                                          <Badge variant="secondary" className="text-xs">
                                            <ChefHat className="w-3 h-3 mr-1" />
                                            Chef's Pick
                                          </Badge>
                                        )}
                                        {item.isBestseller && (
                                          <Badge variant="destructive" className="text-xs">
                                            Bestseller
                                          </Badge>
                                        )}
                                      </div>
                                    </div>

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
                                                className="h-8 w-8"
                                              >
                                                <Minus className="w-3 h-3" />
                                              </Button>
                                              <span className="w-8 text-center font-medium">{cart[item.id]}</span>
                                              <Button
                                                size="icon"
                                                variant="outline"
                                                onClick={() => updateCart(item.id, 1)}
                                                className="h-8 w-8"
                                              >
                                                <Plus className="w-3 h-3" />
                                              </Button>
                                            </div>
                                          ) : (
                                            <Button
                                              variant="gradient"
                                              size="sm"
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
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </TabsContent>
                  ))}
                </Tabs>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium text-muted-foreground">No items match your search</h3>
                  <p className="text-muted-foreground mt-2">Try adjusting your filters or search query</p>
                </div>
              )}
            </div>

            {/* Cart Sidebar */}
            {getTotalItems() > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:w-96"
              >
                <Card className="border-0 shadow-lg sticky top-24">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <ShoppingCart className="w-5 h-5 mr-2 text-primary" />
                        <h3 className="text-lg font-semibold">Your Order ({getTotalItems()} items)</h3>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setCart({})}
                      >
                        Clear All
                      </Button>
                    </div>

                    <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                      {Object.entries(cart).filter(([_, qty]) => qty > 0).map(([itemId, qty]) => {
                        const item = menuCategories.flatMap(cat => cat.items).find(i => i.id === itemId);
                        if (!item) return null;

                        return (
                          <div key={itemId} className="flex justify-between items-center group">
                            <div className="flex items-center gap-3">
                              <div className="relative">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-12 h-12 rounded-md object-cover"
                                />
                                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                  {qty}
                                </span>
                              </div>
                              <div>
                                <h4 className="font-medium text-sm">{item.name}</h4>
                                <p className="text-xs text-muted-foreground">₹{item.price} each</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() => updateCart(itemId, -1)}
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() => updateCart(itemId, 1)}
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                              <span className="font-medium">₹{item.price * qty}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="border-t pt-4 space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Subtotal</span>
                          <span className="font-medium">₹{getTotalPrice()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Taxes (12%)</span>
                          <span className="font-medium">₹{Math.round(getTotalPrice() * 0.12)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Service Fee</span>
                          <span className="font-medium">₹{getTotalItems() * 50}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center pt-2 font-semibold text-lg">
                        <span>Total</span>
                        <span className="text-primary">₹{getTotalPrice() + Math.round(getTotalPrice() * 0.12) + (getTotalItems() * 50)}</span>
                      </div>
                      <Button variant="gradient" className="w-full mt-4">
                        Proceed to Checkout
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
      <section className="py-16 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Dining Options</h2>
            <p className="text-lg text-muted-foreground">Choose how you'd like to enjoy our cuisine</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ChefHat className="w-8 h-8 text-white" />,
                title: "Dine-In",
                description: "Experience our elegant restaurant ambiance with full-service dining",
                action: "Reserve Table"
              },
              {
                icon: <MapPin className="w-8 h-8 text-white" />,
                title: "Takeaway",
                description: "Order your favorite dishes to enjoy anywhere you prefer",
                action: "Order Takeaway"
              },
              {
                icon: <Clock className="w-8 h-8 text-white" />,
                title: "Room Service",
                description: "Enjoy gourmet meals delivered directly to your room 24/7",
                action: "Order to Room"
              }
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
                  <CardContent className="p-8 flex flex-col items-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
                      {option.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{option.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-1">{option.description}</p>
                    <Button variant="outline" className="w-full mt-auto">
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Restaurant;