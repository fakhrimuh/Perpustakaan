import { Card, CardBody, Typography } from "@material-tailwind/react";
import React, { useState } from "react";

export default function CardIcon(props) {
  let img1 = props.img1;
  let img2 = props.img2;

  const [over, setOver] = useState(false);
  return (
    <Card
      className="mt-6 w-11/12 hover:bg-redPrimary bg-transparent border-4 border-redPrimary hover:border-creamSecondary"
      onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}
    >
      <CardBody className="text-center text-redPrimary hover:text-creamSecondary">
        <img
          src={over ? img1 : img2}
          alt={props.alternatif}
          className="mx-auto w-24 h-24 mb-4"
        />
        <Typography variant="h5" className="mb-2 ">
          {props.title}
        </Typography>
      </CardBody>
    </Card>
  );
}
