import { useEffect, useState } from "react";
import Avatar from "../assets/me.webp";
import Navigation from "./Navigation";

export default function Summary({ data, onPress }) {
  const [classNameId, setClassNameId] = useState('#about');

  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash;
      setClassNameId(hash);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <div className="relative w-[120px] group avatar mx-auto md:mx-0">
        <img
          src={Avatar}
          alt="januar maksum"
          width={120}
          height={120}
          className="rounded-lg z-20 relative block h-auto max-w-full"
        />
        <div className="absolute group-hover:bg-primary transition-all group-hover:!bg-none border-primary rounded-lg z-10 top-2 -right-2 border w-[120px] h-[120px]" style={{ backgroundImage: "url(/frame_bg.svg)" }} />
      </div>
      <h1 className="text-3xl md:text-5xl font-bold text-white mt-6 title-page text-center md:text-left">
        Januar Maksum
      </h1>
      <div className="text-lg md:text-xl mt-2 text-slate-300 font-medium text-center md:text-left">
        Frontend Web Developer
      </div>
      <nav className="hidden lg:flex flex-col mt-12 mb-12">
        <ul className="w-max">
          {data?.map((item) => (
            <Navigation
              key={item?.nav_id}
              data={item}
              onPress={onPress}
              spyId={item.href}
              classNameId={classNameId}
            />
          ))}
        </ul>
      </nav>
    </section>
  );
}
