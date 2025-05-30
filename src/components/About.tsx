
import { Award, BookOpen, Users, Target } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Dedicated to academic excellence"
    },
    {
      icon: Users,
      title: "500+ Students",
      description: "Successfully coached to success"
    },
    {
      icon: Target,
      title: "95% Success Rate",
      description: "In board examinations"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Physics, Chemistry & Mathematics"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
            <img 
              src="/lovable-uploads/fef2264d-a59e-4c55-afff-6ca68647ba16.png" 
              alt="Mirai Classes" 
              className="w-32 h-32 rounded-full object-cover shadow-lg"
            />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              About Mirai Classes
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over 15 years of teaching experience, Mirai Classes has established itself 
            as one of Pune's most trusted educators for 11th and 12th grade students.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-3xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Excellence Through Experience
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Mirai Classes believes in nurturing each student's potential through personalized 
              attention and innovative teaching methodologies. Our approach combines traditional 
              academic rigor with modern pedagogical techniques.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Located in the heart of Karve Nagar, Pune, our coaching center provides a 
              conducive learning environment where students thrive and achieve their academic goals.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-purple-100 to-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center animate-fade-in hover:scale-105"
              >
                <achievement.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
