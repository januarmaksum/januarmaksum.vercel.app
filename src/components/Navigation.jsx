/* eslint-disable react/prop-types */
export default function Navigation({ data, onPress, spyId, classNameId }) {
  const classActive = spyId === classNameId ? "active" : "";

  return (
    <li data-to-scrollspy-id={data?.scrollspy_id}>
      <a
        onClick={(e) => onPress(e)}
        href={data?.href}
        className={`group flex items-center py-3 ${classActive}`}
      >
        <span className="nav-indicator mr-4 h-px w-8 bg-slate-400 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-200 group-focus-visible:text-slate-200">
          {data?.link_text}
        </span>
      </a>
    </li>
  );
}
