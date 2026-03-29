import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center" style={{ background: "var(--hero-gradient)" }}>
      <div className="section-container w-full py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="max-w-3xl flex-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-accent font-medium mb-4 text-sm tracking-widest uppercase"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            >
              Hi, I'm <span className="gradient-text">Jayesh Dcosta</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-4 font-medium"
            >
              Procurement & Supply Chain Professional
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-primary-foreground/60 mb-10 max-w-xl leading-relaxed"
            >
              Strategic Procurement Professional and Supply Chain Executor.
              Process Optimization, Digital transformation and turning data into actionable insights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold" asChild>
                <a href="#projects">
                  <ArrowDown className="w-4 h-4 mr-2" />
                  View Projects
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                asChild
              >
                <a href="#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl bg-primary-foreground/10">
              <img
                src={profilePhoto}
                alt="Jayesh Dcosta"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60L1440 60L1440 20C1440 20 1200 0 720 0C240 0 0 20 0 20L0 60Z"
            fill="hsl(40, 30%, 97%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
