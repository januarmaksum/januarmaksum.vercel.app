export default function Footer() {
  return (
    <footer className="max-w-lg text-sm text-slate-500 sm:pb-0 w-full">
      <p>
        Built with{" "}
        <a href="https://react.dev" className="text-slate-200" target="_blank">
          React
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com"
          className="text-slate-200"
          target="_blank"
        >
          Tailwind
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
        typeface. UI Inspiration from{" "}
        <a
          href="https://brittanychiang.com/"
          target="_blank"
          className="text-slate-200"
        >
          Brittany Chiang
        </a>
        .
      </p>
    </footer>
  );
}
