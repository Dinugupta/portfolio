import { Table2, Database, BarChart3, Code, Search } from 'lucide-react'

const skills = [
  {
    icon: Table2,
    title: 'Excel',
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/20',
    items: ['XLOOKUP', 'SUMIFS / COUNTIFS', 'Pivot Tables', 'Charts', 'Data Cleaning', 'Formulas'],
  },
  {
    icon: Database,
    title: 'SQL',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
    items: ['SELECT / WHERE', 'GROUP BY / HAVING', 'ORDER BY', 'JOINs', 'Aggregate Functions', 'Subqueries'],
  },
  {
    icon: BarChart3,
    title: 'Power BI',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20',
    items: ['Power Query', 'DAX Measures', 'Data Modeling', 'KPI Dashboards', 'Interactive Reports', 'Slicers & Filters'],
  },
  {
    icon: Code,
    title: 'Python',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Data Wrangling', 'EDA'],
  },
  {
    icon: Search,
    title: 'Data Analysis',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20',
    items: ['Data Cleaning', 'Preprocessing', 'Trend Analysis', 'Pattern Identification', 'Reporting', 'Insights'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28 bg-navy-800/30 section-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Tools and technologies I use to turn raw data into actionable insights
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className={`p-3 rounded-xl ${skill.bg} border ${skill.border} transition-transform duration-300 group-hover:scale-110`}>
                  <skill.icon size={22} className={skill.color} />
                </div>
                <h3 className="text-xl font-bold text-white">{skill.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className={`text-xs px-3 py-1.5 rounded-full ${skill.bg} ${skill.color} border ${skill.border} font-medium`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
