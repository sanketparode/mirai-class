
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      grade: "12th Pass (2023)",
      text: "Prof. Mehta's teaching style is exceptional. His clear explanations and patient approach helped me score 95% in Physics. Thank you for believing in me!",
      rating: 5
    },
    {
      name: "Rohit Patel",
      grade: "11th Student",
      text: "The foundation I built in 11th grade with Prof. Mehta is helping me excel in 12th. His practice sessions and doubt clearing are amazing.",
      rating: 5
    },
    {
      name: "Ananya Joshi",
      grade: "12th Pass (2023)",
      text: "Best decision was joining Prof. Mehta's classes. Not only did I improve my grades, but I also developed a genuine interest in Chemistry.",
      rating: 5
    },
    {
      name: "Arjun Kulkarni",
      grade: "Parent",
      text: "My son's confidence and performance improved dramatically under Prof. Mehta's guidance. Highly recommend for all Science students.",
      rating: 5
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
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-blue-400 mb-3" />
                  <p className="text-gray-700 leading-relaxed mb-4">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div>
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
