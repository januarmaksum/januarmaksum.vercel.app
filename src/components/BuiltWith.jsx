export default function BuiltWith({ build }) {
  return (
    <li className="my-1 mr-1.5">
      <div className="flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors border-transparent bg-primary/10 text-primary">
        {build}
      </div>
    </li>
  );
}
