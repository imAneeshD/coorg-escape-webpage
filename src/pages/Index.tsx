
import { useState } from "react";
import { Phone, MapPin, MessageCircle, Calendar, Users, Star, Wifi, Car, Coffee, Thermometer } from "lucide-react";
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
    { name: "Abbey Falls", distance: "6.3 km", duration: "15 mins" },
    { name: "Raja Seat", distance: "1.3 km", duration: "4 mins" },
    { name: "Mandalpatti", distance: "19 km", duration: "57 mins" },
    { name: "Tala Kavery", distance: "43 km", duration: "1 hr 18 mins" },
    { name: "Nisarga Dhama", distance: "27 km", duration: "36 mins" },
    { name: "Golden Temple (Bylakuppe)", distance: "35 km", duration: "50 mins" },
    { name: "Dubare Forest", distance: "28 km", duration: "52 mins" },
    { name: "Harangi Dam", distance: "35 km", duration: "45 mins" },
    { name: "Nagarahole", distance: "67 km", duration: "1 hr 37 mins" }
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
      {/* Top Header */}
      <div className="bg-gradient-to-r from-green-800 to-amber-800 text-white text-center py-3 px-4">
        <p className="text-sm md:text-base font-medium">
          Welcome to Kuppendare Homestay in the heart of Coorg! 🌿
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2340&auto=format&fit=crop')` 
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
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
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
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

      {/* Tourist Attractions */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
            Top Tourist Attractions Near Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-2xl border-0 bg-white/80 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-green-800 text-lg">{attraction.name}</h3>
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div className="space-y-1 text-gray-600">
                  <p className="flex items-center gap-2">
                    📍 <span>{attraction.distance}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    ⏱️ <span>{attraction.duration}</span>
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
            Experience the Beauty
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl group cursor-pointer">
                <img 
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
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
              <h3 className="text-2xl font-semibold text-green-800 mb-6">Get in Touch</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span>Kuppendare Estate, Madikeri, Coorg - 571201</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <span>info@kuppendarehomestay.com</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-amber-50 p-6 rounded-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31198.77!2d75.737!3d12.424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5ee0e8d0b7699%3A0x6f5e6b6b5b6b5b6b!2sMadikeri%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
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
