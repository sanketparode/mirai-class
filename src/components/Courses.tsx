
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
      price: "₹75,000/year"
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
      price: "₹90,000/year"
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
      price: "₹45,000/course"
    }
  ];

  const getSubjectColor = (subject: string) => {
    switch (subject) {
      case "Physics":
        return "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg";
      case "Chemistry":
        return "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg";
      case "Mathematics":
        return "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg";
      case "All Science Subjects":
        return "bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-lg";
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-lg";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
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
              className="hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200 animate-fade-in hover:scale-105 bg-gradient-to-br from-white to-purple-50"
            >
              <CardHeader className="text-center bg-gradient-to-r from-purple-50 to-pink-50">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent mb-2">
                  {course.title}
                </CardTitle>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {course.subjects.map((subject, idx) => (
                    <span 
                      key={idx}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transform hover:scale-105 transition-all duration-200 ${getSubjectColor(subject)}`}
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">{course.batchSize}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-purple-600" />
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
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                    {course.price}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg">
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
