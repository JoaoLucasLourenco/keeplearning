import { Button, Typography } from "@mui/material";

export function Card(props) {
  return (
    <div
      style={{
        border: "2px solid #DBEAFE",
        width: "30%",
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        borderRadius: "10px",
        gap: "1rem",
        backgroundColor: "#ffffff",
      }}
    >
      <header>
        <Typography variant="p" component={"h2"} color="secondary.main">
          {props.subtitle}
        </Typography>
        <Typography variant="h6" component={"h1"}>
          {props.title}
        </Typography>
      </header>
      <main style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{props.cardDataLabel}</p>
        <span style={{ color: "#3B82F6" }}>{props.cardData}</span>
      </main>
      <Button sx={{ borderRadius: "0px" }}>
        <a href={props.urlPath}>{props.buttonText}</a>
      </Button>
    </div>
  );
}
