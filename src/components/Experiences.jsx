import { Fragment } from "react";
import LinkArrow from "./LinkArrow";

export default function Experiences({ data }) {
  return (
    <li className="mb-10">
      <a
        href={data?.employer_link}
        target="_blank"
        className="group grid lg:grid-cols-8 xl:grid-cols-10 relative transition-all cursor-pointer"
      >
        <div className="hidden md:block absolute transition rounded-md -inset-x-4 lg:-right-3 xl:-right-4 -inset-y-4 z-0 group-hover:bg-slate-800/50 group-hover:drop-shadow-sm group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />
        <header className="col-span-3 z-10 text-xs mt-[5px] group-hover:text-slate-300">
          {data?.job_start} &mdash; {data?.job_end}
        </header>
        <div className="lg:col-span-8 xl:col-span-7 z-10">
          <h3 className="font-medium text-base text-balance group-hover:text-primary text-slate-200 mt-[5px] xl:mt-0">
            {data?.job_title}{" "}
            <span className="text-slate-400 group-hover:text-primary">at</span>{" "}
            {data?.employer_name}
            <LinkArrow />
          </h3>
          {data?.job_description.map((item) => (
            <Fragment key={item.summary}>
              <ul className="list-disc list-outside mt-2">
                {item.details.map((detail) => (
                  <li className="text-sm group-hover:text-slate-300 text-pretty" key={detail}>{detail}</li>
                ))}
              </ul>
            </Fragment>
          ))}
          <ul className="flex flex-wrap gap-1 mt-3">
            {data?.job_skills.map((skills) => (
              <li
                key={skills}
                className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors border-transparent bg-primary/10 text-primary"
              >
                {skills}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </li>
  );
}
