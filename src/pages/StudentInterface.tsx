import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { Play, BookOpen, MessageCircle, Star, Clock, CheckCircle } from "lucide-react";

const StudentInterface = () => {
  const videos = [
    {
      id: 1,
      title: "Introduction to Fractions",
      duration: "12:34",
      completed: true,
      subject: "Math",
      thumbnail: "🔢"
    },
    {
      id: 2,
      title: "Basic Science Experiments",
      duration: "18:42",
      completed: false,
      subject: "Science",
      thumbnail: "🧪"
    },
    {
      id: 3,
      title: "Creative Writing Tips",
      duration: "15:20",
      completed: false,
      subject: "English",
      thumbnail: "✏️"
    },
    {
      id: 4,
      title: "History of Ancient Rome",
      duration: "22:10",
      completed: true,
      subject: "History",
      thumbnail: "🏛️"
    }
  ];

  const progress = {
    completed: 2,
    total: 4,
    percentage: 50
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Emma! 👋</h1>
          <p className="text-muted-foreground">Continue your learning journey</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Progress Card */}
            <Card className="mb-6 bg-gradient-to-r from-trust-light/20 to-learning-light/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-warm" />
                  Your Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-2xl font-bold">{progress.completed}/{progress.total}</p>
                    <p className="text-sm text-muted-foreground">Videos completed</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-learning">{progress.percentage}%</p>
                    <p className="text-sm text-muted-foreground">Complete</p>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-trust to-learning h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress.percentage}%` }}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Video Library */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-trust" />
                  Your Video Library
                </CardTitle>
                <CardDescription>
                  Educational videos from your teacher
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {videos.map((video) => (
                    <Card key={video.id} className="group hover:shadow-md transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-16 h-16 bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                            {video.thumbnail}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium mb-1 line-clamp-2">{video.title}</h4>
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary" className="text-xs">
                                {video.subject}
                              </Badge>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Clock className="w-3 h-3" />
                                {video.duration}
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <Button 
                                variant={video.completed ? "trust" : "hero"} 
                                size="sm"
                                className="gap-1"
                              >
                                {video.completed ? (
                                  <>
                                    <CheckCircle className="w-3 h-3" />
                                    Review
                                  </>
                                ) : (
                                  <>
                                    <Play className="w-3 h-3" />
                                    Watch
                                  </>
                                )}
                              </Button>
                              {video.completed && (
                                <CheckCircle className="w-4 h-4 text-learning" />
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Help Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="trust" className="w-full justify-start gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Ask Teacher
                </Button>
                <p className="text-xs text-muted-foreground">
                  Your teacher is available to help with any questions about your lessons.
                </p>
              </CardContent>
            </Card>

            {/* Current Assignment */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Current Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-warm-light/20 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Math Practice</h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      Complete the fraction exercises
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      Due: Tomorrow
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-warm fill-current" />
                    <span className="text-sm">Completed 2 videos this week</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-warm fill-current" />
                    <span className="text-sm">Perfect attendance</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInterface;