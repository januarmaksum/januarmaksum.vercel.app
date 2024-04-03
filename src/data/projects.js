import bannerSearchJob from "../assets/banner-project-search-job.jpeg";
import bannerMovie from "../assets/banner-movie-app.png";
import bannerResto from "../assets/banner-project-resto.png";
import bannerLottery from "../assets/banner-lottery.png";
import bannerLicensing from "../assets/banner-izin-mudah.png";

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
    project_title: "Random Name Picker / Draw a Winner",
    project_description:
      "The company has decided to organize a giveaway where employees can participate and win exciting prizes. I build and designed web application to help company select random names or draw winners effortlessly.",
    project_build_with: ["React.js", "TailwindCSS"],
    project_link: "https://github.com/januarmaksum/react-random-name-picker",
    project_image: bannerLottery,
  },
  {
    project_id: "3",
    project_title: "Movie Search App",
    project_description:
      "Build with React.js, this app offers a seamless and intuitive experience for movie enthusiasts to search for their favorite films and explore details.",
    project_build_with: ["React.js"],
    project_link: "https://github.com/januarmaksum/movie-app-react",
    project_image: bannerMovie,
  },
  {
    project_id: "4",
    project_title: "Restaurant ∙ Landing page",
    project_description:
      "Create a visually appealing and functional landing page for a restaurant named Resto using HTML and CSS.",
    project_build_with: ["HTML", "CSS"],
    project_link: "https://github.com/januarmaksum/Landing-page-Restaurant",
    project_image: bannerResto,
  },
  {
    project_id: "5",
    project_title: "Business Licensing Services",
    project_description:
      "Build and design online platform dedicated to simplifying the process of obtaining business licenses. Optimized structure html for best practice SEO.",
    project_build_with: ["Wordpress"],
    project_link: "https://izinmudah.com",
    project_image: bannerLicensing,
  },
];
