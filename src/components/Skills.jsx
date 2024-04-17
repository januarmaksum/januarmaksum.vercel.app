export default function Skills({ data }) {
  const resource = (name) => {
    switch (name) {
      case "html":
        return "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white";
      case "css":
        return "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white";
      case "react":
        return "https://camo.githubusercontent.com/3babc94d778f96441b3a66615fb5ee88c6ed04f174ed49b04df92b071a7d0e80/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642";
      case "angularjs":
        return "https://camo.githubusercontent.com/7822039d404c273160234a2a0d1b02402b12625fe202a9f1f00d5fc24aff9d19/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f616e67756c61722e6a732d2532334532333233372e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d616e67756c61726a73266c6f676f436f6c6f723d7768697465";
      case "tailwindcss":
        return "https://camo.githubusercontent.com/3b41d3ae73bc489dbb2be32e772cc814e3a76e372027056c72e5b970c04684a5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7461696c77696e646373732d2532333338423241432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7461696c77696e642d637373266c6f676f436f6c6f723d7768697465";
      default:
        break;
    }
  }; 

  return (
    <li>
      <img className="rounded-full" src={resource(data)} alt={data} />
    </li>
  );
}
