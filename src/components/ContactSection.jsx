import {
  Linkedin,
  Mail,
  MapPin,
  Send,
  Github,
  Trophy,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities in software engineering, competitive programming, or data science.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
              Contact Information
            </h3>

            <div className="space-y-6 justify-center md:justify-start">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:najmulsabbir2020@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    najmulsabbir2020@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Codeforces</h4>
                  <a
                    href="https://codeforces.com/profile/Najmul_Hasan"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    <span className="font-semibold">Najmul_Hasan</span>
                    <span className="text-xs bg-green-500/20 text-green-600 px-2 py-0.5 rounded-full">Specialist: 1154</span>
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> LeetCode</h4>
                  <a
                    href="https://leetcode.com/u/najmulsabbir2020/"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    najmulsabbir2020
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Dhaka, Bangladesh <span className="text-primary">(Banani)</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center md:text-left"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a 
                  href="https://www.linkedin.com/in/najmul-hasan-sabbir-7257912a3/" 
                  target="_blank"
                  className="p-3 rounded-full bg-secondary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                  title="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://github.com/Najmul-Hasan-Sabbir" 
                  target="_blank"
                  className="p-3 rounded-full bg-secondary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                  title="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://codeforces.com/profile/Najmul_Hasan" 
                  target="_blank"
                  className="p-3 rounded-full bg-secondary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                  title="Codeforces"
                >
                  <Trophy className="h-5 w-5" />
                </a>
                <a 
                  href="https://leetcode.com/u/najmulsabbir2020/" 
                  target="_blank"
                  className="p-3 rounded-full bg-secondary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                  title="LeetCode"
                >
                  <Award className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:najmulsabbir2020@gmail.com" 
                  className="p-3 rounded-full bg-secondary hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                  title="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your name..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Project collaboration, Opportunity, Question..."
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello Najmul, I'd like to discuss..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};