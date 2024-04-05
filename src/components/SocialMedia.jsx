import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { GoDownload } from "react-icons/go";

export default function SocialMedia() {
  return (
    <ul className="flex items-center mt-9 lg:mt-0 gap-4">
      <li>
        <a href="https://www.linkedin.com/in/januarmaksum" target="_blank">
          <FaLinkedin
            size={28}
            className="hover:text-slate-200 transition-all cursor-pointer"
          />
        </a>
      </li>
      <li>
        <a href="https://github.com/januarmaksum" target="_blank">
          <FaGithub
            size={28}
            className="hover:text-slate-200 transition-all cursor-pointer"
          />
        </a>
      </li>
      <li>
        <a href="mailto:januarmaksum@gmail.com">
          <FaEnvelope
            size={28}
            className="hover:text-slate-200 transition-all cursor-pointer"
          />
        </a>
      </li>
      <li className="group">
        <a href="/januarmaksum_cv.pdf" className="group-hover:bg-primary transition-all group-hover:text-dark-blue inline-flex cursor-pointer gap-1 font-semibold rounded-full items-center px-3 py-1 text-xs bg-primary/10 text-primary">
          <span>Resume</span>
          <GoDownload
            size={20}
            className="group-hover:text-dark-blue cursor-pointer"
          />
        </a>
      </li>
    </ul>
  );
}
