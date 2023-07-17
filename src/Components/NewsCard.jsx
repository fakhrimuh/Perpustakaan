import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import { CalendarDaysIcon, PencilIcon } from "@heroicons/react/24/solid";

export default function NewsCard(props) {
  return (
    <Card className="mt-6 w-11/12 overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody className="text-justify text-black">
        <Typography className="font-semibold text-xl text-black text-justify">
          {props.title}
        </Typography>
        {/* Date */}
        <div className="flex items-center mt-2">
          <Tooltip content="Tanggal Rilis">
            <CalendarDaysIcon className="h-4 w-4 text-redPrimary" />
          </Tooltip>
          <Typography className="text-xs mx-2 mt-1 font-medium">
            {props.date}
          </Typography>
        </div>
        {/* Pencil */}
        <div className="flex items-center mt-2">
          <Tooltip content="Penulis">
            <PencilIcon className="h-4 w-4 text-redPrimary" />
          </Tooltip>
          <Typography className="text-xs mx-2 mt-1 font-medium">
            {props.writer}
          </Typography>
        </div>
        <Typography className="mt-2 font-medium text-sm">
          {props.news}
        </Typography>
      </CardBody>
      <CardFooter className="text-center">
        <Button className="hover:bg-redPrimary border-2 border-redPrimary bg-transparent text-redPrimary hover:text-creamPrimary">
          See More
        </Button>
      </CardFooter>
    </Card>
  );
}
