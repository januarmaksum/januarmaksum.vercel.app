import avatar from "./assets/me.webp";
import Experiences from "./components/Experiences";
import experiences from "./data/experiences.json";
import ScrollSpy from "react-ui-scrollspy";
import { useRef } from "react";

function App() {
  const parentScrollContainerRef = useRef(null);
  const dataExperiences = experiences.experiences;

  const onPress = (e) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      var headerOffset = 100;
      var elementPosition = target.getBoundingClientRect().top;
      var offsetPosition = elementPosition - headerOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl px-24">
      <div className="lg:flex lg:gap-4">
        <aside className="py-24 w-1/2 sticky max-h-screen top-0">
          <div className="relative w-[150px]">
            <img
              src={avatar}
              alt="januar maksum"
              width={150}
              className="rounded-lg z-20 relative"
            />
            <div className="absolute border-primary rounded-lg z-10 top-2 -right-2 border w-[150px] h-[150px]" />
          </div>
          <h1 className="text-5xl font-bold text-primary mt-6">
            Januar Maksum
          </h1>
          <h2 className="text-xl mt-2 text-slate-200 font-semibold">
            Frontend Developer
          </h2>
          <p className="mt-3 max-w-xs">
            I build pixel-perfect, engaging, and accessible digital experiences.
          </p>
          <nav className="flex flex-col mt-7">
            <a onClick={(e) => onPress(e)} href={"#about"}>
              <div data-to-scrollspy-id="about">About</div>
            </a>
            <a onClick={(e) => onPress(e)} href={"#experience"}>
              <div data-to-scrollspy-id="experience">Experience</div>
            </a>
          </nav>
        </aside>
        <main
          ref={parentScrollContainerRef}
          className="w-1/2 py-24 pb-[100rem]"
        >
          <ScrollSpy
            activeClass="active"
            offsetBottom={100}
            scrollThrottle={80}
            useBoxMethod
          >
            <div id="about" className="flex flex-col gap-3">
              <p>
                Hello. 👋 I&apos;m Januar, a frontend developer based in
                Jakarta, who enjoys building things that live on the internet. I
                develop exceptional websites that provide intuitive,
                pixel-perfect user interfaces.
              </p>
              <p>
                Shortly after graduating from{" "}
                <span className="text-slate-200">
                  <a href="https://www.bsi.ac.id/" target="_blank">
                    BSI University
                  </a>
                </span>{" "}
                in 2014, I joined the B2B marketplace company at{" "}
                <span className="text-slate-200">
                  <a href="https://www.indotrading.com/" target="_blank">
                    Indotrading
                  </a>
                </span>{" "}
                where I work on a wide variety of interesting and meaningful
                projects on a daily basis.
              </p>
              <p>
                Experienced frontend developer more than 9 years in
                building modern and user-friendly web applications. Proficient
                in web development technologies, with a strong focus on
                performance, stability and maintainability.
              </p>
            </div>
            <ol id="experience" className="mt-36">
              {dataExperiences.map((item) => (
                <Experiences data={item} key={item.job_id} />
              ))}
            </ol>
          </ScrollSpy>
        </main>
      </div>
    </div>
  );
}

export default App;
