
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      grade: "12th Pass (2023)",
      text: "Prof. Mehta's teaching style is exceptional. His clear explanations and patient approach helped me score 95% in Physics. Thank you for believing in me!",
      image: "/lovable-uploads/485b7e6c-9d35-49ce-9050-dfb080137f8b.png"
    },
    {
      name: "Rohit Patel",
      grade: "11th Student",
      text: "The foundation I built in 11th grade with Prof. Mehta is helping me excel in 12th. His practice sessions and doubt clearing are amazing.",
      image: "/lovable-uploads/012fd05a-06d5-43a9-afe3-748711c14397.png"
    },
    {
      name: "Ananya Joshi",
      grade: "12th Pass (2023)",
      text: "Best decision was joining Prof. Mehta's classes. Not only did I improve my grades, but I also developed a genuine interest in Chemistry.",
      image: "/lovable-uploads/7bdb2a70-70f1-44ae-a341-b853f447ec57.png"
    },
    {
      name: "Arjun Kulkarni",
      grade: "Parent",
      text: "My son's confidence and performance improved dramatically under Prof. Mehta's guidance. Highly recommend for all Science students.",
      image: "/lovable-uploads/c21e8f66-3853-45b2-b767-9fcb6456e875.png"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Success stories from students who transformed their academic journey with us
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 animate-fade-in"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center mb-4">
                  <Avatar className="w-16 h-16 mb-3">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <Quote className="h-8 w-8 text-blue-400" />
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4 text-center">
                  "{testimonial.text}"
                </p>
                
                <div className="text-center">
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.grade}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
