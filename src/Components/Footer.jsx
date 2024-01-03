import { Typography } from '@material-tailwind/react';
import Location from '../Asset/Icon/Location.png';
import Whatsapp from '../Asset/Icon/Whatsapp.png';
import Email from '../Asset/Icon/Email.png';
import Phone from '../Asset/Icon/Phone.png';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import Logo from '../Asset/LogoPerpus.png';
import Facebook from '../Asset/Icon/Facebook.png';
import Twitter from '../Asset/Icon/Twitter.png';
import Youtube from '../Asset/Icon/Youtube.png';
import Instagram from '../Asset/Icon/Instagram.png';
import Spotify from '../Asset/Icon/Spotify.png';
import { Link } from 'react-router-dom';

const FooterContact = [
  {
    title: 'Telepon',
    Icon: Phone,
    description: '(022) 2019487',
  },
  {
    title: 'Whatsapp',
    Icon: Whatsapp,
    description: '0859-5999-9300',
  },
  {
    title: 'Email',
    Icon: Email,
    description: 'perpustakaan@upi.edu',
  },
  {
    title: 'Alamat',
    Icon: Location,
    description: 'Jl.Dr. Setiabudhi No.229 Bandung - Jawa Barat Indonesia',
  },
];

const FooterLinks = [
  {
    title: 'Katalog Online',
    links: '',
  },
  {
    title: 'Cek Pinjam Online',
    links: '/cekpeminjaman',
  },
  {
    title: 'Repository',
    links: '/DigitalRepository',
  },
  {
    title: 'Digital Library',
    links: '',
  },
  {
    title: 'A-Research',
    links: '',
  },
  {
    title: 'E-Journal & E-Book',
    links: '',
  },
  {
    title: 'Daftar Jurnal Tercetak',
    links: '',
  },
];

export default function HomeFooter() {
  return (
    <footer className="relative w-full bg-redPrimary overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="flex justify-between py-5">
          <div className="w-1/3">
            <div className="bg-creamSecondary text-redPrimary w-3/4 p-2 rounded-xl">
              <img src={Logo} alt="logo" className="h-36" />
              <div>
                <div className="flex flex-row overflow-visible">
                  <div className="">
                    <ChevronDoubleRightIcon className="h-7 text-redPrimary" />
                  </div>
                  <ul className="">
                    <Typography className="mx-1 font-medium text-lg w-11/12">Senin - Jumat 08.00 - 15.30 WIB</Typography>
                  </ul>
                </div>
                <div className="flex flex-row overflow-visible">
                  <div className="">
                    <ChevronDoubleRightIcon className="h-7 text-redPrimary" />
                  </div>
                  <ul className="">
                    <Typography className="mx-1 font-medium text-lg w-11/12">Sabtu, Minggu, Cuti Bersama dan Libur Nasional Tutup</Typography>
                  </ul>
                </div>
                <div className="flex flex-row overflow-visible">
                  <div className="">
                    <ChevronDoubleRightIcon className="h-7 text-redPrimary" />
                  </div>
                  <ul className="">
                    <Typography className="mx-1 font-medium text-lg w-11/12">Maksimal pengunjung 1000 Perhari</Typography>
                  </ul>
                </div>
              </div>

              <p className="text-center font-semibold my-2">Follow Us</p>
              <div className="flex justify-around mb-2">
                <a href="https://www.facebook.com/UPICentralLibrary/">
                  <img src={Facebook} alt="Facebook" className="h-8" />
                </a>
                <a href="https://twitter.com/perpustakaanupi">
                  <img src={Twitter} alt="Twitter" className="h-8" />
                </a>
                <a href="https://www.youtube.com/upicentrallibrary">
                  <img src={Youtube} alt="Youtube" className="h-8 mt-1" />
                </a>
                <a href="https://instagram.com/perpustakaan_upi">
                  <img src={Instagram} alt="Instagram" className="h-8" />
                </a>
                <a href="https://podcasters.spotify.com/pod/show/perpustakaan-upi">
                  <img src={Spotify} alt="spotify" className="h-8" />
                </a>
              </div>
            </div>
          </div>
          {/* Links */}
          <div className="w-1/3 mx-2">
            <Typography className="mb-4 text-2xl font-bold uppercase border-b-4 border-creamPrimary text-creamPrimary w-1/2">Links</Typography>
            {FooterLinks.map((content, index) => (
              <div className="mb-2" key={index}>
                <Link to={content.links}>
                  <div className="grid-cols-7 overflow-visible lg:grid">
                    <div className="grid place-items-start">
                      <ChevronDoubleRightIcon className="text-creamSecondary h-8" />
                    </div>
                    <ul className="col-span-4 w-full  gap-1">
                      <Typography className="text-lg text-creamSecondary">{content.title}</Typography>
                    </ul>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {/* Kontak */}
          <div className="w-1/3">
            <Typography className="mb-4 text-2xl font-bold uppercase border-b-4 border-creamPrimary text-creamPrimary w-1/2">Kontak</Typography>
            {/* Logo with description */}
            {FooterContact.map((content, index) => (
              <div className="mb-2" key={index}>
                <div className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
                  <div className="grid place-items-center">
                    <img src={content.Icon} alt="phone icon" className="h-12" />
                  </div>
                  <ul className="col-span-4 flex w-full flex-col gap-1">
                    <div>
                      <Typography className="mb-1 text-creamSecondary font-bold text-xl">{content.title}</Typography>
                      <Typography className="text-creamSecondary font-medium text-base text-justify w-3/4">{content.description}</Typography>
                    </div>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
