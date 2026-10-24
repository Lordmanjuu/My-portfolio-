import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BorderBeam } from 'border-beam';
import { MetalFx } from 'metal-fx';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, ShieldCheck, Search, Code2,
  Globe2, Terminal, Mail, Phone, Menu, X, ExternalLink,
  Award, BriefcaseBusiness, GraduationCap, Fingerprint, ScanSearch, Network,
  HeartHandshake, Sparkles, CheckCircle2, FileText, ChevronRight
} from 'lucide-react';

const projects = [
  { n:'01', category:'Web development', title:'JNTUCEA Attendance Tracker', desc:'A student-focused attendance tracking experience built to make attendance status easier to understand and plan around.', stack:['Web app','Responsive UI','Vercel'], href:'https://jntucea-repati-kosam.vercel.app/', label:'Open live project', icon:GraduationCap, featured:true },
  { n:'02', category:'Community technology', title:'VAF Volunteer Platform', desc:'A volunteer registration platform supporting community outreach for Vivekananda Aashayam Foundation.', stack:['Web app','Supabase','Volunteer onboarding'], href:'https://vaf-volunteer-form.vercel.app/', label:'Open live project', icon:HeartHandshake, featured:true },
  { n:'03', category:'OSINT & cybersecurity', title:'Advanced OSINT Toolkit', desc:'A modular investigative toolkit concept for digital-footprint research, domain reconnaissance and intelligence workflows.', stack:['OSINT','Python','Shodan'], href:'https://github.com/Lordmanjuu', label:'Explore GitHub', icon:ScanSearch },
  { n:'04', category:'OSINT & cybersecurity', title:'Email Breach Analysis Engine', desc:'A research project focused on checking potential email exposure through available intelligence sources and communicating risk responsibly.', stack:['Python','Threat intelligence','Research'], href:'https://github.com/Lordmanjuu', label:'Explore GitHub', icon:Fingerprint },
  { n:'05', category:'OSINT & cybersecurity', title:'Network Intelligence Scanner', desc:'Network and IP intelligence workflows using metadata, exposed-service context and Shodan-assisted reconnaissance.', stack:['Shodan','IP intelligence','Recon'], href:'https://github.com/Lordmanjuu', label:'Explore GitHub', icon:Network },
  { n:'06', category:'Business web design', title:'Tata Copper+ Distributor Website', desc:'A business website concept for Shree Lakshmi Venkateshwara Enterprises, presenting distributor details, products and enquiry pathways.', stack:['Business website','Responsive design','Lead enquiries'], href:'https://github.com/Lordmanjuu/Tata_enterprises-', label:'View project repository', icon:Globe2 },
  { n:'07', category:'Web development', title:'South Indian Restaurant Website', desc:'A hospitality website concept designed around regional food, menu discovery, imagery and mobile-first navigation.', stack:['Restaurant website','UI design','Responsive layout'], href:'https://github.com/Lordmanjuu', label:'Explore GitHub', icon:Code2 },
  { n:'08', category:'Portfolio', title:'Personal Portfolio', desc:'A central place for my work across OSINT, cybersecurity research, web development and community-focused digital projects.', stack:['React','Libraries.dev effects','Vercel'], href:'https://github.com/Lordmanjuu/My-portfolio-', label:'View source', icon:Sparkles }
];

const skillGroups = [
  { title:'OSINT & investigations', icon:Search, items:['OSINT / SOCMINT','Digital footprint research','Domain reconnaissance','Shodan & IP intelligence','Google dorking','Threat intelligence'] },
  { title:'Cybersecurity', icon:ShieldCheck, items:['Web application security fundamentals','Network reconnaissance','Digital forensics fundamentals','CTF problem solving','Responsible research'] },
  { title:'Web development', icon:Code2, items:['HTML & CSS','JavaScript','Responsive interfaces','AI-assisted prototyping','SEO fundamentals','Vercel deployment'] },
  { title:'Tools & workflow', icon:Terminal, items:['Git & GitHub','Supabase fundamentals','Shodan','Burp Suite','Wireshark','Kali / Parrot Linux'] }
];

function Eyebrow({children}) { return <div className="eyebrow"><span className="eyebrow-line" />{children}</div>; }

function App() {
  const [filter, setFilter] = useState('All work');
  const [menuOpen, setMenuOpen] = useState(false);
  const filters = ['All work','OSINT & cybersecurity','Web development','Community technology'];
  const visibleProjects = projects.filter(p => filter === 'All work' || p.category === filter);
  const closeMenu = () => setMenuOpen(false);

  return <div className="site-shell">
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header className="topbar">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Thoti Manjunath home"><span className="brand-mark">TM<span>.</span></span><span className="brand-caption">INDEPENDENT DIGITAL PRACTICE</span></a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
        {[['About','#about'],['Expertise','#expertise'],['Selected work','#work'],['Experience','#experience']].map(([t,h])=><a key={t} href={h} onClick={closeMenu}>{t}</a>)}
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={14}/></a>
      </nav>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.65}} className="availability"><span className="status-dot"/> OPEN TO SELECT PROJECTS & OPPORTUNITIES</motion.div>
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.08}}>Research the signal.<br/><span>Build what matters.</span></motion.h1>
          <motion.p className="hero-sub" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.16}}>I’m <strong>Thoti Manjunath</strong> — an OSINT practitioner, cybersecurity researcher and web developer turning complex problems into useful digital experiences.</motion.p>
          <motion.div className="hero-actions" initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.24}}>
            <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a>
            <a className="button button-quiet" href="#contact">Start a conversation <ArrowUpRight size={16}/></a>
          </motion.div>
          <div className="hero-proof">
            <div className="proof-item"><span className="proof-value">#09</span><span className="proof-label">Global OSINT Industries CTF rank</span></div>
            <div className="proof-divider"/>
            <div className="proof-item"><span className="proof-value">3</span><span className="proof-label">Core disciplines: research, security, web</span></div>
            <div className="proof-divider"/>
            <div className="proof-item"><span className="proof-value">India</span><span className="proof-label">Based · Working worldwide</span></div>
          </div>
        </div>
        <motion.div className="hero-visual" initial={{opacity:0,scale:.96,y:18}} animate={{opacity:1,scale:1,y:0}} transition={{duration:.85,delay:.18}}>
          <BorderBeam size="md" colorVariant="ocean" strength={0.7} theme="dark">
            <div className="intel-card">
              <div className="intel-top"><span className="terminal-dots"><i/><i/><i/></span><span className="intel-label">FIELD NOTES / 001</span><span className="intel-live"><span/> ACTIVE</span></div>
              <div className="intel-main">
                <div className="orbit-scene"><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="orbit orbit-c"/><div className="orbit-core"><Fingerprint size={34}/></div><span className="orbit-node node-a"/><span className="orbit-node node-b"/><span className="orbit-node node-c"/></div>
                <div className="intel-title">Digital intelligence<br/><em>with purpose.</em></div>
                <p className="intel-desc">From open-source research to deployable web products — thoughtful, ethical and outcome-focused.</p>
              </div>
              <div className="intel-bottom"><span><span className="mini-dot"/> INVESTIGATE</span><span><span className="mini-dot blue"/> VALIDATE</span><span><span className="mini-dot purple"/> BUILD</span></div>
            </div>
          </BorderBeam>
          <div className="floating-note note-top"><span className="note-icon"><Award size={16}/></span><span><b>Global rank #9</b><small>OSINT Industries CTF</small></span></div>
          <div className="floating-note note-bottom"><span className="note-icon note-icon-green"><CheckCircle2 size={16}/></span><span><b>Built for real use</b><small>Research · Community · Web</small></span></div>
        </motion.div>
        <a className="scroll-cue" href="#about"><span/> SCROLL TO EXPLORE <ArrowDownRight size={14}/></a>
      </section>

      <section className="intro section-wrap" id="about">
        <div className="intro-side"><Eyebrow>01 / THE APPROACH</Eyebrow><div className="section-index">A mix of <span>curiosity</span><br/>and execution.</div></div>
        <div className="intro-copy"><p className="large-copy">I work at the intersection of <span>open-source intelligence, cybersecurity and product-minded web development.</span></p><p>My work ranges from structured digital investigations and CTF challenges to practical websites that help students, community organisations and local businesses show up better online.</p><p>I value clear thinking, responsible research, and shipping useful work — not just making things look impressive.</p><div className="text-link-row"><a className="text-link" href="https://www.linkedin.com/in/t-manjunath-27b469381/" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={15}/></a><a className="text-link" href="https://github.com/Lordmanjuu" target="_blank" rel="noreferrer">Browse GitHub <ArrowUpRight size={15}/></a></div></div>
      </section>

      <section className="expertise section-wrap" id="expertise">
        <div className="section-heading"><div><Eyebrow>02 / WHAT I DO</Eyebrow><h2>Capabilities with<br/><span>practical outcomes.</span></h2></div><p>Focused skill sets, connected by one goal: solve the right problem and make the result useful.</p></div>
        <div className="capability-grid">
          <motion.article className="cap-card cap-featured" whileHover={{y:-5}} transition={{duration:.2}}><div className="cap-head"><span className="cap-icon"><ScanSearch size={20}/></span><span className="cap-number">01 — INTELLIGENCE</span></div><h3>OSINT & Digital Investigations</h3><p>Structured open-source research, digital footprint analysis and evidence-led investigation workflows.</p><div className="cap-tags"><span>OSINT / SOCMINT</span><span>Shodan</span><span>Recon</span></div><div className="cap-bottom"><span>Research with context</span><ArrowUpRight size={17}/></div></motion.article>
          <motion.article className="cap-card" whileHover={{y:-5}} transition={{duration:.2}}><div className="cap-head"><span className="cap-icon cap-icon-purple"><ShieldCheck size={20}/></span><span className="cap-number">02 — SECURITY</span></div><h3>Cybersecurity Research</h3><p>Exploring web and network security, threat context and practical CTF-style problem solving.</p><div className="cap-tags"><span>Web security</span><span>CTF</span><span>Threat research</span></div><div className="cap-bottom"><span>Responsible by design</span><ArrowUpRight size={17}/></div></motion.article>
          <motion.article className="cap-card" whileHover={{y:-5}} transition={{duration:.2}}><div className="cap-head"><span className="cap-icon cap-icon-green"><Code2 size={20}/></span><span className="cap-number">03 — DIGITAL PRODUCTS</span></div><h3>Web Development</h3><p>Responsive websites and practical interfaces for small businesses, student tools and community initiatives.</p><div className="cap-tags"><span>Responsive UI</span><span>Supabase</span><span>SEO</span></div><div className="cap-bottom"><span>From idea to launch</span><ArrowUpRight size={17}/></div></motion.article>
        </div>
      </section>

      <section className="work section-wrap" id="work">
        <div className="section-heading work-heading"><div><Eyebrow>03 / SELECTED WORK</Eyebrow><h2>Projects built to<br/><span>do more than sit pretty.</span></h2></div><p>A selection of live products, investigation tooling and web concepts. Each one starts with a real use case.</p></div>
        <div className="filter-row">{filters.map(f=><button key={f} className={filter===f?'filter-pill active':'filter-pill'} onClick={()=>setFilter(f)}>{f}<span>{f==='All work' ? projects.length : projects.filter(p=>p.category===f).length}</span></button>)}</div>
        <div className="projects-grid">{visibleProjects.map((p,i)=>{const Icon=p.icon;return <motion.article key={p.n} className={p.featured?'project-card project-featured':'project-card'} layout initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.3,delay:i*.035}}><div className="project-visual"><div className="project-visual-grid"/><div className="project-icon"><Icon size={26}/></div><span className="project-id">WORK / {p.n}</span><ArrowUpRight className="project-arrow" size={20}/><div className="visual-word">{p.category==='OSINT & cybersecurity'?'INTEL':p.category==='Community technology'?'IMPACT':p.category==='Business web design'?'BRAND':'DIGITAL'}</div></div><div className="project-content"><div className="project-category">{p.category}</div><h3>{p.title}</h3><p>{p.desc}</p><div className="project-stack">{p.stack.map(s=><span key={s}>{s}</span>)}</div><a href={p.href} target="_blank" rel="noreferrer" className="project-link">{p.label}<ArrowUpRight size={15}/></a></div></motion.article>})}</div>
        <div className="projects-foot"><span>MORE CODE, NOTES & EXPERIMENTS</span><a className="text-link" href="https://github.com/Lordmanjuu" target="_blank" rel="noreferrer">Visit my GitHub <ArrowUpRight size={15}/></a></div>
      </section>

      <section className="skills section-wrap">
        <div className="section-heading"><div><Eyebrow>04 / TOOLKIT</Eyebrow><h2>Tools are useful.<br/><span>Judgement matters more.</span></h2></div><p>A working toolkit across investigation, security fundamentals and shipping web experiences. I keep learning and validate tools against the task.</p></div>
        <div className="skills-grid">{skillGroups.map((g,i)=>{const Icon=g.icon;return <motion.article key={g.title} className="skill-card" whileHover={{y:-3}}><div className="skill-head"><span className={'skill-icon skill-icon-'+i}><Icon size={18}/></span><h3>{g.title}</h3><ChevronRight size={16}/></div><div className="skill-tags">{g.items.map(t=><span key={t}>{t}</span>)}</div></motion.article>})}</div>
      </section>

      <section className="experience section-wrap" id="experience">
        <div className="section-heading"><div><Eyebrow>05 / EXPERIENCE & LEADERSHIP</Eyebrow><h2>Learning in public.<br/><span>Contributing in practice.</span></h2></div><p>Roles and experiences that have shaped my approach to research, teamwork and building for people.</p></div>
        <div className="timeline">
          <article className="timeline-item"><div className="timeline-date">NOV 2025 — PRESENT<span>LEADERSHIP</span></div><div className="timeline-mark"><BriefcaseBusiness size={17}/></div><div className="timeline-copy"><div className="timeline-org">Secure With Techies</div><h3>OSINT Track Lead <span>· Part-time</span></h3><p>Supporting OSINT learning through challenge design, investigative practice and guidance for learners exploring digital research.</p></div></article>
          <article className="timeline-item"><div className="timeline-date">INTERNSHIP<span>CYBERSECURITY</span></div><div className="timeline-mark"><ShieldCheck size={17}/></div><div className="timeline-copy"><div className="timeline-org">CyberEthic</div><h3>Cybersecurity Analyst Intern</h3><p>Exposure to cybersecurity research, vulnerability assessment, web application security fundamentals and investigative methods.</p></div></article>
          <article className="timeline-item"><div className="timeline-date">ONGOING<span>COMMUNITY</span></div><div className="timeline-mark"><HeartHandshake size={17}/></div><div className="timeline-copy"><div className="timeline-org">Village Development Force</div><h3>Social Media Incharge & Digital Activist</h3><p>Contributing to digital outreach and community-focused initiatives supporting education, awareness and rural development.</p></div></article>
          <article className="timeline-item"><div className="timeline-date">ONGOING<span>INDEPENDENT</span></div><div className="timeline-mark"><Code2 size={17}/></div><div className="timeline-copy"><div className="timeline-org">Freelance & personal projects</div><h3>Web Developer</h3><p>Designing and deploying responsive websites and practical digital tools for student, community and business use cases.</p></div></article>
        </div>
      </section>

      <section className="recognition section-wrap">
        <div className="recognition-card"><BorderBeam size="md" colorVariant="colorful" strength={0.6} theme="dark"><div className="recognition-inner"><div className="recognition-icon"><Award size={25}/></div><div className="recognition-copy"><Eyebrow>RECOGNITION / 001</Eyebrow><h2>Global Rank <span>#9</span></h2><p>OSINT Industries CTF · OSINT Specialist tier · 250 points</p><span className="recognition-note">A milestone in my ongoing journey through open-source intelligence and investigative problem solving.</span></div><a className="recognition-link" href="https://osint.industries/" target="_blank" rel="noreferrer" aria-label="OSINT Industries"><ArrowUpRight size={22}/></a></div></BorderBeam></div>
        <div className="recognition-side"><div className="side-stat"><span className="side-stat-number">01</span><span className="side-stat-label">Global top-10 CTF placement</span></div><div className="side-stat"><span className="side-stat-number">03</span><span className="side-stat-label">Connected practice areas</span></div><div className="side-stat"><span className="side-stat-number">∞</span><span className="side-stat-label">Curiosity to keep learning</span></div></div>
      </section>

      <section className="education section-wrap">
        <div className="education-icon"><GraduationCap size={22}/></div><div><Eyebrow>CONTINUOUS LEARNING</Eyebrow><h3>B.Tech · Computer Science & Engineering (AI & ML)</h3><p>JNTU Anantapur · 2025 — Present</p></div><div className="education-right">BUILDING THE FOUNDATION<br/><span>Algorithms · AI · Systems · Security</span></div>
      </section>

      <section className="contact section-wrap" id="contact">
        <div className="contact-panel"><div className="contact-glow"/><div className="contact-content"><Eyebrow>06 / GET IN TOUCH</Eyebrow><h2>Have a problem<br/>worth <span>solving?</span></h2><p>Whether it’s a website for your business, an OSINT collaboration or a cybersecurity opportunity — tell me what you’re working on.</p><div className="contact-actions"><MetalFx preset="chromatic" strength={0.75} theme="dark"><a className="button button-primary contact-primary" href="mailto:thotimanjunath4513@gmail.com">Email me <ArrowUpRight size={17}/></a></MetalFx><a className="button button-quiet" href="https://www.linkedin.com/in/t-manjunath-27b469381/" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={16}/></a></div></div><div className="contact-details"><a href="mailto:thotimanjunath4513@gmail.com"><Mail size={17}/><span>EMAIL</span><b>thotimanjunath4513@gmail.com</b><ArrowUpRight size={15}/></a><a href="tel:+919573038451"><Phone size={17}/><span>PHONE</span><b>+91 95730 38451</b><ArrowUpRight size={15}/></a><a href="https://github.com/Lordmanjuu" target="_blank" rel="noreferrer"><Code2 size={17}/><span>GITHUB</span><b>Lordmanjuu</b><ArrowUpRight size={15}/></a><a href="https://www.linkedin.com/in/t-manjunath-27b469381/" target="_blank" rel="noreferrer"><ExternalLink size={17}/><span>LINKEDIN</span><b>Thoti Manjunath</b><ArrowUpRight size={15}/></a></div></div>
      </section>
    </main>
    <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">TM<span>.</span></span></a><p>Independent digital practice · Built with curiosity and intent.</p><div className="footer-right"><span>© {new Date().getFullYear()} THOTI MANJUNATH</span><a href="#home">BACK TO TOP ↑</a></div></footer>
  </div>;
}

export default App;
