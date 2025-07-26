import Projects from "../_components/Projects";
import Title from "../_components/Title";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-transparent via-sky-400 to-transparent">
      {/* <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white"> */}
      <Title></Title>
      <Projects></Projects>
    </main>
  );
}
