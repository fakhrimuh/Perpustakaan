import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import FakultasList from '../Components/FakultasList';
import cibiru from '../Asset/Digital Repo/carousel/cibiru.png';
import { Input, Card, Typography, CardBody, CardHeader } from '@material-tailwind/react';
import { UserIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline';
import React, { useState, useMemo } from 'react';

const dataJson = {
  1: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Implementasi Algoritma Machine Learning untuk Prediksi Anomali dalam Jaringan Komputer',
    penulis: 'John Doe',
    nim: '123456',
    tahun: 2022,
    jurusan: 'Rekayasa Perangkat Lunak',
  },
  2: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Pengembangan Aplikasi Mobile Berbasis Android untuk Deteksi Kecurangan pada Sistem Keamanan',
    penulis: 'Jane Doe',
    nim: '654321',
    tahun: 2021,
    jurusan: 'Rekayasa Perangkat Lunak',
  },
  3: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Analisis Kinerja Jaringan Neural Networks dalam Pengenalan Citra Menggunakan Teknologi Deep Learning',
    penulis: 'Bob Johnson',
    nim: '987654',
    tahun: 2023,
    jurusan: 'Rekayasa Perangkat Lunak',
  },
  4: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Pemodelan dan Simulasi Sistem Keamanan Jaringan Komputer Menggunakan Metode Probabilistik',
    penulis: 'Alice Wonderland',
    nim: '456789',
    tahun: 2022,
    jurusan: 'Rekayasa Perangkat Lunak',
  },
  5: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Pengembangan Sistem Manajemen Database Terdistribusi dengan Penerapan Teknologi Blockchain',
    penulis: 'Charlie Brown',
    nim: '321654',
    tahun: 2023,
    jurusan: 'Rekayasa Perangkat Lunak',
  },
  6: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Optimasi Kinerja Komputasi Awan dalam Penyediaan Layanan Skalabilitas dan Ketersediaan',
    penulis: 'Eva Green',
    nim: '987123',
    tahun: 2021,
    jurusan: 'Rekayasa Perangkat Lunak',
  },
  7: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Penerapan Teknologi Internet of Things (IoT) untuk Monitoring dan Kontrol Energi pada Smart Home',
    penulis: 'David Copperfield',
    nim: '111222',
    tahun: 2022,
    jurusan: 'Rekayasa Perangkat Lunak',
  },
  8: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Analisis Perbandingan Performa Algoritma Kriptografi dalam Keamanan Data',
    penulis: 'Grace Kelly',
    nim: '333444',
    tahun: 2023,
    jurusan: 'Rekayasa Perangkat Lunak',
  },
  9: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Pengembangan Sistem Penyaringan Spam Email dengan Teknologi Pembelajaran Mesin (Machine Learning)',
    penulis: 'George Orwell',
    nim: '555666',
    tahun: 2021,
    jurusan: 'Rekayasa Perangkat Lunak',
  },
  10: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Rancang Bangun Aplikasi Web dengan Konsep Progressive Web App (PWA) untuk Optimalisasi Kinerja',
    penulis: 'Mary Shelley',
    nim: '777888',
    tahun: 2022,
    jurusan: 'Rekayasa Perangkat Lunak',
  },
  11: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Evaluasi dan Optimasi Keamanan Aplikasi Mobile berbasis iOS dalam Mengatasi Ancaman Keamanan',
    penulis: 'Farhan Maulana',
    nim: '123456',
    tahun: 2022,
    jurusan: 'Rekayasa Perangkat Lunak',
  },
  12: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Penggunaan Teknologi Big Data dalam Analisis Pola Perilaku Pengguna Situs Web',
    penulis: 'Dina Pratiwi',
    nim: '654321',
    tahun: 2021,
    jurusan: 'Rekayasa Perangkat Lunak',
  },
  13: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Sistem Pendeteksian Intrusi dengan Pendekatan Anomali dan Tanda Tangan dalam Jaringan Komputer',
    penulis: 'Yoga Prakasa',
    nim: '987654',
    tahun: 2023,
    jurusan: 'Rekayasa Perangkat Lunak',
  },
  14: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Pengembangan Aplikasi E-commerce Berbasis Cloud untuk Efisiensi Penyimpanan Data dan Aksesibilitas',
    penulis: 'Maya Sari',
    nim: '456789',
    tahun: 2022,
    jurusan: 'Rekayasa Perangkat Lunak',
  },
  15: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Rancang Bangun Sistem Manajemen Kinerja Jaringan pada Infrastruktur Cloud Computing',
    penulis: 'Agus Susanto',
    nim: '321654',
    tahun: 2023,
    jurusan: 'Rekayasa Perangkat Lunak',
  },
  16: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Analisis dan Pengembangan Teknologi Blockchain untuk Keamanan dan Keabsahan Data Riwayat Medis Elektronik',
    penulis: 'Indah Lestari',
    nim: '987123',
    tahun: 2021,
    jurusan: 'Rekayasa Perangkat Lunak',
  },
  17: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Implementasi Sistem Manajemen Relasi Basis Data NoSQL pada Lingkungan Sistem Terdistribusi',
    penulis: 'Rizki Ramadhan',
    nim: '111222',
    tahun: 2022,
    jurusan: 'Rekayasa Perangkat Lunak',
  },
  18: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Penerapan Teknologi Augmented Reality dalam Edukasi Interaktif untuk Pengajaran Ilmu Komputer',
    penulis: 'Mega Indriani',
    nim: '333444',
    tahun: 2023,
    jurusan: 'Rekayasa Perangkat Lunak',
  },
  19: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Studi Kasus Performa Kinerja Algoritma Pengklasifikasi untuk Pengenalan Pola Teks dalam Bahasa Alami',
    penulis: 'Aditya Pratama',
    nim: '555666',
    tahun: 2021,
    jurusan: 'Rekayasa Perangkat Lunak',
  },
  20: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Pengembangan Aplikasi Pengenalan Wajah untuk Sistem Keamanan dengan Teknologi Deep Neural Networks',
    penulis: 'Novi Fitriyah',
    nim: '777888',
    tahun: 2022,
    jurusan: 'Rekayasa Perangkat Lunak',
  },
  21: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Pengaruh Penggunaan Media Pembelajaran Interaktif Terhadap Peningkatan Kemampuan Membaca Siswa Kelas II SD',
    penulis: 'John Doe',
    nim: '123456',
    tahun: 2022,
    jurusan: 'Pendidikan Guru Sekolah dasar',
  },
  22: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Implementasi Pendekatan Saintifik dalam Pembelajaran IPA untuk Meningkatkan Keterampilan Proses Siswa Kelas IV SD',
    penulis: 'Jane Doe',
    nim: '654321',
    tahun: 2021,
    jurusan: 'Pendidikan Guru Sekolah dasar',
  },
  23: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Pengembangan Bahan Ajar Matematika Berbasis Kearifan Lokal Untuk Meningkatkan Minat Belajar Siswa SD',
    penulis: 'Bob Johnson',
    nim: '987654',
    tahun: 2023,
    jurusan: 'Pendidikan Guru Sekolah dasar',
  },
  24: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Efektivitas Penggunaan Teknologi Augmented Reality dalam Pembelajaran Bahasa Inggris di Sekolah Dasar',
    penulis: 'Alice Wonderland',
    nim: '456789',
    tahun: 2022,
    jurusan: 'Pendidikan Guru Sekolah dasar',
  },
  25: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Peningkatan Hasil Belajar Matematika melalui Penerapan Model Pembelajaran Kooperatif Tipe Jigsaw pada Siswa Kelas V SD',
    penulis: 'Charlie Brown',
    nim: '321654',
    tahun: 2023,
    jurusan: 'Pendidikan Guru Sekolah dasar',
  },
  26: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Evaluasi Implementasi Kurikulum 2013 dalam Pembelajaran Tematik di Sekolah Dasar',
    penulis: 'Eva Green',
    nim: '987123',
    tahun: 2021,
    jurusan: 'Pendidikan Guru Sekolah dasar',
  },
  27: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Pengaruh Penggunaan Metode Peer Tutoring Terhadap Kemandirian Belajar Siswa SD',
    penulis: 'David Copperfield',
    nim: '111222',
    tahun: 2022,
    jurusan: 'Pendidikan Guru Sekolah dasar',
  },
  28: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Pengembangan Modul Pembelajaran Berbasis Proyek untuk Meningkatkan Kreativitas Siswa Sekolah Dasar',
    penulis: 'Grace Kelly',
    nim: '333444',
    tahun: 2023,
    jurusan: 'Pendidikan Guru Sekolah dasar',
  },
  29: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Analisis Kesulitan Belajar Matematika pada Siswa Sekolah Dasar dan Strategi Mengatasinya',
    penulis: 'George Orwell',
    nim: '555666',
    tahun: 2021,
    jurusan: 'Pendidikan Guru Sekolah dasar',
  },
  30: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Pengaruh Keterlibatan Orang Tua dalam Pembelajaran Anak di Sekolah Dasar',
    penulis: 'Mary Shelley',
    nim: '777888',
    tahun: 2022,
    jurusan: 'Pendidikan Guru Sekolah dasar',
  },
  31: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Pengembangan Buku Cerita Interaktif sebagai Media Pembelajaran Bahasa Indonesia di Kelas I SD',
    penulis: 'Farhan Maulana',
    nim: '123456',
    tahun: 2022,
    jurusan: 'Pendidikan Guru Sekolah dasar',
  },
  32: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Evaluasi Implementasi Pembelajaran Tematik pada Siswa Kelas III SD dalam Perspektif Kesiapan Guru',
    penulis: 'Dina Pratiwi',
    nim: '654321',
    tahun: 2021,
    jurusan: 'Pendidikan Guru Sekolah dasar',
  },
  33: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Pemanfaatan Teknologi Mobile dalam Meningkatkan Keterampilan Menulis Siswa Kelas IV SD',
    penulis: 'Yoga Prakasa',
    nim: '987654',
    tahun: 2023,
    jurusan: 'Pendidikan Guru Sekolah dasar',
  },
  34: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Analisis Efektivitas Penggunaan Permainan Edukatif dalam Pembelajaran Matematika di Sekolah Dasar',
    penulis: 'Maya Sari',
    nim: '456789',
    tahun: 2022,
    jurusan: 'Pendidikan Guru Sekolah dasar',
  },
  35: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Pengaruh Lingkungan Sekolah dan Dukungan Keluarga terhadap Prestasi Belajar Siswa SD',
    penulis: 'Agus Susanto',
    nim: '321654',
    tahun: 2023,
    jurusan: 'Pendidikan Guru Sekolah dasar',
  },
  36: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Pengembangan Model Pembelajaran Inklusif untuk Siswa Berkebutuhan Khusus di Sekolah Dasar',
    penulis: 'Indah Lestari',
    nim: '987123',
    tahun: 2021,
    jurusan: 'Pendidikan Guru Sekolah dasar',
  },
  37: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Implementasi Metode Project-Based Learning dalam Pembelajaran IPA untuk Siswa Kelas V SD',
    penulis: 'Rizki Ramadhan',
    nim: '111222',
    tahun: 2022,
    jurusan: 'Pendidikan Guru Sekolah dasar',
  },
  38: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Pengaruh Pembelajaran Berbasis Proyek terhadap Kreativitas Anak dalam Menyelesaikan Tugas di Kelas II SD',
    penulis: 'Mega Indriani',
    nim: '333444',
    tahun: 2023,
    jurusan: 'Pendidikan Guru Sekolah dasar',
  },
  39: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Penerapan Pendekatan Saintifik dalam Pembelajaran Seni Budaya untuk Meningkatkan Keterampilan Berpikir Kritis Siswa SD',
    penulis: 'Aditya Pratama',
    nim: '555666',
    tahun: 2021,
    jurusan: 'Pendidikan Guru Sekolah dasar',
  },
  40: {
    link: 'http://repository.upi.edu/97086/',
    judul: 'Pengaruh Penggunaan Permainan Edukatif terhadap Minat Belajar Matematika pada Anak Kelas I SD',
    penulis: 'Novi Fitriyah',
    nim: '777888',
    tahun: 2022,
    jurusan: 'Pendidikan Guru Sekolah dasar',
  },
};

export default function FakultasPage() {
  const data = [
    {
      label: 'S1',
      value: 's1',
      desc: [
        {
          name: 'Rekayasa Perangkat Lunak',
          link: '/JurusanPage',
          tingkat: 'S1',
        },
        {
          name: 'Pendidikan Guru Sekolah Dasar',
          link: '#a',
          tingkat: 'S1',
        },
        {
          name: 'PGPAUD',
          link: '#a',
          tingkat: 'S1',
        },
        {
          name: 'Pendidikan Multimedia',
          link: '#a',
          tingkat: 'S1',
        },
        {
          name: 'Teknik Komputer',
          link: '#a',
          tingkat: 'S1',
        },
      ],
    },
    {
      label: 'S2',
      value: 's2',
      desc: [
        {
          name: 'Pendidikan Guru Sekolah Dasar',
          link: '#a',
          tingkat: 'S2',
        },
      ],
    },
  ];

  // Menggabungkan semua deskripsi dari data
  const allDescriptions = data.map(({ desc }) => desc).flat();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedData, setSearchedData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const totalItems = Object.keys(dataJson).length;

  const isSearchPerformed = searchedData.length > 0;

  const filteredData = useMemo(() => {
    return isSearching ? searchedData : Object.values(dataJson);
  }, [isSearching, searchedData]);

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      const results = Object.values(dataJson).filter((item) => {
        const judulExists = item.judul && item.judul.toLowerCase().includes(term);
        const penulisExists = item.penulis && item.penulis.toLowerCase().includes(term);
        // Assuming jenis is another property you intended to search in; add a check for it as well if needed
        const jenisExists = item.jenis && item.jenis.toLowerCase().includes(term);
        return judulExists || penulisExists || jenisExists;
      });
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
    <div className="mt-[110px]">
      <div class="relative">
        <img src={cibiru} alt="Gambar" class="w-full h-auto" />

        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[-100px] text-white text-center">
          <h1 class="text-4xl font-bold">Kampus Cibiru</h1>
        </div>

        <div class="absolute w-full h-fit top-full left-1/2 transform -translate-x-1/2 -translate-y-16">
          <div className="w-1/2 my-4 flex gap-2 mx-auto mb-16 bg-redPrimary border-solid border-2 border-creamSecondary py-4 px-8 rounded-lg">
            <Input
              type="text"
              placeholder="Kata Kunci"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              className="!border-2 !border-creamSecondary  text-creamSecondary  placeholder-creamSecondary"
              labelProps={{
                className: 'hidden',
              }}
            />
            <button onClick={handleSearch} className="bg-creamSecondary font-semibold text-redPrimary border-2 px-6 rounded-lg hover:bg-redPrimary hover:text-creamSecondary">
              Cari
            </button>
          </div>
        </div>
      </div>

      <div className="mt-32 container mx-auto">
        {isSearchPerformed && (
          <div className="border h-fit border-redPrimary mb-10 rounded-lg">
            <Typography className="text-center text-redPrimary font-black text-2xl my-4">Hasil Pencarian</Typography>
            {currentItems.map((book, index) => {
              const bookIndex = indexOfFirstItem + index + 1;
              return (
                <Link to={book.link} target="_blank" key={index}>
                  <Card shadow={false} className="w-11/12 mx-auto flex-row bg-transparent border-b-2 border-redPrimary rounded-none mb-2">
                    <CardHeader shadow={false} floated={false} className="m-0 w-1/5 bg-transparent shrink-0 rounded-r-none">
                      <div className="bg-redPrimary rounded-lg w-10 h-10 py-2 text-center mt-10 mx-auto">
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
                          {book.penulis} [{book.nim}] - {book.tahun}
                        </Typography>
                      </div>
                      <div className="flex gap-3 mb-">
                        <ArchiveBoxIcon className="w-5 h-5 text-redPrimary" />
                        <Typography color="black" className="text-sm">
                          Tesis - {book.jurusan}
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
        )}
      </div>

      <h1 className="text-center text-redPrimary mt-24 mb-10 font-bold text-4xl">Program Studi</h1>
      <Tabs value="all" className="mx-auto">
        <TabsHeader
          className="bg-transparent font-bold mx-auto text-creamSecondary max-w-[40rem]"
          indicatorProps={{
            className: 'bg-creamPrimary shadow-none font-bold',
          }}
        >
          {/* Menambahkan tab "All" */}
          <Tab key="all" value="all" className="text-redPrimary focus:text-creamSecondary font-bold rounded-lg">
            All
          </Tab>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} className="text-redPrimary focus:text-creamSecondary font-bold rounded-lg">
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {/* Menambahkan TabPanel untuk "All" */}
          <TabPanel key="all" value="all">
            <div className="grid grid-cols-3 w-max gap-4 mx-auto">
              {allDescriptions.map((desc, index) => (
                <div key={index}>
                  <Link to={desc.link}>
                    <button className="bg-creamSecondary text-redPrimary rounded-lg p-2 border-2 border-redPrimary hover:bg-redPrimary hover:text-creamSecondary text-sm font-semibold">
                      {' '}
                      {desc.name} - {desc.tingkat}{' '}
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </TabPanel>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              <div className="grid grid-cols-3 w-max gap-4 mx-auto">
                {desc.map((item, index) => (
                  <div key={index}>
                    <Link to={item.link}>
                      <button className="bg-creamSecondary text-redPrimary rounded-lg p-2 border-2 border-redPrimary hover:bg-redPrimary hover:text-creamSecondary text-sm font-semibold">
                        {' '}
                        {item.name} - {item.tingkat}{' '}
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
      <div className="mt-20">
        <FakultasList />
      </div>
    </div>
  );
}
