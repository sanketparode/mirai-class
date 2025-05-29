
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, BookOpen, CheckCircle } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "11th Grade Science",
      subjects: ["Physics", "Chemistry", "Mathematics"],
      duration: "Academic Year (April - March)",
      batchSize: "15-20 students",
      features: [
        "Foundation building approach",
        "Regular assessments",
        "Doubt clearing sessions",
        "Study material provided"
      ],
      price: "₹25,000/year"
    },
    {
      title: "12th Grade Science",
      subjects: ["Physics", "Chemistry", "Mathematics"],
      duration: "Academic Year (April - March)",
      batchSize: "15-20 students",
      features: [
        "Board exam preparation",
        "JEE/NEET foundation",
        "Mock tests weekly",
        "Individual attention"
      ],
      price: "₹30,000/year"
    },
    {
      title: "Crash Course",
      subjects: ["All Science Subjects"],
      duration: "3-6 months",
      batchSize: "10-15 students",
      features: [
        "Intensive revision",
        "Exam strategies",
        "Previous year papers",
        "Quick doubt resolution"
      ],
      price: "₹15,000/course"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive coaching programs designed to excel in 11th and 12th grade academics
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-200 animate-fade-in"
            >
              <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-blue-100">
                <CardTitle className="text-2xl font-bold text-blue-800 mb-2">
                  {course.title}
                </CardTitle>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {course.subjects.map((subject, idx) => (
                    <span 
                      key={idx}
                      className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">{course.batchSize}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Course Features
                  </h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-4">
                    {course.price}
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
