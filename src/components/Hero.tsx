import { Button } from "@/components/ui/button";
import { GraduationCap, MapPin, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-700 text-white relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <GraduationCap className="h-20 w-20 mx-auto mb-6 text-yellow-400" />
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Mirai Classes
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-6 text-blue-200">
              Excellence in 11th & 12th Coaching
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl animate-fade-in">
            Transform your academic journey with personalized coaching that builds confidence, 
            clarity, and success in <span className="text-emerald-400 font-semibold">Science</span> and <span className="text-pink-400 font-semibold">Mathematics</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg">
              Enroll Now
            </Button>
            <Button variant="outline" size="lg" className="border-white text-yellow-400 hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
              Learn More
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 text-lg animate-fade-in">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-yellow-400" />
              <span className="text-orange-300 font-medium">Karve Nagar, Pune</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-yellow-400" />
              <span className="text-green-300 font-medium">+91 99999 99999</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-50 to-transparent"></div>
    </section>
  );
};

export default Hero;
