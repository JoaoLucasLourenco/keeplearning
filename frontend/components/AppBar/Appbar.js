import { Typography } from "@mui/material";
import { AppBarItem } from "../AppBarItem/AppBarItem";
import { usePathname } from "next/navigation";
export function AppBar(props) {
  const pathName = usePathname();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Typography
          display={"flex"}
          fontWeight={"bold"}
          variant="h6"
          component={"h1"}
          color="text.primary"
          textAlign={"center"}
        >
          Keep{" "}
          <Typography
            color="primary"
            fontWeight={"bold"}
            variant="h6"
            component={"span"}
            textAlign={"center"}
          >
            Learning
          </Typography>
        </Typography>
      </div>
      <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {props.items.map((item) => (
          <AppBarItem
            active={item.urlPath === pathName}
            icon={item.icon}
            textContent={item.textContent}
            urlPath={item.urlPath}
            key={item.urlPath}
          />
        ))}
      </ul>
    </div>
  );
}
