import ImageCover from "./ImageCover";
import LinkArrow from "./LinkArrow";

/* eslint-disable react/prop-types */
export default function Projects({ data }) {
  return (
    <li className="mb-10">
      <a
        href={data?.project_link}
        target="_blank"
        className="group grid lg:grid-cols-8 xl:grid-cols-10 relative transition-all cursor-pointer"
      >
        <div className="hidden md:block absolute transition rounded-md -inset-x-4 lg:-right-3 xl:-right-4 -inset-y-4 z-0 group-hover:bg-slate-800/50 group-hover:drop-shadow-sm group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />
        <header className="col-span-3 lg:col-span-full xl:col-span-3 lg:flex gap-4 xl:block z-10 text-xs mt-[5px] group-hover:text-slate-300">
          <ImageCover src={data?.project_image} alt={data?.project_title} />
        </header>
        <div className="lg:col-span-8 xl:col-span-7 z-10">
          <h3 className="font-medium mt-3 xl:mt-0 text-base group-hover:text-primary text-slate-200">
            {data?.project_title}
            <LinkArrow />
          </h3>
          <p className="mt-2 text-sm group-hover:text-slate-300 break-words">
            {data?.project_description}
          </p>
          <ul className="flex flex-wrap gap-1 mt-3">
            {data?.project_build_with.map((build) => (
              <li
                key={build}
                className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors border-transparent bg-primary/10 text-primary"
              >
                {build}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </li>
  );
}
