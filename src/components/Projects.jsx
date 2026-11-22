import { ExternalLink, BarChart3, Users, Heart } from 'lucide-react'

const projects = [
  {
    icon: BarChart3,
    title: 'Sales Data Analysis Dashboard',
    techs: ['Excel', 'Power BI'],
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20',
    description: 'Analyzed sales performance data to uncover trends, identify top-performing products, and assess regional performance using interactive dashboards.',
    highlights: [
      'Cleaned and organized sales data using Excel',
      'Analyzed sales performance using formulas and Pivot Tables',
      'Created interactive Power BI dashboards with KPI cards',
      'Used DAX measures, slicers, and drill-through filters',
      'Analyzed products, customers, regions, and sales trends',
    ],
    repoUrl: null,
  },
  {
    icon: Users,
    title: 'Customer Data Analysis',
    techs: ['SQL'],
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
    description: 'Performed end-to-end analysis of customer and transaction datasets using SQL to extract actionable business insights.',
    highlights: [
      'Analyzed customer and transaction datasets',
      'Used SQL queries, JOINs, and aggregate functions',
      'Identified customer and transaction patterns',
      'Applied conditional filtering for segmentation',
      'Generated insights from business-related queries',
    ],
    repoUrl: null,
  },
  {
    icon: Heart,
    title: 'Heart Disease Prediction Using ML',
    techs: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
    color: 'text-red-400',
    bg: 'bg-red-400/10',
    border: 'border-red-400/20',
    description: 'Built a machine learning classification model to predict heart disease likelihood from patient health attributes.',
    highlights: [
      'Cleaned and preprocessed the dataset',
      'Performed exploratory data analysis',
      'Created visualizations to identify patterns',
      'Applied ML techniques for prediction',
      'Evaluated model performance and accuracy',
    ],
    repoUrl: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28 section-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real-world data analysis projects showcasing my technical skills and analytical thinking
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 group flex flex-col"
            >
              <div className="relative p-6 pb-4 border-b border-white/5">
                <div className={`absolute inset-0 ${project.bg} opacity-30`} />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl ${project.bg} border ${project.border}`}>
                      <project.icon size={20} className={project.color} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white leading-tight">{project.title}</h3>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techs.map((tech) => (
                      <span key={tech} className={`text-[11px] px-2.5 py-1 rounded-full ${project.bg} ${project.color} border ${project.border} font-medium`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${project.color.replace('text-', 'bg-')} shrink-0`} />
                      {h}
                    </li>
                  ))}
                </ul>
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 text-sm font-medium ${project.color} hover:underline`}>
                    <ExternalLink size={14} />
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
