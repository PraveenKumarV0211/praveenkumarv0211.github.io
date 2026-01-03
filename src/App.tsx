import { useState, useEffect } from 'react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleResize = () => setMenuOpen(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const colors = darkMode
    ? { bg: 'bg-gray-900', bgAlt: 'bg-gray-800', text: 'text-white', textMuted: 'text-gray-300', border: 'border-gray-700', btnBg: 'bg-gray-700', btnHover: 'hover:bg-gray-600' }
    : { bg: 'bg-white', bgAlt: 'bg-gray-100', text: 'text-gray-900', textMuted: 'text-gray-600', border: 'border-gray-300', btnBg: 'bg-gray-100', btnHover: 'hover:bg-gray-200' };

  return (
    <div className={`min-h-screen ${colors.bg} ${colors.text} transition-colors duration-300`}>
      <nav className={`hidden md:flex fixed top-0 left-0 right-0 z-50 ${colors.bg} shadow-sm px-12 py-4 justify-between items-center`}>
        <div className={`text-2xl font-bold cursor-pointer ${colors.text}`} onClick={() => scrollToSection('profile')}>
          Praveen Kumar
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex gap-6 text-lg">
            {['about', 'experience', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <button onClick={() => scrollToSection(item)} className={`${colors.textMuted} hover:${colors.text} hover:underline underline-offset-4 capitalize transition-all`}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full ${colors.btnBg} ${colors.btnHover} transition-colors`}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className={`md:hidden fixed top-0 left-0 right-0 z-50 ${colors.bg} shadow-sm px-6 py-4`}>
        <div className="flex justify-between items-center">
          <div className={`text-xl font-bold ${colors.text}`}>Praveen Kumar</div>
          <div className="flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full ${colors.btnBg}`}>
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className={`text-2xl ${colors.text}`}>
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
        {menuOpen && (
          <ul className={`mt-4 flex flex-col gap-4 ${colors.bgAlt} p-4 rounded-lg`}>
            {['about', 'experience', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <button onClick={() => scrollToSection(item)} className={`${colors.textMuted} hover:${colors.text} capitalize w-full text-left`}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Profile Section */}
      <section id="profile" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
          <img src={`${import.meta.env.BASE_URL}praveen_profile.jpg`} />
          </div>
          <div className="text-center md:text-left">
            <p className={`${colors.textMuted} text-lg mb-2`}>Hello, I'm</p>
            <h1 className={`text-4xl md:text-5xl font-bold ${colors.text} mb-2`}>Praveen Kumar</h1>
            <p className={`text-xl md:text-2xl ${colors.textMuted} mb-6`}>Software Engineer</p>
            <div className="flex gap-4 justify-center md:justify-start mb-6">
              <a href="./Praveen.pdf" className={`px-6 py-3 border-2 ${colors.border} rounded-full font-medium ${colors.btnHover} transition-all`}>
                Download CV
              </a>
              <button onClick={() => scrollToSection('contact')} className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-700 transition-all">
                Contact Info
              </button>
            </div>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://www.linkedin.com/in/vpk0211/" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full border ${colors.border} flex items-center justify-center ${colors.btnHover} transition-all`}>
                <span className="text-lg">in</span>
              </a>
              <a href="https://github.com/PraveenKumarV0211" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full border ${colors.border} flex items-center justify-center ${colors.btnHover} transition-all`}>
                <span className="text-lg">⌘</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className={`py-24 px-6 ${colors.bgAlt}`}>
        <div className="max-w-5xl mx-auto">
          <p className={`text-center ${colors.textMuted} mb-2`}>Get To Know More</p>
          <h2 className={`text-4xl font-bold text-center ${colors.text} mb-12`}>About Me</h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-2/5">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=400&fit=crop"
                  alt="About"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-3/5">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className={`p-6 rounded-2xl border ${colors.border} ${colors.bg} text-center`}>
                  <span className="text-3xl mb-2 block">🎓</span>
                  <h3 className="font-bold mb-1">Education</h3>
                  <p className={`text-sm ${colors.textMuted}`}>MS Computer Software Engineering</p>
                  <p className={`text-sm ${colors.textMuted}`}>Northeastern University</p>
                </div>
                <div className={`p-6 rounded-2xl border ${colors.border} ${colors.bg} text-center`}>
                  <span className="text-3xl mb-2 block">💼</span>
                  <h3 className="font-bold mb-1">Experience</h3>
                  <p className={`text-sm ${colors.textMuted}`}>2+ Years</p>
                  <p className={`text-sm ${colors.textMuted}`}>Software Development</p>
                </div>
              </div>
              <p className={`${colors.textMuted} leading-relaxed`}>
                I'm a passionate software engineer with experience in full-stack development. 
                Currently pursuing my Master's at Northeastern University, I've worked at companies 
                like PTC (Onshape) and Toyota Connected, building scalable systems and intuitive 
                user experiences. I also serve as a Teaching Assistant, helping students master 
                data structures and algorithms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-24 px-6 ${colors.bg}`}>
        <div className="max-w-5xl mx-auto">
          <p className={`text-center ${colors.textMuted} mb-2`}>Explore My</p>
          <h2 className={`text-4xl font-bold text-center ${colors.text} mb-12`}>Experience</h2>
          <div className="space-y-8">
            {[
              {
                company: 'PTC Inc. (Onshape)',
                role: 'Software Developer Intern',
                period: 'May 2024 - Aug 2024',
                location: 'Boston, MA',
                logo: `${import.meta.env.BASE_URL}ptc.png`,
                workLink: 'https://forum.onshape.com/discussion/28271',
                Note: 'Search for Not Revision Managedin that Website',
                bullets: [
                  'Resolved 20+ customer complaints about slow CAD specification access by implementing TypeScript/Angular UI components with asynchronous data fetching using Angular Promises, achieving a 50% reduction in search time, and improving UX performance',
                  'Led the implementation of a scalable file naming system handling 1000+ CAD parts using Java Spring Boot, creating REST APIs to fetch metadata from MongoDB and apply user-defined export naming rules, reducing post-export file management by 80%',
                  'Wrote Playwright E2E and JUnit integration tests, ensuring business workflows remained stable across deployments',
                ],
                tech: ['TypeScript', 'Angular', 'Java', 'Spring Boot', 'MongoDB'],
              },
              {
                company: 'Toyota Connected',
                role: 'Associate Software Engineer',
                period: 'Jul 2021 - Jul 2023',
                location: 'Chennai, India',
                logo: `${import.meta.env.BASE_URL}toyota.png`,
                Note: null,
                workLink: null,
                bullets: [
                  'Created a connected mobility platform to enable real-time vehicle telemetry processing by implementing 10+ REST APIs using Java Spring Boot, MongoDB, and asynchronous messaging with RabbitMQ, successfully handling 100k+ daily requests at 99.9% uptime.',
                  'Eliminated monitoring blind spots in production systems by implementing Datadog APM with custom metrics, composite alerts, webhook notifications, and automated runbook triggers, reducing response time by 40% and preventing customer-facing outages',
                  'Centralized scattered vehicle lifecycle data into an interactive ReactJS dashboard with real-time telemetry streaming, performance tracking, service analytics, and predictive analytics, enabling data-driven decisions for 20+ team stakeholders',
                  'Collaborated with a cross-functional team to design and implement a hybrid messaging architecture using RabbitMQ to optimize microservices communication, consolidating services to reduce operational costs by $3,600/year',
                  'Automated manual data cleanup processes by building cron-based schedulers with batch deletion algorithms and cascade operations for invalid telematics requests, cutting database size by 15% and saving $5K monthly in storage costs',
                  'Led code quality initiative across 15+ repositories, achieving 85% test coverage with JUnit and Mockito, while eliminating 120+ critical vulnerabilities identified by SonarQube',
                ],
                tech: ['Java', 'Spring Boot', ' SonarQube','REST APIs', 'RabbitMQ', 'AWS', 'ReactJS', 'Datadog', 'JUnit', 'CI/CD', 'MongoDB'],
              },
            ].map((exp) => (
              <div key={exp.company} className={`p-6 rounded-2xl border ${colors.border} ${colors.bgAlt} flex flex-col md:flex-row`}>
                
                <div className={`md:w-1/3 flex flex-col items-center md:items-start pb-6 md:pb-0 md:pr-6 md:border-r ${colors.border}`}>
                  <div className={`w-20 h-20 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center p-3 mb-4`}>
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-lg font-bold text-center md:text-left">{exp.company}</h3>
                  <p className="text-blue-600 font-medium">{exp.role}</p>
                  <p className={`text-sm ${colors.textMuted} mt-2`}>{exp.period}</p>
                  <p className={`text-sm ${colors.textMuted}`}>{exp.location}</p>
                  {exp.workLink && (
                    <a href={exp.workLink} target="_blank" rel="noopener noreferrer" className="mt-4 px-4 py-2 border border-blue-500 text-blue-500 rounded-full text-sm hover:bg-blue-500 hover:text-white transition-all">
                      View My Work ↗
                    </a>
                  )}
                  {exp.Note && (
                    <p className={`text-sm ${colors.textMuted}`}> </p>
                  )}
                </div>
                
                
                <div className="md:w-2/3 md:pl-6">
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className={`flex gap-2 ${colors.textMuted} text-justify`}>
                        <span className="text-green-500 mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className={`px-3 py-1 text-sm rounded-full ${colors.bg} border ${colors.border}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="projects" className={`py-24 px-6 ${colors.bgAlt}`}>
        <div className="max-w-5xl mx-auto">
          <p className={`text-center ${colors.textMuted} mb-2`}>Browse My Recent</p>
          <h2 className={`text-4xl font-bold text-center ${colors.text} mb-12`}>Projects</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                title: 'Glucose Monitor Dashboard',
                desc: 'Real-time health tracking app with Dexcom API integration, built with React and Spring Boot.',
                img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop',
                github: 'https://github.com/PraveenKumarV0211/Dexcom',
              },
              {
                title: 'Multi-Tier AWS Infrastructure Deployment with Terraform',
                desc: 'Automated AWS cloud infrastructure setup using Terraform (HCL). Implemented CI/CD pipelines with GitHub Actions and Shell scripting and eliminating manual configuration errors',
                img: `${import.meta.env.BASE_URL}cloudProject.jpg`,
                github: 'https://github.com/PraveenKumarV0211/tf-aws-infra-copy'
              },
            ].map((project) => (
              <div key={project.title} className={`w-full md:w-80 rounded-2xl border ${colors.border} ${colors.bg} overflow-hidden shadow-sm hover:shadow-lg transition-shadow`}>
                <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className={`text-sm ${colors.textMuted} mb-4`}>{project.desc}</p>
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={`px-4 py-2 border ${colors.border} rounded-full text-sm ${colors.btnHover} transition-all`}>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section id="contact" className={`py-24 px-6 ${colors.bg}`}>
        <div className="max-w-3xl mx-auto">
          <p className={`text-center ${colors.textMuted} mb-2`}>Get In Touch</p>
          <h2 className={`text-4xl font-bold text-center ${colors.text} mb-12`}>Contact Me</h2>
          <div className={`flex flex-col md:flex-row gap-8 justify-center items-center p-8 rounded-2xl border ${colors.border} ${colors.bgAlt}`}>
            <a href="mailto:vijayakumar.p@northeastern.edu" className="flex items-center gap-3 hover:underline">
              <span className="text-2xl">✉️</span>
              <span>vijayakumar.p@northeastern.edu</span>
            </a>
            <a href="https://www.linkedin.com/in/vpk0211/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:underline">
              <span className="text-2xl">💼</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      
      <footer className={`py-8 px-6 ${colors.bgAlt} border-t ${colors.border}`}>
        <div className="max-w-5xl mx-auto">
          <ul className="flex justify-center gap-8 mb-4">
            {['about', 'experience', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <button onClick={() => scrollToSection(item)} className={`${colors.textMuted} hover:underline capitalize`}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <p className={`text-center ${colors.textMuted} text-sm`}>
            © 2025 Praveen Kumar. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}