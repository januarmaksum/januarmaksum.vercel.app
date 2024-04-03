import LinkArrow from "./LinkArrow";

/* eslint-disable react/prop-types */
export default function Experiences({ data }) {
  return (
    <li className="mb-10" key={data?.job_id}>
      <a
        href={data?.employer_link}
        target="_blank"
        className="group grid lg:grid-cols-8 xl:grid-cols-10 relative transition-all cursor-pointer"
      >
        <div className="absolute transition rounded-md -inset-x-4 lg:-right-3 xl:-right-4 -inset-y-4 z-0 group-hover:bg-slate-800/50 group-hover:drop-shadow-sm group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />
        <header className="col-span-3 z-10 text-xs mt-[5px] group-hover:text-slate-300">
          {data?.job_start} &mdash; {data?.job_end}
        </header>
        <div className="lg:col-span-8 xl:col-span-7 z-10">
          <h3 className="font-medium text-base group-hover:text-primary text-slate-200">
            {data?.job_title} &#8729; {data?.employer_name}
            <LinkArrow />
          </h3>
          <h4 className="text-sm text-slate-200">
            {data?.job_city} &#8729; {data?.job_employment_location} &#8729;{" "}
            {data?.job_employment_type}
          </h4>
          {data?.job_description.map((desc) => (
            <p
              key={desc}
              className="mt-2 text-sm group-hover:text-slate-300 break-words"
            >
              {desc}
            </p>
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
