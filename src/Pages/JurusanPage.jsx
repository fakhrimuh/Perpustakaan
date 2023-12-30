import { Input, Typography, Card, CardHeader, CardBody } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import FakultasList from '../Components/FakultasList';
import { UserIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

const dataJson = {
  1: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Pengembangan Aplikasi Manajemen Proyek',
    penulis: 'John Doe',
    nim: '123456',
    tahun: 2022,
    jenis: 'Aplikasi',
  },
  2: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Sistem Informasi Kepegawaian',
    penulis: 'Jane Doe',
    nim: '654321',
    tahun: 2021,
    jenis: 'Sistem Informasi',
  },
  3: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Pengujian Perangkat Lunak',
    penulis: 'Bob Johnson',
    nim: '987654',
    tahun: 2023,
    jenis: 'Pengujian',
  },
  4: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Aplikasi Pencarian Informasi',
    penulis: 'Alice Wonderland',
    nim: '456789',
    tahun: 2022,
    jenis: 'Aplikasi',
  },
  5: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Sistem Manajemen Database',
    penulis: 'Charlie Brown',
    nim: '321654',
    tahun: 2023,
    jenis: 'Sistem Informasi',
  },
  6: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Pengembangan Permainan Edukasi',
    penulis: 'Eva Green',
    nim: '987123',
    tahun: 2021,
    jenis: 'Pengembangan Permainan',
  },
  7: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Sistem Pendukung Keputusan',
    penulis: 'David Copperfield',
    nim: '111222',
    tahun: 2022,
    jenis: 'Sistem Informasi',
  },
  8: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Aplikasi Pemesanan Tiket',
    penulis: 'Grace Kelly',
    nim: '333444',
    tahun: 2023,
    jenis: 'Aplikasi',
  },
  9: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Pengembangan Website E-Commerce',
    penulis: 'George Orwell',
    nim: '555666',
    tahun: 2021,
    jenis: 'Pengembangan Web',
  },
  10: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Sistem Informasi Akademik',
    penulis: 'Mary Shelley',
    nim: '777888',
    tahun: 2022,
    jenis: 'Sistem Informasi',
  },
};

export default function JurusanPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Ganti dengan jumlah item yang ingin ditampilkan per halaman
  const totalItems = Object.keys(dataJson).length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Object.values(dataJson).slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages ? prevPage : prevPage + 1));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? prevPage : prevPage - 1));
  };

  const handleItemsPerPageChange = (e) => {
    const newItemsPerPage = parseInt(e.target.value, 10);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Set halaman kembali ke halaman pertama saat mengubah jumlah item per halaman
  };

  return (
    <div className="text-center mt-[110px]">
      {/* Title and Search bar */}
      <div className="mt-28">
        <h1 className="text-3xl font-extrabold text-redPrimary mb-6">Rekayasa Perangkat Lunak</h1>
        <div>
          <div className="w-1/2 mx-auto mb-16 bg-redPrimary border-solid border-2 border-creamSecondary py-4 px-8 rounded-lg">
            <div className="flex gap-2 ">
              <Input
                type="text"
                placeholder="Kata Kunci"
                // icon={<MagnifyingGlassIcon className="h-5 w-5 text-creamSecondary" />}
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
                className="!border-2 !border-creamSecondary  text-creamSecondary  placeholder-creamSecondary"
                labelProps={{
                  className: 'hidden',
                }}
              />
              <button className="bg-creamSecondary font-semibold text-redPrimary border-2 px-6 rounded-lg hover:bg-redPrimary hover:text-creamSecondary"> Cari </button>
            </div>
            <div className="bg-creamSecondary w-1/3 mt-3 rounded-md">
              <Typography className="text-redPrimary font-semibold text-sm my-2">Rekayasa Perangkat Lunak</Typography>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container flex gap-4 mx-auto mb-6">
        {/* Daftar Jurnal */}
        <div className="w-3/4 border border-redPrimary rounded-lg">
          {Object.keys(currentItems).map((key) => {
            const index = parseInt(key, 10);
            const book = currentItems[key];
            return (
              <Link to={book.link} target="_blank" key={index}>
                <Card shadow={false} className="w-11/12 mx-auto flex-row bg-transparent border-b-2 border-redPrimary rounded-none mb-2">
                  <CardHeader shadow={false} floated={false} className="m-0 w-1/5 bg-transparent shrink-0 rounded-r-none">
                    <div className="bg-redPrimary rounded-lg w-10 h-10 py-2 mt-10 mx-auto">
                      <Typography className="text-creamSecondary">{index + 1}</Typography>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Typography color="black" className="mb-3 text-base font-semibold text-left">
                      {book.judul}
                    </Typography>
                    {/* Icon 1 */}
                    <div className="flex gap-3 mb-2">
                      <UserIcon className="w-5 h-5 text-redPrimary" />
                      <Typography color="black" className="text-sm">
                        {book.penulis} {book.nim} - {book.tahun}
                      </Typography>
                    </div>

                    {/* Icon 2 */}
                    <div className="flex gap-3 mb-">
                      <ArchiveBoxIcon className="w-5 h-5 text-redPrimary" />
                      <Typography color="black" className="text-sm">
                        {book.jenis}
                      </Typography>
                    </div>
                  </CardBody>
                </Card>
              </Link>
            );
          })}

          {/* Pagination */}
          <div className="mx-auto flex justify-center items-center">
            <select value={itemsPerPage} onChange={handleItemsPerPageChange} className="mx-3 py-1 px-2 rounded bg-creamSecondary text-redPrimary">
              <option value={5}>5 per Halaman</option>
              <option value={10}>10 per Halaman</option>
              <option value={15}>15 per Halaman</option>
            </select>
            <button onClick={prevPage} disabled={currentPage === 1} className={`mx-1 px-3 py-1 rounded ${currentPage === 1 ? 'text-gray-600' : 'bg-redPrimary text-creamSecondary hover:bg-redPrimary hover:text-creamSecondary'}`}>
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`mx-1 px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-redPrimary text-creamSecondary' : 'bg-creamSecondary text-redPrimary hover:bg-redPrimary hover:text-creamSecondary'}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`mx-1 px-3 py-1 rounded ${currentPage === totalPages ? ' text-gray-600' : 'bg-redPrimary text-creamSecondary hover:bg-redPrimary hover:text-creamSecondary'}`}
            >
              Next
            </button>
          </div>
        </div>

        {/* Tabs Jurusan */}
        <div className="w-1/4 border h-fit border-redPrimary rounded-lg">
          <div className="mx-auto w-5/6 rounded-b-sm border-b-2 border-redPrimary my-2 mb-6">
            <Typography className="text-redPrimary font-semibold mb-2 text-3xl">Program Studi</Typography>
          </div>
          {/* List Jurusan */}
          <div>
            <button className="bg-redPrimary  rounded-lg p-2 text-creamSecondary text-sm font-semibold mb-4">Rekayasa Perangkat Lunak - S1</button>
            <button className="bg-creamSecondary text-redPrimary rounded-lg p-2 hover:bg-redPrimary hover:text-creamSecondary text-sm font-semibold mb-4">Pendidikan Guru Sekolah Dasar - S1</button>
            <button className="bg-creamSecondary text-redPrimary rounded-lg p-2 hover:bg-redPrimary hover:text-creamSecondary text-sm font-semibold mb-4">Pendidikan Guru PAUD - S1</button>
            <button className="bg-creamSecondary text-redPrimary rounded-lg p-2 hover:bg-redPrimary hover:text-creamSecondary text-sm font-semibold mb-4">Pendidikan Multimedia - S1</button>
            <button className="bg-creamSecondary text-redPrimary rounded-lg p-2 hover:bg-redPrimary hover:text-creamSecondary text-sm font-semibold mb-4">Teknik Komputer - S1</button>
            <button className="bg-creamSecondary text-redPrimary rounded-lg p-2 hover:bg-redPrimary hover:text-creamSecondary text-sm font-semibold mb-4">Pedndikan Guru Sekolah Dasar - S2</button>
          </div>
        </div>
      </div>

      <div>
        <FakultasList className="mx-auto" />
      </div>
    </div>
  );
}
