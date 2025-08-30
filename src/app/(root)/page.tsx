import ActiveProjects from "../_components/ActiveProjects";
import ActiveTitle from "../_components/ActiveTitle";
import ArchivedProjects from "../_components/ArchivedProjects";
import ArchivesTitle from "../_components/ArchivesTitle";
import ExProjects from "../_components/ExProjects";
import ExTitle from "../_components/ExTitle";
import Projects from "../_components/Projects";
import Title from "../_components/Title";

// ISR
export const revalidate = 3600;

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-transparent via-sky-400 to-transparent">
      {/* <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white"> */}
      <Title></Title>
      <Projects></Projects>
      <br />
      <hr />
      <ActiveTitle></ActiveTitle>
      <ActiveProjects></ActiveProjects>
      <br />
      <hr />
      <ExTitle></ExTitle>
      <ExProjects></ExProjects>
      <br />
      <hr />
      <ArchivesTitle></ArchivesTitle>
      <ArchivedProjects></ArchivedProjects>
      <br />
      <hr />
    </main>
  );
}
