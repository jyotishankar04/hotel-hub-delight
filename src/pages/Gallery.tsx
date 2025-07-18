import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { 
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
  Heart,
  Grid3X3,
  List
} from "lucide-react";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import restaurantImg from "@/assets/restaurant.jpg";
import weddingHallImg from "@/assets/wedding-hall.jpg";
import heroHotel from "@/assets/hero-hotel.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());

  const categories = [
    { id: "all", name: "All Photos", count: 12 },
    { id: "rooms", name: "Rooms", count: 4 },
    { id: "restaurant", name: "Restaurant", count: 3 },
    { id: "events", name: "Events", count: 3 },
    { id: "exterior", name: "Exterior", count: 2 }
  ];

  const galleryImages = [
    {
      id: 1,
      src: roomDeluxe,
      title: "Deluxe Suite with City View",
      category: "rooms",
      description: "Spacious deluxe suite featuring modern amenities and panoramic city views"
    },
    {
      id: 2,
      src: restaurantImg,
      title: "Fine Dining Restaurant",
      category: "restaurant",
      description: "Elegant dining experience with authentic Indian and continental cuisine"
    },
    {
      id: 3,
      src: weddingHallImg,
      title: "Grand Wedding Hall",
      category: "events",
      description: "Beautiful wedding hall perfect for your special celebrations"
    },
    {
      id: 4,
      src: heroHotel,
      title: "Hotel Exterior",
      category: "exterior",
      description: "Stunning hotel facade showcasing modern architecture"
    },
    {
      id: 5,
      src: roomDeluxe,
      title: "Presidential Suite",
      category: "rooms",
      description: "Luxurious presidential suite with premium amenities"
    },
    {
      id: 6,
      src: restaurantImg,
      title: "Chef's Special Kitchen",
      category: "restaurant",
      description: "State-of-the-art kitchen where culinary magic happens"
    },
    {
      id: 7,
      src: weddingHallImg,
      title: "Conference Hall",
      category: "events",
      description: "Modern conference facilities for business meetings"
    },
    {
      id: 8,
      src: heroHotel,
      title: "Hotel Gardens",
      category: "exterior",
      description: "Beautiful landscaped gardens surrounding the hotel"
    },
    {
      id: 9,
      src: roomDeluxe,
      title: "Standard Room",
      category: "rooms",
      description: "Comfortable standard room with all essential amenities"
    },
    {
      id: 10,
      src: restaurantImg,
      title: "Bar & Lounge",
      category: "restaurant",
      description: "Sophisticated bar area with premium beverages"
    },
    {
      id: 11,
      src: weddingHallImg,
      title: "Banquet Hall",
      category: "events",
      description: "Spacious banquet hall for large celebrations"
    },
    {
      id: 12,
      src: roomDeluxe,
      title: "Luxury Suite",
      category: "rooms",
      description: "Premium luxury suite with exclusive amenities"
    }
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const toggleLike = (imageId: number) => {
    const newLiked = new Set(likedImages);
    if (newLiked.has(imageId)) {
      newLiked.delete(imageId);
    } else {
      newLiked.add(imageId);
    }
    setLikedImages(newLiked);
  };

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              Photo Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Explore our beautiful spaces, from luxurious rooms to elegant dining areas and event venues
            </motion.p>
          </div>
        </div>

        {/* Filters & Controls */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="transition-all duration-300"
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "masonry" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("masonry")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Image Grid */}
          <motion.div
            layout
            className={`grid gap-4 ${
              viewMode === "grid" 
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                : "columns-1 sm:columns-2 lg:columns-3 xl:columns-4"
            }`}
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`group cursor-pointer ${viewMode === "masonry" ? "break-inside-avoid mb-4" : ""}`}
                  onClick={() => openModal(index)}
                >
                  <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-primary-glow/10">
                    <img
                      src={image.src}
                      alt={image.title}
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                        viewMode === "grid" ? "aspect-square" : ""
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex justify-end">
                        <Button
                          variant="secondary"
                          size="icon"
                          className="backdrop-blur-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLike(image.id);
                          }}
                        >
                          <Heart 
                            className={`w-4 h-4 ${
                              likedImages.has(image.id) 
                                ? "fill-red-500 text-red-500" 
                                : "text-white"
                            }`} 
                          />
                        </Button>
                      </div>
                      
                      <div className="text-white">
                        <h3 className="font-semibold mb-1">{image.title}</h3>
                        <p className="text-sm opacity-90">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Modal */}
        <Dialog open={selectedImage !== null} onOpenChange={closeModal}>
          <DialogContent className="max-w-5xl h-[90vh] p-0">
            {selectedImage !== null && (
              <div className="relative w-full h-full flex flex-col">
                {/* Header */}
                <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/50 to-transparent p-4">
                  <div className="flex justify-between items-start text-white">
                    <div>
                      <h2 className="text-xl font-semibold mb-1">
                        {filteredImages[selectedImage].title}
                      </h2>
                      <p className="text-sm opacity-90">
                        {filteredImages[selectedImage].description}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="secondary" 
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLike(filteredImages[selectedImage].id);
                        }}
                      >
                        <Heart 
                          className={`w-4 h-4 ${
                            likedImages.has(filteredImages[selectedImage].id) 
                              ? "fill-red-500 text-red-500" 
                              : ""
                          }`} 
                        />
                      </Button>
                      <Button variant="secondary" size="icon">
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <Button variant="secondary" size="icon">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="secondary" size="icon" onClick={closeModal}>
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1 flex items-center justify-center bg-black">
                  <img
                    src={filteredImages[selectedImage].src}
                    alt={filteredImages[selectedImage].title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Navigation */}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  onClick={goToNext}
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>

                {/* Footer */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <div className="flex justify-center text-white text-sm">
                    {selectedImage + 1} of {filteredImages.length}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Gallery;