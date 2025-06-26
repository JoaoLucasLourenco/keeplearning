"use client";
import { CourseProvider } from "@/hooks/context/useCourse";

export default function CourseResistry({ children }) {
  return <CourseProvider>{children}</CourseProvider>;
}
