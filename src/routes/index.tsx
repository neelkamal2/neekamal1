import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownToLine,
  ArrowRight,
  Award,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import portraitAsset from "@/assets/WhatsApp_Image_2026-09-13_at_5.48.44_PM.jpeg.asset.json";
import resumeAsset from "@/assets/Neelkamal_Resume.pdf.asset.json";
import cppAsset from "@/assets/CPP.pdf.asset.json";
import javaAsset from "@/assets/java_certificate.pdf.asset.json";
import databaseAsset from "@/assets/Database_and_sql_infosys.pdf.asset.json";
import agenticAsset from "@/assets/Agentic_Ai_oracle.pdf.asset.json";
import oracleAiAsset from "@/assets/Oracle_AI.pdf.asset.json";
import oracleDbAsset from "@/assets/Oracle_Database.pdf.asset.json";
import dsaAsset from "@/assets/DSA.pdf.asset.json";

const github = "https://github.com/neelkamal2";
const linkedin = "https://www.linkedin.com/in/neelkamal5/";
const email = "neelkamal9256@gmail.com";

const navigation = [
  ["Home", "top"], ["About", "about"], ["Skills", "skills"], ["Projects", "projects"],
  ["Training", "training"], ["Certificates", "certificates"], ["Achievements", "achievements"],
  ["Education", "education"], ["Contact", "contact"],
] as const;

const skillGroups = [
  { title: "Programming Languages", icon: Code2, skills: ["Python", "C++", "Java", "C"] },
  { title: "Libraries & Tools", icon: Database, skills: ["Excel", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Power BI", "Git", "GitHub"] },
  { title: "Database", icon: Database, skills: ["SQL", "MySQL"] },
  { title: "Soft Skills", icon: Award, skills: ["Problem-Solving", "Team Player", "Adaptability", "Self-Learning"] },
];

const projects = [
  {
    number: "P.01", title: "QR Code Attendance Management System", featured: true,
    tech: ["Java", "MySQL", "JDBC"], href: "https://github.com/neelkamal2/qr-code-attendance-system.git",
    summary: "A standalone Java Swing application for automated attendance management, connecting student, faculty, course, subject, and attendance modules through MySQL and JDBC.",
    features: ["QR generation and webcam scanning with ZXing", "Duplicate attendance prevention", "MVC and DAO architecture", "Authentication and dashboard analytics", "Excel/PDF reports and database backup/restore"],
  },
  {
    number: "P.02", title: "Agriculture Crop Analysis", tech: ["Python", "Pandas", "Seaborn", "Scikit-learn"],
    href: "https://github.com/neelkamal2/India-Agriculture-Crop-Analysis.git",
    summary: "An end-to-end analysis of 345K+ agriculture records across states, districts, crops, seasons, and years to identify production patterns and derive insights.",
    features: ["Data preprocessing and statistical analysis", "Correlation analysis and outlier detection", "10+ Python visualizations", "Linear Regression production prediction", "Evaluation with R², MAE, and RMSE"],
  },
  {
    number: "P.03", title: "AI Fabric & Material Advisor", tech: ["Python", "Scikit-learn", "FastAPI", "Gemini API"],
    href: "https://github.com/neelkamal2/fabric-ai-advisor.git",
    summary: "An AI-powered fabric recommendation application using Random Forest to suggest materials based on weather, occasion, and purpose.",
    features: ["Hybrid ML and rule-based recommendation engine", "Comfort, durability, breathability, and sustainability attributes", "Google Gemini AI chatbot", "FastAPI backend", "Interactive web application"],
  },
];

const certificates = [
  { title: "Agentic AI Certified Foundations Associate", issuer: "Oracle", date: "Sep 2026", asset: agenticAsset },
  { title: "Oracle Cloud Infrastructure Certified AI Foundations Associate", issuer: "Oracle", date: "Aug 2026", asset: oracleAiAsset },
  { title: "Oracle AI Database Certified Foundations Associate", issuer: "Oracle", date: "Aug 2026", asset: oracleDbAsset },
  { title: "Database and SQL", issuer: "Infosys Springboard", date: "Aug 2026", asset: databaseAsset },
  { title: "Mastering Data Structures using Java", issuer: "Lovely Professional University", date: "Jul 2026", asset: javaAsset },
  { title: "Object Oriented Programming", issuer: "Lovely Professional University", date: "Jun 2026", asset: cppAsset },
  { title: "Data Structure and Algorithm", issuer: "Lovely Professional University", date: "Jun 2026", asset: dsaAsset },
];

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Neelkamal | Data Science Student Portfolio" },
    { name: "description", content: "Explore Neelkamal's data science, machine learning, Java, SQL, and academic software projects." },
    { property: "og:title", content: "Neelkamal | Data Science Student Portfolio" },
    { property: "og:description", content: "Computer Science and Engineering student portfolio featuring data science projects, training, and certificates." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Portfolio,
});

function SectionTitle({ number, title, note }: { number: string; title: string; note?: string }) {
  return <div className="mb-10 flex items-baseline gap-4"><span className="font-mono text-sm text-accent">{number}</span><h2 className="font-display text-2xl font-semibold sm:text-3xl">{title}</h2>{note && <span className="ml-auto font-mono text-xs text-muted-foreground">{note}</span>}</div>;
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="section-shell flex h-16 items-center justify-between gap-4">
          <a href="#top" className="font-display text-lg font-semibold" aria-label="Neelkamal, back to top">Neelkamal<span className="text-accent">.</span></a>
          <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
            {navigation.map(([label, id]) => <a key={id} href={`#${id}`} className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">{label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="portfolio" size="sm" className="hidden sm:inline-flex"><a href={resumeAsset.url} download="Neelkamal_Resume.pdf"><ArrowDownToLine />Download Resume</a></Button>
            <Button variant="portfolioOutline" size="icon" className="lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {menuOpen && <nav className="section-shell grid border-t border-border py-4 lg:hidden" aria-label="Mobile navigation">{navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="border-b border-border py-3 text-sm font-medium last:border-0">{label}</a>)}<Button asChild variant="portfolio" className="mt-4 sm:hidden"><a href={resumeAsset.url} download="Neelkamal_Resume.pdf"><ArrowDownToLine />Download Resume</a></Button></nav>}
      </header>

      <main>
        <section id="top" className="scroll-mt-16 border-b border-border">
          <div className="section-shell grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
            <div className="enter-up lg:col-span-5">
              <img src={portraitAsset.url} alt="Neelkamal wearing a black blazer and white shirt" className="mx-auto aspect-square w-full max-w-sm rounded-full object-cover ring-1 ring-border lg:mx-0" />
              <div className="mt-6 flex justify-center gap-3 lg:justify-start"><span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary">B.Tech CSE</span><span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">Data Science</span></div>
            </div>
            <div className="enter-up flex flex-col justify-center lg:col-span-7">
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">01 — Portfolio</p>
              <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Data Science Student &amp;<br className="hidden sm:block" /> Computer Science Engineer</h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">Computer Science &amp; Engineering student at Lovely Professional University with a strong interest in Data Science, Machine Learning, Java, Python, Data Structures &amp; Algorithms, and problem-solving.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="warm" size="portfolio"><a href="#projects">View My Projects<ArrowRight /></a></Button>
                <Button asChild variant="portfolio" size="portfolio"><a href={resumeAsset.url} download="Neelkamal_Resume.pdf"><ArrowDownToLine />Download Resume</a></Button>
                <Button asChild variant="portfolioOutline" size="portfolio"><a href={github} target="_blank" rel="noreferrer"><Github />GitHub</a></Button>
                <Button asChild variant="portfolioOutline" size="portfolio"><a href={linkedin} target="_blank" rel="noreferrer"><Linkedin />LinkedIn</a></Button>
              </div>
              <a href={resumeAsset.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-medium text-primary hover:underline">View Resume <ExternalLink className="size-4" /></a>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-16 border-b border-border"><div className="section-shell section-pad"><SectionTitle number="02" title="About Me" /><div className="grid gap-10 lg:grid-cols-12"><div className="lg:col-span-8"><p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">I am a Computer Science and Engineering student at Lovely Professional University, with a strong interest in Data Science, Machine Learning, programming, and problem-solving. I enjoy working with data, developing software applications, implementing algorithms, and building practical projects using technologies such as Python, Java, SQL, and machine learning libraries.</p><div className="mt-8 flex flex-wrap gap-2">{["Data Science", "Machine Learning", "Java & DSA", "Python", "SQL & MySQL", "Problem Solving"].map((item) => <span key={item} className="rounded-full border border-border bg-card px-3 py-1.5 text-sm">{item}</span>)}</div></div><div className="grid gap-4 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1"><div className="rounded-lg bg-card p-5 shadow-sm ring-1 ring-border"><span className="font-mono text-xs uppercase text-muted-foreground">CGPA</span><strong className="mt-1 block font-display text-3xl">7.46</strong></div><div className="rounded-lg bg-card p-5 shadow-sm ring-1 ring-border"><span className="font-mono text-xs uppercase text-muted-foreground">Program</span><strong className="mt-1 block text-sm">B.Tech, Computer Science &amp; Engineering</strong></div></div></div></div></section>

        <section id="academic" className="scroll-mt-16 border-b border-border"><div className="section-shell section-pad"><SectionTitle number="03" title="Academic Journey" /><div className="relative max-w-4xl border-l-2 border-accent pl-8"><span className="absolute -left-[7px] top-2 size-3 rounded-full bg-accent ring-4 ring-background" /><p className="font-mono text-xs uppercase text-accent">Aug 2024 — Present</p><h3 className="mt-3 font-display text-3xl font-semibold">Lovely Professional University</h3><p className="mt-2 text-lg">Bachelor of Technology · Computer Science and Engineering</p><div className="mt-5 flex flex-wrap gap-6 text-sm text-muted-foreground"><span>Phagwara, Punjab</span><span>CGPA: 7.46</span></div></div></div></section>

        <section id="skills" className="scroll-mt-16 border-b border-border"><div className="section-shell section-pad"><SectionTitle number="04" title="Skills" /><div className="grid gap-5 sm:grid-cols-2">{skillGroups.map(({ title, icon: Icon, skills }) => <article key={title} className="rounded-lg bg-card p-6 shadow-sm ring-1 ring-border transition-transform hover:-translate-y-1"><div className="flex items-center gap-3"><Icon className="size-5 text-accent" /><h3 className="font-display text-lg font-semibold">{title}</h3></div><div className="mt-5 flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="rounded-md bg-muted px-3 py-1.5 text-sm">{skill}</span>)}</div></article>)}</div></div></section>

        <section id="projects" className="scroll-mt-16 border-b border-border"><div className="section-shell section-pad"><SectionTitle number="05" title="Projects" note="03 selected" /><div>{projects.map((project) => <article key={project.title} className="group grid gap-6 border-t border-border py-9 first:border-t-0 lg:grid-cols-12"><div className="lg:col-span-2"><span className="font-mono text-xs text-muted-foreground">{project.number}</span>{project.featured && <span className="mt-3 block w-fit rounded-full bg-accent/10 px-3 py-1 font-mono text-[11px] text-accent">Featured</span>}</div><div className="lg:col-span-6"><h3 className={`font-display font-semibold transition-colors group-hover:text-primary ${project.featured ? "text-2xl sm:text-3xl" : "text-2xl"}`}>{project.title}</h3><p className="mt-4 leading-relaxed text-muted-foreground">{project.summary}</p><ul className="mt-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">{project.features.map((feature) => <li key={feature} className="flex gap-2"><span className="text-accent">—</span>{feature}</li>)}</ul></div><div className="lg:col-span-3"><span className="font-mono text-xs uppercase text-muted-foreground">Technologies</span><div className="mt-3 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded-md bg-muted px-2.5 py-1 text-xs">{tech}</span>)}</div></div><div className="lg:col-span-1 lg:text-right"><a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`} className="inline-flex size-10 items-center justify-center rounded-full border border-border transition-all hover:border-primary hover:text-primary"><Github className="size-4" /></a></div></article>)}</div></div></section>

        <section id="training" className="scroll-mt-16 border-b border-border"><div className="section-shell section-pad"><SectionTitle number="06" title="Training" /><article className="grid gap-8 rounded-lg bg-card p-6 shadow-sm ring-1 ring-border md:grid-cols-[1fr_2fr] md:p-8"><div><p className="font-mono text-xs uppercase text-accent">Jun 2026 — Jul 2026</p><h3 className="mt-3 font-display text-2xl font-semibold">Lovely Professional University</h3><p className="mt-2 text-muted-foreground">Mastering Data Structures using Java: Concepts to Real-world Applications</p></div><div><p className="font-mono text-xs uppercase text-muted-foreground">Learning areas</p><div className="mt-4 flex flex-wrap gap-2">{["Arrays", "Linked Lists", "Stacks", "Queues", "Trees", "Heaps", "Hash Tables", "Searching", "Sorting", "Recursion", "Java OOP", "Time & Space Complexity"].map((item) => <span key={item} className="rounded-md bg-muted px-3 py-1.5 text-sm">{item}</span>)}</div></div></article></div></section>

        <section id="certificates" className="scroll-mt-16 border-b border-border"><div className="section-shell section-pad"><SectionTitle number="07" title="Certificate Archive" note="7 verified PDFs" /><div className="grid gap-x-8 sm:grid-cols-2">{certificates.map((certificate, index) => <article key={certificate.title} className="group flex min-h-32 gap-4 border-b border-border py-5"><span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span><div className="flex flex-1 flex-col"><h3 className="font-display font-semibold leading-snug transition-colors group-hover:text-primary">{certificate.title}</h3><p className="mt-2 text-sm text-muted-foreground">{certificate.issuer} · {certificate.date}</p><a href={certificate.asset.url} target="_blank" rel="noreferrer" className="mt-auto inline-flex w-fit items-center gap-2 pt-4 text-sm font-medium text-accent hover:underline">View Certificate <ExternalLink className="size-4" /></a></div></article>)}</div></div></section>

        <section id="achievements" className="scroll-mt-16 border-b border-border"><div className="section-shell section-pad"><SectionTitle number="08" title="Achievements" /><div className="grid gap-5 md:grid-cols-2"><article className="rounded-lg bg-card p-6 shadow-sm ring-1 ring-border"><Award className="size-6 text-accent" /><p className="mt-5 font-mono text-xs uppercase text-muted-foreground">HackerRank · Sep 2026</p><h3 className="mt-2 font-display text-xl font-semibold">5-Star C++ Programming Badge</h3></article><article className="rounded-lg bg-card p-6 shadow-sm ring-1 ring-border"><Code2 className="size-6 text-accent" /><p className="mt-5 font-mono text-xs uppercase text-muted-foreground">LeetCode · Jan 2025 — Present</p><h3 className="mt-2 font-display text-xl font-semibold">Solved 100+ Data Structures and Algorithms problems</h3></article></div></div></section>

        <section id="education" className="scroll-mt-16 border-b border-border"><div className="section-shell section-pad"><SectionTitle number="09" title="Education" /><div className="relative max-w-4xl space-y-10 border-l border-border pl-8">{[{ date: "Aug 2024 — Present", school: "Lovely Professional University", location: "Phagwara, Punjab", program: "Bachelor of Technology · Computer Science and Engineering", result: "CGPA: 7.46" }, { date: "Mar 2021 — May 2023", school: "Malti Ramashrya Gyan Bharti", location: "Barahiya, Lakhisarai", program: "Intermediate · PCM", result: "Percentage: 74.2%" }].map((item) => <article key={item.school} className="relative"><span className="absolute -left-[37px] top-1 size-4 rounded-full border-4 border-background bg-accent" /><p className="font-mono text-xs uppercase text-accent">{item.date}</p><h3 className="mt-2 font-display text-xl font-semibold">{item.school}</h3><p className="mt-1 text-sm text-muted-foreground">{item.location}</p><p className="mt-3">{item.program}</p><p className="mt-1 text-sm font-medium">{item.result}</p></article>)}</div></div></section>

        <section id="contact" className="scroll-mt-16"><div className="section-shell section-pad"><SectionTitle number="10" title="Contact" /><div className="grid gap-8 lg:grid-cols-2"><div><h3 className="font-display text-3xl font-semibold">Let’s connect.</h3><p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">For academic communication, project discussion, or professional networking, reach me through any verified channel below.</p></div><div className="flex flex-wrap content-start gap-3 lg:justify-end"><Button asChild variant="portfolio" size="portfolio"><a href={`mailto:${email}`}><Mail />Email Me</a></Button><Button asChild variant="portfolioOutline" size="portfolio"><a href={github} target="_blank" rel="noreferrer"><Github />GitHub</a></Button><Button asChild variant="portfolioOutline" size="portfolio"><a href={linkedin} target="_blank" rel="noreferrer"><Linkedin />LinkedIn</a></Button></div></div><a href={`mailto:${email}`} className="mt-10 inline-block break-all font-mono text-sm text-primary hover:underline">{email}</a></div></section>
      </main>

      <footer className="bg-foreground text-background"><div className="section-shell flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between"><p className="font-display text-sm font-medium">Neelkamal — Data Science &amp; Computing</p><p className="font-mono text-xs opacity-60">LPU · B.Tech CSE · 2024–Present</p></div></footer>
    </div>
  );
}