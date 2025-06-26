"use client";
import { DataUpdateAlert } from "@/components/DataUpdateAlert/DataUpdateAlert";
import { PageInfo } from "@/components/PageInfo/PageInfo";
import { Button } from "@mui/material";
import { SyncOutlined } from "@mui/icons-material";

export function DashboardMainScreen(props) {
  return (
    <div
      style={{
        gap: "1rem",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <PageInfo subtitle={props.subtitle} title={props.title} />
      </div>
    </div>
  );
}
