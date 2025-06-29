import { useState, useEffect } from "react";
import { Phone, MapPin, MessageCircle, Calendar, Users, Star, Wifi, Car, Thermometer, Mail, ChefHat, Droplets, Cloud, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const HeroSection = ({ currentWeather, getWeatherIcon, handleBookNow, scrollToGallery, scrollToForecast }) => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
      style={{ 
        backgroundImage: `url('/lovable-uploads/f90d3ee3-3394-4bcb-8fc4-904e6253b857.png')` 
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
    </div>
    
    {/* Logo in top left corner */}
    <div className="absolute top-6 left-6 z-20">
      <img 
        src="/lovable-uploads/logo.svg" 
        alt="Kuppendare Homestay Logo" 
        className="h-12 w-auto object-contain bg-white/50 backdrop-blur-sm rounded-lg p-2"
      />
    </div>
    
    <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
      <div className="bg-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-xl px-3 py-1 mb-6 inline-block">
        <p className="text-xs font-medium flex items-center gap-2">
          Welcome to Kuppendare Homestay in the Heart of Coorg! 🌿
        </p>
      </div>

      {/* Small Current Weather Card - Now Clickable */}
      <div 
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 mb-8 max-w-sm mx-auto shadow-lg animate-fade-in hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-white/15"
        onClick={scrollToForecast}
      >
        {currentWeather ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-blue-400/30 p-2 rounded-full">
                {getWeatherIcon(currentWeather.weather_code !== undefined ? 
                  (currentWeather.weather_code === 0 ? 'Clear' : 
                   currentWeather.weather_code <= 3 ? 'Clouds' : 'Rain') : 'Clear')}
              </div>
              <div className="text-left">
                <p className="text-lg font-bold">{Math.round(currentWeather.temp || 22)}°C</p>
                <p className="text-xs text-blue-200">
                  {currentWeather.humidity ? `${currentWeather.humidity}% humidity` : 'Pleasant weather'}
                </p>
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
            Comfortable Rooms in the Heart of Madikeri
            </h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-8">
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
              in search of peace, our homestay provides the perfect blend of modern amenities.
            </p>
          </div>
          
          {/* Centrally Located Accommodation Section */}
          <div className="bg-gradient-to-br from-green-50 to-amber-50 p-6 rounded-2xl border-l-4 border-green-600">
            <h3 className="text-xl font-bold text-green-800 mb-4">Centrally Located Accommodation</h3>
            <p className="text-gray-700 mb-4">
              Our property offers easy access to everything from its prime location. 
              Enjoy convenient proximity to:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-600" />
                <span>Major attractions (3-5 km)</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-600" />
                <span>Hill stations (3-5 km)</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-600" />
                <span>City Centre (5-minute walk)</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-600" />
                <span>Restaurants & Supermarkets</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-600" />
                <span>Souvenir Shops</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative">
          <img 
            src="/lovable-uploads/b2dfd9f6-e46d-4180-9aca-bc9e18626736.png"
            alt="Kuppendare Homestay exterior"
            className="rounded-3xl shadow-2xl w-full h-[300px] md:h-[400px] object-cover"
          />
          
          {/* Customer Count Badge - Top Right, responsive for mobile */}
          <div className="absolute top-2 right-2 md:-top-6 md:-right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-3 py-2 md:px-4 md:py-3 shadow-lg border z-10">
            <div className="text-center">
              <div className="text-lg md:text-2xl font-bold text-orange-500">500+</div>
              <div className="text-xs md:text-sm text-blue-600 font-medium">Happy Customers</div>
            </div>
          </div>

          {/* Combined Google & Airbnb Review Card - Bottom Left, responsive for mobile */}
          <div className="absolute bottom-2 left-2 md:-bottom-6 md:-left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-3 md:p-4 shadow-lg border max-w-[140px] md:max-w-[200px] z-10">
            <div className="flex items-center gap-1 mb-2 md:mb-3">
              {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-2.5 h-2.5 md:w-3 md:h-3 fill-orange-400 text-orange-400" />
              ))}
            </div>
            <div className="space-y-1 md:space-y-2">
              <div className="flex items-center gap-1 md:gap-2">
          <img src="/lovable-uploads/b1b7d931-adb2-4a41-8d4f-6fb4d1ab0344.png" alt="Google" className="w-3 h-3 md:w-4 md:h-4" />
          <p className="text-[10px] md:text-xs text-gray-700 font-medium">Google Reviews</p>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
          <img src="/lovable-uploads/17fcacf1-30aa-420a-a7fc-e030e75295cd.png" alt="Airbnb" className="w-3 h-3 md:w-4 md:h-4" />
          <p className="text-[10px] md:text-xs text-gray-700 font-medium">Airbnb Reviews</p>
              </div>
            </div>
          </div>
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

const AdditionalServicesSection = () => (
  <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-green-50 to-amber-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
        Additional Tour Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Local Tour Package 1 */}
        <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] rounded-3xl border-0 bg-white/90 backdrop-blur-sm">
          <CardContent className="relative p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-600 text-white px-4 py-2 rounded-2xl shadow-lg">
                <h3 className="font-bold text-lg">Local Tour Package</h3>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="space-y-4">
              {[
                { title: "Abbey Falls:", desc: "A breathtaking waterfall" },
                { title: "Raja Tomb:", desc: "A historical monument" },
                { title: "Fort and Museum:", desc: "Explore the local history and culture" },
                { title: "Sunny Side Museum:", desc: "A unique museum showcasing local art and culture" },
                { title: "Omkareshwara Temple:", desc: "A sacred temple" },
                { title: "Coffee Estate Plantation Tour:", desc: "Learn about coffee cultivation and enjoy the scenic views" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 group/item hover:bg-green-50 rounded-xl p-3 transition-all duration-200">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 group-hover/item:scale-125 transition-transform duration-200"></div>
                  <div className="flex-1">
                    <span className="font-semibold text-green-800">{item.title}</span>
                    <span className="text-gray-700 ml-1">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Mandalpatti Package */}
        <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] rounded-3xl border-0 bg-white/90 backdrop-blur-sm">
          <CardContent className="relative p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-600 text-white px-4 py-2 rounded-2xl shadow-lg">
                <h3 className="font-bold text-lg">Mandalpatti Viewpoint</h3>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sun className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-xl p-4 border-l-4 border-green-500">
                <p className="text-gray-800 font-medium mb-2">
                  <span className="font-bold text-green-700">Sunrise and View Point:</span>
                </p>
                <p className="text-sm text-gray-700 mb-3">
                  Early morning 5:30 AM hrs (The best time to see Sunrise is only early in the morning)
                </p>
                <div className="bg-green-100 border border-green-200 rounded-lg p-3">
                  <p className="text-sm font-bold text-green-700 flex items-center gap-2">
                    <Car className="w-4 h-4" />
                    Only 4 wheel drive Allowed
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Local Tour Package 2 */}
        <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] rounded-3xl border-0 bg-white/90 backdrop-blur-sm">
          <CardContent className="relative p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-600 text-white px-4 py-2 rounded-2xl shadow-lg">
                <h3 className="font-bold text-lg">Temple Circuit Tour</h3>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 rounded-xl p-4 mb-4">
                <p className="text-sm font-semibold text-green-800">
                  Distance: 50 km one way from Madikeri
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-green-800 text-sm">Sightseeing Includes:</h4>
                {[
                  { title: "Bhagamandala Temple:", desc: "Sacred confluence of rivers (Triveni Sangama)" },
                  { title: "Talacauvery:", desc: "Source of River Cauvery, scenic hilltop shrine" },
                  { title: "Optional:", desc: "En route photo stops, local food/snack break" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 group/item hover:bg-green-50 rounded-xl p-3 transition-all duration-200">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 group-hover/item:scale-125 transition-transform duration-200"></div>
                    <div className="flex-1 text-sm">
                      <span className="font-semibold text-green-800">{item.title}</span>
                      <span className="text-gray-700 ml-1">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Local Tour Package 3 - Full Width */}
        <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] rounded-3xl border-0 bg-white/90 backdrop-blur-sm md:col-span-2 lg:col-span-3">
          <CardContent className="relative p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-green-700 text-white px-6 py-3 rounded-2xl shadow-lg">
                <h3 className="font-bold text-xl">Wildlife & Culture Experience</h3>
              </div>
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7 text-green-700" />
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🐘</span>
                  </div>
                  <h4 className="font-bold text-green-800 text-lg">Dubare Elephant Camp</h4>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Activities: Elephant interaction, bathing (if available), short river boat ride
                </p>
                <div className="bg-green-200 rounded-lg p-2">
                  <p className="text-xs font-semibold text-green-800">
                    Best Visit Time: Morning (optimal for elephant activities)
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🌿</span>
                  </div>
                  <h4 className="font-bold text-green-800 text-lg">Kaveri Nisargadhama</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Activities: Bamboo groves, hanging bridge, deer park, riverside picnic spots
                </p>
              </div>
              
              <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🏛️</span>
                  </div>
                  <h4 className="font-bold text-green-800 text-lg">Tibetan Golden Temple</h4>
                </div>
                <p className="text-sm text-gray-700 mb-2">
                  (Namdroling Monastery) - One of the largest Tibetan settlements in South India
                </p>
                <p className="text-xs text-green-700 font-medium">
                  Known for peaceful ambiance and intricate murals
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="flex items-center gap-3">
                  <Car className="w-5 h-5 text-green-700" />
                  <div>
                    <span className="font-semibold text-gray-800">Vehicle Type:</span>
                    <p className="text-gray-700">Toyota Innova Or Etios With Driver</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-green-700" />
                  <div>
                    <span className="font-semibold text-gray-800">Capacity:</span>
                    <p className="text-gray-700">Total 6 Passengers</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
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
          <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-2xl border-0 bg-white/90 backdrop-blur-sm">
            <div className="flex justify-center mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-green-500 text-green-500" />
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
  <section id="weather-forecast" className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 to-purple-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
        7-Day Weather Forecast for Madikeri
      </h2>
      {forecast ? (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {forecast.slice(0, 7).map((day, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in border-0 bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-sm font-semibold text-gray-600 mb-3">
                  {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                </div>
                <div className="flex justify-center mb-4 transform hover:scale-110 transition-transform duration-300">
                  {getWeatherIcon(day.condition)}
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-2">{Math.round(day.temp)}°C</div>
                <div className="text-sm text-gray-600 mb-3">
                  {Math.round(day.temp_min)}° / {Math.round(day.temp_max)}°
                </div>
                <div className="text-xs text-gray-500 capitalize leading-tight">
                  {day.description}
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

const ContactSection = ({ openWhatsApp }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    checkIn: '',
    guests: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleQuickBooking = (e) => {
    e.preventDefault();
    const { name, phone, checkIn, guests, message } = formData;
    
    let whatsappMessage = `Hi *there*! I would like to make a booking.\n\n`;
    whatsappMessage += `*Name:* ${name || 'Not provided'}\n`;
    whatsappMessage += `*Phone:* ${phone || 'Not provided'}\n`;
    whatsappMessage += `*Check-in Date:* ${checkIn || 'Not provided'}\n`;
    whatsappMessage += `*Number of Guests:* ${guests || 'Not provided'}\n`;
    if (message) {
      whatsappMessage += `*Special Requests:* ${message}\n`;
    }
    whatsappMessage += `\nPlease provide availability and pricing details.\n\nhttps://kuppendarecoorg.com/`;
    
    openWhatsApp(whatsappMessage);
  };

  return (
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
                  <p className="font-medium text-gray-800 mb-1 text-xs sm:text-sm">EMAIL</p>
                  <p className="text-gray-600 text-xs sm:text-sm break-all">coorghomestaykuppendare@gmail.com</p>
                </div>
              </div>
                <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-1 text-xs sm:text-sm">PHONE NUMBER</p>
                  <p className="text-gray-600 text-xs sm:text-sm">+91 80502 69791</p>
                </div>
                </div>
                <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800 mb-1 text-xs sm:text-sm">ADDRESS</p>
                  <p className="text-gray-600 text-xs sm:text-sm">Block #10 Opp: Patrika Bhavana Near Cauvery Hall Madikeri-571201 Kodagu</p>
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
          
            <div className="w-full max-w-md mx-auto sm:max-w-none px-1 sm:px-0">
              <Card className="p-3 sm:p-6 rounded-2xl shadow-lg">
                <h3 className="text-lg sm:text-2xl font-semibold text-green-800 mb-3 sm:mb-6">Quick Booking</h3>
                <form className="space-y-2 sm:space-y-4" onSubmit={handleQuickBooking}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                    <Input 
                      name="name"
                      placeholder="Your Name" 
                      className="rounded-xl text-xs sm:text-base"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    <Input 
                      name="phone"
                      placeholder="Phone Number" 
                      className="rounded-xl text-xs sm:text-base"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                    <div className="relative">
                      <Calendar className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                      <Input 
                        name="checkIn"
                        type="date" 
                        className="pl-10 rounded-xl text-xs sm:text-base"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                        style={{ minWidth: 0 }}
                      />
                    </div>
                    <div className="relative">
                      <Users className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                      <Input 
                        name="guests"
                        placeholder="Number of Guests" 
                        className="pl-10 rounded-xl text-xs sm:text-base"
                        value={formData.guests}
                        onChange={handleInputChange}
                        style={{ minWidth: 0 }}
                      />
                    </div>
                  </div>
                  <Textarea 
                    name="message"
                    placeholder="Special requests or message" 
                    className="rounded-xl text-xs sm:text-base"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={2}
                  />
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 rounded-xl py-2 sm:py-3 text-base sm:text-lg">
                    Book via WhatsApp
                  </Button>
                </form>
              </Card>
            </div>
        </div>
      </div>
    </section>
  );
};

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
      alt: "Living Room with Sofa",
      title: "Living Room wisth Sofa"
    },
    {
      src: "/lovable-uploads/55bcf1c3-26b5-4c1a-a045-78a65bcc1d34.png",
      alt: "Premium Living Space",
      title: "Premium Living Space"
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
      name: "Companions Room",
      image: "/lovable-uploads/60b4c27a-794d-43ba-b99a-4cf1dc3bb1c1.png",
      amenities: ["wifi", "hot-water", "kitchen", "cab-service"]
    },
    {
      name: "Family Comfort Room",
      image: "/lovable-uploads/55bcf1c3-26b5-4c1a-a045-78a65bcc1d34.png",
      amenities: ["wifi", "hot-water", "kitchen", "cab-service"]
    },
    // {
    //   name: "Family Cottage",
    //   image: "/lovable-uploads/ed4528ea-633a-4eab-8be8-f2a165977ea9.png",
    //   amenities: ["wifi", "hot-water", "kitchen", "cab-service"]
    // }
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
      image: "/lovable-uploads/b3648351-3dc5-4740-a021-6eaee98c1d00.png",
      description: "Famous sunset point with garden views"
    },
    { 
      name: "Mandalpatti", 
      distance: "19 km", 
      duration: "57 mins",
      image: "/lovable-uploads/3059a01c-74a3-4eea-b027-3a6d09ef6c01.png",
      description: "Breathtaking hilltop views and jeep safari"
    },
    { 
      name: "Tala Kavery", 
      distance: "43 km", 
      duration: "1 hr 18 mins",
      image: "/lovable-uploads/bb8eaa24-d4a5-431a-ab4f-bf7cfa81af3d.png",
      description: "Sacred source of River Cauvery"
    },
    { 
      name: "Nisarga Dhama", 
      distance: "27 km", 
      duration: "36 mins",
      image: "/lovable-uploads/82eb70f0-108c-400c-8c7a-beec2ff32db6.png",
      description: "Beautiful island formed by River Cauvery"
    },
    { 
      name: "Golden Temple (Bylakuppe)", 
      distance: "35 km", 
      duration: "50 mins",
      image: "/lovable-uploads/52fcd695-a5b4-4750-a70f-a6a5be50f2f2.png",
      description: "Largest Tibetan settlement in India"
    },
    { 
      name: "Dubare Forest", 
      distance: "28 km", 
      duration: "52 mins",
      image: "/lovable-uploads/a555ee10-eea8-4b0a-a76c-62af1cd649a2.png",
      description: "Elephant camp and river activities"
    },
    { 
      name: "Harangi Dam", 
      distance: "35 km", 
      duration: "45 mins",
      image: "/lovable-uploads/2539ff3e-9464-4d45-b1d7-c708dbab63cc.png",
      description: "Scenic dam with boating facilities"
    },
    { 
      name: "Nagarahole", 
      distance: "67 km", 
      duration: "1 hr 37 mins",
      image: "/lovable-uploads/bc5fba09-9e2d-47a9-a22f-80e9c9cccbf2.png",
      description: "National park with wildlife safari"
    }
  ];

  const reviews = [
    {
      name: "Balaji Prasaanth",
      rating: 5,
      text: "Best budget stay. The owner and the manager was extremely kind. They offered a bigger flat for free of cost since it was vaccant. The stay is nearer to Raja seat and placed main area . The owner also suggested some places to visit and helped us to plan effectively. Overall 10/10. The rooms were clean and neat."
    },
    {
      name: "Varsha Lohiya",
      rating: 5,
      text: "Had a comfortable and pleasant stay, perfect for those seeking a homelike environment with a focus on cleanliness and personal service. The rooms are well-maintained and provide a relaxing atmosphere."
    },
    {
      name: "Mohan Singh",
      rating: 5,
      text: "Really had good experience staying here. We'll maintained and the care taker was very caring and helpfula dn fulfilled the needs. A very good place to stay in coorg where you have access to good restaurants and ice cream shops."
    }
  ];

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // Madikeri coordinates: latitude 12.4246, longitude 75.7382
        const currentResponse = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=12.4246&longitude=75.7382&current=temperature_2m,relative_humidity_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=Asia%2FKolkata'
        );
        
        if (currentResponse.ok) {
          const data = await currentResponse.json();
          console.log('Weather data received:', data);
          
          // Set current weather
          setCurrentWeather({
            temp: data.current.temperature_2m,
            humidity: data.current.relative_humidity_2m,
            weather_code: data.current.weather_code
          });
          
          // Process 7-day forecast
          const forecastData = data.daily.time.slice(0, 7).map((date, index) => {
            const weatherCode = data.daily.weather_code[index];
            return {
              date: date,
              temp: (data.daily.temperature_2m_max[index] + data.daily.temperature_2m_min[index]) / 2,
              temp_max: data.daily.temperature_2m_max[index],
              temp_min: data.daily.temperature_2m_min[index],
              condition: getWeatherCondition(weatherCode),
              description: getWeatherDescription(weatherCode)
            };
          });
          
          setForecast(forecastData);
        }
      } catch (error) {
        console.log('Weather API error:', error);
        // Set mock weather data for demonstration
        setCurrentWeather({
          temp: 22,
          humidity: 75,
          weather_code: 0
        });
        
        const mockForecast = [
          { date: new Date().toISOString().split('T')[0], temp: 22, temp_min: 18, temp_max: 25, condition: 'Clear', description: 'Clear sky' },
          { date: new Date(Date.now() + 86400000).toISOString().split('T')[0], temp: 24, temp_min: 19, temp_max: 27, condition: 'Clouds', description: 'Few clouds' },
          { date: new Date(Date.now() + 172800000).toISOString().split('T')[0], temp: 21, temp_min: 17, temp_max: 24, condition: 'Rain', description: 'Light rain' },
          { date: new Date(Date.now() + 259200000).toISOString().split('T')[0], temp: 23, temp_min: 18, temp_max: 26, condition: 'Clear', description: 'Clear sky' },
          { date: new Date(Date.now() + 345600000).toISOString().split('T')[0], temp: 25, temp_min: 20, temp_max: 28, condition: 'Clouds', description: 'Scattered clouds' },
          { date: new Date(Date.now() + 432000000).toISOString().split('T')[0], temp: 22, temp_min: 18, temp_max: 25, condition: 'Clear', description: 'Clear sky' },
          { date: new Date(Date.now() + 518400000).toISOString().split('T')[0], temp: 24, temp_min: 19, temp_max: 27, condition: 'Clouds', description: 'Overcast clouds' }
        ];
        
        setForecast(mockForecast);
      }
    };
    
    fetchWeatherData();
  }, []);

  const getWeatherCondition = (weatherCode) => {
    // WMO Weather interpretation codes
    if (weatherCode === 0) return 'Clear';
    if (weatherCode <= 3) return 'Clouds';
    if (weatherCode >= 45 && weatherCode <= 48) return 'Fog';
    if (weatherCode >= 51 && weatherCode <= 67) return 'Rain';
    if (weatherCode >= 71 && weatherCode <= 77) return 'Snow';
    if (weatherCode >= 80 && weatherCode <= 99) return 'Rain';
    return 'Clear';
  };

  const getWeatherDescription = (weatherCode) => {
    // WMO Weather interpretation codes
    const descriptions = {
      0: 'Clear sky',
      1: 'Mainly clear',
      2: 'Partly cloudy',
      3: 'Overcast',
      45: 'Fog',
      48: 'Depositing rime fog',
      51: 'Light drizzle',
      53: 'Moderate drizzle',
      55: 'Dense drizzle',
      61: 'Slight rain',
      63: 'Moderate rain',
      65: 'Heavy rain',
      80: 'Slight rain showers',
      81: 'Moderate rain showers',
      82: 'Violent rain showers'
    };
    return descriptions[weatherCode] || 'Clear sky';
  };

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

  const scrollToForecast = () => {
    const forecastSection = document.getElementById('weather-forecast');
    if (forecastSection) {
      forecastSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=918050269791&text=${encodedMessage}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, '_blank');
  };

  const handleBookNow = () => {
    const message = "Hi *there*! I would like to book a room. Please provide me with availability and more details. https://kuppendarecoorg.com/";
    openWhatsApp(message);
  };

  const handleRoomBooking = (roomName: string) => {
    const message = `Hi *there*! I'm interested in booking the ${roomName} room. Please provide availability and more details. https://kuppendarecoorg.com/`;
    openWhatsApp(message);
  };

  const getWeatherIcon = (weatherMain: string) => {
    switch (weatherMain) {
      case 'Clear': return <Sun className="w-6 h-6 text-yellow-500" />;
      case 'Clouds': return <Cloud className="w-6 h-6 text-gray-500" />;
      case 'Rain': return <Droplets className="w-6 h-6 text-blue-500" />;
      case 'Fog': return <Cloud className="w-6 h-6 text-gray-400" />;
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
        scrollToForecast={scrollToForecast}
      />
      <AboutSection />
      <RoomsSection 
        rooms={rooms} 
        getAmenityIcon={getAmenityIcon} 
        handleRoomBooking={handleRoomBooking} 
      />
      <GallerySection roomGalleryImages={roomGalleryImages} />
      <AttractionsSection attractions={attractions} />
      <AdditionalServicesSection />
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
            onClick={() => openWhatsApp("Hi *there*! I need more info about Kuppendare Homestay https://kuppendarecoorg.com/")}
            >
            {/* WhatsApp SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 32 32"
              fill="currentColor"
              className="w-4 h-4 mr-2"
            >
              <path d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.61 4.47 1.77 6.41l-1.87 6.85a1.07 1.07 0 0 0 1.31 1.31l6.85-1.87a12.77 12.77 0 0 0 6.41 1.77c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm0 23.04c-2.01 0-3.99-.54-5.7-1.56a1.07 1.07 0 0 0-.74-.11l-5.13 1.4 1.4-5.13a1.07 1.07 0 0 0-.11-.74A10.65 10.65 0 1 1 16 26.24zm6.02-7.37c-.33-.17-1.97-.97-2.27-1.08-.3-.11-.52-.17-.74.17-.22.33-.85 1.08-1.04 1.3-.19.22-.38.25-.71.08-.33-.17-1.39-.51-2.65-1.62-.98-.87-1.64-1.94-1.83-2.27-.19-.33-.02-.51.15-.68.15-.15.33-.38.5-.57.17-.19.22-.33.33-.55.11-.22.06-.41-.03-.58-.09-.17-.74-1.78-1.01-2.44-.27-.65-.54-.56-.74-.57-.19-.01-.41-.01-.63-.01-.22 0-.58.08-.88.41-.3.33-1.15 1.12-1.15 2.73 0 1.61 1.18 3.17 1.34 3.39.17.22 2.32 3.56 5.63 4.85.79.31 1.41.5 1.89.64.79.25 1.51.22 2.08.13.64-.1 1.97-.8 2.25-1.57.28-.77.28-1.43.2-1.57-.08-.14-.3-.22-.63-.39z"/>
            </svg>
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
        className="fixed bottom-20 md:bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={28}
          height={28}
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.61 4.47 1.77 6.41l-1.87 6.85a1.07 1.07 0 0 0 1.31 1.31l6.85-1.87a12.77 12.77 0 0 0 6.41 1.77c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm0 23.04c-2.01 0-3.99-.54-5.7-1.56a1.07 1.07 0 0 0-.74-.11l-5.13 1.4 1.4-5.13a1.07 1.07 0 0 0-.11-.74A10.65 10.65 0 1 1 16 26.24zm6.02-7.37c-.33-.17-1.97-.97-2.27-1.08-.3-.11-.52-.17-.74.17-.22.33-.85 1.08-1.04 1.3-.19.22-.38.25-.71.08-.33-.17-1.39-.51-2.65-1.62-.98-.87-1.64-1.94-1.83-2.27-.19-.33-.02-.51.15-.68.15-.15.33-.38.5-.57.17-.19.22-.33.33-.55.11-.22.06-.41-.03-.58-.09-.17-.74-1.78-1.01-2.44-.27-.65-.54-.56-.74-.57-.19-.01-.41-.01-.63-.01-.22 0-.58.08-.88.41-.3.33-1.15 1.12-1.15 2.73 0 1.61 1.18 3.17 1.34 3.39.17.22 2.32 3.56 5.63 4.85.79.31 1.41.5 1.89.64.79.25 1.51.22 2.08.13.64-.1 1.97-.8 2.25-1.57.28-.77.28-1.43.2-1.57-.08-.14-.3-.22-.63-.39z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* Logo in footer */}
            <div className="mb-6">
              <img 
                src="/lovable-uploads/logo-light.svg" 
                alt="Kuppendare Homestay Logo" 
                className="h-16 w-auto object-contain bg-white/10 backdrop-blur-sm rounded-lg p-2"
              />
            </div>
            
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
        </div>
      </footer>
    </div>
  );
};

export default Index;
