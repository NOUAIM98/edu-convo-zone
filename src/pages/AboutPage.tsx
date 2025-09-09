import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Shield, Heart, Users, BookOpen, Star, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const values = [
    {
      icon: Shield,
      title: "Child Safety First",
      description: "Every feature is designed with child protection and online safety as our top priority.",
      color: "trust"
    },
    {
      icon: Heart,
      title: "Building Trust",
      description: "We create transparent relationships between teachers, students, and parents.",
      color: "warm"
    },
    {
      icon: Users,
      title: "Educational Focus",
      description: "Our platform exists solely for educational purposes and meaningful learning.",
      color: "learning"
    },
    {
      icon: BookOpen,
      title: "Personalized Learning",
      description: "One-on-one guidance tailored to each child's unique learning needs.",
      color: "trust"
    }
  ];

  const features = [
    "Video-based learning content",
    "Direct teacher-student communication",
    "Parent monitoring and transparency",
    "Safe, moderated environment",
    "Educational progress tracking",
    "Personalized guidance and advice"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-trust to-learning bg-clip-text text-transparent">
            About EduConnect
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're building a trusted educational platform where individual teachers can safely connect with students 
            and their families, fostering meaningful learning relationships in a secure online environment.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-trust-light/10 to-learning-light/10 border-none">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                To create a safe, transparent educational platform where teachers can provide personalized guidance, 
                students can learn effectively, and parents can stay connected to their child's educational journey 
                with complete peace of mind.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${value.color}-light flex items-center justify-center`}>
                      <Icon className={`w-8 h-8 text-${value.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Features & Safety */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Platform Features</h2>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-learning-light flex items-center justify-center flex-shrink-0">
                    <Star className="w-3 h-3 text-learning" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Safety Measures</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-trust flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Content Monitoring</h4>
                      <p className="text-sm text-muted-foreground">
                        All educational content and communications are monitored to ensure appropriateness.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-learning flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Parent Transparency</h4>
                      <p className="text-sm text-muted-foreground">
                        Parents have full visibility into their child's learning activities and progress.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-warm flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Trusted Environment</h4>
                      <p className="text-sm text-muted-foreground">
                        Built specifically for educational purposes with child safety as the foundation.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How EduConnect Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-trust-light flex items-center justify-center">
                <span className="text-2xl font-bold text-trust">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Teacher Creates Content</h3>
              <p className="text-muted-foreground">
                Teachers upload educational videos and create personalized learning materials for their students.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-learning-light flex items-center justify-center">
                <span className="text-2xl font-bold text-learning">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Students Learn & Connect</h3>
              <p className="text-muted-foreground">
                Students access content, ask questions, and receive guidance through safe communication channels.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-warm-light flex items-center justify-center">
                <span className="text-2xl font-bold text-warm">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Parents Stay Informed</h3>
              <p className="text-muted-foreground">
                Parents monitor progress, view activities, and stay connected to their child's learning journey.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-trust-light/20 to-learning-light/20 border-none">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join our community of educators, students, and families building trust through safe educational experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/teacher">
                  <Button variant="hero" size="lg">
                    For Teachers
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Contact Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;