import Image from "next/image";
import ProfilePic from "/assets/images/Me.jpg"
import Cta from "@/componens/Cta";
import { SKILLS } from "@/data/skills";
import Chip from "@/componens/Chip";
import { PROJECTS } from "@/data/projects";
import Card from "@/componens/Card";

export default function Home() {
  return (
    <main className="container flex justify-center flex-col items-center mx-auto p-4 ">
      {/* {Hero} */}
      <section className="flex flex-col justify-center items-center space-y-6 min-h-svh py-24">
        <Image src={ProfilePic} alt="Matteo Peroni" width={200} height={200} className="size-[200px] object-cover rounded-full" />
        <div className="max-w-xl space-y-6">
      <h1 className="font-title text-center text-3xl">Ciao 👋, sono Andrea Banducci</h1>
      <h2 className="title-gradient text-center text-6xl">Frontend Developer</h2>
      <p className="font-text text-center text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam magni temporibus ut quo, vero quibusdam. Blanditiis consequatur quod pariatur, odio dolor dignissimos doloremque facere eum aspernatur est explicabo possimus nihil!</p>
      <div className="flex space-x-4 justify-center">
        <Cta label="Contattami" link="#contatti" />
        <Cta label="Download CV" link="#portfolio" target="_blank" />
      </div>
      </div>
      </section>
      {/* {About} */}
      <section className="flex flex-col justify-center items-center space-y-6 min-h-svh py-24">
        <div className="max-w-xl space-y-6">
      <h2 className="font-title text-center text-4xl">Di piu su di me</h2>
      <p className="font-text text-xl">I am currently a student in Frontend Development at
      a Yrkeshögskolan (EC Utbildning) in Sweden, with graduation expected in 2026.
        <br />
        <br />
        Before pursuing my studies in Frontend Development, I worked as a Graphic Designer for several
years, developing strong expertise in the Adobe Suite, particularly Illustrator, Photoshop, and
InDesign. This extensive experience has given me a solid foundation in design principles, visual
communication, and attention to detail. I now bring this creativity and precision into my frontend
development journey, where I have expanded my skills to include Figma, HTML, CSS, JavaScript,
GitHub, and Express
<br />
<br />
During my studies, I have worked on various projects that have allowed me to build responsive web
applications and improve my problem-solving skills. Although my current technical skills are at a
student level, I am highly motivated to grow and apply my combined background in graphic design
and frontend development to create visually appealing and user-friendly solutions.
<br />
<br />
I am excited about the opportunity to contribute to your team while gaining hands-on experience and
advancing my career in web development. 
</p>
      <div className="flex space-x-4 justify-center">
      </div>
      </div>
      </section>
      {/* Skills */}
      <section id="skills" className="flex flex-col justify-center items-center space-y-6 pb-24 lg:pb-48">
        <div className="max-w-xl space-y-6">
          <h2 className="font-title text-center text-4xl">Cosa so fare 💪</h2>
          <div className="flex gap-6 flex-wrap justify-center">
            {
              SKILLS.map((skill, index) => (
                <Chip key={index} label={skill.name} />
              ))
            }
          </div>
        </div>
      </section>
      {/* Progetti */}
      <section id="projects" className="flex flex-col justify-center items-center space-y-6 pb-24 lg:pb-48">
        <div className="space-y-6">
          <h2 className="font-title text-center text-4xl">I miei progetti 🚀</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              PROJECTS.map((project, index) => (
                <Card key={index} title={project.title} description={project.description} image={project.image} link={project.link} />
              ))
            }
          </div>
        </div>
      </section>
    </main>
  );
}
