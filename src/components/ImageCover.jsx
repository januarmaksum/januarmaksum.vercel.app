export default function ImageCover({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      width={112}
      className="sm:max-w-72 lg:max-w-28 w-full sm:w-auto rounded border-2 border-slate-200/30 group-hover:border-slate-200/40 transition"
    />
  );
}
