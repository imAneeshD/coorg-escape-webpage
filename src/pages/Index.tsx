import { useState, useEffect } from "react";
import { Phone, MapPin, MessageCircle, Calendar, Users, Star, Wifi, Car, Thermometer, Mail, ChefHat, Droplets, Cloud, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const HeroSection = ({ currentWeather, getWeatherIcon, handleBookNow, scrollToGallery }) => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
      style={{ 
        backgroundImage: `url('/lovable-uploads/f90d3ee3-3394-4bcb-8fc4-904e6253b857.png')` 
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
    </div>
    
    <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
      <div className="bg-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-xl px-3 py-1 mb-6 inline-block">
        <p className="text-xs font-medium flex items-center gap-2">
          Welcome to Kuppendare Homestay in the Heart of Coorg! 🌿
        </p>
      </div>

      {/* Small Current Weather Card */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 mb-8 max-w-sm mx-auto shadow-lg animate-fade-in hover:scale-105 transition-all duration-300">
        {currentWeather ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-400/30 p-2 rounded-full">
                {getWeatherIcon(currentWeather.weather?.[0]?.main || 'Clear')}
              </div>
              <div className="text-left">
                <p className="text-lg font-bold">{Math.round(currentWeather.main?.temp || 22)}°C</p>
                <p className="text-xs text-blue-200 capitalize">{currentWeather.weather?.[0]?.description || 'Clear sky'}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-blue-100">Madikeri</p>
              <p className="text-xs text-blue-200">Right Now</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            <span className="text-sm">Loading weather...</span>
          </div>
        )}
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
        Your Serene Escape in Coorg Starts Here
      </h1>
      <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
        Comfort, Nature & Local Culture in the Heart of Madikeri
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
        <Button 
          size="lg" 
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
          onClick={handleBookNow}
        >
          Book Now
        </Button>
        <Button 
          size="lg" 
          className="bg-black/30 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
          onClick={scrollToGallery}
        >
          View Rooms
        </Button>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section className="py-20 px-4 md:px-8 lg:px-16">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
            Experience Authentic Coorgi Hospitality
          </h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              At Kuppendare Homestay, we provide exceptional 24/7 support from our dedicated staff and manager, 
              ensuring your comfort throughout your stay in the heart of Madikeri.
            </p>
            <p>
              Enjoy complimentary high-speed WiFi, our tied-up 24/7 cab services for convenient local transportation, 
              and fully equipped kitchens in every room featuring gas stoves and instant coffee ingredients for your convenience.
            </p>
            <p>
              Whether you're friends seeking adventure, a family looking for quality time together, or a solo traveler 
              in search of peace, our homestay provides the perfect blend of modern amenities and natural beauty 
              surrounded by lush coffee plantations.
            </p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <img 
            src="/lovable-uploads/f90d3ee3-3394-4bcb-8fc4-904e6253b857.png"
            alt="Kuppendare Homestay exterior"
            className="rounded-3xl shadow-2xl w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  </section>
);

const RoomsSection = ({ rooms, getAmenityIcon, handleRoomBooking }) => (
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
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 rounded-full"
                onClick={() => handleRoomBooking(room.name)}
              >
                Book This Room
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const GallerySection = ({ roomGalleryImages }) => (
  <section id="room-gallery" className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-green-50 to-amber-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
        Our Beautiful Rooms & Spaces
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {/* Large featured image */}
        <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 h-[400px]">
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
        <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 h-[190px]">
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

        <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 h-[190px]">
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
        <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 h-[190px]">
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

        <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 h-[190px]">
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
      </div>

      {/* Additional gallery grid for the new images */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {roomGalleryImages.slice(5).map((image, index) => (
          <div key={index + 5} className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 h-[200px]">
            <img 
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-sm font-bold">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AttractionsSection = ({ attractions }) => (
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
);

const ReviewsSection = ({ reviews }) => (
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
);

const WeatherForecastSection = ({ forecast, getWeatherIcon }) => (
  <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 to-purple-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
        7-Day Weather Forecast for Madikeri
      </h2>
      {forecast ? (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {forecast.list.slice(0, 7).map((day, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in border-0 bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-sm font-semibold text-gray-600 mb-3">
                  {new Date(day.dt_txt || Date.now() + index * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                </div>
                <div className="flex justify-center mb-4 transform hover:scale-110 transition-transform duration-300">
                  {getWeatherIcon(day.weather?.[0]?.main || 'Clear')}
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-2">{Math.round(day.main?.temp || 22)}°C</div>
                <div className="text-sm text-gray-600 mb-3">
                  {Math.round(day.main?.temp_min || 18)}° / {Math.round(day.main?.temp_max || 25)}°
                </div>
                <div className="text-xs text-gray-500 capitalize leading-tight">
                  {day.weather?.[0]?.description || 'Clear sky'}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
          <span className="ml-3 text-gray-600">Loading forecast data...</span>
        </div>
      )}
    </div>
  </section>
);

const ContactSection = ({ openWhatsApp }) => (
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5463!2d75.7306781!3d12.4246579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5018929c45463%3A0xcf7248562c1700f!2sKuppendare+Coorg+Home+Stay+Centrally+Located+Accommodation!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
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
);

const Index = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const galleryImages = [
    "/lovable-uploads/60b4c27a-794d-43ba-b99a-4cf1dc3bb1c1.png",
    "/lovable-uploads/cd2641aa-8c73-4552-807b-3f33a59bfbe7.png",
    "/lovable-uploads/8d1eebeb-3d5e-4a5c-8280-bd14eee76798.png",
    "/lovable-uploads/ed4528ea-633a-4eab-8be8-f2a165977ea9.png"
  ];

  const roomGalleryImages = [
    {
      src: "/lovable-uploads/60b4c27a-794d-43ba-b99a-4cf1dc3bb1c1.png",
      alt: "Deluxe Garden View Room",
      title: "Deluxe Garden View"
    },
    {
      src: "/lovable-uploads/55bcf1c3-26b5-4c1a-a045-78a65bcc1d34.png",
      alt: "Premium Coffee Estate Room",
      title: "Premium Coffee Estate"
    },
    {
      src: "/lovable-uploads/ed4528ea-633a-4eab-8be8-f2a165977ea9.png",
      alt: "Family Cottage Interior",
      title: "Family Cottage"
    },
    {
      src: "/lovable-uploads/0b49b671-a8e7-456a-b820-a978aa93379d.png",
      alt: "Modern Dining Area",
      title: "Modern Amenities"
    },
    {
      src: "/lovable-uploads/ab4c8e56-ff63-41b3-bd47-02ac497b5e2c.png",
      alt: "Cozy Bedroom",
      title: "Relaxation Space"
    },
    {
      src: "/lovable-uploads/f90d3ee3-3394-4bcb-8fc4-904e6253b857.png",
      alt: "Homestay Exterior",
      title: "Homestay Building"
    },
    {
      src: "/lovable-uploads/2133ed45-5fab-42b3-b28d-28e9fe0cc7ab.png",
      alt: "Entrance with Welcome Mat",
      title: "Warm Welcome"
    },
    {
      src: "/lovable-uploads/f9636ad7-c1df-4759-b639-73e0671be3c9.png",
      alt: "Comfortable Bedroom",
      title: "Restful Sleep"
    },
    {
      src: "/lovable-uploads/860c9695-273b-4bd2-a2ad-cd83e9cdf552.png",
      alt: "Elegant Room Design",
      title: "Modern Comfort"
    },
    {
      src: "/lovable-uploads/5c2f0e77-7911-47de-be80-4fad8fa4fc5a.png",
      alt: "Spacious Living Area",
      title: "Living Space"
    }
  ];

  const rooms = [
    {
      name: "Deluxe Garden View",
      image: "/lovable-uploads/60b4c27a-794d-43ba-b99a-4cf1dc3bb1c1.png",
      amenities: ["wifi", "hot-water", "kitchen", "cab-service"]
    },
    {
      name: "Premium Coffee Estate",
      image: "/lovable-uploads/55bcf1c3-26b5-4c1a-a045-78a65bcc1d34.png",
      amenities: ["wifi", "hot-water", "kitchen", "cab-service"]
    },
    {
      name: "Family Cottage",
      image: "/lovable-uploads/ed4528ea-633a-4eab-8be8-f2a165977ea9.png",
      amenities: ["wifi", "hot-water", "kitchen", "cab-service"]
    }
  ];

  const attractions = [
    { 
      name: "Abbey Falls", 
      distance: "6.3 km", 
      duration: "15 mins",
      image: "/lovable-uploads/c2b17db7-57db-403f-a963-071b7e6a2c0e.png",
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

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // Free OpenWeatherMap API - replace YOUR_API_KEY with actual key
        const API_KEY = '2c999b0ffdfb8c54d8d7ecbcef5b2e05'; // Free demo key
        
        // Fetch current weather
        const currentResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Madikeri,IN&appid=${API_KEY}&units=metric`
        );
        
        // Fetch 7-day forecast
        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=Madikeri,IN&appid=${API_KEY}&units=metric`
        );
        
        if (currentResponse.ok) {
          const currentData = await currentResponse.json();
          setCurrentWeather(currentData);
        }
        
        if (forecastResponse.ok) {
          const forecastData = await forecastResponse.json();
          setForecast(forecastData);
        }
      } catch (error) {
        console.log('Weather data not available, using mock data');
        // Set mock weather data for demonstration
        setCurrentWeather({
          main: { temp: 22, temp_min: 18, temp_max: 25 },
          weather: [{ main: 'Clear', description: 'clear sky' }]
        });
        
        setForecast({
          list: [
            { dt_txt: '2024-01-01', main: { temp: 22, temp_min: 18, temp_max: 25 }, weather: [{ main: 'Clear', description: 'clear sky' }] },
            { dt_txt: '2024-01-02', main: { temp: 24, temp_min: 19, temp_max: 27 }, weather: [{ main: 'Clouds', description: 'few clouds' }] },
            { dt_txt: '2024-01-03', main: { temp: 21, temp_min: 17, temp_max: 24 }, weather: [{ main: 'Rain', description: 'light rain' }] },
            { dt_txt: '2024-01-04', main: { temp: 23, temp_min: 18, temp_max: 26 }, weather: [{ main: 'Clear', description: 'clear sky' }] },
            { dt_txt: '2024-01-05', main: { temp: 25, temp_min: 20, temp_max: 28 }, weather: [{ main: 'Clouds', description: 'scattered clouds' }] },
            { dt_txt: '2024-01-06', main: { temp: 22, temp_min: 18, temp_max: 25 }, weather: [{ main: 'Clear', description: 'clear sky' }] },
            { dt_txt: '2024-01-07', main: { temp: 24, temp_min: 19, temp_max: 27 }, weather: [{ main: 'Clouds', description: 'overcast clouds' }] }
          ]
        });
      }
    };
    
    fetchWeatherData();
  }, []);

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "wifi": return <Wifi className="w-4 h-4" />;
      case "hot-water": return <Droplets className="w-4 h-4" />;
      case "kitchen": return <ChefHat className="w-4 h-4" />;
      case "cab-service": return <Car className="w-4 h-4" />;
      default: return null;
    }
  };

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('room-gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=918050269791&text=${encodedMessage}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, '_blank');
  };

  const handleBookNow = () => {
    const message = "Hi *Kuppendare Homestay*! I would like to book a room. Please provide me with availability and more details. https://kuppendarecoorg.com/";
    openWhatsApp(message);
  };

  const handleRoomBooking = (roomName: string) => {
    const message = `Hi *Kuppendare Homestay*! I'm interested in booking the ${roomName} room. Please provide availability and more details. https://kuppendarecoorg.com/`;
    openWhatsApp(message);
  };

  const getWeatherIcon = (weatherMain: string) => {
    switch (weatherMain) {
      case 'Clear': return <Sun className="w-6 h-6 text-yellow-500" />;
      case 'Clouds': return <Cloud className="w-6 h-6 text-gray-500" />;
      case 'Rain': return <Droplets className="w-6 h-6 text-blue-500" />;
      default: return <Cloud className="w-6 h-6 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      <HeroSection 
        currentWeather={currentWeather} 
        getWeatherIcon={getWeatherIcon} 
        handleBookNow={handleBookNow} 
        scrollToGallery={scrollToGallery} 
      />
      <AboutSection />
      <RoomsSection 
        rooms={rooms} 
        getAmenityIcon={getAmenityIcon} 
        handleRoomBooking={handleRoomBooking} 
      />
      <GallerySection roomGalleryImages={roomGalleryImages} />
      <AttractionsSection attractions={attractions} />
      <ReviewsSection reviews={reviews} />
      <WeatherForecastSection forecast={forecast} getWeatherIcon={getWeatherIcon} />
      <ContactSection openWhatsApp={openWhatsApp} />

      {/* Sticky CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 md:hidden z-50">
        <div className="flex gap-2">
          <Button 
            className="flex-1 bg-green-600 hover:bg-green-700 rounded-full"
            onClick={() => window.open('tel:+918050269791', '_self')}
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
          <Button 
            variant="outline" 
            className="flex-1 rounded-full"
            onClick={() => openWhatsApp("Hi *Kuppendare Homestay*! I need more info about Kuppendare Homestay https://kuppendarecoorg.com/")}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
          <Button 
            variant="outline" 
            className="rounded-full p-3"
            onClick={() => window.open('https://maps.google.com/?q=Block+%2310+Opp:+Patrika+Bhavana+Near+Cauvery+Hall+Madikeri-571201+Kodagu', '_blank')}
          >
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
