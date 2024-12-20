import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { GoDownload } from "react-icons/go";

export default function SocialMedia() {
  return (
    <ul className="flex items-center mt-9 lg:mt-0 gap-4 justify-center md:justify-start">
      <li>
        <a href="https://www.linkedin.com/in/januarmaksum" target="_blank" aria-label="Connect my linkedin profile">
          <FaLinkedin
            size={28}
            className="hover:text-slate-200 transition-all cursor-pointer"
          />
        </a>
      </li>
      <li>
        <a href="https://github.com/januarmaksum" target="_blank" aria-label="Follow my github repository">
          <FaGithub
            size={28}
            className="hover:text-slate-200 transition-all cursor-pointer"
          />
        </a>
      </li>
      <li>
        <a href="mailto:januarmaksum@gmail.com" aria-label="Contact me via email">
          <FaEnvelope
            size={28}
            className="hover:text-slate-200 transition-all cursor-pointer"
          />
        </a>
      </li>
      <li className="group">
        <a href="/januarmaksum-cv.pdf" aria-label="View full my resume" className="bg-primary group-hover:text-primary border-2 border-primary group-hover:border-primary group-hover:bg-slate-950 transition-all text-slate-950 inline-flex cursor-pointer gap-1 font-semibold rounded-full items-center px-3 py-1 text-sm">
          <span>Resume</span>
          <GoDownload
            size={20}
            className="text-slate-950 group-hover:text-primary cursor-pointer"
          />
        </a>
      </li>
    </ul>
  );
}
