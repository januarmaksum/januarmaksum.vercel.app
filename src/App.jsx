import { useRef } from "react";
import ScrollSpy from "react-ui-scrollspy";
import About from "./components/About";
import Experiences from "./components/Experiences";
import SocialMedia from "./components/SocialMedia";
import Summary from "./components/Summary";
import LinkArrow from "./components/LinkArrow";
import Projects from "./components/Projects";
import SectionTitle from "./components/SectionTitle";
import experiences from "./data/experiences.json";
import navigation from "./data/navigation.json";
import { dataProjects } from "./data/projects";

function App() {
  const parentScrollContainerRef = useRef(null);
  const dataExperiences = experiences.experiences;
  const dataNav = navigation.navigation;

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
    <div className="mx-auto lg:max-w-none xl:max-w-screen-xl lg:px-6 xl:px-24">
      <div className="lg:flex lg:gap-4">
        <aside className="py-16 xl:py-24 px-6 mx-auto md:w-4/6 lg:w-1/2 lg:sticky max-h-screen flex flex-col justify-between top-0">
          <Summary data={dataNav} onPress={onPress} />
          <SocialMedia />
        </aside>
        <main
          ref={parentScrollContainerRef}
          className="px-6 md:w-4/6 lg:w-1/2 mx-auto py-16 xl:py-24"
        >
          <ScrollSpy
            activeClass="active"
            offsetBottom={80}
            scrollThrottle={20}
            useBoxMethod
          >
            <section id="about" className="flex flex-col gap-3 mb-16 lg:mb-40">
              <SectionTitle title="About" />
              <About />
            </section>
            <section id="experience" className="mb-16 lg:mb-40">
              <SectionTitle title="Experience" />
              <ol>
                {dataExperiences.map((item) => (
                  <Experiences key={item.job_id} data={item} />
                ))}
                <div className="group mt-14">
                  <a
                    href="/januarmaksum_cv.pdf"
                    className="flex group-hover:text-primary cursor-pointer text-slate-200 font-semibold"
                  >
                    View Full Résumé
                    <LinkArrow />
                  </a>
                </div>
              </ol>
            </section>
            <section id="projects" className="mb-[35rem]">
              <SectionTitle title="Projects" />
              <ol>
                {dataProjects.map((item) => (
                  <Projects key={item.project_id} data={item} />
                ))}
              </ol>
            </section>
          </ScrollSpy>
        </main>
      </div>
    </div>
  );
}

export default App;
