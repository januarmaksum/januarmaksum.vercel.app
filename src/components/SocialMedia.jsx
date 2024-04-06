import { FaLinkedin, FaGithub } from "react-icons/fa";
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
      <li className="group">
        <a href="/januarmaksum_cv.pdf" className="bg-primary group-hover:text-primary border-2 border-primary group-hover:border-primary group-hover:bg-dark-blue transition-all text-dark-blue inline-flex cursor-pointer gap-1 font-semibold rounded-full items-center px-3 py-1 text-sm">
          <span>Resume</span>
          <GoDownload
            size={20}
            className="text-dark-blue group-hover:text-primary cursor-pointer"
          />
        </a>
      </li>
    </ul>
  );
}
