"use client";
import { AppBar } from "@/components/AppBar/Appbar";
import { PageInfo } from "@/components/PageInfo/PageInfo";
import { Alert, Box } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export default function Dashboard() {
  const appBarItems = [
    {
      icon: <TrendingUpIcon />,
      urlPath: "/dashboard",
      textContent: "Dashboard",
    },
    {
      icon: <BookOutlinedIcon />,
      urlPath: "#",
      textContent: "Cursos e disciplinas",
    },
    {
      icon: <GroupsOutlinedIcon />,
      urlPath: "##",
      textContent: "Turma",
    },
    {
      icon: <PersonOutlineOutlinedIcon />,
      urlPath: "###",
      textContent: "Meus dados",
    },
  ];
  const updatedData = true;
  return (
    <>
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
        <Box
          sx={{
            bgcolor: "background.paper",
            width: "100%",
            padding: "2rem",
            borderRadius: "20px",
            gap: "1rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <PageInfo
              subtitle={"Ciência da computação"}
              title={"Estrutura de dados"}
            />
          </div>
          <Alert
            severity={updatedData ? "success" : "error"}
            variant="outlined"
          >
            {updatedData
              ? "Os registros estão atualizados!"
              : "Os registros não estão atualizados! Sincronize agora."}
          </Alert>
        </Box>
      </div>
    </>
  );
}
