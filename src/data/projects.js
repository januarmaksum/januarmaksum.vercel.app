import bannerSearchJob from "../assets/banner-project-search-job.jpeg";
import bannerResto from "../assets/banner-project-resto.png";

export const dataProjects = [
  {
    project_id: "1",
    project_title: "Search Jobs App",
    project_description:
      "A simple Search jobs app build with React Native Expo and free Api jSearch from Rapid API. Include search and detail job and linked to real jobs in google.",
    project_build_with: ["React Native", "React.js", "Expo"],
    project_link: "https://github.com/januarmaksum/react-native-search-jobs",
    project_image: bannerSearchJob,
  },
  {
    project_id: "2",
    project_title: "Restaurant - Landing page",
    project_description:
      "Create a visually appealing and functional landing page for a restaurant named Resto using HTML and CSS.",
    project_build_with: ["HTML", "CSS"],
    project_link: "https://github.com/januarmaksum/Landing-page-Restaurant",
    project_image: bannerResto,
  },
];
