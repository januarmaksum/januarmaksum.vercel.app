/* eslint-disable react/prop-types */
export default function ImageCover({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      width={112}
      className="max-w-40 lg:max-w-28 w-full rounded border-2 border-slate-200/30 group-hover:border-slate-200/40 transition"
    />
  );
}
