import { useState } from "react";
import { Phone, MapPin, MessageCircle, Calendar, Users, Star, Wifi, Car, Coffee, Thermometer, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2340&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2340&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2340&auto=format&fit=crop"
  ];

  const roomGalleryImages = [
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
      alt: "Deluxe Garden View Room",
      title: "Deluxe Garden View"
    },
    {
      src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop",
      alt: "Premium Coffee Estate Room",
      title: "Premium Coffee Estate"
    },
    {
      src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop",
      alt: "Family Cottage Interior",
      title: "Family Cottage"
    },
    {
      src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop",
      alt: "Modern Bathroom",
      title: "Modern Amenities"
    },
    {
      src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop",
      alt: "Cozy Sitting Area",
      title: "Relaxation Space"
    },
    {
      src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
      alt: "Dining Area",
      title: "Dining Experience"
    }
  ];

  const rooms = [
    {
      name: "Deluxe Garden View",
      price: "₹3,500",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
      amenities: ["wifi", "hot-water", "food", "parking"]
    },
    {
      name: "Premium Coffee Estate",
      price: "₹4,200",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800&auto=format&fit=crop",
      amenities: ["wifi", "hot-water", "food", "parking"]
    },
    {
      name: "Family Cottage",
      price: "₹5,800",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=800&auto=format&fit=crop",
      amenities: ["wifi", "hot-water", "food", "parking"]
    }
  ];

  const attractions = [
    { 
      name: "Abbey Falls", 
      distance: "6.3 km", 
      duration: "15 mins",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400&auto=format&fit=crop",
      description: "Spectacular waterfall amidst coffee plantations"
    },
    { 
      name: "Raja Seat", 
      distance: "1.3 km", 
      duration: "4 mins",
      image: "https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?q=80&w=400&auto=format&fit=crop",
      description: "Famous sunset point with garden views"
    },
    { 
      name: "Mandalpatti", 
      distance: "19 km", 
      duration: "57 mins",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&auto=format&fit=crop",
      description: "Breathtaking hilltop views and jeep safari"
    },
    { 
      name: "Tala Kavery", 
      distance: "43 km", 
      duration: "1 hr 18 mins",
      image: "https://images.unsplash.com/photo-1484402628941-0bb20267684c?q=80&w=400&auto=format&fit=crop",
      description: "Sacred source of River Cauvery"
    },
    { 
      name: "Nisarga Dhama", 
      distance: "27 km", 
      duration: "36 mins",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=400&auto=format&fit=crop",
      description: "Beautiful island formed by River Cauvery"
    },
    { 
      name: "Golden Temple (Bylakuppe)", 
      distance: "35 km", 
      duration: "50 mins",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=400&auto=format&fit=crop",
      description: "Largest Tibetan settlement in India"
    },
    { 
      name: "Dubare Forest", 
      distance: "28 km", 
      duration: "52 mins",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=400&auto=format&fit=crop",
      description: "Elephant camp and river activities"
    },
    { 
      name: "Harangi Dam", 
      distance: "35 km", 
      duration: "45 mins",
      image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=400&auto=format&fit=crop",
      description: "Scenic dam with boating facilities"
    },
    { 
      name: "Nagarahole", 
      distance: "67 km", 
      duration: "1 hr 37 mins",
      image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?q=80&w=400&auto=format&fit=crop",
      description: "National park with wildlife safari"
    }
  ];

  const reviews = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Absolutely magical stay! The plantation views and traditional Coorgi hospitality made our weekend unforgettable."
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "Perfect location, amazing food, and such peaceful surroundings. Highly recommend for families!"
    },
    {
      name: "Anita Reddy",
      rating: 5,
      text: "The bonfire nights and morning coffee walks were highlights. Such warm hosts and beautiful property."
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "wifi": return <Wifi className="w-4 h-4" />;
      case "hot-water": return <Thermometer className="w-4 h-4" />;
      case "food": return <Coffee className="w-4 h-4" />;
      case "parking": return <Car className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2340&auto=format&fit=crop')` 
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="bg-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-2xl px-6 py-3 mb-6 inline-block">
            <p className="text-lg font-medium flex items-center gap-2">
              Welcome to Kuppendare Homestay in the Heart of Coorg! 🌿
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Your Serene Escape in Coorg Starts Here
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            Comfort, Nature & Local Culture in the Heart of Madikeri
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
              Book Now
            </Button>
            <Button size="lg" className="bg-black/30 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
              View Rooms
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
                Experience Authentic Coorgi Hospitality
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Nestled in the heart of Madikeri, Kuppendare Homestay offers an authentic Coorgi experience 
                  surrounded by lush coffee plantations and misty hills.
                </p>
                <p>
                  Wake up to the aroma of fresh coffee, enjoy traditional Coorgi cuisine prepared with love, 
                  and spend your evenings around a warm bonfire under the starlit sky.
                </p>
                <p>
                  Whether you're a family seeking adventure, a couple looking for romance, or a solo traveler 
                  in search of peace, our homestay provides the perfect blend of comfort and nature.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800&auto=format&fit=crop"
                alt="Coorg landscape"
                className="rounded-3xl shadow-2xl w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rooms & Amenities */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
            Comfortable Rooms & Modern Amenities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-2xl">
                <div className="relative">
                  <img 
                    src={room.image}
                    alt={room.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full font-semibold">
                    {room.price}/night
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-4">{room.name}</h3>
                  <div className="flex gap-3 mb-4">
                    {room.amenities.map((amenity, idx) => (
                      <div key={idx} className="bg-green-100 p-2 rounded-full text-green-600">
                        {getAmenityIcon(amenity)}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 rounded-full">
                    Book This Room
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Room Gallery Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
            Our Beautiful Rooms & Spaces
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
            {/* Large featured image */}
            <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <img 
                src={roomGalleryImages[0].src}
                alt={roomGalleryImages[0].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold mb-2">{roomGalleryImages[0].title}</h3>
              </div>
            </div>

            {/* Top right images */}
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
              <img 
                src={roomGalleryImages[1].src}
                alt={roomGalleryImages[1].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-3 left-3 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold">{roomGalleryImages[1].title}</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
              <img 
                src={roomGalleryImages[2].src}
                alt={roomGalleryImages[2].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-3 left-3 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold">{roomGalleryImages[2].title}</p>
              </div>
            </div>

            {/* Bottom right images */}
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
              <img 
                src={roomGalleryImages[3].src}
                alt={roomGalleryImages[3].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-3 left-3 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold">{roomGalleryImages[3].title}</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
              <img 
                src={roomGalleryImages[4].src}
                alt={roomGalleryImages[4].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-3 left-3 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-semibold">{roomGalleryImages[4].title}</p>
              </div>
            </div>

            {/* Tall image on the right */}
            <div className="row-span-2 relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
              <img 
                src={roomGalleryImages[5].src}
                alt={roomGalleryImages[5].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-6 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-bold">{roomGalleryImages[5].title}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tourist Attractions */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
            Top Tourist Attractions Near Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl border-0 bg-white/90 backdrop-blur-sm group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium">{attraction.distance}</span>
                      <span>•</span>
                      <span>{attraction.duration}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-green-800 text-lg mb-2">{attraction.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Reviews */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-amber-50 to-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
            What Our Guests Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-2xl border-0 bg-white/80 backdrop-blur-sm">
                <div className="flex justify-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <p className="font-semibold text-green-800">- {review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Booking */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
            Plan Your Perfect Stay
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-6">Talk To Us</h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-1">EMAIL</p>
                    <p className="text-gray-600">coorghomestaykuppendare@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-1">PHONE NUMBER</p>
                    <p className="text-gray-600">+91 80502 69791</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-1">ADDRESS</p>
                    <p className="text-gray-600">Block #10 Opp: Patrika Bhavana Near Cauvery Hall Madikeri-571201 Kodagu</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-amber-50 p-6 rounded-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.558977484839!2d75.7355779!3d12.4243983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5ee0e8d0b7699%3A0x123456789abcdef0!2sPatrika%20Bhavan%2C%20Madikeri%2C%20Karnataka%20571201!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
            
            <div>
              <Card className="p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold text-green-800 mb-6">Quick Booking</h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" className="rounded-xl" />
                    <Input placeholder="Phone Number" className="rounded-xl" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input type="date" className="pl-10 rounded-xl" />
                    </div>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input placeholder="Number of Guests" className="pl-10 rounded-xl" />
                    </div>
                  </div>
                  <Textarea placeholder="Special requests or message" className="rounded-xl" />
                  <Button className="w-full bg-green-600 hover:bg-green-700 rounded-xl py-3 text-lg">
                    Send Booking Request
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 md:hidden z-50">
        <div className="flex gap-2">
          <Button className="flex-1 bg-green-600 hover:bg-green-700 rounded-full">
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
          <Button variant="outline" className="flex-1 rounded-full">
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
          <Button variant="outline" className="rounded-full p-3">
            <MapPin className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://api.whatsapp.com/send/?phone=918050269791&text=Hi+%2AKuppendare+Homestay%2A%21+I+need+more+info+about+Kuppendare+Homestay+https%3A%2F%2Fkuppendarecoorg.com%2F&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 md:bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Kuppendare Homestay</h3>
          <p className="text-green-200 mb-6">
            Your home away from home in the heart of Coorg
          </p>
          <div className="flex justify-center gap-6 text-sm text-green-200">
            <span>© 2024 Kuppendare Homestay</span>
            <span>|</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
