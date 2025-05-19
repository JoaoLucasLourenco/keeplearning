import express from "express";

const app = express();
const PORT = process.env.SERVER_PORT || 3030;

app.listen(PORT, () => {
  console.log(`Server running in port: ${PORT}`);
});
