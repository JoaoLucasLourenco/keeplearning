import { Box } from "@mui/material";
export function MainScreen({ children }) {
  return (
    <div
      style={{
        backgroundColor: "#F3F4F6",
        width: "100%",
        padding: "2rem",
        borderRadius: "20px",
      }}
    >
      {children}
    </div>
  );
}
