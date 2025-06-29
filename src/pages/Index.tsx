import {
  ArrowRight,
  Bird,
  Leaf,
  MapPin,
  Mountain,
  TreePine,
  Waves,
} from "lucide-react";

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Discover Kerala with Us
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore the beauty of God's Own Country with our curated tour
            packages.
          </p>
          <button className="bg-primary text-white py-3 px-8 rounded-full hover:bg-primary-dark transition-colors">
            Explore Tours
          </button>
        </div>
      </section>

      {/* Additional Tour Services */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Additional Tour Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive tour packages designed to give you the
              best experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Munnar Tour Package */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
                <Mountain className="w-16 h-16 text-green-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Munnar Tour Package
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Experience the breathtaking tea gardens and misty mountains of
                  Munnar with our guided tour package.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-600">
                    ₹2,500/person
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                </div>
              </div>
            </div>

            {/* Alleppey Backwater Tour */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center">
                <Waves className="w-16 h-16 text-blue-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Alleppey Backwater Tour
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Cruise through the serene backwaters and experience Kerala's
                  unique ecosystem and local culture.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600">
                    ₹3,200/person
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            </div>

            {/* Thekkady Wildlife Tour */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
                <TreePine className="w-16 h-16 text-amber-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Thekkady Wildlife Tour
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Discover exotic wildlife and spice plantations in the heart of
                  Periyar Wildlife Sanctuary.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-amber-600">
                    ₹2,800/person
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-600 transition-colors" />
                </div>
              </div>
            </div>

            {/* Fort Kochi Heritage Walk */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-purple-50 to-violet-100 flex items-center justify-center">
                <MapPin className="w-16 h-16 text-purple-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Fort Kochi Heritage Walk
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Walk through history in Fort Kochi, exploring colonial
                  architecture and cultural landmarks.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-purple-600">
                    ₹1,500/person
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                </div>
              </div>
            </div>

            {/* Kumarakom Bird Sanctuary */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-teal-50 to-emerald-100 flex items-center justify-center">
                <Bird className="w-16 h-16 text-teal-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Kumarakom Bird Sanctuary
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Observe diverse bird species in their natural habitat at this
                  renowned bird sanctuary.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-teal-600">
                    ₹2,000/person
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-colors" />
                </div>
              </div>
            </div>

            {/* Spice Plantation Tour */}
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="h-48 bg-gradient-to-br from-rose-50 to-pink-100 flex items-center justify-center">
                <Leaf className="w-16 h-16 text-rose-600" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Spice Plantation Tour
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn about Kerala's famous spices and their cultivation in
                  authentic plantation settings.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-rose-600">
                    ₹1,800/person
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-rose-600 transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
