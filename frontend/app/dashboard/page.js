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
      title={selectedCourse.title}
      subtitle={selectedCourse.course}
    />
  ) : (
    <p>Nenhum discicplina selecionada</p>
  );
}
