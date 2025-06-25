"use client";
import { AppBar } from "@/components/AppBar/Appbar";
import { MainScreen } from "@/components/MainScreen/MainScreen";
import { appBarItems } from "@/lib/appBarItens";
import { PageInfo } from "@/components/PageInfo/PageInfo";
import { courses } from "@/lib/courses";
import { Card } from "@/components/Card/Card";
export default function Courses() {
  return (
    <main style={{ height: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "2rem",
          height: "100%",
          gap: "2rem",
        }}
      >
        <header
          style={{ width: "30%", display: "flex", justifyContent: "center" }}
        >
          <AppBar items={appBarItems} />
        </header>
        <MainScreen>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "2rem",
            }}
          >
            <PageInfo subtitle={"Cursos e Disciplinas"} title={"Cursos"} />
          </div>
          <div style={{ display: "flex", gap: "2rem" }}>
            {courses.map((course) => (
              <Card
                key={course.id}
                title={course.title}
                subtitle={course.course}
                cardDataLabel={"Alunos matriculados:"}
                cardData={course.cardData}
                buttonText={"Selecionar disciplina"}
                urlPath={"/dashboard/" + course.id}
              />
            ))}
          </div>
        </MainScreen>
      </div>
    </main>
  );
}
