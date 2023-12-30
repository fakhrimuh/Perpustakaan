import { Input } from '@material-tailwind/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Upi from '../Asset/Digital Repo/carousel/UPI.png';
import FakultasList from '../Components/FakultasList';

export default function DigitalRepository() {
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
      <div className="mt-32 container mx-auto">
        <div>
          <FakultasList />
        </div>
      </div>
    </div>
  );
}
