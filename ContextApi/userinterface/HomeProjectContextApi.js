import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

export const HomePageProjectContext = createContext();

export default function HomeProjectContextApi({ children }) {
  const [projects, setprojects] = useState([]);

  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [upcomingProjects, setUpcomingProjects] = useState([]);

  const filterProjects = (filterCriteria, limit) => {
    let filteredProjects = [...projects];
    let filteredResult;

    if (filterCriteria === "featured") {
      filteredResult = filteredProjects.filter((project) => project.featured);
      setFeaturedProjects(filteredResult.slice(0, limit));
    } else if (filterCriteria === "upcoming") {
      filteredResult = filteredProjects.filter(
        (project) => project.projectStatus === "upcoming Project"
      );
      setUpcomingProjects(filteredResult.slice(0, limit));
    }

    return filteredResult.slice(0, limit); // Return filtered result
  };

  useEffect(() => {
    const featuredResult = filterProjects("featured", 3);
    const upcomingResult = filterProjects("upcoming", 3);
  }, [projects]);

  return (
    <HomePageProjectContext.Provider
      value={{
        projects,
        setprojects,
        featuredProjects,
        upcomingProjects,
      }}
    >
      {children}
    </HomePageProjectContext.Provider>
  );
}
