
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your academic journey? Contact us today for admission details
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-purple-600">
                  <MapPin className="h-6 w-6" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg">
                  Mirai Classes<br />
                  123, Education Complex<br />
                  Karve Nagar, Pune - 411052<br />
                  Maharashtra, India
                </p>
              </CardContent>
            </Card>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-green-600">
                    <Phone className="h-5 w-5" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">+91 99999 99999</p>
                  <p className="text-gray-700">+91 99999 99999</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-pink-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-pink-600">
                    <Mail className="h-5 w-5" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:info@miraiclasses.edu" className="text-gray-700 hover:text-pink-600 transition-colors">info@miraiclasses.edu</a>
                </CardContent>
              </Card>
            </div>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-purple-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-purple-600">
                  <Clock className="h-6 w-6" />
                  Class Timings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Morning Batch:</strong> 7:00 AM - 9:00 AM</p>
                  <p><strong>Afternoon Batch:</strong> 2:00 PM - 4:00 PM</p>
                  <p><strong>Evening Batch:</strong> 6:00 PM - 8:00 PM</p>
                  <p><strong>Office Hours:</strong> Monday - Saturday, 9:00 AM - 7:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-indigo-50">
            <CardHeader>
              <CardTitle className="text-2xl text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Admission Inquiry Form
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Student Name" />
                <Input placeholder="Parent Name" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Input placeholder="Phone Number" />
                <Input placeholder="Email Address" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option>Select Grade</option>
                  <option>11th Grade</option>
                  <option>12th Grade</option>
                </select>
                <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option>Preferred Batch</option>
                  <option>Morning (7-9 AM)</option>
                  <option>Afternoon (2-4 PM)</option>
                  <option>Evening (6-8 PM)</option>
                </select>
              </div>
              <Textarea 
                placeholder="Additional Message (Optional)"
                className="min-h-[100px]"
              />
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg py-3">
                Submit Inquiry
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
