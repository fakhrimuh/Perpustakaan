import {
  Input,
  Button,
  Card,
  CardBody,
  Typography,
  CardFooter,
} from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function PeminjamanPage() {
  return (
    <div>
      <div className="text-center text-redPrimary mb-2">
        <h1 className="font-bold ">Cek Peminjaman Buku</h1>
        <p className="mx-auto font-medium w-1/2">
          Selamat datang di halaman Cek Peminjaman Buku! Di sini Anda dapat
          memeriksa status peminjaman buku Anda dengan mudah.
        </p>
      </div>
      <div className="mx-auto w-1/2 mb-2 flex items-center">
        <Input
          type="number"
          label="Masukan Nim"
          color="red"
          icon={<MagnifyingGlassIcon />}
          className=""
        />
        <Button
          variant="outlined"
          className="text-center text-redPrimary w-1/4 mx-2 border-redPrimary hover:bg-redPrimary hover:text-creamSecondary"
        >
          Cek
        </Button>
      </div>
      <Card className="mt-6 w-96 mb-5">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            UI/UX Review Check
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
