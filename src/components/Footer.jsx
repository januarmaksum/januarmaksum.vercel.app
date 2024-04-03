export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Built with{" "}
        <a href="https://react.dev" className="text-slate-200" target="_blank">
          React.js
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com"
          className="text-slate-200"
          target="_blank"
        >
          Tailwind CSS
        </a>
        , deployed with{" "}
        <a href="https://vercel.com" className="text-slate-200" target="_blank">
          Vercel
        </a>
        . <br className="hidden lg:block" /> All text is set in the{" "}
        <a
          href="https://fonts.google.com/specimen/Inter"
          className="text-slate-200"
          target="_blank"
        >
          Inter
        </a>{" "}
        typeface.
      </p>
    </footer>
  );
}
