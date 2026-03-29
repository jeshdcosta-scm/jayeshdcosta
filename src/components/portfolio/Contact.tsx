import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <SectionWrapper id="contact" title="Get In Touch" subtitle="Let's connect and discuss how I can add value to your team">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto text-center space-y-6"
    >
      <p className="text-muted-foreground">
        I'm always open to discussing supply chain planning, procurement strategy,
        or collaboration opportunities. Feel free to reach out!
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button size="lg" className="bg-primary text-primary-foreground" asChild>
          <a href="mailto:jeshdcosta@gmail.com">
            <Mail className="w-4 h-4 mr-2" />
            Email Me
          </a>
        </Button>
        {/* ✏️ EDIT: Update LinkedIn URL */}
        <Button size="lg" variant="outline" asChild>
          <a href="https://linkedin.com/in/jayeshdcosta" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </a>
        </Button>
        {/* ✏️ EDIT: Update GitHub URL */}
        <Button size="lg" variant="outline" asChild>
          <a href="https://github.com/jayeshdcosta" target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </a>
        </Button>
      </div>
    </motion.div>
  </SectionWrapper>
);

export default Contact;
