import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  // Button,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import FakultasList from '../Components/FakultasList';
import cibiru from '../Asset/Digital Repo/carousel/cibiru.png';
import { Input } from '@material-tailwind/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

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
          link: '/a',
          tingkat: 'S1',
        },
        {
          name: 'PGPAUD',
          link: '/a',
          tingkat: 'S1',
        },
        {
          name: 'Pendidikan Multimedia',
          link: '/a',
          tingkat: 'S1',
        },
        {
          name: 'Teknik Komputer',
          link: '/a',
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
          link: '/a',
          tingkat: 'S2',
        },
      ],
    },
  ];

  // Menggabungkan semua deskripsi dari data
  const allDescriptions = data.map(({ desc }) => desc).flat();

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
              icon={<MagnifyingGlassIcon className="h-5 w-5 text-creamSecondary" />}
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
              className="!border-2 !border-creamSecondary  text-creamSecondary  placeholder-creamSecondary"
              labelProps={{
                className: 'hidden',
              }}
            />
            <button className="bg-creamSecondary font-semibold text-redPrimary border-2 px-6 rounded-lg hover:bg-redPrimary hover:text-creamSecondary"> Cari </button>
          </div>
        </div>
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
