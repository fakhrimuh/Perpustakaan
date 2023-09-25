import { Input } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import CardIcon from "../Components/Card";

// Import Image for Card
import AFPBS from "../Asset/Digital Repo/After/FPBS.png"
import BFPBS from "../Asset/Digital Repo/Before/FPBS.png"
import AFPOK from "../Asset/Digital Repo/After/FPOK.png"
import BFPOK from "../Asset/Digital Repo/Before/FPOK.png"
import AFPSD from "../Asset/Digital Repo/After/FPSD.png"
import BFPSD from "../Asset/Digital Repo/Before/FPSD.png"
import AFPMIPA from "../Asset/Digital Repo/After/FPMIPA.png"
import BFPMIPA from "../Asset/Digital Repo/Before/FPMIPA.png"
import ACampus from "../Asset/Digital Repo/After/Campus.png"
import BCampus from "../Asset/Digital Repo/Before/Campus.png"
import AFIP from "../Asset/Digital Repo/After/FIP.png"
import BFIP from "../Asset/Digital Repo/Before/FIP.png"
import APS from "../Asset/Digital Repo/After/PascaSarjana.png"
import BPS from "../Asset/Digital Repo/Before/PascaSarjana.png"
import AFPIPS from "../Asset/Digital Repo/After/FPIPS.png"
import BFPIPS from "../Asset/Digital Repo/Before/FPIPS.png"
import AFPEB from "../Asset/Digital Repo/After/FPEB.png"
import BFPEB from "../Asset/Digital Repo/Before/FPEB.png"
import AFPTK from "../Asset/Digital Repo/After/FPTK.png"
import BFPTK from "../Asset/Digital Repo/Before/FPTK.png"



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

      <h1 className="text-center text-redPrimary font-bold text-4xl">Fakultas</h1>
      <div className="text-center mx-4 content-center grid xl:grid-cols-7 grid-rows-3 md:grid-cols-2">
        <CardIcon title="FPEB"
          img1={AFPEB}
          img2={BFPEB}
          alternatif="Fakultas Pendidikan Ekonomi dan Bisnis" />
        <CardIcon title="FIP"
          img1={AFIP}
          img2={BFIP}
          alternatif="Fakultas Ilmu Pendidikan" />
        <CardIcon title="FPIPS"
          img1={AFPIPS}
          img2={BFPIPS}
          alternatif="Fakultas Pendidikan Ilmu Pengetahuan Sosial" />
        <CardIcon title="FPMIPA"
          img1={AFPMIPA}
          img2={BFPMIPA}
          alternatif="Fakultas Pendidikan Matematika dan Ilmu Pengetahuan Alam" />
        <CardIcon title="FPSD"
          img1={AFPSD}
          img2={BFPSD}
          alternatif="Fakultas Pendidikan Seni dan Desain" />
        <CardIcon title="FPTK"
          img1={AFPTK}
          img2={BFPTK}
          alternatif="Fakultas Pendidikan Teknologi dan Kejuruan" />
        <CardIcon title="Pasca Sarjana"
          img1={APS}
          img2={BPS}
          alternatif="Sekolah Pasca Sarjana" />
        <CardIcon title="Kampus Purwakarta"
          img1={ACampus}
          img2={BCampus}
          alternatif="UPI Kampus Purwakarta" />
        <CardIcon title="Kampus Serang"
          img1={ACampus}
          img2={BCampus}
          alternatif="UPI Kampus Serang" />
        <CardIcon title="Kampus Sumedang"
          img1={ACampus}
          img2={BCampus}
          alternatif="UPI Kampus Sumedang" />
        <CardIcon title="Kampus Tasik"
          img1={ACampus}
          img2={BCampus}
          alternatif="UPI Kampus Purwakarta" />
        <CardIcon title="Kampus Cibiru"
          img1={ACampus}
          img2={BCampus}
          alternatif="UPI Kampus Cibiru" />
        <CardIcon title="FPBS"
          img1={AFPBS}
          img2={BFPBS}
          alternatif="Fakultas Pendidikan Bahasa dan Sastra" />
        <CardIcon title="FPOK"
          img1={AFPOK}
          img2={BFPOK}
          alternatif="Fakultas Pendidikan Olahraga dan Kejuruan" />
      </div>
    </div>
  )
}
