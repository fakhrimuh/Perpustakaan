import { Input, Typography, Card, CardHeader, CardBody } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import FakultasList from '../Components/FakultasList';
import { UserIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline';
import React, { useState, useMemo } from 'react';

const dataJson = {
  1: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Implementasi Algoritma Machine Learning untuk Prediksi Anomali dalam Jaringan Komputer',
    penulis: 'John Doe',
    nim: '123456',
    tahun: 2022,
    jenis: 'Tesis',
  },
  2: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Pengembangan Aplikasi Mobile Berbasis Android untuk Deteksi Kecurangan pada Sistem Keamanan',
    penulis: 'Jane Doe',
    nim: '654321',
    tahun: 2021,
    jenis: 'Sistem Informasi',
  },
  3: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Analisis Kinerja Jaringan Neural Networks dalam Pengenalan Citra Menggunakan Teknologi Deep Learning',
    penulis: 'Bob Johnson',
    nim: '987654',
    tahun: 2023,
    jenis: 'Pengujian',
  },
  4: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Pemodelan dan Simulasi Sistem Keamanan Jaringan Komputer Menggunakan Metode Probabilistik',
    penulis: 'Alice Wonderland',
    nim: '456789',
    tahun: 2022,
    jenis: 'Aplikasi',
  },
  5: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Pengembangan Sistem Manajemen Database Terdistribusi dengan Penerapan Teknologi Blockchain',
    penulis: 'Charlie Brown',
    nim: '321654',
    tahun: 2023,
    jenis: 'Sistem Informasi',
  },
  6: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Optimasi Kinerja Komputasi Awan dalam Penyediaan Layanan Skalabilitas dan Ketersediaan',
    penulis: 'Eva Green',
    nim: '987123',
    tahun: 2021,
    jenis: 'Pengembangan Permainan',
  },
  7: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Penerapan Teknologi Internet of Things (IoT) untuk Monitoring dan Kontrol Energi pada Smart Home',
    penulis: 'David Copperfield',
    nim: '111222',
    tahun: 2022,
    jenis: 'Sistem Informasi',
  },
  8: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Analisis Perbandingan Performa Algoritma Kriptografi dalam Keamanan Data',
    penulis: 'Grace Kelly',
    nim: '333444',
    tahun: 2023,
    jenis: 'Aplikasi',
  },
  9: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Pengembangan Sistem Penyaringan Spam Email dengan Teknologi Pembelajaran Mesin (Machine Learning)',
    penulis: 'George Orwell',
    nim: '555666',
    tahun: 2021,
    jenis: 'Pengembangan Web',
  },
  10: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Rancang Bangun Aplikasi Web dengan Konsep Progressive Web App (PWA) untuk Optimalisasi Kinerja',
    penulis: 'Mary Shelley',
    nim: '777888',
    tahun: 2022,
    jenis: 'Sistem Informasi',
  },
  11: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Evaluasi dan Optimasi Keamanan Aplikasi Mobile berbasis iOS dalam Mengatasi Ancaman Keamanan',
    penulis: 'Farhan Maulana',
    nim: '123456',
    tahun: 2022,
    jenis: 'Aplikasi',
  },
  12: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Penggunaan Teknologi Big Data dalam Analisis Pola Perilaku Pengguna Situs Web',
    penulis: 'Dina Pratiwi',
    nim: '654321',
    tahun: 2021,
    jenis: 'Sistem Informasi',
  },
  13: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Sistem Pendeteksian Intrusi dengan Pendekatan Anomali dan Tanda Tangan dalam Jaringan Komputer',
    penulis: 'Yoga Prakasa',
    nim: '987654',
    tahun: 2023,
    jenis: 'Pengujian',
  },
  14: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Pengembangan Aplikasi E-commerce Berbasis Cloud untuk Efisiensi Penyimpanan Data dan Aksesibilitas',
    penulis: 'Maya Sari',
    nim: '456789',
    tahun: 2022,
    jenis: 'Aplikasi',
  },
  15: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Rancang Bangun Sistem Manajemen Kinerja Jaringan pada Infrastruktur Cloud Computing',
    penulis: 'Agus Susanto',
    nim: '321654',
    tahun: 2023,
    jenis: 'Sistem Informasi',
  },
  16: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Analisis dan Pengembangan Teknologi Blockchain untuk Keamanan dan Keabsahan Data Riwayat Medis Elektronik',
    penulis: 'Indah Lestari',
    nim: '987123',
    tahun: 2021,
    jenis: 'Pengembangan Permainan',
  },
  17: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Implementasi Sistem Manajemen Relasi Basis Data NoSQL pada Lingkungan Sistem Terdistribusi',
    penulis: 'Rizki Ramadhan',
    nim: '111222',
    tahun: 2022,
    jenis: 'Sistem Informasi',
  },
  18: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Penerapan Teknologi Augmented Reality dalam Edukasi Interaktif untuk Pengajaran Ilmu Komputer',
    penulis: 'Mega Indriani',
    nim: '333444',
    tahun: 2023,
    jenis: 'Aplikasi',
  },
  19: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Studi Kasus Performa Kinerja Algoritma Pengklasifikasi untuk Pengenalan Pola Teks dalam Bahasa Alami',
    penulis: 'Aditya Pratama',
    nim: '555666',
    tahun: 2021,
    jenis: 'Pengembangan Web',
  },
  20: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Pengembangan Aplikasi Pengenalan Wajah untuk Sistem Keamanan dengan Teknologi Deep Neural Networks',
    penulis: 'Novi Fitriyah',
    nim: '777888',
    tahun: 2022,
    jenis: 'Sistem Informasi',
  },
};

export default function JurusanPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedData, setSearchedData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const totalItems = Object.keys(dataJson).length;

  const filteredData = useMemo(() => {
    return isSearching ? searchedData : Object.values(dataJson);
  }, [isSearching, searchedData]);

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      const results = Object.values(dataJson).filter((item) => item.judul.toLowerCase().includes(term) || item.penulis.toLowerCase().includes(term) || item.jenis.toLowerCase().includes(term));
      setSearchedData(results);
      setIsSearching(true);
      setCurrentPage(1);
    } else {
      setIsSearching(false);
    }
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages ? prevPage : prevPage + 1));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? prevPage : prevPage - 1));
  };

  const handleItemsPerPageChange = (e) => {
    const newItemsPerPage = parseInt(e.target.value, 10);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  return (
    <div className="text-center mt-[110px]">
      {/* Title and Search bar */}
      <div className="mt-28">
        <h1 className="text-3xl font-extrabold text-redPrimary mb-6">Rekayasa Perangkat Lunak</h1>
        <div>
          <div className="w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto mb-8 sm:mb-16 bg-redPrimary border-solid border-2 border-creamSecondary py-4 px-8 rounded-lg">
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="text"
                placeholder="Kata Kunci"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
                className="!border-2 !border-creamSecondary text-creamSecondary placeholder-creamSecondary mb-4 sm:mb-0"
                labelProps={{
                  className: 'hidden',
                }}
              />
              <button onClick={handleSearch} className="bg-creamSecondary font-semibold text-redPrimary border-2 px-6 rounded-lg hover:bg-redPrimary hover:text-creamSecondary">
                Cari
              </button>
            </div>
            <div className="w-fit px-4 mt-3 rounded-md">
              <Typography className="text-creamSecondary font-semibold text-sm my-2">Rekayasa Perangkat Lunak</Typography>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container flex gap-4 mx-auto mb-6">
        {/* Daftar Jurnal */}
        <div className="w-3/4 border border-redPrimary rounded-lg">
          {currentItems.map((book, index) => {
            const bookIndex = indexOfFirstItem + index + 1;
            return (
              <Link to={book.link} target="_blank" key={index}>
                <Card shadow={false} className="w-11/12 mx-auto flex-row bg-transparent border-b-2 border-redPrimary rounded-none mb-2">
                  <CardHeader shadow={false} floated={false} className="m-0 w-1/5 bg-transparent shrink-0 rounded-r-none">
                    <div className="bg-redPrimary rounded-lg w-10 h-10 py-2 mt-10 mx-auto">
                      <Typography className="text-creamSecondary">{bookIndex}</Typography>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Typography color="black" className="mb-3 text-base font-semibold text-left">
                      {book.judul}
                    </Typography>
                    <div className="flex gap-3 mb-2">
                      <UserIcon className="w-5 h-5 text-redPrimary" />
                      <Typography color="black" className="text-sm">
                        {book.penulis} {book.nim} - {book.tahun}
                      </Typography>
                    </div>
                    <div className="flex gap-3 mb-">
                      <ArchiveBoxIcon className="w-5 h-5 text-redPrimary" />
                      <Typography color="black" className="text-sm">
                        Tesis
                      </Typography>
                    </div>
                  </CardBody>
                </Card>
              </Link>
            );
          })}

          {/* Pagination */}
          <div className="container w-11/12 max-w-screen-lg mx-auto flex justify-between gap-6 mb-4">
            <Typography className="text-left text-sm mt-2">
              {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, totalItems)} dari {filteredData.length} baris
            </Typography>
            <div className="flex">
              <Typography className="text-sm mt-2">Jumlah baris per halaman</Typography>
              <select value={itemsPerPage} onChange={handleItemsPerPageChange} className="mx-3 py-1 px-2 rounded bg-transparent border border-redPrimary text-redPrimary">
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
            </div>

            <div>
              <button onClick={prevPage} disabled={currentPage === 1} className={`px-1 py-1 rounded ${currentPage === 1 ? 'text-gray-600' : 'bg-redPrimary text-creamSecondary hover:bg-redPrimary hover:text-creamSecondary'}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 inline-block align-middle" // Tambahkan class atau style di sini
                  style={{ verticalAlign: 'middle' }} // Contoh penggunaan inline style
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-redPrimary text-creamSecondary' : 'bg-creamSecondary text-redPrimary hover:bg-redPrimary hover:text-creamSecondary'}`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`px-1 py-1 rounded ${currentPage === totalPages ? ' text-gray-600' : 'bg-redPrimary text-creamSecondary hover:bg-redPrimary hover:text-creamSecondary'}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 inline-block align-middle" // Tambahkan class atau style di sini
                  style={{ verticalAlign: 'middle' }} // Contoh penggunaan inline style
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
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
            <Link to="/PgsdPage">
              <button className="bg-creamSecondary text-redPrimary rounded-lg p-2 hover:bg-redPrimary hover:text-creamSecondary text-sm font-semibold mb-4">Pendidikan Guru Sekolah Dasar - S1</button>
            </Link>
            <button className="bg-creamSecondary text-redPrimary rounded-lg p-2 hover:bg-redPrimary hover:text-creamSecondary text-sm font-semibold mb-4">Pendidikan Guru PAUD - S1</button>
            <button className="bg-creamSecondary text-redPrimary rounded-lg p-2 hover:bg-redPrimary hover:text-creamSecondary text-sm font-semibold mb-4">Pendidikan Multimedia - S1</button>
            <button className="bg-creamSecondary text-redPrimary rounded-lg p-2 hover:bg-redPrimary hover:text-creamSecondary text-sm font-semibold mb-4">Teknik Komputer - S1</button>
            <button className="bg-creamSecondary text-redPrimary rounded-lg p-2 hover:bg-redPrimary hover:text-creamSecondary text-sm font-semibold mb-4">Pedndikan Guru Sekolah Dasar - S2</button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <FakultasList className="mx-auto" />
      </div>
    </div>
  );
}
