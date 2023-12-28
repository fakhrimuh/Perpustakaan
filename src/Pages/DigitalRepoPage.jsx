import { Input } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import FakultasList from "../Components/FakultasList";



export default function DigitalRepository() {
  return (
    <div className="container mx-auto mb-4">
      <div className="w-1/2 my-4 flex gap-2 mx-auto">
        <Input
          type="text"
          placeholder="Kata Kunci"
          icon={<MagnifyingGlassIcon className="h-5 w-5 text-redPrimary" />}
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
          className="!border-2 !border-redPrimary  text-redPrimary  placeholder-redPrimary"
          labelProps={{
            className: "hidden",
          }}
        />
        <button className="bg-none font-semibold text-redPrimary border-2 border-redPrimary px-6 rounded-lg hover:bg-redPrimary hover:text-creamSecondary"> Cari </button>
      </div>

      <div>
        <FakultasList />
      </div>
    </div>
  )
}
