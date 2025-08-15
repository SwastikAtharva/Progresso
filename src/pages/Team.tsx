import { Navbar } from "@/components/Navbar";
import { Linkedin } from "lucide-react";

const Team = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20 bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/3 rounded-full blur-2xl animate-bounce" style={{animationDuration: '3s'}}></div>
        </div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-scale-in-bounce">
              Meet Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '300ms'}}>
              The passionate innovators building the future, one breakthrough at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
            {
                name: "Swastik Atharva",
                role: "Frontend Developer and Researcher",
                image: "/lovable-uploads/61c82308-d188-44bc-b3f6-1527f34f8443.png",
                linkedin: "https://www.linkedin.com/in/swastik-atharva-1b1aa8290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              },
              {
                name: "Venkat Narayanan",
                role: "Automation Tester and Backend Developer",
                image: "/lovable-uploads/0bde348e-1c3f-4aaf-b950-24ceda38d807.png",
                linkedin: "https://www.linkedin.com/in/venkat-narayan-t-l-427a97234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              },
              {
                name: "Archana I",
                role: "Data Engineer",
                image: "/lovable-uploads/5ded2350-59bf-4398-b8b7-c6441f02a315.png",
                linkedin: "https://www.linkedin.com/in/archana-i-60a583235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              },
              {
                name: "Trivikram Narayanan",
                role: "Devops and Security",
                image: "/lovable-uploads/e06fd11e-3325-48e6-b528-539aaea12e06.png",
                linkedin: "https://www.linkedin.com/in/shalini-jd-aa3b8a293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              },
              {
                name: "kshama Rajoop",
                role: "Frontend Developer and Cybersecurity",
                image: "/lovable-uploads/kshama-profile.png.jpg",
                linkedin: "https://www.linkedin.com/in/kshamaa-rajoop-40b76a281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              },
              {
                name: "Shalini J.D",
                role: "Researcher and Data Analyst",
                image: "/lovable-uploads/shalini.png.jpg",
                linkedin: "https://www.linkedin.com/in/shalini-jd-aa3b8a293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
            ].map((member, index) => (
              <div 
                key={member.name}
                className="group bg-card/80 backdrop-blur-enhanced rounded-xl p-6 border-2 border-border/50 shadow-lg hover:shadow-glow-lg hover:shadow-primary/20 transition-all duration-500 animate-scale-in-bounce hover:scale-105 hover:bg-card/90 hover:border-primary/30 cursor-pointer relative overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden ring-4 ring-transparent group-hover:ring-primary/40 transition-all duration-500 group-hover:scale-110 animate-fade-in" style={{animationDelay: `${index * 200 + 150}ms`}}>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-125 group-hover:brightness-110 group-hover:contrast-110"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2 group-hover:text-primary transition-all duration-300 group-hover:scale-105 animate-fade-in-up" style={{animationDelay: `${index * 200 + 300}ms`}}>{member.name}</h3>
                  <p className="text-muted-foreground text-center text-sm mb-4 group-hover:text-foreground transition-colors duration-300 animate-fade-in-up" style={{animationDelay: `${index * 200 + 450}ms`}}>{member.role}</p>
                  <div className="text-center opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform translate-y-4 group-hover:translate-y-0 animate-fade-in-up" style={{animationDelay: `${index * 200 + 800}ms`}}>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary hover:text-white px-4 py-2 rounded-full text-primary text-sm transition-all duration-500 ease-out hover:scale-110 magnetic-button hover:shadow-glow"
                    >
                      <Linkedin className="h-4 w-4 transition-transform duration-500 ease-out hover:rotate-12" />
                      <span className="transition-all duration-500 ease-out hover:tracking-wider">Connect</span>
                    </a>
                  </div>
                </div>
                
                {/* Floating particles on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary rounded-full animate-float" style={{ animationDelay: `${index}s` }} />
                  <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: `${index + 1}s` }} />
                  <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-primary rounded-full animate-float" style={{ animationDelay: `${index + 2}s` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground">
              Ready to upload team photos? Contact us to add your team's faces to this page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;