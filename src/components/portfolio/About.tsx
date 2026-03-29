import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { TrendingUp, BarChart3, Settings, BookOpen } from "lucide-react";

const highlights = [
  { icon: TrendingUp, label: "Supply Chain Planning", desc: "Demand forecasting, supply planning, S&OP, and inventory optimization" },
  { icon: BarChart3, label: "Data-Driven Decisions", desc: "KPI dashboards with Power BI, Tableau, and advanced Excel" },
  { icon: Settings, label: "Process Optimization", desc: "Procurement digitalization, P2P systems, and ERP automation" },
  { icon: BookOpen, label: "Continuous Learning", desc: "MBA graduate, ML thesis, CSCMP certifications, SQL & Python" },
];

const About = () => (
  <SectionWrapper
    id="about"
    title="About Me"
    subtitle="Bridging supply chain operations with data analytics"
  >
    <div className="grid md:grid-cols-2 gap-12 items-start">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4 text-muted-foreground leading-relaxed"
      >
        <p>
          I'm a Supply Chain Planning Professional with 5+ years of experience across
          demand planning, supply planning, and inventory management in manufacturing,
          healthcare, and retail environments. Based in Hamburg, Germany.
        </p>
        <p>
          My focus is on transforming supply chain data into actionable insights —
          whether it's improving forecast accuracy, optimizing inventory levels,
          or driving S&OP alignment. I've worked hands-on with SAP MM, Oracle Cloud,
          Power BI, Tableau, and SQL.
        </p>
        <p>
          I hold an MBA from HTW Berlin where my thesis explored the business impact
          of machine learning in demand forecasting. I'm CSCMP certified in Demand Planning,
          Procurement, and Inventory Management.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {highlights.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-card rounded-xl p-5 border border-border"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            <item.icon className="w-8 h-8 text-accent mb-3" />
            <h3 className="font-semibold text-foreground text-sm mb-1">{item.label}</h3>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export default About;
