import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

export const ListingContext = createContext();

export default function ListingContextAppiProvide({ children }) {
  const [loadingProject, setloadingProject] = useState(true);
  const [allListing, setallListing] = useState([]);
  const [project, setproject] = useState("");

  // const [featureListing, setfeatureListing] = useState([]);
  // const [upcomingListing, setupcomingListing] = useState([]);

  // const filterProjects = (filterCriteria, limit) => {
  //   let filteredProjects = [...allListing];
  //   let filteredResult;

  //   if (filterCriteria === "featured") {
  //     filteredResult = filteredProjects.filter((project) => project.featured);
  //     setfeatureListing(filteredResult.slice(0, limit));
  //   } else if (filterCriteria === "upcoming") {
  //     filteredResult = filteredProjects.filter(
  //       (project) => project.projectStatus === "upcoming Project"
  //     );
  //     setupcomingListing(filteredResult.slice(0, limit));
  //   }

  //   return filteredResult.slice(0, limit); // Return filtered result
  // };

  // useEffect(() => {
  //   const featuredResult = filterProjects("featured", 10);
  //   const upcomingResult = filterProjects("upcoming", 10);
  // }, [allListing, project]);

  return (
    <ListingContext.Provider
      value={{
        allListing,
        setallListing,
        loadingProject,
        setloadingProject,
        project,
        setproject,
        // featureListing,
        // upcomingListing,
      }}
    >
      {children}
    </ListingContext.Provider>
  );
}
