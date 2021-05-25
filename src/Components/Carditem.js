import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";

export default function Carditem(props) {
  return (
    <>
    {console.log(props.imgUrl)}
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="120"
            alt="not render"
            image={props.imgUrl}
          />
          <CardContent>
            <Typography style={{ textAlign: "start" }}>
              This is card example
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
