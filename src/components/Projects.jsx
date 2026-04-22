import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Eye, X, ClipboardCheck, Smartphone, Users, GraduationCap, LineChart, ArrowLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 3,
    title: "Data Analysis Dashboard",
    modalTitle: "Data Analysis / Dashboard",
    subtitle: "Comprehensive Data Analysis and Reporting Dashboard",
    description: "An interactive Data Analysis Dashboard designed to visualize complex datasets and uncover actionable insights. Built with Python and modern data analysis libraries to process, analyze, and present data effectively.",
    image: "/project_employee.png",
    icon: LineChart,
    features: [
      "Interactive data visualization to track key metrics and trends",
      "Automated data preprocessing and cleaning pipelines",
      "Comprehensive reporting and statistical analysis modules",
      "User-friendly dashboard interface for data exploration"
    ],
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Analysis"],
    demoLink: "https://github.com/Tanveer2507/Data-Analysis-Dashboard",
    githubLink: "https://github.com/Tanveer2507/Data-Analysis-Dashboard",
  },
  {
    id: 4,
    title: "Breast Cancer Diagnosis Predictor",
    modalTitle: "Diagnostics / ML Predictor",
    subtitle: "Machine learning model for predicting breast cancer diagnosis",
    description: "A predictive machine learning model developed to classify and assist in diagnosing breast cancer. Implemented using Python and various classification algorithms to evaluate clinical data features and improve early detection accuracy.",
    image: "/project_student.png",
    icon: ClipboardCheck,
    features: [
      "Built a machine learning classification model to predict breast cancer",
      "Utilized clinical datasets for training and algorithmic testing",
      "Performed comprehensive data preprocessing and feature scaling",
      "Evaluated model performance using accuracy, precision, and recall matrices"
    ],
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Data Science", "Machine Learning"],
    demoLink: "https://breastcancerdiagnosispredictor.streamlit.app/",
    githubLink: "https://github.com/Tanveer2507/Breast_Cancer_Diagnosis_Predictor",
  },
  {
    id: 5,
    title: "Car Price Prediction Web Application",
    modalTitle: "Car Price / ML System",
    subtitle: "Machine learning–powered system with real-time inference",
    description: "Built a machine learning–powered car price prediction system with real-time inference. Developed clean ETL pipelines for data preprocessing and feature engineering, and improved prediction accuracy by optimising model performance and input handling. Designed an intuitive, responsive UI using Streamlit to enhance user experience.",
    image: "/project_carprice.png",
    icon: LineChart,
    features: [
      "Built a machine learning–powered car price prediction system with real-time inference",
      "Developed clean ETL pipelines for data preprocessing and feature engineering",
      "Improved prediction accuracy by optimising model performance",
      "Designed an intuitive, responsive UI using Streamlit"
    ],
    tech: ["Python", "Streamlit", "Pandas", "NumPy", "Scikit-Learn", "Pickle", "Machine Learning"],
    demoLink: "https://carpricepredictionmodelapp.streamlit.app/",
    githubLink: "https://github.com/Tanveer2507/Car_Price_Prediction_Model_App.git",
  },
  {
    id: 6,
    title: "Credit Risk Analysis Dashboard",
    modalTitle: "Risk Analysis / ML Dashboard",
    subtitle: "Predict Customer Credit Risk using Machine Learning",
    description: "An interactive Machine Learning dashboard built to predict customer credit risk and facilitate smarter financial decisions. Developed an intuitive Streamlit interface that provides real-time ML-powered predictions, comprehensive feature analysis, and model performance metrics.",
    image: "/project_credit_risk.png",
    icon: LineChart,
    features: [
      "Provides real-time, ML-powered credit risk predictions",
      "Interactive Streamlit dashboard for comprehensive risk analysis",
      "Visualization of dataset features and model performance metrics",
      "Utilizes advanced ML libraries including Scikit-Learn and Imbalanced-Learn"
    ],
    tech: ["Python", "Streamlit", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn", "Imbalanced-Learn", "Machine Learning"],
    demoLink: "https://loan-risk-predictor-dashboard.streamlit.app/",
    githubLink: "https://github.com/Tanveer2507/Credit-Risk-Analysis-Dashboard.git",
  }
];

const Projects = ({ viewState = 'home', onViewChange }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const displayedProjects = viewState === 'home' ? projects.slice(0, 2) : projects;

  return (
    <section id="projects" className="py-4 px-6 md:px-12 bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-textPrimary mb-4 font-serif tracking-tight">Featured Projects</h2>
          <p className="text-textSecondary mb-6 max-w-2xl mx-auto text-[15px] font-medium">
            A showcase of my work in building scalable applications and digital solutions
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {viewState !== 'home' && (
          <div className="mb-8 font-sans">
            <button 
              onClick={() => {
                if (onViewChange) onViewChange('home');
                setTimeout(() => {
                  const pSection = document.getElementById('projects');
                  if (pSection) window.scrollTo({ top: pSection.offsetTop - 100, behavior: 'smooth' });
                }, 50);
              }}
              className="flex items-center gap-2 text-primary hover:text-[#050505] transition-colors font-bold uppercase tracking-wide text-xs bg-primary/10 border border-primary/20 hover:bg-primary px-4 py-2 rounded-lg w-max shadow-md"
            >
              <ArrowLeft size={16} strokeWidth={2.5} /> Back to Home
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card border border-textPrimary/5 rounded-[12px] overflow-hidden group flex flex-col hover:border-primary/20 transition-all shadow-lg"
            >
              <div className="relative overflow-hidden h-64 aspect-video">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-300"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 bg-[#111]"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-[22px] font-bold text-textPrimary mb-3">{project.title}</h3>
                <p className="text-textSecondary/90 mb-6 flex-1 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[11px] px-3 py-1 bg-primary/10 text-primary rounded-full font-bold">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-auto pt-5 border-t border-textPrimary/5">
                  <div className="flex items-center gap-4">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-textPrimary hover:text-primary transition-colors text-sm font-medium">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-textSecondary hover:text-textPrimary transition-colors text-sm font-medium">
                      <FaGithub size={16} /> Code
                    </a>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-primary hover:brightness-125 font-bold text-[13px] tracking-wide transition-all uppercase"
                  >
                    <Eye size={16} strokeWidth={2.5} /> View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {viewState === 'home' && projects.length > 2 && (
          <div className="mt-14 flex justify-center">
            <button 
              onClick={() => {
                if (onViewChange) onViewChange('all_projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-[#050505] px-8 py-3 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(34,197,94,0.15)] flex items-center justify-center"
            >
              Show All Projects
            </button>
          </div>
        )}
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card border border-textPrimary/10 rounded-xl w-full max-w-[500px] overflow-hidden flex flex-col max-h-[90vh] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Title with X button */}
              <div className="flex items-center justify-between p-5 pb-4">
                 <h2 className="text-xl font-serif font-bold tracking-wide flex gap-2">
                    <span className="text-textPrimary">{selectedProject.modalTitle.split('/')[0]} /</span> 
                    <span className="text-primary">{selectedProject.modalTitle.split('/')[1] || "Project"}</span>
                 </h2>
                 <button 
                   onClick={() => setSelectedProject(null)}
                   className="text-textSecondary hover:text-textPrimary p-1 border border-textPrimary/10 rounded-md hover:bg-textPrimary/5 transition-colors"
                 >
                   <X size={16} />
                 </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto px-5 pb-8 custom-scrollbar">
                
                {/* Big Blue Header Card */}
                <div className="bg-gradient-to-br from-[#1b84d1] to-[#156cac] rounded-xl p-6 flex items-center gap-5 text-white mb-8 shadow-inner shadow-blue-400/20">
                  <div className="shrink-0 flex items-center justify-center">
                    {selectedProject.icon ? (
                      <selectedProject.icon size={60} strokeWidth={1.5} className="text-white drop-shadow-md" />
                    ) : (
                      <ClipboardCheck size={60} strokeWidth={1.5} className="text-white drop-shadow-md" />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold mb-1 drop-shadow-sm">{selectedProject.title.split(' ')[0]}</h3>
                    <p className="text-sm text-blue-50 leading-snug drop-shadow-sm">
                      {selectedProject.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-primary font-bold text-[15px] mb-2 tracking-wide font-sans">Description</h4>
                  <p className="text-textSecondary/90 text-[13px] leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h4 className="text-primary font-bold text-[15px] mb-3 tracking-wide font-sans">Key Features</h4>
                  <ul className="space-y-2.5">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-textSecondary/90 text-[13px] leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5 shadow-[0_0_5px_rgba(0,208,156,0.5)]"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="text-primary font-bold text-[15px] mb-3 tracking-wide font-sans">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-primary font-bold text-[#050505] text-[11px] rounded-full shadow-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
