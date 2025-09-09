import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { Shield, TrendingUp, Clock, MessageCircle, BookOpen, Star } from "lucide-react";

const ParentPanel = () => {
  const childProgress = {
    name: "Emma Johnson",
    totalVideos: 12,
    completedVideos: 8,
    weeklyHours: 4.5,
    lastActive: "2 hours ago"
  };

  const recentActivity = [
    {
      id: 1,
      action: "Completed",
      content: "Introduction to Fractions",
      time: "2 hours ago",
      type: "video"
    },
    {
      id: 2,
      action: "Started",
      content: "Basic Science Experiments",
      time: "1 day ago",
      type: "video"
    },
    {
      id: 3,
      action: "Asked question about",
      content: "Math homework",
      time: "2 days ago",
      type: "message"
    }
  ];

  const upcomingLessons = [
    {
      id: 1,
      subject: "Math",
      topic: "Advanced Fractions",
      scheduled: "Tomorrow, 3:00 PM",
      type: "Video Lesson"
    },
    {
      id: 2,
      subject: "Science",
      topic: "Plant Biology",
      scheduled: "Friday, 2:00 PM",
      type: "Interactive Session"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Parent Dashboard</h1>
          <p className="text-muted-foreground">Monitor {childProgress.name}'s learning progress</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress Overview */}
            <Card className="bg-gradient-to-r from-trust-light/10 to-learning-light/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-trust" />
                  Learning Progress Overview
                </CardTitle>
                <CardDescription>
                  {childProgress.name}'s educational journey this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-trust mb-2">
                      {childProgress.completedVideos}/{childProgress.totalVideos}
                    </div>
                    <p className="text-sm text-muted-foreground">Videos Completed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-learning mb-2">
                      {childProgress.weeklyHours}h
                    </div>
                    <p className="text-sm text-muted-foreground">This Week</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-warm mb-2">95%</div>
                    <p className="text-sm text-muted-foreground">Attendance Rate</p>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Overall Progress</span>
                    <span>{Math.round((childProgress.completedVideos / childProgress.totalVideos) * 100)}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-trust to-learning h-2 rounded-full"
                      style={{ width: `${(childProgress.completedVideos / childProgress.totalVideos) * 100}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-learning" />
                  Recent Activity
                </CardTitle>
                <CardDescription>
                  What {childProgress.name} has been working on
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center gap-3 p-3 border border-border rounded-lg">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === 'video' ? 'bg-trust-light text-trust' : 'bg-warm-light text-warm'
                      }`}>
                        {activity.type === 'video' ? (
                          <BookOpen className="w-4 h-4" />
                        ) : (
                          <MessageCircle className="w-4 h-4" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">{activity.action}</span> {activity.content}
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Lessons */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Lessons</CardTitle>
                <CardDescription>
                  Scheduled learning sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingLessons.map((lesson) => (
                    <div key={lesson.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div>
                        <h4 className="font-medium">{lesson.subject}: {lesson.topic}</h4>
                        <p className="text-sm text-muted-foreground">{lesson.scheduled}</p>
                      </div>
                      <Badge variant="secondary">{lesson.type}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Safety & Trust */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Shield className="w-5 h-5 text-trust" />
                  Safety & Trust
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium text-learning mb-1">All interactions monitored</p>
                  <p className="text-muted-foreground text-xs">
                    Educational content is reviewed and all communications are safe.
                  </p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-trust mb-1">Last activity: {childProgress.lastActive}</p>
                  <p className="text-muted-foreground text-xs">
                    Your child was last active learning math concepts.
                  </p>
                </div>
                <Button variant="trust" size="sm" className="w-full">
                  View Activity Log
                </Button>
              </CardContent>
            </Card>

            {/* Teacher Communication */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Teacher Communication</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Message Teacher
                </Button>
                <p className="text-xs text-muted-foreground">
                  Stay connected with your child's educator for questions and updates.
                </p>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">This Week's Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-warm fill-current" />
                    <span className="text-sm">Completed 3 video lessons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-warm fill-current" />
                    <span className="text-sm">Asked thoughtful questions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-warm fill-current" />
                    <span className="text-sm">Perfect attendance</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total learning time:</span>
                    <span className="font-medium">24.5 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Questions asked:</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Teacher interactions:</span>
                    <span className="font-medium">8</span>
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

export default ParentPanel;