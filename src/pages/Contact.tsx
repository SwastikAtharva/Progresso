import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20 bg-background relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/6 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/3 right-1/6 w-60 h-60 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/3 rounded-full blur-2xl animate-pulse" />
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-scale-in-bounce">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '300ms'}}>
              Ready to collaborate or learn more about our projects? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="animate-fade-in-left hover:shadow-glow-lg transition-all duration-500 border-2 hover:border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 animate-float" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="What's this about?" />
                </div>
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project, question, or collaboration idea..."
                    rows={6}
                  />
                </div>
                <Button className="w-full magnetic-button animate-pulse-glow hover:scale-105 transition-all duration-300">
                  <span className="transition-all duration-300 hover:tracking-wider">Send Message</span>
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="animate-fade-in-right hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group" style={{animationDelay: '200ms'}}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Mail className="h-8 w-8 text-primary animate-float transition-all duration-300 group-hover:scale-110" />
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">Email</h3>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">hello@progresso.dev</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    For partnerships, press inquiries, or general questions.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in-right hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group" style={{animationDelay: '350ms'}}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <MessageCircle className="h-8 w-8 text-primary animate-float transition-all duration-300 group-hover:scale-110" style={{animationDelay: '1s'}} />
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">Social</h3>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">@progressotech</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Follow our journey and get real-time updates.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in-right hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group" style={{animationDelay: '500ms'}}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <MapPin className="h-8 w-8 text-primary animate-float transition-all duration-300 group-hover:scale-110" style={{animationDelay: '2s'}} />
                    <div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">Location</h3>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Bangalore, India</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Building from the tech capital of India.
                  </p>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-muted/50 animate-scale-in-bounce hover:shadow-glow-lg transition-all duration-500 border-2 hover:border-accent/50" style={{animationDelay: '650ms'}}>
                <CardHeader>
                  <CardTitle className="text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Request Demo Access",
                    "Join Beta Program", 
                    "Partnership Inquiry",
                    "Media Kit Request"
                  ].map((action, index) => (
                    <Button 
                      key={action}
                      variant="outline" 
                      className="w-full justify-start magnetic-button hover:scale-105 hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-fade-in"
                      style={{animationDelay: `${700 + (index * 100)}ms`}}
                    >
                      <span className="transition-all duration-300 hover:tracking-wider">{action}</span>
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;