import { Input, Button, Card, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { MagnifyingGlassIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import React, { useState } from 'react';


const OpacList = [
  {
    icon: BookOpenIcon,
    judul: "Aplikasi komputer dan analisis multivariat analisis faktor",
    pengarang: "Siswoyo Hardjodipuro",
    material: "Buku",
    koleksi: "reserve, Lantai 2",
    nomorPanggil: "ES 001.433 IND a",
    salinanBarcode: "a0085820",
    status: "rusak",
  },
  {
    icon: BookOpenIcon,
    judul: "100% ampuh membasmi virus komputer tanpa antivirus",
    pengarang: "Arifianto, Deni",
    material: "Buku",
    koleksi: "reserve, Lantai 2",
    nomorPanggil: "RES 005.84 ARI s",
    salinanBarcode: "a0157185",
    status: "dikembalikan",
  },
  {
    icon: BookOpenIcon,
    judul: "Ayo tune up komputer anda",
    pengarang: "Digibook",
    material: "Buku",
    koleksi: "sirkulasi, Lantai 1",
    nomorPanggil: "006.4 DIG a",
    salinanBarcode: "a0076582",
    status: "dikembalikan",
  },
  {
    icon: BookOpenIcon,
    judul: "Analisa kebutuhan dalam rekayasa perangkat lunak",
    pengarang: "Siahaan, Daniel",
    material: "Buku",
    koleksi: "reserve, Lantai 2",
    nomorPanggil: "RES 005.3 SIA a",
    salinanBarcode: "a0140975",
    status: "dikembalikan",
  },
  {
    icon: BookOpenIcon,
    judul: "Rekayasa perangkat lunak",
    pengarang: "Lajamudin B., Al-Bahra",
    material: "Buku",
    koleksi: "sirkulasi, Lantai 1",
    nomorPanggil: "005.3 LAJ r",
    salinanBarcode: "a0052743",
    status: "dikembalikan",
  },
  {
    icon: BookOpenIcon,
    judul: "Dasar-dasar teknik pengujian tegangan tinggi",
    pengarang: "Tobing, Bonggas L",
    material: "Buku",
    koleksi: "reserve, Lantai 2",
    nomorPanggil: "RES 621.319 13 TOB d",
    salinanBarcode: "a0150305",
    status: "dikembalikan",
  },
];

export default function OpacPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const pageSize = 5; // Jumlah item per halaman

  // Fungsi pencarian
  const filteredData = OpacList.filter((item) =>
    item.judul.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredData.length / pageSize)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-creamSecondary border-creamSecondary border-2 "
          />
          {/* <Button
            variant="outlined"
            className="text-center hover:text-redPrimary w-1/4 mx-2 border-creamSecondary hover:bg-creamSecondary text-creamSecondary"
          >
            Cari
          </Button> */}
        </div>

        <CardBody>
          <div className="w-4/6  mx-auto">
            {currentItems.map((result, index) => {
              const isLast = index === OpacList.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-creamSecondary";
              return (
                <div className={`${classes} flex my-2`}>
                  <div className="w-1/4">
                    <BookOpenIcon className="m-auto h-16 text-creamSecondary" />
                  </div>
                  <div className="w-3/4 text-creamSecondary">
                    <h2 className="text-xl font-bold tracking-wide uppercase">
                      {result.judul}
                    </h2>
                    <table className="font-medium text-sm">
                      <tr className="mb-2">
                        <td>Pengarang</td>
                        <td>:</td>
                        <td>{result.pengarang}</td>
                      </tr>
                      <tr className="mb-2">
                        <td>Material</td>
                        <td>:</td>
                        <td>{result.material}</td>
                      </tr>
                      <tr className="mb-2">
                        <td>Koleksi</td>
                        <td>:</td>
                        <td>{result.koleksi}</td>
                      </tr>
                      <tr>
                        <td>Nomor Panggil</td>
                        <td>:</td>
                        <td>{result.nomorPanggil}</td>
                      </tr>
                    </table>
                    <hr className="mt-2" />

                    <div className="flex justify-between font-medium text-sm my-2">
                      <tr>
                        <td>Salinan Barcode</td>
                        <td>:</td>
                        <td>{result.salinanBarcode}</td>
                      </tr>
                      <tr>
                        <td>Status</td>
                        <td>:</td>
                        <td>{result.status}</td>
                      </tr>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>
        </CardBody>

        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm" className="bg-CreamSecondary" onClick={prevPage} disabled={currentPage === 1}>
              Previous
            </Button>
            <Button variant="outlined" size="sm" onClick={nextPage} disabled={currentPage === Math.ceil(filteredData.length / pageSize)}>
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
