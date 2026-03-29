import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Supply Chain Planning Specialist",
    company: "Amplifon SpA — Hamburg, Germany",
    duration: "Apr 2025 – Mar 2026",
    bullets: [
      "Managed SKU-level demand forecasting and country-level supply planning, improving forecast accuracy and service level",
      ],
  },
  {
    title: "Procurement",
    company: "Amplifon SpA — Hamburg, Germany",
    duration: "Jun 2024 – Mar 2025",
    bullets: [
      "Drove change management for a new Procure-to-Pay (P2P) system, improving P2P adoption by 12%",
      ],
  },
  {
    title: "Procurement Specialist",
    company: "Sun Pharma Ltd. — Mumbai, India",
    duration: "Aug 2022 – Nov 2023",
    bullets: [
      "Owned end-to-end indirect procurement category (INR 12 Cr spend), achieving 9% cost savings through strategic sourcing",
     ],
  },
  {
    title: "Global Procurement Specialist",
    company: "Piramal Enterprises Ltd. — Mumbai, India",
    duration: "Feb 2021 – Aug 2022",
    bullets: [
      "Acted as key interface between global and local procurement teams, aligning category strategies across regions",
       ],
  },
  {
    title: "Procurement & Supply Chain",
    company: "Rochem Separation Systems — Mumbai, India",
    duration: "Dec 2019 – Feb 2021",
    bullets: [
      "Oversaw direct procurement, material planning, supplier performance, and project demand to ensure uninterrupted production.",
    ],
  },
];

const Experience = () => (
  <SectionWrapper
    id="experience"
    title="Experience"
    subtitle="Professional journey in supply chain planning and procurement"
  >
    <div className="max-w-3xl mx-auto space-y-6">
      {experiences.map((exp, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="bg-card rounded-xl p-6 border border-border relative"
          style={{ boxShadow: "var(--card-shadow)" }}
        >
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-2.5 rounded-lg shrink-0 mt-0.5">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="font-bold text-foreground">{exp.title}</h3>
                <span className="text-xs text-muted-foreground font-medium bg-secondary px-3 py-1 rounded-full mt-1 sm:mt-0 w-fit">
                  {exp.duration}
                </span>
              </div>
              <p className="text-sm text-accent font-medium mb-3">{exp.company}</p>
              <ul className="space-y-1.5">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Experience;
