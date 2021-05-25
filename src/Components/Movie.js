import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "./Carditem";
import Carditem from "./Carditem";
import { Container } from "@material-ui/core";

export default function Movie() {
  const url1 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjCUMxGZ6MgvMsnBtWeG_z_CoLoq9n72pPtC1CEmimNTk81JeoO3Q9OsWXqm7SCorK3DA&usqp=CAU";
  const url2 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR80DDA1AdEQDe8japQ1k7bNSv4poZ_7OIccw&usqp=CAU";
  const url3 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyXt4XXmyQDWsrM6YWIoWcSU_kKUC8_7sTmA&usqp=CAU";
  const url4 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTyZt9Kz2aYY3BzYLzlpDITQRQuk6oETf3mg&usqp=CAU";

  return (
    <>
      <Container>
        <Grid container spacing={10}>
          <Grid xs={6} sm={4} lg={3} item>
            <Carditem imgUrl={url1} />
          </Grid>
          <Grid xs={6} sm={4} lg={3} item>
            <Carditem imgUrl={url2} />
          </Grid>
          <Grid xs={6} sm={4} lg={3} item>
            <Carditem imgUrl={url3} />
          </Grid>
          <Grid xs={6} sm={4} lg={3} item>
            <Carditem imgUrl={url4} />
          </Grid>
          <Grid xs={6} sm={4} lg={3} item>
            <Carditem imgUrl={url1} />
          </Grid>
          <Grid xs={6} sm={4} lg={3} item>
            <Carditem imgUrl={url2} />
          </Grid>
          <Grid xs={6} sm={4} lg={3} item>
            <Carditem imgUrl={url3} />
          </Grid>
          <Grid xs={6} sm={4} lg={3} item>
            <Carditem imgUrl={url4} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
