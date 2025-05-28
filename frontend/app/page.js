"use client";
import { useRouter } from "next/navigation";
import { Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <Grid
        sx={{ bgColor: "background.default" }}
        spacing={2}
        container
        display={"flex"}
        justifyContent={"center"}
      >
        <Grid
          size={{ xs: 12, sm: 10 }}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={2}
          container
        >
          <Link href={"/"}>
            <Typography
              display={"flex"}
              fontWeight={"bold"}
              variant="h6"
              component={"h1"}
              color="text.primary"
            >
              Keep{" "}
              <Typography
                color="primary"
                fontWeight={"bold"}
                variant="h6"
                component={"span"}
              >
                Learning
              </Typography>
            </Typography>
          </Link>
          <Grid
            display={"flex"}
            gap={3}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Button
              variant="outlined"
              color="primary"
              sx={{ borderRadius: 999, width: 100 }}
            >
              Entrar
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={0.5} justifyContent={"center"} pt={15}>
        <Grid size={{ md: 7, sm: 11 }} textAlign={"center"} padding={1}>
          <Typography
            color="text.primary"
            variant={"h2"}
            component={"h1"}
            fontWeight={"bold"}
          >
            Antecipe, atue e &nbsp;
            <Typography
              color="primary"
              variant="h2"
              component={"span"}
              fontWeight={"bold"}
            >
              transforme&nbsp;
            </Typography>
            a jornada dos seus alunos!
          </Typography>
        </Grid>
        <Grid size={{ md: 6, sm: 10 }} textAlign={"center"} padding={1}>
          <Typography color="secondary" variant={"h6"} component={"h2"}>
            O&nbsp;
            <Typography
              color="text.primary"
              variant={"h6"}
              component={"span"}
              fontWeight={"bold"}
            >
              KeepLearning
            </Typography>
            &nbsp;é uma solução de inteligência artificial desenvolvida para
            apoiar professores e coordenadores na redução da evasão acadêmica.
          </Typography>
          <Button
            size="large"
            variant="contained"
            sx={{ margin: 4, borderRadius: 999 }}
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            Começar
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
