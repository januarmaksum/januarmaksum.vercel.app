import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <ul className="flex mt-9 lg:mt-0 gap-4">
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
    </ul>
  );
}
