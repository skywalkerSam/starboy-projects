import {
  activeProjects,
  personalProjects,
  oneOones,
  archives,
} from "../projects-index";
import Link from "next/link";

// ISR
export const revalidate = 3600;

export default function HomePage() {
  return (
    <main className="relaxed via-primary flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-transparent">
      <div className="container mt-12 flex flex-col items-center justify-center gap-12 p-8">
        <h2 className="font-paprika text-3xl font-bold text-shadow-xs md:text-4xl lg:text-5xl xl:text-6xl">
          Active
        </h2>
      </div>
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 p-8 md:grid-cols-2 md:gap-8 lg:max-w-4xl xl:max-w-5xl">
        {activeProjects.map((project) => (
          <Link
            key={project.title}
            className="flex max-w-xl flex-col gap-4 rounded-3xl bg-gray-950/10 px-8 py-6 shadow-lg hover:scale-105 hover:bg-gray-950/20"
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
                className="shadow-xl"
              />
            </span>
            <h3 className="font-paprika text-xl font-bold text-shadow-sm">
              {project.title}
            </h3>
            <div className="text-lg text-shadow-xs">{project.description}</div>
          </Link>
        ))}
      </div>
      <br />
      <hr />
      <div className="container mt-12 flex flex-col items-center justify-center gap-12 p-8">
        <h2 className="font-paprika text-3xl font-bold text-shadow-xs md:text-4xl lg:text-5xl xl:text-6xl">
          Personal
        </h2>
      </div>
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 p-8 md:grid-cols-2 md:gap-8 lg:max-w-4xl xl:max-w-5xl">
        {personalProjects.map((project) => (
          <Link
            key={project.title}
            className="flex max-w-xl flex-col gap-4 rounded-3xl bg-gray-950/10 px-8 py-6 shadow-lg hover:scale-105 hover:bg-gray-950/20"
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
                className="shadow-xl"
              />
            </span>
            <h3 className="font-paprika text-xl font-bold text-shadow-sm">
              {project.title}
            </h3>
            <div className="text-lg text-shadow-xs">{project.description}</div>
          </Link>
        ))}
      </div>
      <br />
      <hr />
      <div className="container mt-12 flex flex-col items-center justify-center gap-12 p-8">
        <h2 className="font-paprika text-3xl font-bold text-shadow-xs md:text-4xl lg:text-5xl xl:text-6xl">
          101s
        </h2>
      </div>
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 p-8 md:grid-cols-2 md:gap-8 lg:max-w-4xl xl:max-w-5xl">
        {oneOones.map((project) => (
          <Link
            key={project.title}
            className="flex max-w-xl flex-col gap-4 rounded-3xl bg-gray-950/10 px-8 py-6 shadow-lg hover:scale-105 hover:bg-gray-950/20"
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
                className="shadow-xl"
              />
            </span>
            <h3 className="font-paprika text-xl font-bold text-shadow-sm">
              {project.title}
            </h3>
            <div className="text-lg text-shadow-xs">{project.description}</div>
          </Link>
        ))}
      </div>
      <br />
      <hr />
      <div className="container mt-12 flex flex-col items-center justify-center gap-12 p-8">
        <h2 className="font-paprika text-3xl font-bold text-shadow-xs md:text-4xl lg:text-5xl xl:text-6xl">
          Archives
        </h2>
      </div>
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 p-8 md:grid-cols-2 md:gap-8 lg:max-w-4xl xl:max-w-5xl">
        {archives.map((project) => (
          <Link
            key={project.title}
            className="flex max-w-xl flex-col gap-4 rounded-3xl bg-gray-950/10 px-8 py-6 shadow-lg hover:scale-105 hover:bg-gray-950/20"
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
                className="shadow-xl"
              />
            </span>
            <h3 className="font-paprika text-xl font-bold text-shadow-sm">
              {project.title}
            </h3>
            <div className="text-lg text-shadow-xs">{project.description}</div>
          </Link>
        ))}
      </div>
      <br />
      <hr />
    </main>
  );
}
