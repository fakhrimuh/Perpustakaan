import {
  Input,
  Button,
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const TABLE_HEAD = ["No", "Judul", "Tanggal"];

const TABLE_ROWS = [
  {
    name: "1",
    job: "Kalkulus",
    date: "23/04/23",
  },
  {
    name: "2",
    job: "Developer",
    date: "23/05/24",
  },
];

export default function PeminjamanPage() {
  return (
    <div>
      <Card className="my-6 mx-auto w-1/2 bg-redPrimary">
        <div className="text-center text-creamSecondary mb-4">
          <h1 className="font-bold ">Cek Peminjaman Buku</h1>
          <p className="mx-auto font-medium">
            Selamat datang di halaman Cek Peminjaman Buku! Di sini Anda dapat
            memeriksa status peminjaman buku Anda dengan mudah.
          </p>
        </div>
        <div className="w-1/2 mb-2 flex items-center mx-auto">
          <Input
            type="number"
            label="Masukan Nim"
            icon={<MagnifyingGlassIcon className="text-creamSecondary" />}
            className="text-creamSecondary border-creamSecondary border-2 "
          />
          <Button
            variant="outlined"
            className="text-center hover:text-redPrimary w-1/4 mx-2 border-creamSecondary hover:bg-creamSecondary text-creamSecondary"
          >
            Cek
          </Button>
        </div>

        <CardBody>
          <Typography variant="h5" className="mb-2 text-creamSecondary">
            Muhammad Fakhri Febriawan
          </Typography>
          <table className="w-full min-w-max bg-creamSecondary table-auto text-redPrimary text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b border-redPrimary p-4">
                    <Typography className="font-bold leading-none">
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ name, job, date }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-redPrimary";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <Typography variant="small" className="font-semibold">
                        {name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-semibold">
                        {job}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-semibold">
                        {date}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}
