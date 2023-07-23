import { Input, Button, Card, CardBody } from "@material-tailwind/react";
import { MagnifyingGlassIcon, BookOpenIcon } from "@heroicons/react/24/outline";

export default function OpacPage() {
  return (
    <div>
      <Card className="my-6 mx-auto w-5/6  bg-redPrimary">
        <div className="text-center text-creamSecondary my-4">
          <h1 className="font-bold text-xl">Open Public Access</h1>
          <p className="mx-auto font-medium">
            Merupakan halaman yang mempermudah anda untuk mencari berbagai
            sumber baik dari UPI maupun bukan
          </p>
        </div>
        <div className="w-1/2 mb-2 flex items-center mx-auto">
          <Input
            type="text"
            label="Kata Kunci"
            icon={<MagnifyingGlassIcon className="text-creamSecondary" />}
            className="text-creamSecondary border-creamSecondary border-2 "
          />
          <Button
            variant="outlined"
            className="text-center hover:text-redPrimary w-1/4 mx-2 border-creamSecondary hover:bg-creamSecondary text-creamSecondary"
          >
            Cari
          </Button>
        </div>

        <CardBody>
          <div className="w-4/6 border-b-2 border-creamSecondary mx-auto">
            <div className="flex my-2">
              <div className="w-1/4">
                <BookOpenIcon className="m-auto h-16 text-creamSecondary" />
              </div>
              <div className="w-3/4 text-creamSecondary ">
                <h2 className="text-xl font-bold tracking-wide uppercase">
                  Aplikasi komputer dan analisis multivariat analisis faktor
                </h2>
                <table className="font-medium text-sm">
                  <tr className="mb-2">
                    <td>Pengarang</td>
                    <td>:</td>
                    <td>Siswoyo Hardjodipuro</td>
                  </tr>
                  <tr className="mb-2">
                    <td>Material</td>
                    <td>:</td>
                    <td>Buku</td>
                  </tr>
                  <tr className="mb-2">
                    <td>Koleksi</td>
                    <td>:</td>
                    <td>reserve, Lantai 2</td>
                  </tr>
                  <tr>
                    <td>Nomor Panggil</td>
                    <td>:</td>
                    <td>RES 001.433 IND a</td>
                  </tr>
                </table>
                <hr className="mt-2" />
                <div className="flex justify-between font-medium text-sm my-2">
                  <tr>
                    <td>Salinan Barcode</td>
                    <td>:</td>
                    <td>a0085820</td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td>:</td>
                    <td>rusak</td>
                  </tr>
                </div>
              </div>
            </div>
          </div>
          <div className="w-4/6 border-b-2 border-creamSecondary mx-auto">
            <div className="flex my-2">
              <div className="w-1/4">
                <BookOpenIcon className="m-auto h-16 text-creamSecondary" />
              </div>
              <div className="w-3/4 text-creamSecondary ">
                <h2 className="text-xl font-bold tracking-wide uppercase">
                  Aplikasi komputer dan analisis multivariat analisis faktor
                </h2>
                <table className="font-medium text-sm">
                  <tr className="mb-2">
                    <td>Pengarang</td>
                    <td>:</td>
                    <td>Siswoyo Hardjodipuro</td>
                  </tr>
                  <tr className="mb-2">
                    <td>Material</td>
                    <td>:</td>
                    <td>Buku</td>
                  </tr>
                  <tr className="mb-2">
                    <td>Koleksi</td>
                    <td>:</td>
                    <td>reserve, Lantai 2</td>
                  </tr>
                  <tr>
                    <td>Nomor Panggil</td>
                    <td>:</td>
                    <td>RES 001.433 IND a</td>
                  </tr>
                </table>
                <hr className="mt-2" />
                <div className="flex justify-between font-medium text-sm my-2">
                  <tr>
                    <td>Salinan Barcode</td>
                    <td>:</td>
                    <td>a0085820</td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td>:</td>
                    <td>rusak</td>
                  </tr>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
