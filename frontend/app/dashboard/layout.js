"use client";
import { AppBar } from "@/components/AppBar/Appbar";
import { MainScreen } from "@/components/MainScreen/MainScreen";
import { appBarItems } from "@/lib/appBarItens";
import { DashboardMainScreen } from "@/components/DashBoardMainScreen.js/DashboardMainScreen";

export default function DashboardLayout({ children }) {
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
        <MainScreen>{children}</MainScreen>
      </div>
    </main>
  );
}
