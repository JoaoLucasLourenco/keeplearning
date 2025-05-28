import { Typography } from "@mui/material";

export function PageInfo(props) {
  return (
    <div style={{ display: "block" }}>
      <Typography variant="p" color="primary.main">
        {props.subtitle}
      </Typography>

      <Typography fontWeight={"bold"} variant="h5" color="text.primary">
        {props.title}
      </Typography>
    </div>
  );
}
