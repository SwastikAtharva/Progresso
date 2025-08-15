import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Technical = () => {
  const projects = [
    {
      id: "cybersecurity",
      name: "Unified Cybersecurity Workflow Platform",
      tech: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
      architecture: "Microservices with event-driven communication",
      status: "Alpha"
    },
    {
      id: "crimemap",
      name: "Real-Time Crime Heat Map for India",
      tech: ["React", "Python", "FastAPI", "MongoDB", "WebSockets"],
      architecture: "Real-time data processing with geographic clustering",
      status: "Beta"
    },
    {
      id: "codesync",
      name: "CodeSync Collaborative Coding Workspace",
      tech: ["React", "WebRTC", "Node.js", "Socket.io", "AWS"],
      architecture: "P2P collaboration with centralized coordination",
      status: "Coming Soon"
    },
    {
      id: "consultancy",
      name: "AI-Orchestrated Micro-Consultancy Network",
      tech: ["React", "Python", "AI/ML", "Kubernetes", "GraphQL"],
      architecture: "AI-driven matching with distributed processing",
      status: "Private Alpha"
    },
    {
      id: "support",
      name: "AI-Powered Customer Support Agent for SMBs",
      tech: ["React", "Python", "NLP", "Vector DB", "API Gateway"],
      architecture: "AI pipeline with knowledge management system",
      status: "Closed Beta"
    }
  ];

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
              Technical Architecture
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '300ms'}}>
              Deep dive into the technology stack and architectural decisions powering our innovations.
            </p>
          </div>

          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="stack">Tech Stack</TabsTrigger>
              <TabsTrigger value="architecture">Architecture</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <Card 
                    key={project.id}
                    className="animate-scale-in-bounce hover:shadow-glow-lg transition-all duration-500 hover:-translate-y-1 group border-2 hover:border-primary/20"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors duration-500">{project.name}</CardTitle>
                        <Badge variant="outline" className="group-hover:border-primary group-hover:text-primary transition-all duration-500">{project.status}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-500">
                        {project.architecture}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className="text-xs transition-all duration-500 hover:scale-105 hover:bg-primary hover:text-primary-foreground animate-fade-in"
                            style={{animationDelay: `${(index * 150) + (techIndex * 50)}ms`}}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="stack" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle>Frontend</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Badge className="mr-2">React 18</Badge>
                    <Badge className="mr-2">TypeScript</Badge>
                    <Badge className="mr-2">Tailwind CSS</Badge>
                    <Badge className="mr-2">Vite</Badge>
                  </CardContent>
                </Card>

                <Card className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                  <CardHeader>
                    <CardTitle>Backend</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Badge className="mr-2">Node.js</Badge>
                    <Badge className="mr-2">Python</Badge>
                    <Badge className="mr-2">FastAPI</Badge>
                    <Badge className="mr-2">GraphQL</Badge>
                  </CardContent>
                </Card>

                <Card className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                  <CardHeader>
                    <CardTitle>Infrastructure</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Badge className="mr-2">Docker</Badge>
                    <Badge className="mr-2">Kubernetes</Badge>
                    <Badge className="mr-2">AWS</Badge>
                    <Badge className="mr-2">Redis</Badge>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="architecture" className="space-y-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>System Architecture Principles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Microservices Architecture</h4>
                    <p className="text-sm text-muted-foreground">
                      Each project is built with loosely coupled services, enabling independent scaling and deployment.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Event-Driven Communication</h4>
                    <p className="text-sm text-muted-foreground">
                      Asynchronous messaging ensures system resilience and real-time responsiveness.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cloud-Native Design</h4>
                    <p className="text-sm text-muted-foreground">
                      Built for the cloud with containerization, orchestration, and auto-scaling capabilities.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Security by Design</h4>
                    <p className="text-sm text-muted-foreground">
                      Zero-trust architecture with end-to-end encryption and comprehensive monitoring.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Technical;