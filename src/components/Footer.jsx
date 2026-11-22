import { Mail, Heart } from 'lucide-react'

const LinkedinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
)
const GithubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 18} height={props.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
)

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <a href="#home" className="text-xl font-bold gradient-text">
              DG<span className="text-accent">.</span>
            </a>
            <p className="text-xs text-slate-500 mt-1">
              &copy; {new Date().getFullYear()} Deendayal Gupta. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {[
              { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/deendayal-gupta-804646412', label: 'LinkedIn' },
              { icon: GithubIcon, href: 'https://github.com/Dinugupta', label: 'GitHub' },
              { icon: Mail, href: 'mailto:dinug627@gmail.com', label: 'Email' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-slate-600 flex items-center justify-center gap-1">
            Designed with <Heart size={12} className="text-red-400" /> by Deendayal Gupta
          </p>
        </div>
      </div>
    </footer>
  )
}
