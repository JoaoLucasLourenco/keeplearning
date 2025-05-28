"use client";
import { AppBar } from "@/components/AppBar/Appbar";
import { MainScreen } from "@/components/MainScreen/MainScreen";
import { appBarItems } from "@/lib/appBarItens";
import { PageInfo } from "@/components/PageInfo/PageInfo";

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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <PageInfo subtitle={"Cursos e Disciplinas"} title={"Cursos"} />
          </div>
        </MainScreen>
      </div>
    </main>
  );
}
