import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { GraduationCap, Briefcase, Award, Rocket, Trophy } from "lucide-react";

const milestones = [
  {
    icon: GraduationCap,
    year: "2015 – 2018",
    title: "Bachelor of Mechanical Engineering",
    desc: "Mumbai University, Mumbai — Built a strong foundation in engineering and operations.",
  },
  {
    icon: Briefcase,
    year: "2019 – 2021",
    title: "Supply Chain Specialist at Rochem Separation Systems",
    desc: "Managed material planning, improved supplier OTIF from 85% to 93%, and handled SAP operations.",
  },
  {
    icon: Briefcase,
    year: "2021 – 2022",
    title: "Global Procurement Specialist at Piramal Enterprises",
    desc: "Aligned global procurement strategies, automated SAP reporting, and reduced manual workload by 20–30%.",
  },
  {
    icon: Briefcase,
    year: "2022 – 2023",
    title: "Procurement Specialist at Sun Pharma",
    desc: "Owned INR 12 Cr procurement category, achieved 9% cost savings, and supported Ivalua e-procurement implementation.",
  },
  {
    icon: GraduationCap,
    year: "2023 – 2025",
    title: "MBA at HTW Berlin",
    desc: "Master thesis on 'Business Impact of Machine Learning in Demand Forecasting' — collaborated with IT consultants and Global SCM team.",
  },
  {
    icon: Award,
    year: "2025",
    title: "CSCMP Certifications",
    desc: "Earned professional certificates in Demand Planning, Procurement, and Inventory Management.",
  },
  {
    icon: Trophy,
    year: "2025",
    title: "4Flow Europe — Competition Finalist",
    desc: "Developed an innovative logistics solution in a consulting-style case competition.",
  },
  {
    icon: Briefcase,
    year: "2025 – 2026",
    title: "Supply Chain Planning Specialist at Amplifon SpA",
    desc: "Improved forecast accuracy to 83%, reduced inventory by 18%, and led S&OP review meetings in Hamburg.",
  },
  {
    icon: Rocket,
    year: "Future",
    title: "Advanced Analytics & ML in Supply Chain",
    desc: "Expanding into predictive analytics, machine learning for demand forecasting, and end-to-end supply chain digitalization.",
  },
];

const Journey = () => (
  <SectionWrapper id="journey" title="My Journey" subtitle="Key milestones in my career and learning path">
    <div className="max-w-2xl mx-auto relative">
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

      <div className="space-y-8">
        {milestones.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-start gap-5 relative"
          >
            <div className="z-10 bg-background border-2 border-accent rounded-full p-2 shrink-0">
              <m.icon className="w-4 h-4 text-accent" />
            </div>
            <div className="bg-card rounded-xl p-5 border border-border flex-1" style={{ boxShadow: "var(--card-shadow)" }}>
              <span className="text-xs text-accent font-bold">{m.year}</span>
              <h3 className="font-bold text-foreground text-sm mt-1">{m.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default Journey;
