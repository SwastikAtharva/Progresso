import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { GetStartedModal } from "@/components/GetStartedModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Navbar } from "@/components/Navbar";
import { 
  Shield, 
  Map, 
  Code2, 
  Network, 
  MessageCircle,
  ArrowRight,
  Users,
  Lightbulb,
  Target
} from "lucide-react";

const Index = () => {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    project?: any;
    type?: "early-access" | "beta" | "feature-suggestion" | "newsletter";
  }>({ isOpen: false });

  const openModal = (type: "early-access" | "beta" | "feature-suggestion" | "newsletter", project?: any) => {
    setModalState({ isOpen: true, project, type });
  };

  const closeModal = () => {
    setModalState({ isOpen: false });
  };
  const projects = [
    {
      title: "Unified Cybersecurity Workflow Platform",
      tagline: "Every role, every alert, one screen.",
      status: "Alpha" as const,
      cta: "Request Early Access",
      icon: Shield,
      progress: 35
    },
    {
      title: "Real-Time Crime Heat Map for India",
      tagline: "Transparency in safety, one hotspot at a time.",
      status: "Beta" as const,
      cta: "Try the Demo",
      icon: Map,
      progress: 70
    },
    {
      title: "CodeSync Collaborative Coding Workspace",
      tagline: "Where code meets collaboration—together from anywhere.",
      status: "Coming Soon" as const,
      cta: "Notify Me on Launch",
      icon: Code2,
      progress: 15
    },
    {
      title: "AI-Orchestrated Micro-Consultancy Network",
      tagline: "Consultancy, automated—expertise at the speed of thought.",
      status: "Private Alpha" as const,
      cta: "Become a Partner",
      icon: Network,
      progress: 45
    },
    {
      title: "AI-Powered Customer Support Agent for SMBs",
      tagline: "AI that powers your customer happiness—effortlessly.",
      status: "Closed Beta" as const,
      cta: "Join the Beta",
      icon: MessageCircle,
      progress: 80
    }
  ];

  const roadmapItems = [
    { quarter: "Q3 2025", projects: ["Cybersecurity Platform Launch", "Crime Map Public Beta"] },
    { quarter: "Q4 2025", projects: ["CodeSync Release", "AI Consultancy Network", "Support Agent GA"] }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-pulse" />
          </div>
          
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-scale-in-bounce">
              Building the Future—In Public
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              Explore our emerging AI and tech platforms. Join early access, give feedback, and shape what's next.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: "800ms" }}>
              <Button 
                size="lg" 
                className="magnetic-button animate-pulse-glow group relative overflow-hidden" 
                onClick={() => openModal("newsletter")}
                style={{ animationDuration: '8s' }}
              >
                <span className="relative z-10 flex items-center transition-all duration-700 group-hover:tracking-wider">
                  Join Our Journey
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-700 group-hover:translate-x-2" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 px-4 relative">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-10 left-10 w-4 h-4 bg-primary rounded-full animate-pulse" />
            <div className="absolute bottom-20 right-20 w-6 h-6 bg-accent rounded-full animate-pulse" style={{animationDelay: '1s'}} />
            <div className="absolute top-1/2 left-20 w-3 h-3 bg-primary rounded-full animate-pulse" style={{animationDelay: '2s'}} />
          </div>
          
          <div className="container mx-auto relative z-10">
            <h2 className="text-3xl font-bold text-center mb-16 animate-fade-in-up">Our Projects in Development</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.title} 
                  className="animate-fade-in-up" 
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <ProjectCard
                    {...project}
                    onClick={() => openModal("early-access", project)}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why We Build in Public */}
        <section className="py-20 px-4 bg-muted/50 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}} />
            <div className="absolute bottom-1/4 -right-10 w-60 h-60 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}} />
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Why We Build in Public</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed animate-fade-in-up" style={{animationDelay: '200ms'}}>
                  We believe innovation thrives in transparency. By building in public, we invite you to be part of our journey—
                  to witness our successes, learn from our challenges, and help shape products that truly serve real needs.
                </p>
                <p className="text-muted-foreground leading-relaxed animate-fade-in-up" style={{animationDelay: '400ms'}}>
                  Your feedback isn't just welcome—it's essential. Together, we're not just building software; 
                  we're crafting solutions that matter.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Users, title: "Community Driven", desc: "Built with and for our community" },
                  { icon: Lightbulb, title: "Transparent Innovation", desc: "Open development process" },
                  { icon: Target, title: "Real Solutions", desc: "Solving actual problems" },
                  { icon: ArrowRight, title: "Continuous Growth", desc: "Always evolving, always improving" }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card key={item.title} className="text-center group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${(index + 2) * 100}ms` }}>
                      <CardContent className="pt-6">
                        <IconComponent className="h-8 w-8 text-primary mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:animate-float" />
                        <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h4>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{item.desc}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Visual Roadmap */}
        <section className="py-20 px-4 relative overflow-hidden">
          {/* Animated lines connecting roadmap items */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border/50 pointer-events-none" />
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 animate-fade-in-up">Development Roadmap</h2>
            <div className="relative space-y-16">
              {roadmapItems.map((item, index) => (
                <div 
                  key={item.quarter}
                  className={`flex flex-col md:flex-row items-center gap-8 animate-fade-in-up ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-glow z-10">
                    {item.quarter}
                  </div>
                  <div className={`flex-1 w-full transition-all duration-300 transform hover:scale-105 z-10 ${index % 2 === 1 ? 'md:-translate-x-4' : 'md:translate-x-4'}`}>
                    <Card className="bg-card/80 backdrop-blur-sm border-2 hover:border-primary/20 shadow-lg hover:shadow-glow">
                      <CardContent className="p-6">
                        <ul className="space-y-3">
                          {item.projects.map((project) => (
                            <li key={project} className="text-sm text-muted-foreground flex items-center group">
                              <div className="w-2.5 h-2.5 bg-primary rounded-full mr-3 flex-shrink-0 transition-all duration-300 group-hover:scale-125 group-hover:bg-accent" />
                              <span className="transition-all duration-300 group-hover:text-foreground group-hover:tracking-wide">{project}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Involvement Section */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 animate-fade-in-up">Get Involved</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Early Access", desc: "Be first to try our innovations" },
                { title: "Beta Sign-Up", desc: "Test and provide feedback" },
                { title: "Feature Suggestions", desc: "Shape product direction" },
                { title: "Newsletter", desc: "Stay updated on progress" }
              ].map((item, index) => {
                const type = item.title === "Early Access" ? "early-access" as const :
                           item.title === "Beta Sign-Up" ? "beta" as const :
                           item.title === "Feature Suggestions" ? "feature-suggestion" as const :
                           "newsletter" as const;
                
                return (
                  <Card 
                    key={item.title}
                    className="text-center hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-2 animate-scale-in-bounce cursor-pointer group border-2 hover:border-accent/50"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => openModal(type)}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg transition-colors duration-300 group-hover:text-primary">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 transition-colors duration-300 group-hover:text-foreground">{item.desc}</p>
                      <Button variant="outline" size="sm" className="w-full magnetic-button group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow transition-all duration-300">
                        <span className="transition-all duration-300 group-hover:tracking-wider">Get Started</span>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-card border-t py-12 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">P</span>
                  </div>
                  <span className="text-xl font-bold">Progresso</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Building the future, one innovation at a time.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>hello@progresso.dev</p>
                  <p>@progressotech</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Privacy Policy</p>
                  <p>Terms of Service</p>
                  <p>GDPR Compliance</p>
                </div>
              </div>
            </div>
            <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
              © 2025 Progresso. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
      
      <GetStartedModal 
        isOpen={modalState.isOpen}
        onClose={closeModal}
        project={modalState.project}
        type={modalState.type}
      />
    </>
  );
};

export default Index;