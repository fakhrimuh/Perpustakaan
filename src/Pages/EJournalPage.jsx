import { Typography, Button } from '@material-tailwind/react';
import Cambridge from '../Asset/Tabs/E-Journal/Cambridge press.png';
import Emerald from '../Asset/Tabs/E-Journal/Emerald insight.png';
import Oxford from '../Asset/Tabs/E-Journal/Oxford Press.png';
import pmc from '../Asset/Tabs/E-Journal/PMC.png';
import SageJournals from '../Asset/Tabs/E-Journal/Sage Journals.png';
import direct from '../Asset/Tabs/E-Journal/sciencedirect.png';
import Springer from '../Asset/Tabs/E-Journal/Springer Link.png';
import SageMethod from '../Asset/Tabs/E-Books/Sage research method.png';
import TaylorFrancis from '../Asset/Tabs/E-Books/Taylor and francis.png';
import oxfordAcademy from '../Asset/Tabs/E-Books/Oxford academic.png';
import IGLibrary from '../Asset/Tabs/E-Books/Ig Library.png';
import IEEE from '../Asset/Tabs/E-Books/IEEE Xplore.png';
import Anmol from '../Asset/Tabs/E-Books/Anmol Publication.png';
import MathSolution from '../Asset/Tabs/E-Books/Mathsolution.png';
import SageKnowledge from '../Asset/Tabs/E-Books/Sage.png';
import Mendikbud from '../Asset/Tabs/partner-upi/Kemendikbud.png';
import Perpunas from '../Asset/Tabs/partner-upi/Perpusnas.png';
import Sinta from '../Asset/Tabs/partner-upi/Sinta.png';

const EJournal = [
  {
    image: direct,
    link: 'Science Direct',
    desc: 'Teknik Kimia, Kimia, Ilmu Komputer, Ilmu Bumi dan Planet, Energi, Teknik, Ilmu Bahan, Matematika, Fisika, Astronomi, Ilmu Pertanian dan Biologi, Biokimia, Genetika dan Biologi Molekuler, Ilmu Lingkungan, Imunologi dan Mikrobiologi, Neuro sains, Kedokteran dan Kedokteran Gigi, Keperawatan dan Profesi Kesehatan, Farmakologi, Toksikologi, dan Ilmu Farmasi, Ilmu Kedokteran Hewan dan Kedokteran Hewan, Seni dan Humaniora, Bisnis, Manajemen, dan Akuntansi, Ilmu Keputusan, Ekonomi, Ekonometrika, dan Keuangan, Psikologi, dan Ilmu Sosial',
  },
  {
    image: SageJournals,
    link: 'Sage',
    desc: 'Social Humanity Science, Science, Technology, and Medicine, Health Sciences, Nursing, Public Health',
  },
  {
    image: Emerald,
    link: 'Emerald',
    desc: 'akuntansi, keuangan, dan ekonomi untuk koleksi bisnis. Selain itu, terdapat koleksi dalam manajemen strategis, pendidikan, teknik, sumber daya manusia, pembelajaran, dan studi organisasi. Koleksi ini juga melibatkan aspek-aspek seperti manajemen informasi, manajemen pengetahuan, pemasaran, operasi, logistik, kualitas, manajemen properti, lingkungan binaan, kebijakan publik, manajemen lingkungan, pariwisata, perhotelan, serta kesehatan dan perawatan sosial.',
  },
  {
    image: Springer,
    link: 'Springer',
    desc: 'Multidiciplinary (1997 – yang terbaru)',
  },
  {
    image: Oxford,
    link: 'Oxford',
    desc: 'Ilmu kehidupan, matematika, dan ilmu fisika',
  },
  {
    image: Cambridge,
    link: 'Cambridge',
    desc: 'Ilmu sosial',
  },
  {
    image: pmc,
    link: 'Pubmed Central',
    desc: 'PubMed Central® (PMC) adalah arsip teks penuh gratis dari literatur jurnal biomedis dan ilmu kehidupan yang berada di Perpustakaan Nasional Institut Kesehatan (NIH/NLM) di Amerika Serikat',
  },
];
const sumberInfo = [
  {
    image: SageMethod,
    link: 'SAGE Research Method',
    desc: 'Sumber daya online ini dibuat untuk membantu mahasiswa dan peneliti di bidang ilmu sosial, perilaku, dan kesehatan dalam merancang proyek penelitian, memahami metode atau mengidentifikasi metode baru, menjalankan penelitian, dan menyusun hasil temuan mereka',
  },
];

const EBook = [
  {
    image: TaylorFrancis,
    link: 'Taylor & Francis',
    desc: 'Desain Komunikasi Visual, Geografi, Kelautan, Mekatronika & Robotik, Multimedia, Musik, Otomotif, Rekayasa Perangkat lunak',
  },
  {
    image: oxfordAcademy,
    link: 'Oxford Academic',
    desc: 'Bisnis dan Manajemen, Studi Klasik, Ekonomi dan Keuangan, Sejarah, Hukum, Linguistik, Filsafat, Ilmu Politik, Psikologi, Agama, Pekerjaan Sosial',
  },
  {
    image: IGLibrary,
    link: 'IG Library',
    desc: 'Bisnis & Ekonomi, Komputer, Desain, Pendidikan, Hukum, Matematika, Kedokteran, Psikologi, Referensi, Sains, Bantuan Diri, Teknologi & Rekayasa, Perjalanan',
  },
  {
    image: MathSolution,
    link: 'Math Solutions',
    desc: 'Pendidikan dan Matematika',
  },
  {
    image: Anmol,
    link: 'Anmol',
    desc: 'Pendidikan dan Referensi',
  },
  {
    image: Springer,
    link: 'Springer',
    desc: 'Multidisiplin',
  },
  {
    image: Emerald,
    link: 'Emerald',
    desc: 'Multidisiplin',
  },
  {
    image: IEEE,
    link: 'IEEE Explore',
    desc: 'Ilmu Komputer',
  },
  {
    image: SageKnowledge,
    link: 'Sage Books',
    desc: 'Bisnis dan Manajemen, Konseling dan Psikoterapi, Kriminologi dan Kehakiman Pidana, Pendidikan, Geografi, Ilmu Bumi dan Lingkungan, Kesehatan dan Perawatan Sosial, Media, Komunikasi dan Studi Budaya, Politik dan Hubungan Internasional, Psikologi, Pekerjaan',
  },
];

const Lokal = [
  {
    image: Perpunas,
    link: 'E-Resource Perpusnas',
    desc: 'Bahan perpustakaan digital online (e-Resources) seperti jurnal , ebook, dan karya-karya referensi online lainnya. Terdiri dari 4 penerbit lokal dan 27 penerbit internasional. Untuk mendapatkan layanan e-Resources ini, silahkan daftar menjadi anggota Perpustakaan Nasional Republik Indonesia (Perpusnas) melalui link berikut: https://keanggotaan.perpusnas.go.id',
  },
  {
    image: Sinta,
    link: 'E-Journal Sinta',
    desc: 'Jurnal yang diterbitkan oleh perguruan tinggi di Indonesia yang telah terindex oleh sinta. Saat ini terdapat 5148 jurnal',
  },
  {
    image: Mendikbud,
    link: 'E-Journal Kemendikbud',
    desc: 'Jurnal elektronik kemendikbud dengan berbagai subjek dari provinsi di Indonesia. Saat ini terdapat 88 e-Journal yang dapat diakses secara online',
  },
  {
    image: Mendikbud,
    link: 'E-Journal Internasional Kemendikbud',
    desc: 'Jurnal internasional  yang dilanggan kemendikbud. Saat ini terdapat 9 jurnal. Untuk mendapatkan artikel, Anda dapat mengajukan permohonal artikel melalui email ke Perpustakaan Kemendikbud',
  },
  {
    image: Mendikbud,
    link: 'E-Book Kemendikbud',
    desc: 'Potret Pendidikan Tinggi di Masa Covid-19',
  },
];

export default function EJournalPage() {
  return (
    <div className="container mx-auto mt-[110px]">
      <div className="my-8 w-11/12">
        <Typography variant="h2" className="text-redPrimary font-bold mt-20">
          E-Journal dan E-Book
        </Typography>
        <Typography variant="h4" className="text-redPrimary font-semibold">
          Ketentuan Akses E-Journal dan E-Books dari dalam dan luar Kampus UPI
        </Typography>
        <Typography className="my-2 mx-auto leading-normal text-xl font-medium text-black text-justify">
          E-Journals dan E-Books yang dilanggan UPI dapat diakses menggunakan wifi atau jaringan komputer yang dikelola oleh direktorat STI. Sedangkan akses dari luar kampus dapat menggunakan Aplikasi MyLOFT. Berikut proses pendaftaran dan
          instalasi aplikasi MyLOFT:
          <ol className="my-4">
            <li>1. Melakukan pendaftaran di link https://perpustakaan.upi.edu/akunmyloft (login menggunakan akun email @upi.edu)</li>
            <li>2. Membuat password dengan klik link yang diberikan MyLOFT di email setelah admin mendaftarkan</li>
            <li>3. Instal ekstensi myloft di browser chrome, Google Play/App Store</li>
            <li>4. Login menggunakan email dan password yang telah dibuat</li>
          </ol>
          Untuk instalasi aplikasi MyLOFT dan cara penggunaannya dapat dilihat pada panduan dibawah Daftar Akun MyLOFT
        </Typography>
      </div>
      <div className="flex items-center w-fit my-12 mx-auto">
        <Button size="md" className="bg-redPrimary text-creamSecondary hover:bg-creamSecondary hover:text-redPrimary  border-solid border-[1.5px] border-redPrimary">
          Daftar Akun MyLOFT
        </Button>
      </div>

      <div className="my-14">
        <Typography variant="h2" className="my-6 text-redPrimary text-center font-bold">
          E-Journal
        </Typography>
        <div className="w-full flex justify-center flex-wrap gap-4">
          {/* Mapping e-journal */}
          {EJournal.map(({ image, link, desc }, index) => (
            <div className="lg:w-[650px]  flex bg-redPrimary rounded-lg gap-3 p-4">
              <img key={image} src={image} alt="logo" className="my-auto" />
              <div className="bg-cover bg-center"></div>
              <div>
                <Typography variant="h4" className="text-creamSecondary">
                  {link}
                </Typography>
                <Typography variant="paragraph" className="text-creamSecondary text-sm my-4 text-justify">
                  {desc}
                </Typography>
                <div className="w-full flex">
                  <Button size="md" className="me-4 text-creamSecondary hover:text-redPrimary bg-redPrimary hover:bg-creamSecondary border-solid border-[1.5px] border-creamSecondary">
                    Journal List
                  </Button>
                  <Button size="md" className="text-creamSecondary hover:text-redPrimary bg-redPrimary hover:bg-creamSecondary border-solid border-[1.5px] border-creamSecondary">
                    Kunjungi
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-14">
        <Typography variant="h2" className="my-6 text-redPrimary text-center font-bold">
          Aneka Sumber Informasi
        </Typography>
        <div className="w-full flex justify-center flex-wrap gap-4">
          {sumberInfo.map(({ image, link, desc }, index) => (
            <div className="max-w-[650px] flex bg-redPrimary rounded-lg gap-3 p-4">
              <img src={image} alt="logo" className="my-auto object-cover" />
              <div>
                <Typography variant="h4" className="text-creamSecondary">
                  {link}
                </Typography>
                <Typography variant="paragraph" className="text-creamSecondary text-sm my-4 text-justify">
                  {desc}
                </Typography>
                <div className="w-full flex">
                  <Button size="md" className="me-4 text-creamSecondary hover:text-redPrimary bg-redPrimary hover:bg-creamSecondary border-solid border-[1.5px] border-creamSecondary">
                    Journal List
                  </Button>
                  <Button size="md" className="text-creamSecondary hover:text-redPrimary bg-redPrimary hover:bg-creamSecondary border-solid border-[1.5px] border-creamSecondary">
                    Kunjungi
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-14">
        <Typography variant="h2" className="my-6 text-redPrimary text-center font-bold">
          E-Book
        </Typography>
        <div className="w-full flex justify-center flex-wrap gap-4">
          {EBook.map(({ image, link, desc }, index) => (
            <div className="lg:w-[650px]  flex bg-redPrimary rounded-lg gap-3 p-4">
              <img src={image} alt="logo" className="my-auto object-cover" />
              <div>
                <Typography variant="h4" className="text-creamSecondary">
                  {link}
                </Typography>
                <Typography variant="paragraph" className="text-creamSecondary text-sm my-4 text-justify">
                  {desc}
                </Typography>
                <div className="w-full flex">
                  <Button size="md" className="me-4 text-creamSecondary hover:text-redPrimary bg-redPrimary hover:bg-creamSecondary border-solid border-[1.5px] border-creamSecondary">
                    Journal List
                  </Button>
                  <Button size="md" className="text-creamSecondary hover:text-redPrimary bg-redPrimary hover:bg-creamSecondary border-solid border-[1.5px] border-creamSecondary">
                    Kunjungi
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-14">
        <Typography variant="h2" className="my-6 text-redPrimary text-center font-bold">
          Partner UPI
        </Typography>
        <div className="w-full flex justify-center flex-wrap gap-4">
          {Lokal.map(({ image, link, desc }, index) => (
            <div className="lg:w-[650px]  flex bg-redPrimary rounded-lg gap-3 p-4">
              <img src={image} alt="logo" className="my-auto object-cover" />
              <div>
                <Typography variant="h4" className="text-creamSecondary">
                  {link}
                </Typography>
                <Typography variant="paragraph" className="text-creamSecondary text-sm my-4 text-justify">
                  {desc}
                </Typography>
                <div className="w-full flex">
                  <Button size="md" className="me-4 text-creamSecondary hover:text-redPrimary bg-redPrimary hover:bg-creamSecondary border-solid border-[1.5px] border-creamSecondary">
                    Journal List
                  </Button>
                  <Button size="md" className="text-creamSecondary hover:text-redPrimary bg-redPrimary hover:bg-creamSecondary border-solid border-[1.5px] border-creamSecondary">
                    Kunjungi
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
