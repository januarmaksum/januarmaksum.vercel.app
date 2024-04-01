import avatar from "./assets/me.webp";
import Experiences from "./components/Experiences";
import experiences from "./data/experiences.json";

function App() {
  const dataExperiences = experiences.experiences;

  return (
    <div className="mx-auto max-w-screen-xl px-24">
      <div className="lg:flex lg:gap-4">
        <aside className="py-24 w-1/2 sticky max-h-screen top-0">
          <img
            src={avatar}
            alt="januar maksum"
            width={150}
            className="rounded-full"
          />
          <h1 className="text-5xl font-bold text-primary mt-6">
            Januar Maksum
          </h1>
          <h2 className="text-xl mt-1 text-slate-200 font-semibold">
            Frontend Developer
          </h2>
          <p className="mt-3 max-w-xs">
            I build pixel-perfect, engaging, and accessible digital experiences.
          </p>
        </aside>
        <main className="w-1/2 py-24">
          <div className="flex flex-col gap-3">
            <p>
              Hello. 👋 I&apos;m Januar, a frontend developer based in Jakarta,
              who enjoys building things that live on the internet. I develop
              exceptional websites that provide intuitive, pixel-perfect user
              interfaces.
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
              I&apos;m experienced frontend developer more than 9 years in building
              modern and user-friendly web applications. Proficient in web
              development technologies, with a strong focus on performance,
              stability and maintainability.
            </p>
            <p>Adept at translating design concepts into fully functional.</p>
          </div>
          <ol className="mt-28">
            {dataExperiences.map((item) => (
              <Experiences data={item} key={item.job_id} />
            ))}
          </ol>
        </main>
      </div>
    </div>
  );
}

export default App;
