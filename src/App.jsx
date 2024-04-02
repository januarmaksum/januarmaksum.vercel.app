import { useRef } from "react";
import ScrollSpy from "react-ui-scrollspy";
import About from "./components/About";
import Experiences from "./components/Experiences";
import SocialMedia from "./components/SocialMedia";
import Summary from "./components/Summary";
import experiences from "./data/experiences.json";
import navigation from "./data/navigation.json";

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
        <aside className="py-24 px-6 mx-auto md:w-4/6 lg:w-1/2 lg:sticky max-h-screen flex flex-col justify-between top-0">
          <Summary data={dataNav} onPress={onPress} />
          <SocialMedia />
        </aside>
        <main
          ref={parentScrollContainerRef}
          className="px-6 md:w-4/6 lg:w-1/2 mx-auto py-24 md:pb-[100rem]"
        >
          <ScrollSpy
            activeClass="active"
            offsetBottom={80}
            scrollThrottle={20}
            useBoxMethod
          >
            <div id="about" className="flex flex-col gap-3 mb-40">
              <About />
            </div>
            <ol id="experience">
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
