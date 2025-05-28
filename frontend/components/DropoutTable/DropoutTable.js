import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Nome do aluno",
    width: 150,
    editable: false,
  },
  {
    field: "email",
    headerName: "Email do aluno",
    width: 150,
    editable: false,
  },
  {
    field: "risc",
    headerName: "Risco de evasão",
    width: 110,
    editable: false,
  },
];

const rows = [
  {
    id: 1,
    name: "João Lucas Lourenço",
    email: "joao@aluno.unifenas.br",
    risc: "19%",
  },
  {
    id: 2,
    name: "João Lucas Lourenço",
    email: "joao@aluno.unifenas.br",
    risc: "20%",
  },
  {
    id: 3,
    name: "João Lucas Lourenço",
    email: "joao@aluno.unifenas.br",
    risc: "25%",
  },
  {
    id: 4,
    name: "João Lucas Lourenço",
    email: "joao@aluno.unifenas.br",
    risc: "21%",
  },
  {
    id: 5,
    name: "João Lucas Lourenço",
    email: "joao@aluno.unifenas.br",
    risc: "27%",
  },
  {
    id: 6,
    name: "João Lucas Lourenço",
    email: "joao@aluno.unifenas.br",
    risc: "34%",
  },
  {
    id: 7,
    name: "João Lucas Lourenço",
    email: "joao@aluno.unifenas.br",
    risc: "29%",
  },
  {
    id: 8,
    name: "João Lucas Lourenço",
    email: "joao@aluno.unifenas.br",
    risc: "30%",
  },
  {
    id: 9,
    name: "João Lucas Lourenço",
    email: "joao@aluno.unifenas.br",
    risc: "31%",
  },
];

export function DropoutTable() {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        autoPageSize
        autosizeOnMount
        disableRowSelectionOnClick
      />
    </Box>
  );
}
