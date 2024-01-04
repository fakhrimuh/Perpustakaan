import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Input, Card, Typography, CardBody, CardHeader } from '@material-tailwind/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Upi from '../Asset/Digital Repo/carousel/UPI.png';
import FakultasList from '../Components/FakultasList';
import { UserIcon, ArchiveBoxIcon } from '@heroicons/react/24/outline';

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

export default function DigitalRepository() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const isSearchPerformed = searchResults.length > 0;

  const handleSearch = () => {
    // Lakukan pencarian pada data JSON berdasarkan searchTerm
    const results = Object.values(dataJson).filter((item) => Object.values(item).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase())));
    setSearchResults(results);
  };

  return (
    <div className="mt-[110px]">
      <div class="relative">
        <img src={Upi} alt="Gambar" class="w-full h-auto object" />

        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[-100px] text-white text-center">
          <h1 class="text-4xl font-bold">Digital Repository</h1>
        </div>

        <div class="absolute w-full h-fit top-full left-1/2 transform -translate-x-1/2 -translate-y-14">
          <div className="w-1/2 my-4 flex gap-2 mx-auto mb-16 bg-redPrimary border-solid border-2 border-creamSecondary py-4 px-8 rounded-lg">
            <Input
              type="text"
              placeholder="Kata Kunci"
              icon={<MagnifyingGlassIcon className="h-5 w-5 text-creamSecondary" />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="!border-2 !border-creamSecondary text-creamSecondary placeholder-creamSecondary"
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
          <div className="border h-fit border-redPrimary mb-4">
            {searchResults.map((result, index) => (
              <div key={index} className="border h-fit w-3/4 mx-auto  my-2">
                <Card shadow={false} className="w-11/12 mx-auto flex-row bg-transparent border-b-2 border-redPrimary rounded-none mb-2">
                  <CardHeader shadow={false} floated={false} className="m-0 w-1/5 bg-transparent shrink-0 rounded-r-none">
                    <div className="bg-redPrimary rounded-lg w-10 h-10 py-2 text-center mt-10 mx-auto">
                      <Typography className="text-creamSecondary">{index + 1}</Typography>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Typography color="black" className="mb-3 text-base font-semibold text-left">
                      {result.judul}
                    </Typography>
                    <div className="flex gap-3 mb-2">
                      <UserIcon className="w-5 h-5 text-redPrimary" />
                      <Typography color="black" className="text-sm">
                        {result.penulis} {result.nim} - {result.tahun}
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
              </div>
            ))}
          </div>
        )}
        <div>
          <FakultasList />
        </div>
      </div>
    </div>
  );
}
