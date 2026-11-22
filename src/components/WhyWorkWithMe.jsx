import { Brain, Lightbulb, BarChart3, Eye, BookOpen } from 'lucide-react'

const strengths = [
  { icon: Brain, title: 'Analytical Thinking', description: 'Breaking down complex datasets to identify patterns, trends, and actionable insights.', color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/20' },
  { icon: Lightbulb, title: 'Problem Solving', description: 'Approaching business problems with a data-driven mindset to find effective solutions.', color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20' },
  { icon: BarChart3, title: 'Data Visualization', description: 'Creating clear, impactful dashboards and charts that communicate insights effectively.', color: 'text-accent', bg: 'bg-accent/10', border: 'border-accent/20' },
  { icon: Eye, title: 'Attention to Detail', description: 'Ensuring data accuracy, consistency, and reliability in every step of the analysis process.', color: 'text-green-400', bg: 'bg-green-400/10', border: 'border-green-400/20' },
  { icon: BookOpen, title: 'Continuous Learning', description: 'Staying updated with the latest tools, techniques, and best practices in data analytics.', color: 'text-cyan-400', bg: 'bg-cyan-400/10', border: 'border-cyan-400/20' },
]

export default function WhyWorkWithMe() {
  return (
    <section className="py-20 lg:py-28 section-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why <span className="gradient-text">Work With Me</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Core strengths I bring to every data analysis project</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {strengths.map((s) => (
            <div key={s.title} className="glass-card rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 group">
              <div className={`inline-flex p-4 rounded-2xl ${s.bg} border ${s.border} mb-5 transition-transform duration-300 group-hover:scale-110`}>
                <s.icon size={28} className={s.color} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
