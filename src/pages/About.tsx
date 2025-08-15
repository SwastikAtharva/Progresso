import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Target, Users, Lightbulb, Code2, Network } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technology and creative solutions."
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Building secure, transparent platforms that protect user data."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Developing solutions with and for our users, shaped by real feedback."
    },
    {
      icon: Target,
      title: "Real Impact",
      description: "Creating products that solve actual problems and make a difference."
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
          {/* Mission Statement */}
          <section className="text-center mb-20">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-scale-in-bounce">
              About Progresso
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{animationDelay: '200ms'}}>
              Innovating the Future, One Product at a Time
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '400ms'}}>
              We're building tomorrow's essential tools today. Through transparent development and community collaboration, 
              we create AI-powered platforms that solve real-world problems across cybersecurity, data visualization, 
              collaborative coding, and intelligent automation.
            </p>
          </section>

          {/* Our Story */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Story</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed animate-fade-in-up" style={{animationDelay: '200ms'}}>
                  Born from a passion for solving complex problems through technology, Progresso emerged as a studio 
                  focused on building multiple AI-driven solutions simultaneously. We believe in the power of 
                  transparency and community-driven development.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed animate-fade-in-up" style={{animationDelay: '400ms'}}>
                  Our expertise spans artificial intelligence, IoT integration, cybersecurity frameworks, and 
                  data visualization. Each project we undertake addresses a specific gap in the market, 
                  from empowering SMBs with AI support to providing real-time crime insights for safer communities.
                </p>
                <p className="text-muted-foreground leading-relaxed animate-fade-in-up" style={{animationDelay: '600ms'}}>
                  By building in public, we invite the world to witness our journey, contribute feedback, 
                  and help shape products that truly serve their intended purpose.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Code2, title: "5+", desc: "Active Projects" },
                  { icon: Network, title: "AI-First", desc: "Approach" },
                  { icon: Users, title: "Community", desc: "Driven" },
                  { icon: Shield, title: "Secure", desc: "By Design" }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card key={item.desc} className="text-center group hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-scale-in-bounce" style={{animationDelay: `${(index + 8) * 100}ms`}}>
                      <CardContent className="pt-6">
                        <IconComponent className="h-12 w-12 text-primary mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:animate-float" />
                        <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h4>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{item.desc}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="mb-20 relative">
            {/* Subtle background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 -left-10 w-20 h-20 bg-primary/5 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}} />
              <div className="absolute bottom-1/4 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-float" style={{animationDelay: '6s'}} />
            </div>
            
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in-up">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {values.map((value, index) => (
                <Card 
                  key={value.title}
                  className="text-center group hover:shadow-glow-lg transition-all duration-500 hover:-translate-y-2 animate-scale-in-bounce cursor-pointer border-2 hover:border-accent/50"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader>
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4 transition-all duration-300 group-hover:scale-125 group-hover:animate-float group-hover:text-accent" />
                    <CardTitle className="text-lg transition-colors duration-300 group-hover:text-primary">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default About;