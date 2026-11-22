import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Galgotias University',
    year: '2024 – 2026',
    status: 'Pursuing',
    color: 'text-accent',
    bg: 'bg-accent/10',
    border: 'border-accent/20',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'University of Lucknow',
    year: '2021 – 2024',
    status: 'Completed',
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/20',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 bg-navy-800/30 section-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">My academic journey in Computer Applications</p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent" />
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative flex gap-6 sm:gap-8">
                <div className="relative z-10 shrink-0">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl ${edu.bg} border ${edu.border} flex items-center justify-center`}>
                    <GraduationCap size={24} className={edu.color} />
                  </div>
                </div>
                <div className="glass-card rounded-2xl p-6 flex-1 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full ${edu.bg} ${edu.color} border ${edu.border} font-medium`}>
                      {edu.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1.5"><MapPin size={14} />{edu.institution}</span>
                    <span className="flex items-center gap-1.5"><Calendar size={14} />{edu.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
