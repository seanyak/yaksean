import dynamic from "next/dynamic";

import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";

const About = dynamic(() => import("@/components/about"), {
  loading: () => <section className="min-h-[300px]" />,
});

const Projects = dynamic(() => import("@/components/projects"), {
  loading: () => <section className="min-h-[500px]" />,
});

const Skills = dynamic(() => import("@/components/skills"), {
  loading: () => <section className="min-h-[300px]" />,
});

const Contact = dynamic(() => import("@/components/contact"), {
  loading: () => <section className="min-h-[400px]" />,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-9">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}