import { Input } from '@material-tailwind/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import FakultasList from '../Components/FakultasList';

export default function DigitalRepository() {
  return (
    <div className="mt-[115px]">
      <div class="relative">
        <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gambar" class="w-full h-auto" />

        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 class="text-4xl font-bold">Judul Teks</h1>
          <p class="text-lg">Deskripsi atau teks lainnya di atas gambar</p>
        </div>

        <div class="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 text-center">
          <div className="w-1/2 my-4 flex gap-2 mx-auto mb-16">
            <Input
              type="text"
              placeholder="Kata Kunci"
              icon={<MagnifyingGlassIcon className="h-5 w-5 text-redPrimary" />}
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
              className="!border-2 !border-redPrimary  text-redPrimary  placeholder-redPrimary"
              labelProps={{
                className: 'hidden',
              }}
            />
            <button className="bg-none font-semibold text-redPrimary border-2 border-redPrimary px-6 rounded-lg hover:bg-redPrimary hover:text-creamSecondary"> Cari </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div>
          <FakultasList />
        </div>
      </div>
    </div>
  );
}
