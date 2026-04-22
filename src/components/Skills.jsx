import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Data Analysis & Visualization",
    skills: ["Python", "Pandas", "NumPy", "Power BI", "Excel", "Tableau", "Matplotlib"]
  },
  {
    title: "Databases & SQL",
    skills: ["SQL", "PostgreSQL", "MySQL", "Data Modeling", "Database Design", "ETL Pipelines"]
  },
  {
    title: "Machine Learning & Statistics",
    skills: ["Scikit-Learn", "Machine Learning", "Statistics", "Predictive Analytics", "A/B Testing"]
  },
  {
    title: "Tools & Deployment",
    skills: ["Jupyter Notebook", "Git", "GitHub", "Streamlit", "AWS", "VS Code", "Vercel"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-4 px-6 md:px-12 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-textPrimary mb-4">Skills & Expertise</h2>
          <p className="text-textSecondary mb-6 max-w-2xl mx-auto text-lg">
            Technical expertise across technologies and development tools
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 hover:border-primary/40 transition-colors"
            >
              <h3 className="text-2xl font-bold text-textPrimary mb-6 flex items-center gap-3">
                <span className="w-2 h-8 rounded bg-secondary block"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-dark/50 text-textSecondary rounded-lg border border-textPrimary/5 hover:border-secondary hover:text-textPrimary transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
