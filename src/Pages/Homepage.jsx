import CarouselHome from '../Components/Carousel';
import CardIcon from '../Components/Card';
import NewsCard from '../Components/NewsCard';
import PartnerTab from '../Components/Tabs';

import { Link } from 'react-router-dom';

// Import Local Picture
import PUM from '../Asset/Quick Links/Panduan Unggah Mandiri.png';
import PB from '../Asset/Quick Links/Peminjaman Buku.png';
import UB from '../Asset/Quick Links/Usulan Buku.png';
import Pengumuman from '../Asset/pengumuman.png';

// import image for our services
import BHKO from '../Asset/Before Hover/catalog.png';
import AHKO from '../Asset/After Hover/catalog.png';
import BHEJ from '../Asset/Before Hover/e-journal.png';
import AHEJ from '../Asset/After Hover/e-journal.png';
import BHDR from '../Asset/Before Hover/digital repository.png';
import AHDR from '../Asset/After Hover/digital repository.png';
import BHJT from '../Asset/Before Hover/printed journal.png';
import AHJT from '../Asset/After Hover/printed journal.png';
import BHLM from '../Asset/Before Hover/Layanan Mandiri.png';
import AHLM from '../Asset/After Hover/Layanan Mandiri.png';
import BHKL from '../Asset/Before Hover/Kelas literasi.png';
import AHKL from '../Asset/After Hover/Kelas literasi.png';
import BHKU from '../Asset/Before Hover/Koleksi Upiana.png';
import AHKU from '../Asset/After Hover/Koleksi Upiana.png';
import BHPI from '../Asset/Before Hover/Paket Informasi.png';
import AHPI from '../Asset/After Hover/Paket Informasi.png';

export default function HomePage() {
  return (
    <div className=" bg-creamSecondary">
      <div className="container mx-auto">
        {/* <BookForm /> */}
        <CarouselHome />

        {/* Our Services */}
        <div className="our-service text-center px-auto py-4">
          <p className="text-4xl font-bold mb-3 text-redPrimary">Layanan Kami</p>
          <div className="text-center mx-4 content-center grid xl:grid-cols-3 grid-rows-3 md:grid-cols-2">
            <CardIcon title="Katalog Online" img1={AHKO} img2={BHKO} alternatif="Katalog Online" />
            <Link to="/E-Journal">
              <CardIcon title="E-Journal & E-Book" img1={AHEJ} img2={BHEJ} alternatif="E-Journal & E-Book" />
            </Link>
            <CardIcon title="Digital Repository" img1={AHDR} img2={BHDR} alternatif="Digital Repository" />
            <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/15kJoTAS3jaWKXwhHfpMkYfDDdSAQWBvH/view">
              <CardIcon title="Jurnal Tercetak" img1={AHJT} img2={BHJT} alternatif="Jurnal Tercetak" />
            </a>
            <CardIcon title="Layanan Mandiri" img1={AHLM} img2={BHLM} alternatif="Layanan Mandiri" />
            <CardIcon title="Kelas Literasi" img1={AHKL} img2={BHKL} alternatif="Kelas Literasi" />
            <CardIcon title="koleksi Upiana" img1={AHKU} img2={BHKU} alternatif="Koleksi Upiana" />
            <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/spreadsheets/u/2/d/e/2PACX-1vQKea1SIE-74RmJWPOM3BvMfBNhro1ZjaQAhEND0rG-YhiDxa-n6_zJ76K6okDLhbIFoW8RLyYnwiBW/pubhtml">
              <CardIcon title="Paket Informasi" img1={AHPI} img2={BHPI} alternatif="Paket Informasi" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="quick-links text-center px-auto py-4">
          <p className="text-4xl font-bold mb-3 text-redPrimary">Quick Links</p>
          <div className="text-center mx-4 content-center grid xl:grid-cols-3  md:grid-cols-2">
            <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/drive/folders/18V_n0LGoJmKuSGRLUoVhB6LZ0YfyhCY1">
              <img src={PUM} alt="panduan unggah mandiri" className="h-full w-11/12 border-4 border-redPrimary rounded-xl" />
            </a>
            <Link to="/cekpeminjaman">
              <img src={PB} alt="cek peminjaman buku" className="h-full w-11/12 border-4 border-redPrimary rounded-xl " />
            </Link>
            <Link to="/usulanbuku">
              <img src={UB} alt="usulan buku" className="h-full w-11/12 border-4 border-redPrimary rounded-xl " />
            </Link>
          </div>
        </div>

        {/* Partners */}
        <div className="Partners text-center px-auto py-4">
          <p className="text-4xl font-bold mb-3 text-redPrimary">Partners </p>
          {/* <PartnerTab /> */}
          <PartnerTab />
        </div>

        {/* News */}
        <div className="News text-center px-auto py-4">
          <p className="text-4xl font-bold mb-3 text-redPrimary">Berita</p>
          <div className="mx-4 content-center grid grid-cols-3">
            <NewsCard
              title="Kunjungan Professor Araya Piyakun, Ph.D. (Mahasarakham University Thailand) ke Perpustakaan UPI"
              date="2 Februari 20222"
              writer="Asep Suadji"
              news="Perpustakaan Universitas Pendidikan Indonesia (UPI) Menerima kunjungan dari Adjunct Professor. Araya Piyakun, Ph.D. (Mahasarakham University Thailand). Kunjungan tersebut di dampingi Bapak Direktur Kampus UPI Serang Drs. H. Herli Salim, M.Ed, Ph. D. Kunjungan tersebut diterima langsung oleh Ka. Div Akuisi Bpk. Hidayat Margana, M.I.Kom dan Ka Div Layanan Ibu Damayanty. M"
            />

            <NewsCard
              title="Perpustakaan UPI menerima Sumbangan Buku dari Bapak Prof. Dr. H. Mohammad Fakry Gaffar, M.Ed"
              date="2 Februari 20222"
              writer="Asep Suadji"
              news="Dalam menanggapi perhatian yang luar biasa terhadap kemajuan pendidikan di Indonesia, Perpustakaan Universitas Pendidikan Indonesia (UPI) dengan tulus mengucapkan terima kasih kepada Prof. Dr. H. Mohammad Fakry Gaffar, M.Ed., yang telah memberikan sumbangan buku yang sangat berharga. Berikut adalah rincian sumbangan buku yang telah diberikan: Manajemen Pendidikan Indonesia/UPI Press/ 10 eksemplar Dinamika Pendidikan Nasional/UPI Press"
            />
            <NewsCard
              title="Kelas Literasi informasi bagi Dosen dan Mahasiswa Tingkat Akhir di Kampus UPI Serang"
              date="2 Februari 20222"
              writer="Asep Suadji"
              news="UPI Kampus Daerah Serang menjadi rangkaian penutup Roadshow Kelas Literasi Informasi (LI) bagi Mahasiswa Tingkat Akhir dan Dosen. Bertempat di Aula Kampus Serang Acara berlangsung dengan penuh antusias dilihat dari jumlah peserta baik Mahasiswa dan Dosen yang mengikuti kegiatan Kelas LI. Semoga kegiatan ini bisa memberikan manfaat bagi seluruh sivitas"
            />
          </div>
        </div>

        {/* Announcement */}
        <div className="Announcement text-center px-auto py-4">
          <p className="text-4xl font-bold mb-3 text-redPrimary">Pengumuman</p>
          <div className="text-center mx-4 content-center grid grid-cols-2 py-4">
            <img src={Pengumuman} alt="pengumuman" className="px-2" />
            <img src={Pengumuman} alt="pengumuman" className="px-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
