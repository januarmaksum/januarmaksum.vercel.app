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
            <span className="inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </h3>
          <h4 className="text-sm text-slate-200">
            {data?.job_city} &#8729; {data?.job_employment_location} &#8729;{" "}
            {data?.job_employment_type}
          </h4>
          {data?.job_description.map((desc) => (
            <p key={desc} className="mt-2 text-sm md:text-base group-hover:text-slate-300 break-words">
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
