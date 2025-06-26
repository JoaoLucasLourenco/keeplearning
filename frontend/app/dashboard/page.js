"use client";
import { DashboardMainScreen } from "@/components/DashBoardMainScreen.js/DashboardMainScreen";
import { useCourse } from "@/hooks/context/useCourse";
import { courses } from "@/lib/courses";

export default function Dashboard() {
  const { selectedCourseId } = useCourse();
  const selectedCourse = courses.find(
    (course) => course.id === selectedCourseId
  );

  return selectedCourse ? (
    <DashboardMainScreen
      title={"Dashboard Acadêmico"}
      subtitle={selectedCourse.course}
    />
  ) : (
    <DashboardMainScreen
      title={"Dashboard Acadêmico"}
      subtitle={"Todas as diciplinas"}
    />
  );
}
