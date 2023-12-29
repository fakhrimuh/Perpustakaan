import React from 'react';
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
        Links: 'a',
      },
      {
        Name: 'Visi dan Misi',
        Links: 'a',
      },
      {
        Name: 'Struktur Organisasi',
        Links: 'a',
      },
      {
        Name: 'Jejaring',
        Links: 'a',
      },
      {
        Name: 'Tim Manajemen',
        Links: 'a',
      },
      {
        Name: 'Staf Perpustakaan',
        Links: 'a',
      },
      {
        Name: 'Tata Tertib',
        Links: 'a',
      },
      {
        Name: 'Fasilitas',
        Links: 'a',
      },
    ],
  },
];

const QuickLinks = [
  {
    Title: 'Quick Links',
    Content: [
      {
        Name: 'Katalog',
        Links: 'a',
      },
      {
        Name: 'Cek Pinjam Online',
        Links: 'a',
      },
      {
        Name: 'Repository',
        Links: 'a',
      },
      {
        Name: 'E-Journal dan E-Book',
        Links: 'a',
      },
      {
        Name: 'Kontribusi Buku',
        Links: 'a',
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
        Links: 'a',
      },
      {
        Name: 'Dokumentasi Referensi',
        Links: 'a',
      },
      {
        Name: 'Dokumentasi UPIana',
        Links: 'a',
      },
      {
        Name: 'Dokumentasi Kurikulum',
        Links: 'a',
      },
      {
        Name: 'Keanggotaan',
        Links: 'a',
      },
      {
        Name: 'Survei Kepuasan Pemustaka',
        Links: 'a',
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
        Links: 'a',
      },
      {
        Name: 'Pendaftaran Akun MyLOFT',
        Links: 'a',
      },
      {
        Name: 'E-Journal dan E-Book',
        Links: 'a',
      },
      {
        Name: 'Jurnal Tercetak',
        Links: 'a',
      },
      {
        Name: 'OER Kalista',
        Links: 'a',
      },
      {
        Name: 'E-Journal UPI',
        Links: 'a',
      },
      {
        Name: 'ELIB UPI',
        Links: 'a',
      },
      {
        Name: 'OLIB UPI',
        Links: 'a',
      },
      {
        Name: 'OALIB UPI',
        Links: 'a',
      },
      {
        Name: 'Ea-Research',
        Links: 'a',
      },
    ],
  },
];

const LayananDaring = [
  {
    Title: 'Layanan Daring',
    Content: [
      {
        Name: 'Layanan CERIA',
        Links: 'a',
      },
      {
        Name: 'Registrasi Akun Turnitin',
        Links: 'a',
      },
      {
        Name: 'Online Library (OLIB)',
        Links: 'a',
      },
      {
        Name: 'Bebas Pinjam (Sidang)',
        Links: 'a',
      },
      {
        Name: 'Konfirmasi Unggah Mandiri',
        Links: 'a',
      },
      {
        Name: 'Paket Informasi Terpilih',
        Links: 'a',
      },
      {
        Name: 'Pendaftaran Akun MyLOFT',
        Links: 'a',
      },
      {
        Name: 'Prosedur Buku Hilang',
        Links: 'a',
      },
      {
        Name: 'Usulan Buku Baru',
        Links: 'a',
      },
      {
        Name: 'Cek Pinjaman',
        Links: 'a',
      },
    ],
  },
];

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 text-redPrimary">
      <NavListMenu skillsData={TentangKami} />
      <NavListMenu skillsData={QuickLinks} />
      <NavListMenu skillsData={Layanan} />
      <NavListMenu skillsData={Koleksi} />
      <NavListMenu skillsData={LayananDaring} />
    </List>
  );
}

export default function HeaderNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  return (
    <div className="border-b-2 border-redPrimary">
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
