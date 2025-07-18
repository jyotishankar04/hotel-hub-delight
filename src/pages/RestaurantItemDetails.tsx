import { useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ChefHat, Clock, MapPin, Phone, ShoppingCart, Plus, Minus, ArrowLeft, Heart, Share2 } from "lucide-react";
import restaurantImg from "@/assets/restaurant.jpg";

const RestaurantItemDetails = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [isLiked, setIsLiked] = useState(false);

    // Mock data - in a real app, you'd fetch this based on the ID
    const item = {
        id: id || "1",
        name: "Continental Breakfast",
        category: "Breakfast",
        price: 850,
        originalPrice: 950,
        description: "Fresh fruits, cereals, bread, and beverages. Our continental breakfast features a selection of seasonal fruits, artisanal breads, house-made preserves, and your choice of coffee or tea.",
        longDescription: "Start your day with our signature Continental Breakfast, featuring a bountiful selection of fresh seasonal fruits, premium cereals with milk options (dairy, almond, or oat), freshly baked artisanal breads served with house-made preserves and butter, accompanied by your choice of specialty coffee or fine tea. Perfect for those who appreciate a light yet satisfying morning meal.",
        image: restaurantImg,
        rating: 4.8,
        reviews: 124,
        isVeg: true,
        preparationTime: "15-20 mins",
        calories: "450-550 kcal",
        ingredients: [
            "Seasonal fresh fruits",
            "Assorted cereals",
            "Artisanal bread selection",
            "House-made preserves",
            "Butter and spreads",
            "Coffee or tea"
        ],
        dietaryInfo: [
            "Vegetarian",
            "Contains gluten",
            "Dairy options available",
            "Can be made vegan on request"
        ],
        chefRecommendation: true,
        bestSeller: true
    };

    const similarItems = [
        { id: "2", name: "Indian Breakfast", price: 650, description: "Parathas, curd, pickle, and chai", image: restaurantImg, rating: 4.9, isVeg: true },
        { id: "3", name: "Eggs Benedict", price: 950, description: "Poached eggs on English muffins with hollandaise", image: restaurantImg, rating: 4.7, isVeg: false },
        { id: "4", name: "Avocado Toast", price: 750, description: "Sourdough with smashed avocado and toppings", image: restaurantImg, rating: 4.6, isVeg: true }
    ];

    const incrementQuantity = () => setQuantity(prev => prev + 1);
    const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <div className="pt-20">
                {/* Breadcrumb & Back */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                            <span>/</span>
                            <Link to="/restaurant" className="hover:text-primary transition-colors">Restaurant</Link>
                            <span>/</span>
                            <Link to={`/restaurant#${item.category.toLowerCase()}`} className="hover:text-primary transition-colors">{item.category}</Link>
                            <span>/</span>
                            <span className="text-foreground font-medium">{item.name}</span>
                        </div>
                        <Link to={`/restaurant#${item.category.toLowerCase()}`}>
                            <Button variant="outline" size="sm">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Menu
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Item Details */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Image Gallery */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 right-4 flex gap-2">
                                    {item.chefRecommendation && (
                                        <Badge variant="secondary" className="flex items-center">
                                            <ChefHat className="w-4 h-4 mr-1" />
                                            Chef's Pick
                                        </Badge>
                                    )}
                                    {item.bestSeller && (
                                        <Badge variant="destructive">Bestseller</Badge>
                                    )}
                                </div>
                            </motion.div>
                        </div>

                        {/* Item Info */}
                        <div className="space-y-6">
                            <div className="flex items-start justify-between">
                                <div>
                                    <Badge variant="secondary" className="mb-2">
                                        {item.category}
                                    </Badge>
                                    <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                                        {item.name}
                                    </h1>
                                </div>
                                <div className="flex items-center gap-2">
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

                            <div className="flex items-center gap-4">
                                <div className="flex items-center bg-secondary/20 px-3 py-1 rounded-full">
                                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                                    <span className="font-semibold">{item.rating}</span>
                                    <span className="text-muted-foreground ml-1">({item.reviews})</span>
                                </div>
                                <Badge variant={item.isVeg ? "secondary" : "destructive"}>
                                    {item.isVeg ? "VEG" : "NON-VEG"}
                                </Badge>
                                <div className="text-sm text-muted-foreground">
                                    <Clock className="w-4 h-4 inline mr-1" />
                                    {item.preparationTime}
                                </div>
                            </div>

                            <p className="text-lg text-foreground">{item.description}</p>

                            <div className="space-y-4">
                                <div className="flex items-baseline gap-3">
                                    <span className="text-3xl font-bold text-primary">₹{item.price}</span>
                                    {item.originalPrice && (
                                        <span className="text-lg text-muted-foreground line-through">
                                            ₹{item.originalPrice}
                                        </span>
                                    )}
                                    {item.originalPrice && (
                                        <Badge variant="outline" className="text-primary">
                                            {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                                        </Badge>
                                    )}
                                </div>

                                <div className="flex items-center gap-4 pt-4">
                                    <div className="flex items-center border rounded-lg">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={decrementQuantity}
                                            className="h-10 w-10"
                                        >
                                            <Minus className="w-4 h-4" />
                                        </Button>
                                        <span className="w-10 text-center font-medium">{quantity}</span>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={incrementQuantity}
                                            className="h-10 w-10"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </Button>
                                    </div>

                                    <Button className="h-10 px-8">
                                        <ShoppingCart className="w-5 h-5 mr-2" />
                                        Add to Cart (₹{item.price * quantity})
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Information */}
                    <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <Card className="border-none shadow-sm">
                                <CardContent className="p-6 space-y-6">
                                    <h3 className="text-2xl font-semibold">Description</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {item.longDescription}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-sm">
                                <CardContent className="p-6 space-y-6">
                                    <h3 className="text-2xl font-semibold">Ingredients</h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {item.ingredients.map((ingredient, index) => (
                                            <li key={index} className="flex items-start space-x-2">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-muted-foreground">{ingredient}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-sm">
                                <CardContent className="p-6 space-y-6">
                                    <h3 className="text-2xl font-semibold">Dietary Information</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {item.dietaryInfo.map((info, index) => (
                                            <Badge key={index} variant="outline" className="text-sm">
                                                {info}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="space-y-6">
                            <Card className="border-none shadow-sm">
                                <CardContent className="p-6 space-y-4">
                                    <h3 className="text-xl font-semibold">Nutritional Info</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <span className="text-sm text-muted-foreground">Calories</span>
                                            <p className="font-medium">{item.calories}</p>
                                        </div>
                                        <div className="space-y-1">
                                            <span className="text-sm text-muted-foreground">Category</span>
                                            <p className="font-medium">{item.category}</p>
                                        </div>
                                        <div className="space-y-1">
                                            <span className="text-sm text-muted-foreground">Preparation</span>
                                            <p className="font-medium">{item.preparationTime}</p>
                                        </div>
                                        <div className="space-y-1">
                                            <span className="text-sm text-muted-foreground">Vegetarian</span>
                                            <p className="font-medium">{item.isVeg ? "Yes" : "No"}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-sm">
                                <CardContent className="p-6 space-y-4">
                                    <h3 className="text-xl font-semibold">Need help?</h3>
                                    <p className="text-muted-foreground">
                                        Our staff is available 24/7 to assist with any special requests or dietary needs.
                                    </p>
                                    <Button variant="outline" className="w-full mt-4">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Contact Restaurant
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Similar Items */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold mb-8">You might also like</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {similarItems.map((similarItem) => (
                                <motion.div
                                    key={similarItem.id}
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Card className="border-none shadow-sm hover:shadow-md transition-all">
                                        <CardContent className="p-6">
                                            <Link to={`/restaurant/item/${similarItem.id}`}>
                                                <img
                                                    src={similarItem.image}
                                                    alt={similarItem.name}
                                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                                />
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className="font-semibold">{similarItem.name}</h4>
                                                    <Badge variant={similarItem.isVeg ? "secondary" : "destructive"} className="text-xs">
                                                        {similarItem.isVeg ? "VEG" : "NON-VEG"}
                                                    </Badge>
                                                </div>
                                                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                                                    {similarItem.description}
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <span className="font-bold text-primary">₹{similarItem.price}</span>
                                                    <div className="flex items-center text-sm">
                                                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                                                        {similarItem.rating}
                                                    </div>
                                                </div>
                                            </Link>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Spacer */}
                <div className="h-20"></div>
            </div>
        </div>
    );
};

export default RestaurantItemDetails;