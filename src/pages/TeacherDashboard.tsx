import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import { Upload, Video, Phone, Users, BookOpen, MessageCircle } from "lucide-react";
import { useState } from "react";

const TeacherDashboard = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const students = [
    { id: 1, name: "Emma Johnson", status: "online", progress: "Math - Chapter 3" },
    { id: 2, name: "Liam Smith", status: "offline", progress: "Science - Lab Report" },
    { id: 3, name: "Sophia Davis", status: "online", progress: "English - Essay Writing" },
  ];

  const recentVideos = [
    { id: 1, title: "Introduction to Fractions", views: 24, uploaded: "2 days ago" },
    { id: 2, title: "Basic Science Experiments", views: 18, uploaded: "1 week ago" },
    { id: 3, title: "Creative Writing Tips", views: 31, uploaded: "3 days ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Teacher Dashboard</h1>
          <p className="text-muted-foreground">Manage your educational content and connect with students</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Upload Video Section */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5 text-trust" />
                  Upload Educational Video
                </CardTitle>
                <CardDescription>
                  Share knowledge with your students through video content
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Video Title</label>
                  <Input placeholder="Enter a descriptive title for your video" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <Textarea 
                    placeholder="Describe what students will learn from this video..."
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Select Video File</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-trust transition-colors">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Drop your video file here or click to browse
                    </p>
                    <Button variant="outline" size="sm">
                      Choose File
                    </Button>
                  </div>
                </div>
                <Button variant="hero" className="w-full">
                  Upload Video
                </Button>
              </CardContent>
            </Card>

            {/* Recent Videos */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="w-5 h-5 text-learning" />
                  Your Recent Videos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentVideos.map((video) => (
                    <div key={video.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div>
                        <h4 className="font-medium">{video.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {video.views} views • {video.uploaded}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="trust" className="w-full justify-start gap-2">
                  <Phone className="w-4 h-4" />
                  Start Video Call
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Send Message
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <BookOpen className="w-4 h-4" />
                  Create Assignment
                </Button>
              </CardContent>
            </Card>

            {/* Students Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Users className="w-5 h-5 text-warm" />
                  Student Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {students.map((student) => (
                    <div key={student.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${
                          student.status === 'online' ? 'bg-learning' : 'bg-muted-foreground/30'
                        }`} />
                        <div>
                          <p className="font-medium text-sm">{student.name}</p>
                          <p className="text-xs text-muted-foreground">{student.progress}</p>
                        </div>
                      </div>
                      {student.status === 'online' && (
                        <Button variant="ghost" size="sm">
                          <Phone className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;