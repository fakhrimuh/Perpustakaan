import {
  Input,
  Button,
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const TABLE_HEAD = ["No", "Judul", "Tanggal Peminjaman", "Tanggal pengembalian"];

const TABLE_ROWS = [
  {
    judul: "Menjadi Guru Hebat Di Era Revolusi Industri 4.0",
    peminjaman: "23/04/23",
    pengembalian: "27/04/23"
  },
  {
    judul: "Daring Duraring Belajar dari Rumah",
    peminjaman: "23/05/24",
    pengembalian: "28/05/24"
  },
  {
    judul: "Test Book",
    peminjaman: "23/05/24",
    pengembalian: "28/05/24"
  },

];

export default function PeminjamanPage() {
  return (
    <div >
      <div className="text-center text-redPrimary my-4">
        <h1 className="font-bold text-4xl mb-12">Cek Peminjaman</h1>
        <div className="w-1/2 mb-10 flex items-center mx-auto">
          <Input
            type="number"
            placeholder="Masukkan NIM"
            icon={<MagnifyingGlassIcon className="text-redPrimary font-bold" />}
            className="!border-2 !border-redPrimary font-semibold text-base bg-transparent text-redPrimary  placeholder:text-redPrimary appearance-none"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
          />

          <Button
            variant="outlined"
            className="w-1/4 mx-2 bg-creamSecondary text-redPrimary rounded-lg p-2 border-2 border-redPrimary hover:bg-redPrimary hover:text-creamSecondary text-sm font-semibold"
          >
            Cek
          </Button>
        </div>
        <div className="text-center">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeo8aSUy1UcQYsd3PxLZsAbMWejKXIkQFviQYWnHzs-FT1rCA/viewform" className="underline font-semibold text-base" target="_blank" rel="noreferrer">form surat bebas pustaka</a>
        </div>
      </div>

      <Card className="my-6 mx-auto w-1/2 border-2 bg-transparent border-redPrimary">
        <CardBody>
          <Typography className="mb-2 text-redPrimary font-semibold text-base">
            Muhammad Fakhri Febriawan
          </Typography>
          <div className="overflow-x-auto">
            <table className="w-full min-w-max bg-creamSecondary border-2 border-redPrimary table-auto text-black text-left shadow-lg">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th key={head} className="border-b bg-redPrimary border-redPrimary p-4">
                      <Typography className="font-bold text-creamSecondary text-center leading-none">
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(({ judul, peminjaman, pengembalian }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b-2 border-redPrimary";

                  return (
                    <tr key={index + 1} className="odd:bg-creamPrimary">
                      <td className={classes}>
                        <Typography className="font-semibold text-base">
                          {index + 1}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography className="font-semibold text-base w-60">
                          {judul}
                        </Typography>
                      </td>
                      <td className={`${classes} w-24`}>
                        <Typography className="font-semibold text-center text-base">
                          {peminjaman}
                        </Typography>
                      </td>
                      <td className={`${classes} w-24`}>
                        <Typography className="font-semibold text-center text-base">
                          {pengembalian}
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>

    </div>
  );
}
