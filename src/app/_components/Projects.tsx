import { projectsList } from "_data/projects/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-8">
        {projectsList.map((project) => (
          <Link
            key={project.title}
            className="flex max-w-xl flex-col gap-4 rounded-3xl bg-white/10 p-4 hover:bg-white/20"
            href={project.href}
            target="_blank"
          >
            <h3 className="text-2xl font-bold">{project.title}</h3>
            {/* <h3 className="text-2xl font-bold">{project.title} →</h3> */}
            <div className="text-lg">{project.description}</div>
            <div className="flex justify-end"><img src="/github-logo.svg" alt="GitHub Logo" width={21} /></div>
          </Link>
        ))}
      </div>
    </>
  );
}
