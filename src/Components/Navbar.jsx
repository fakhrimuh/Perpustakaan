import React, { useState, useEffect } from 'react';
import Logo from '../Asset/LogoPerpus.png';
import { Navbar, Collapse, IconButton, List } from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import NavListMenu from './Dropdown';
import { Link } from 'react-router-dom';

const TentangKami = [
  {
    Title: 'Tentang Kami',
    Content: [
      {
        Name: 'Profil Perpustakaan',
        Links: '#',
      },
      {
        Name: 'Visi dan Misi',
        Links: '#',
      },
      {
        Name: 'Struktur Organisasi',
        Links: '#',
      },
      {
        Name: 'Jejaring',
        Links: '#',
      },
      {
        Name: 'Tim Manajemen',
        Links: '#',
      },
      {
        Name: 'Staf Perpustakaan',
        Links: '#',
      },
      {
        Name: 'Jejaring',
        Links: '#',
      },
      {
        Name: 'Fasilitas',
        Links: '#',
      },
      {
        Name: 'Statistik',
        Links: '#',
      },
    ],
  },
];

const Layanan = [
  {
    Title: 'Layanan',
    Content: [
      {
        Name: 'Bebas Pinjam',
        Links: '#',
      },
      {
        Name: 'Dokumentasi Referensi',
        Links: '#',
      },
      {
        Name: 'Dokumentasi UPIana',
        Links: '#',
      },
      {
        Name: 'Dokumentasi Kurikulum',
        Links: '#',
      },
      {
        Name: 'Keanggotaan',
        Links: '#',
      },
      {
        Name: 'Survei Kepuasan Pemustaka',
        Links: '#',
      },
      {
        Name: 'Layanan Kunjungan',
        Links: '#',
      },
      {
        Name: 'Paket Informasi Terpilih',
        Links: '#',
      },
    ],
  },
];

const Koleksi = [
  {
    Title: 'Koleksi',
    Content: [
      {
        Name: 'Repository (Skripsi, Tesis & Disertasi)',
        Links: '/DigitalRepository',
      },
      {
        Name: 'E-Journal dan E-Book',
        Links: '/E-Journal',
      },
      {
        Name: 'Jurnal Tercetak',
        Links: '#',
      },
      {
        Name: 'OER Kalista',
        Links: '#',
      },
      {
        Name: 'E-Journal UPI',
        Links: '#',
      },
      {
        Name: 'OPAC',
        Links: '#',
      },
      {
        Name: 'ELIB UPI',
        Links: '#',
      },
      {
        Name: 'OLIB UPI',
        Links: '#',
      },
      {
        Name: 'OALIB UPI',
        Links: '#',
      },
      {
        Name: 'A-Research',
        Links: '#',
      },
    ],
  },
];

const LayananDaring = [
  {
    Title: 'Panduan Informasi',
    Content: [
      {
        Name: 'Informasi Wajib Berada',
        Links: '#',
      },
      {
        Name: 'Informasi Wajib Setiap Saat',
        Links: '#',
      },
      {
        Name: 'Permohonan Informasi Publik',
        Links: '#',
      },
      {
        Name: 'Buku Saku Layanan',
        Links: '#',
      },
      {
        Name: 'Unggah Mandiri Repository',
        Links: '#',
      },
      {
        Name: 'Peminjaman Mandiri',
        Links: '#',
      },
      {
        Name: 'Pencegahan Plagiarism',
        Links: '#',
      },
    ],
  },
];

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 text-redPrimary">
      <NavListMenu skillsData={TentangKami} />
      <NavListMenu skillsData={Layanan} />
      <NavListMenu skillsData={Koleksi} />
      <NavListMenu skillsData={LayananDaring} />
    </List>
  );
}

export default function HeaderNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowBorder(currentScrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  return (
    <div className={`fixed top-0 bg-creamSecondary w-full z-50 ${showBorder ? 'border-b-2 border-redPrimary' : ''}`}>
      <Navbar className="mx-auto w-full border-none shadow-none px-4 py-2" color="transparent">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img className="h-24 xl:w-36 sm:w-24" src={Logo} alt="Logo" />
          </Link>
          <div className="hidden lg:block">
            <NavList />
          </div>

          {/* Responsive hamburger */}
          <IconButton variant="text" color="blue-gray" className="lg:hidden" onClick={() => setOpenNav(!openNav)}>
            {openNav ? <XMarkIcon className="h-6 w-6" strokeWidth={2} /> : <Bars3Icon className="h-6 w-6" strokeWidth={2} />}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </div>
  );
}
