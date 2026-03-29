import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ✏️ EDIT: Replace these placeholder projects with your real projects */
const projects = [
  {
    title: "Demand Forecasting Model",
    problem: "Tradional forecasting is highly manual and not scalable, while fully automated ML models lacked business context. The challenge is to balance automation with human expertise to improve accuracy and efficiency.",
    tools: ["Excel", "Python", "Pandas", "Time Series"],
    outcome: "Reduced planner workload from 1000+ SKUs to around 100 key items. Improved forecasting accuracy by approximately 4%.",
    github: "#", // ✏️ EDIT: Add your GitHub link
    caseStudy: "#", // ✏️ EDIT: Add case study link or remove
  },
  {
    title: "Spend Analysis Dashboard",
    problem: "Dashboard is built using an open-source dataset (with a simplified data structure) to showcase core spend analysis and visualization skills.",
    tools: ["Power BI", "SQL", "DAX"],
    outcome: "Created an interactive dashboard enabling spend visibility, identifying high-cost categories, supplier concentration, and opportunities for cost optimization.",
    github: "https://github.com/jayeshdcosta/jayeshdcosta/blob/main/src/assets/Spend%20Analysis.pbix",
    caseStudy: "https://github.com/jayeshdcosta/jayeshdcosta/blob/main/src/assets/Spend%20Analysis.pdf",
  },
  {
    title: "Inventory Dashboard",
    problem: "Upload Pending",
    tools: ["Power BI", "SQL", "DAX"],
    outcome: "pending",
    github: "#",
    caseStudy: "#",
  },
  {
    title: "4FLOW Sustainability challenge",
    problem: "Upload Pending",
    tools: ["Excel", "Pivot Tables", "Data Modeling"],
    outcome: "Pending",
    github: "#",
    caseStudy: "",
  },
  {
    title: "Pending",
    problem: "Upload Pending",
    tools: ["Excel", "Process Mapping", "Lean"],
    outcome: "Proposed layout changes that reduced average picking time by 18% in simulation.",
    github: "#",
    caseStudy: "#",
  },
  {
    title: "S&OP Planning Dashboard",
    problem: "Upload Pending",
    tools: ["Power BI", "SQL", "Excel"],
    outcome: "Pending",
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
