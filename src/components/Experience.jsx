import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Data Analyst",
    isCurrent: true,
    company: "D Trade Capital",
    duration: "11/2025 - Present",
    location: "Tamil Nadu, Karnataka",
    description: [
      "Improved dataset accuracy by 20% through preprocessing with Python & Pandas.",
      "Designed optimized SQL schemas, reducing report generation time by 15%.",
      "Built interactive dashboards in Power BI to support business decisions.",
      "Mentored 3 interns, ensuring timely and quality project delivery."
    ],
    tech: ["Python", "Pandas", "SQL", "Power BI"]
  },
  {
    id: 2,
    role: "Web Development & Design Intern",
    isCurrent: false,
    company: "Oasis Infobyte",
    duration: "07/2024 - 08/2024",
    location: "Pune, Maharashtra",
    description: [
      "Built and deployed 2 responsive websites within one month.",
      "Received 100% positive client feedback for quality and timeliness.",
      "Enhanced UI/UX, increasing site engagement by 25%."
    ],
    tech: ["HTML", "CSS", "JavaScript", "UI/UX"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-4 px-4 md:px-12 bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">Experience</h2>
          <p className="text-textSecondary max-w-2xl mx-auto text-[15px] font-medium leading-relaxed mb-6">
            My professional journey in data analytics, processing pipelines, and data-driven solutions
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`glass-card p-8 flex flex-col h-full transition-all duration-300 ${exp.isCurrent ? 'border-2 border-primary bg-primary/5 shadow-[0_0_30px_rgba(34,197,94,0.25)] transform md:-translate-y-1' : 'border-textPrimary/10 hover:border-primary/50'
                }`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <div className={`w-[3.5rem] h-[3.5rem] rounded-full flex items-center justify-center shrink-0 ${exp.isCurrent ? 'bg-primary text-[#050505]' : 'bg-card border-2 border-primary text-primary'}`}>
                  <Briefcase size={24} />
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-bold text-textPrimary font-serif tracking-wide">{exp.role}</h3>
                    {exp.isCurrent && (
                      <span className="bg-primary text-[#050505] text-xs font-bold px-3 py-1 rounded-full">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-primary font-medium mt-1">
                    <Building2 size={16} />
                    <span>{exp.company}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-textSecondary text-sm mb-6">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  <span>{exp.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </div>
              </div>

              <div className="text-textSecondary/90 leading-relaxed mb-8 flex-grow text-sm md:text-base">
                {Array.isArray(exp.description) ? (
                  <ul className="list-disc pl-4 space-y-2">
                    {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                ) : (
                  <p>{exp.description}</p>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {exp.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-primary/10 text-textSecondary text-xs font-semibold tracking-wide rounded-full border border-textPrimary/5">
                    {t}
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

export default Experience;
