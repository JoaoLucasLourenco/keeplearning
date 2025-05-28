import { Typography } from "@mui/material";
import { AppBarItem } from "../AppBarItem/AppBarItem";
import { usePathname } from "next/navigation";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Link from "next/link";
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
        <Link href={"#"}>
          <li
            style={{
              display: "flex",
              gap: "1rem",
              color: "#6B7280",
              padding: "0.7rem 1.2rem",
              justifyContent: "flex-start",
              borderRadius: "999px",
              width: "100%",
              alignItems: "center",
              border: "1px solid #D1D5DB",
            }}
          >
            <span style={{ color: "#3B82F6" }}>
              <AutoAwesomeIcon />
            </span>

            <p>Pergunte à IA</p>
          </li>
        </Link>
      </ul>
    </div>
  );
}
