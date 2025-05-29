
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="h-8 w-8 text-yellow-400" />
              <h3 className="text-2xl font-bold">Prof. Arush Mehta</h3>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Excellence in Science and Mathematics education for 11th and 12th grade students. 
              Building strong foundations for academic success.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-pink-400 cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-gray-400 hover:text-red-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#courses" className="text-gray-300 hover:text-white transition-colors">Courses</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Karve Nagar, Pune</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@arushmehta.edu</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Prof. Arush Mehta Coaching Classes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
