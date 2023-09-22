import { MagnifyingGlassIcon, ChevronUpDownIcon, ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import React, { useState } from 'react';

const TABLE_HEAD = ["Nomor Panggil", "Penulis", "judul", "Anak Judul", "Topik 1", "Topik 2", "Topik 3"];

const TABLE_ROWS = [
  {
    nomorPanggil: "UPI 375 AAN p",
    penulis: "Aan Listiana",
    judul: "Panduan Praktis dalam Mengembangkan Sikap Disiplin dan Mandiri Anak melalui TPM-KURTILAS",
    anakJudul: "pendidikan cuy",
    topik1: "pendidikan dasar",
    topik2: " ",
    topik3: " ",
  },
  {
    nomorPanggil: "UPI 899. 221 030 83 ABB a",
    penulis: "Abbas, Ersis Warmansyah",
    judul: "Asap",
    anakJudul: " ",
    topik1: "Fiksi Indonesia",
    topik2: "Novel Realistis ",
    topik3: "Novel Ramantis ",
  },
  {
    nomorPanggil: "UPI 371.33 ABD t",
    penulis: "Abdulhak, Ishak",
    judul: "Teknologi Pendidikan",
    anakJudul: " ",
    topik1: "Pendidikan Teknologi",
    topik2: "Paradigma Pendidikan ",
    topik3: "Educational Technology ",
  },
  {
    nomorPanggil: "UPI 374 ACH p",
    penulis: "Achmad Hufad",
    judul: "Pemberdayaan Masyarakat",
    anakJudul: "konsep dan refleksi praksis pendidikan masyarakat",
    topik1: "Pendidikan Luar Sekolah",
    topik2: "Pendidikan orang dewasa",
    topik3: "Adult Education",
  },
  {
    nomorPanggil: "UPI 332.0685 ALM m",
    penulis: "Alma, Buchari",
    judul: "manajemen Kredit Mikro",
    anakJudul: "Melalui BMT(Baitulmal Wat Tamwil) Di Lingkungan Mesjid",
    topik1: "Ekonomi Finansial",
    topik2: "Credit Management",
    topik3: " ",
  },
  {
    nomorPanggil: "UPI 410 ALW d.",
    penulis: "Alwasilah, A. Chaedar",
    judul: "Dari Cicalengka sampai Chicago",
    anakJudul: "bunga rampai pendidikan bahasa",
    topik1: "Linguistik",
    topik2: "Bahasa Indonesia",
    topik3: " ",
  },
];



export default function Upiana() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const pageSize = 5; // Jumlah item per halaman

  // Fungsi pencarian
  const filteredData = TABLE_ROWS.filter((item) =>
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
    <div className="container mx-auto">
      <div className="my-4 text-center">
        <Typography variant="h4" className="text-redPrimary font-bold">
          E-Journal dan E-Book
        </Typography>
        <Typography variant="paragraph" className="my-2 w-3/4 mx-auto leading-normal font-medium text-redPrimary text-justify">
          Temukan koleksi lengkap jurnal dan E-book dari berbagai bidang ilmu dengan akses mudah dan terpercaya. Jelajahi artikel terkini dan kumpulan E-book untuk meningkatkan pengetahuan dan pemahaman Anda. Dapatkan manfaatnya dengan mengunduh E-book favorit Anda dan tetap terhubung dengan perkembangan terkini dalam dunia penelitian. Mari mulai petualangan membaca dengan konten yang menginspirasi dan mendidik.
        </Typography>
      </div>
      <Card className="h-full mx-auto w-5/6 mb-4">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <div className="w-full md:w-72">
              <Input icon={<MagnifyingGlassIcon className="h-5 w-5 text-redPrimary" />}
                type="text"
                placeholder="Cari..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="!border !border-redPrimary  text-redPrimary  placeholder-redPrimary"
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
          </div>
        </CardHeader>

        <CardBody className=" px-0">
          <table className="bg-creamPrimary border-redPrimary w-3/4 mx-auto min-w-max table-auto text-left rounded-lg">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={head}
                    className="cursor-pointer border-redPrimary bg-creamSecondary p-4 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                      variant="small"
                      className="flex items-center justify-between gap-2 font-bold leading-none text-redPrimary"
                    >
                      {head}  <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="overflow-hidden">
              {currentItems.map((result, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
                return (
                  <tr key={result.nomorPanggil} className="even:bg-creamSecondary">
                    <td className={`${classes} w-28`}>
                      <Typography variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70">
                        {result.nomorPanggil}
                      </Typography>
                    </td>
                    <td className={`${classes} w-28`}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {result.penulis}
                      </Typography>
                    </td>
                    <td className={`${classes} w-48`}>

                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {result.judul}
                      </Typography>
                    </td>

                    <td className={`${classes} w-28`}>

                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {result.anakJudul}
                      </Typography>
                    </td>

                    <td className={`${classes} w-28`}>

                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {result.topik1}
                      </Typography>
                    </td>
                    <td className={`${classes} w-28`}>

                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {result.topik2}
                      </Typography>
                    </td>
                    <td className={`${classes} w-28`}>

                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {result.topik3}
                      </Typography>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-redPrimary p-4">
          <Typography variant="small" className="font-normal text-redPrimary">
            Page {currentPage} of {Math.ceil(filteredData.length / pageSize)}
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm" className="flex gap-2 !border !border-redPrimary   text-redPrimary hover:bg-redPrimary hover:text-creamSecondary" onClick={prevPage} disabled={currentPage === 1}>
              <ArrowLeftIcon className="h-4 w-4 stroke-2" />

              Previous
            </Button>
            <Button variant="outlined" size="sm" onClick={nextPage} disabled={currentPage === Math.ceil(filteredData.length / pageSize)} className="flex gap-2 !border !border-redPrimary   text-redPrimary hover:bg-redPrimary hover:text-creamSecondary"
            >
              Next
              <ArrowRightIcon className="h-4 w-4 stroke-2" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

