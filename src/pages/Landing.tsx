import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import Header from "@/components/Header";
import { Video, Users, Shield, BookOpen, MessageCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-education.jpg";

const Landing = () => {
  const features = [
    {
      icon: Video,
      title: "Video Learning",
      description: "Teachers can upload educational videos for students to learn at their own pace with interactive content.",
      color: "trust"
    },
    {
      icon: MessageCircle,
      title: "Direct Communication",
      description: "Instant video calls and messaging between teachers and students when help is needed.",
      color: "learning"
    },
    {
      icon: Shield,
      title: "Parent Monitoring",
      description: "Parents can track their child's progress and stay informed about their learning journey.",
      color: "warm"
    },
    {
      icon: Users,
      title: "Safe Environment",
      description: "A secure platform designed specifically for educational purposes with child protection in mind.",
      color: "trust"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-trust-light/20 to-learning-light/20" />
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-trust to-learning bg-clip-text text-transparent">
              Safe Educational Connection
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A trusted platform where teachers, students, and parents connect for personalized learning experiences. 
              Upload videos, provide guidance, and build educational relationships in a secure environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/teacher">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  For Teachers
                </Button>
              </Link>
              <Link to="/student">
                <Button variant="trust" size="lg" className="w-full sm:w-auto">
                  For Students
                </Button>
              </Link>
            </div>
            <div className="relative max-w-3xl mx-auto">
              <img 
                src={heroImage} 
                alt="Educational platform showing teacher and students in online learning environment" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Built for Trust & Learning</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every feature is designed with safety, education, and family trust at its core.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-trust-light/10 to-learning-light/10">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Building Educational Trust</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our platform creates a transparent environment where teachers can provide personalized guidance, 
              students can learn safely, and parents stay connected to their child's educational journey.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-warm fill-current" />
                <span className="font-medium">Child-Safe Design</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-warm fill-current" />
                <span className="font-medium">Parent Transparency</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-warm fill-current" />
                <span className="font-medium">Educational Focus</span>
              </div>
            </div>
            <Link to="/about">
              <Button variant="outline" size="lg">
                Learn More About Our Mission
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-trust to-learning rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">EduConnect</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Connecting teachers, students, and families through safe educational experiences.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;