import { archivesList } from "_data/projects/archives";
// import Image from "next/image";
import Link from "next/link";

export default function ExProjects() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 md:gap-8">
        {archivesList.map((project) => (
          <Link
            key={project.title}
            className="flex max-w-xl flex-col gap-4 rounded-3xl bg-white/30 p-4 hover:bg-red-300"
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex justify-start">
              <img
                src="/github-logo.svg"
                alt="GitHub Logo"
                width={21}
                height={21}
              />
            </span>
            <h3 className="text-2xl font-bold">{project.title}</h3>
            {/* <h3 className="text-2xl font-bold">{project.title} →</h3> */}
            <div className="text-lg">{project.description}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
