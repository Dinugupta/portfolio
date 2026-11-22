import { ArrowDown, Download, Mail, BarChart3, TrendingUp, PieChart, Database } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Open to opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Hi, I'm{' '}
              <span className="gradient-text">Deendayal Gupta</span>
            </h1>

            <p className="text-lg sm:text-xl text-accent-light font-medium mb-6 tracking-wide">
              Data Analyst &nbsp;|&nbsp; Excel &nbsp;|&nbsp; SQL &nbsp;|&nbsp; Power BI &nbsp;|&nbsp; Python
            </p>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              MCA graduate passionate about transforming raw data into meaningful insights.
              I enjoy analyzing datasets, building interactive dashboards, and solving business
              problems through data.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5">
                <BarChart3 size={18} />
                View My Projects
              </a>
              <a href="/resume.pdf" download className="inline-flex items-center gap-2 px-6 py-3 border border-accent/30 text-accent hover:bg-accent/10 font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5">
                <Download size={18} />
                Download Resume
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/5 font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5">
                <Mail size={18} />
                Contact Me
              </a>
            </div>
          </div>

          <div className="hidden lg:block animate-fade-in-up animation-delay-400">
            <div className="relative animate-float">
              <div className="glass-card rounded-2xl p-6 animate-pulse-glow">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold text-sm">Analytics Dashboard</h3>
                  <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">Live</span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: 'Revenue', value: '$124K', change: '+12%', color: 'text-green-400' },
                    { label: 'Users', value: '8,432', change: '+8%', color: 'text-green-400' },
                    { label: 'Growth', value: '23.5%', change: '+5%', color: 'text-green-400' },
                  ].map((kpi) => (
                    <div key={kpi.label} className="bg-navy-900/50 rounded-xl p-3 border border-white/5">
                      <p className="text-xs text-slate-500 mb-1">{kpi.label}</p>
                      <p className="text-lg font-bold text-white">{kpi.value}</p>
                      <p className={`text-xs ${kpi.color}`}>{kpi.change}</p>
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <p className="text-xs text-slate-500 mb-3">Monthly Sales Trend</p>
                  <div className="flex items-end gap-2 h-28">
                    {[40, 65, 50, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-accent/60 to-accent" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-[10px] text-slate-600">Jan</span>
                    <span className="text-[10px] text-slate-600">Jun</span>
                    <span className="text-[10px] text-slate-600">Dec</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-navy-900/50 rounded-lg p-3 border border-white/5 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10"><PieChart size={16} className="text-accent" /></div>
                    <div>
                      <p className="text-xs text-slate-500">Conversion</p>
                      <p className="text-sm font-semibold text-white">4.8%</p>
                    </div>
                  </div>
                  <div className="bg-navy-900/50 rounded-lg p-3 border border-white/5 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-500/10"><TrendingUp size={16} className="text-green-400" /></div>
                    <div>
                      <p className="text-xs text-slate-500">Retention</p>
                      <p className="text-sm font-semibold text-white">92%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 glass-card rounded-xl p-3 flex items-center gap-2 animate-float" style={{ animationDelay: '1s' }}>
                <Database size={16} className="text-accent" />
                <span className="text-xs text-white font-medium">SQL Query</span>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card rounded-xl p-3 flex items-center gap-2 animate-float" style={{ animationDelay: '2s' }}>
                <BarChart3 size={16} className="text-green-400" />
                <span className="text-xs text-white font-medium">Power BI</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <a href="#about" className="text-slate-500 hover:text-accent transition-colors">
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
