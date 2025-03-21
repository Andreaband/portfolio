import Image from "next/image";
import ProfilePic from "/assets/images/Me.jpg";
import Cta from "@/componens/Cta";
import { SKILLS } from "@/data/skills";
import Chip from "@/componens/Chip";
import { PROJECTS } from "@/data/projects";
import Card from "@/componens/Card";
import { WORKFLOW } from "@/data/workflow";
import Slide from "@/componens/Slide";
import ContactForm from "@/componens/ContactForm";

export default function Home() {
  return (
    <main className="container flex justify-center flex-col items-center mx-auto p-4 ">
      {/* Hero */}
      <section className="flex flex-col justify-center items-center space-y-6 min-h-svh py-24">
        <Image src={ProfilePic} alt="Matteo Peroni" width={200} height={200} className="size-[200px] object-cover rounded-full" />
        <div className="max-w-xl space-y-6">
          <h1 className="font-title text-center text-3xl">Hi 👋, I'm Andrea Banducci</h1>
          <h2 className="title-gradient text-center text-6xl">Frontend Developer and Graphic Designer</h2>
          <p className="font-text text-center text-xl">Currently a Frontend Development student at a Yrkeshögskolan (EC Utbildning) in Sweden, with graduation expected in 2026.
            <br />
            <br />
            I have a strong background as a Graphic Designer, gained through many years of experience working with advanced tools in the Adobe Suite, particularly Illustrator, Photoshop, and InDesign.
            <br />
            <br />
            During my studies, I have expanded my technical skills to include Figma, HTML, CSS, JavaScript, GitHub, and Express, which I currently master at a student level but am highly motivated to grow further.
            <br />
            <br />
            I am now looking for a company where I can complete my LIA (Internship) for six months starting in November, applying my knowledge and developing new competencies.
          </p>
          <div className="flex space-x-4 justify-center">
            <Cta label="Contact" link="#contacts" />
            <Cta label="Download CV" link="#portfolio" target="_blank" />
          </div>
        </div>
      </section>
      {/* About */}
      <section className="flex flex-col justify-center items-center space-y-6 min-h-svh py-24">
        <div className="max-w-xl space-y-6">
          <h2 className="font-title text-center text-4xl">More about me</h2>
          <p className="font-text text-xl">I am currently a student in Frontend Development at a Yrkeshögskolan (EC Utbildning) in Sweden, with graduation expected in 2026.
            <br />
            <br />
            Before pursuing my studies in Frontend Development, I worked as a Graphic Designer for several years, developing strong expertise in the Adobe Suite, particularly Illustrator, Photoshop, and InDesign. This extensive experience has given me a solid foundation in design principles, visual communication, and attention to detail. I now bring this creativity and precision into my frontend development journey, where I have expanded my skills to include Figma, HTML, CSS, JavaScript, GitHub, and Express.
            <br />
            <br />
            During my studies, I have worked on various projects that have allowed me to build responsive web applications and improve my problem-solving skills. Although my current technical skills are at a student level, I am highly motivated to grow and apply my combined background in graphic design and frontend development to create visually appealing and user-friendly solutions.
            <br />
            <br />
            I am excited about the opportunity to contribute to your team while gaining hands-on experience and advancing my career in web development.
          </p>
        </div>
      </section>
      {/* Skills */}
      <section id="skills" className="flex flex-col justify-center items-center space-y-6 pb-24 lg:pb-48">
        <div className="max-w-xl space-y-6">
          <h2 className="font-title text-center text-4xl">What I can do 💪</h2>
          <div className="flex gap-6 flex-wrap justify-center">
            {SKILLS.map((skill, index) => (
              <Chip key={index} label={skill.name} />
            ))}
          </div>
        </div>
      </section>
      {/* Projects */}
      <section id="projects" className="flex flex-col justify-center items-center space-y-6 pb-24 lg:pb-48">
        <div className="space-y-6">
          <h2 className="font-title text-center text-4xl">My Projects 🚀</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => (
              <Card key={index} title={project.title} description={project.description} image={project.image} link={project.link} />
            ))}
          </div>
        </div>
      </section>
      {/* Workflow */}
      <section id="workflow" className="flex flex-col justify-center items-center space-y-6 pb-24 lg:pb-48">
        <div className="space-y-6">
          <h2 className="font-title text-center text-4xl">My Workflow 🛠️</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKFLOW.map((slide, index) => (
              <Slide key={index} title={slide.title} description={slide.description} />
            ))}
          </div>
        </div>
      </section>
       {/* Contact */}
       <section id="contacts" className="flex flex-col justify-center items-center space-y-6 pb-24">
        <div className="space-y-6">
          <h2 className="font-title text-center text-4xl">Get in Touch 📲</h2>
          <ContactForm />
        </div>
      </section>
      {/* Footer */}
      <footer id="contacts" className="flex flex-col justify-center items-center pt-40 pb-4 text-foreground-muted">
        <p>© {new Date().getFullYear()} Andrea Banducci. All rights reserved.</p>
      </footer>
    </main>
  );
}
