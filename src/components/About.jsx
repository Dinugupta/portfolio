import { MapPin, GraduationCap, Target, Briefcase } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 section-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Get to know who I am and what drives my passion for data
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {[
              { icon: MapPin, label: 'Location', value: 'Delhi, India', color: 'text-red-400', bg: 'bg-red-400/10' },
              { icon: GraduationCap, label: 'Education', value: 'MCA Graduate', color: 'text-accent', bg: 'bg-accent/10' },
              { icon: Target, label: 'Focus', value: 'Data Analytics', color: 'text-green-400', bg: 'bg-green-400/10' },
              { icon: Briefcase, label: 'Status', value: 'Open to Work', color: 'text-amber-400', bg: 'bg-amber-400/10' },
            ].map((item) => (
              <div key={item.label} className="glass-card rounded-xl p-4 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1">
                <div className={`p-3 rounded-xl ${item.bg}`}>
                  <item.icon size={20} className={item.color} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</p>
                  <p className="text-white font-semibold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-6">
                I am an MCA graduate with hands-on project experience in{' '}
                <span className="text-white font-medium">Data Analysis</span>,{' '}
                <span className="text-white font-medium">Data Cleaning</span>,{' '}
                <span className="text-white font-medium">Data Visualization</span>, and{' ' }
                <span className="text-white font-medium">Dashboard Development</span>.
              </p>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg mb-6">
                I have worked with <span className="text-accent font-medium">Excel</span>,{' '}
                <span className="text-accent font-medium">SQL</span>,{' '}
                <span className="text-accent font-medium">Power BI</span>, and{' ' }
                <span className="text-accent font-medium">Python</span> to analyze datasets,
                identify patterns, and create meaningful reports.
              </p>
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                I am looking for an entry-level Data Analyst opportunity where I can apply
                my analytical and technical skills to deliver real business value.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/5">
                {[
                  { number: '3+', label: 'Projects' },
                  { number: '5+', label: 'Tools' },
                  { number: '2', label: 'Degrees' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold gradient-text">{stat.number}</p>
                    <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
