import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ✏️ EDIT: Replace these placeholder projects with your real projects */
const projects = [
  {
    title: "Demand Forecasting Model",
    problem: "Unpredictable demand patterns causing excess inventory and stockouts across 200+ SKUs.",
    tools: ["Excel", "Python", "Pandas", "Time Series"],
    outcome: "Improved forecast accuracy by 30%, reducing carrying costs by $150K annually.",
    github: "#", // ✏️ EDIT: Add your GitHub link
    caseStudy: "#", // ✏️ EDIT: Add case study link or remove
  },
  {
    title: "Inventory Optimization Dashboard",
    problem: "Lack of visibility into inventory levels across multiple warehouse locations.",
    tools: ["Power BI", "SQL", "DAX"],
    outcome: "Created real-time dashboard enabling data-driven reorder decisions, reducing overstock by 22%.",
    github: "https://github.com/jayeshdcosta/jayeshdcosta/blob/main/src/assets/Spend%20Analysis.pbix",
    caseStudy: "https://github.com/jayeshdcosta/jayeshdcosta/blob/main/src/assets/Spend%20Analysis.pdf",
  },
  {
    title: "Supplier Performance Scorecard",
    problem: "No standardized method to evaluate and compare supplier reliability and quality.",
    tools: ["Excel", "Power BI", "VBA"],
    outcome: "Built automated scorecard tracking 15+ KPIs across 50 suppliers, improving vendor accountability.",
    github: "#",
    caseStudy: "#",
  },
  {
    title: "Logistics Cost Analysis",
    problem: "Rising transportation costs with limited understanding of cost drivers.",
    tools: ["Excel", "Pivot Tables", "Data Modeling"],
    outcome: "Identified $80K in savings opportunities by analyzing route efficiency and carrier performance.",
    github: "#",
    caseStudy: "",
  },
  {
    title: "Warehouse Operations Analysis",
    problem: "Inefficient warehouse layout and picking processes leading to delayed order fulfillment.",
    tools: ["Excel", "Process Mapping", "Lean"],
    outcome: "Proposed layout changes that reduced average picking time by 18% in simulation.",
    github: "#",
    caseStudy: "#",
  },
  {
    title: "S&OP Planning Dashboard",
    problem: "Misalignment between sales forecasts and production planning causing operational disruptions.",
    tools: ["Power BI", "SQL", "Excel"],
    outcome: "Unified sales and operations data into a single dashboard, improving planning cycle efficiency by 35%.",
    github: "#",
    caseStudy: "",
  },
];

const Projects = () => (
  <SectionWrapper
    id="projects"
    title="Projects"
    subtitle="Supply chain analytics projects solving real business challenges"
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="bg-card rounded-xl border border-border p-6 flex flex-col group hover:border-accent/40 transition-all duration-300"
          style={{ boxShadow: "var(--card-shadow)" }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow-hover)")}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "var(--card-shadow)")}
        >
          <h3 className="font-bold text-foreground mb-2">{project.title}</h3>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">{project.problem}</p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full font-medium"
              >
                {tool}
              </span>
            ))}
          </div>

          <p className="text-sm text-foreground font-medium mb-4 bg-muted/50 rounded-lg p-3 border-l-2 border-accent">
            {project.outcome}
          </p>

          <div className="flex gap-2 mt-auto">
            <Button size="sm" variant="outline" className="flex-1" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-3.5 h-3.5 mr-1.5" />
                GitHub
              </a>
            </Button>
            {project.caseStudy && (
              <Button size="sm" className="flex-1 bg-primary text-primary-foreground" asChild>
                <a href={project.caseStudy} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                  Case Study
                </a>
              </Button>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default Projects;
