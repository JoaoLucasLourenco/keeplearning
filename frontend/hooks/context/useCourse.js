import { createContext, useContext, useState, useEffect } from "react";

const CourseContext = createContext();

export function useCourse() {
  return useContext(CourseContext);
}

export function CourseProvider({ children }) {
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  useEffect(() => {
    const storedId = localStorage.getItem("selectedCourseId");
    if (storedId) {
      setSelectedCourseId(Number(storedId));
    }
  }, []);

  useEffect(() => {
    if (selectedCourseId !== null) {
      localStorage.setItem("selectedCourseId", selectedCourseId.toString());
    }
  }, [selectedCourseId]);

  return (
    <CourseContext.Provider value={{ selectedCourseId, setSelectedCourseId }}>
      {children}
    </CourseContext.Provider>
  );
}
