import { Alert, Button } from "@mui/material";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
export function DataUpdateAlert(props) {
  return (
    <Alert
      severity={props.updatedData ? "success" : "error"}
      variant="outlined"
    >
      {props.updatedData ? (
        <p>Os registros estão atualizados!</p>
      ) : (
        <p>Os registros estão desatualizados! Sincronize os dados agora.</p>
      )}
    </Alert>
  );
}
