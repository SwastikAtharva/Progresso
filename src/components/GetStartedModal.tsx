import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
  project?: {
    title: string;
    status: string;
    cta: string;
  };
  type?: "early-access" | "beta" | "feature-suggestion" | "newsletter";
}

export const GetStartedModal = ({ isOpen, onClose, project, type = "early-access" }: GetStartedModalProps) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: getSuccessMessage(),
      });
      setEmail("");
      setMessage("");
      onClose();
    }, 1000);
  };

  const getSuccessMessage = () => {
    switch (type) {
      case "beta":
        return "You've been added to the beta waitlist!";
      case "feature-suggestion":
        return "Thank you for your suggestion! We'll review it carefully.";
      case "newsletter":
        return "Welcome to our newsletter! You'll get updates on all our projects.";
      default:
        return project 
          ? `You're on the early access list for ${project.title}!`
          : "You're on our early access list!";
    }
  };

  const getTitle = () => {
    if (project) return project.cta;
    
    switch (type) {
      case "beta":
        return "Join Beta Program";
      case "feature-suggestion":
        return "Suggest a Feature";
      case "newsletter":
        return "Subscribe to Newsletter";
      default:
        return "Get Early Access";
    }
  };

  const getDescription = () => {
    if (project) {
      return `Get early access to ${project.title} and be among the first to experience our latest innovation.`;
    }
    
    switch (type) {
      case "beta":
        return "Join our beta program and help shape the future of our products.";
      case "feature-suggestion":
        return "Have an idea that could make our products better? We'd love to hear it!";
      case "newsletter":
        return "Stay updated with our latest developments, launches, and behind-the-scenes insights.";
      default:
        return "Get exclusive early access to our latest innovations before they launch.";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {getTitle()}
            {project && (
              <Badge variant={project.status === "Alpha" ? "destructive" : 
                           project.status === "Beta" ? "default" : "secondary"}>
                {project.status}
              </Badge>
            )}
          </DialogTitle>
          <DialogDescription>
            {getDescription()}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {type === "feature-suggestion" && (
            <div>
              <label htmlFor="message" className="text-sm font-medium">
                Your Suggestion
              </label>
              <Textarea
                id="message"
                placeholder="Describe your feature idea..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                required
              />
            </div>
          )}

          {(type === "early-access" || type === "beta") && (
            <div>
              <label htmlFor="message" className="text-sm font-medium">
                Tell us about your use case (optional)
              </label>
              <Textarea
                id="message"
                placeholder="How do you plan to use this? Any specific requirements?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
              />
            </div>
          )}

          <div className="flex gap-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              {type === "newsletter" ? "Subscribe" : "Submit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};