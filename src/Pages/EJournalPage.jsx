
import { Card, Typography, CardBody, Button } from '@material-tailwind/react';
import SageJournals from "../Asset/Tabs/E-Journal/Sage Journals.png"
import Emerald from "../Asset/Tabs/E-Journal/Emerald.png"
import Oxford from "../Asset/Tabs/E-Books/Oxford.png"
import Springer from "../Asset/Tabs/E-Books/Springer.png"
import Cambridge from "../Asset/Tabs/E-Journal/Cambridge.png"
import SageResearch from "../Asset/Tabs/E-Journal/Sage research Method.png"
import IGLibrary from "../Asset/Tabs/E-Books/image 1.png"
import IEEE from "../Asset/Tabs/E-Books/IEEE.png"
import Anmol from "../Asset/Tabs/E-Books/Anmol Publication.png"
import MathSolution from "../Asset/Tabs/E-Books/Mathsolution.png"
import SageKnowledge from "../Asset/Tabs/E-Books/Sage Knowledge.png"

const TABLE_HEAD = ["Sumber", "Link", "Deskripsi"];

const EJournal = [
  {
    image: SageJournals,
    link: "Sage",
    desc: "Social Humanity Science, Science, Technology, and Medicine, Health Sciences, Nursing, Public Health",
  },
  {
    image: Emerald,
    link: "Emerald",
    desc: "accounting, finance, economics collection, business, management, strategy collection, education collection, engineering collection, human resource, learning, organization studies, information, knowledge management collection, marketing collection, operations, logistics & quality collection, property management & Built environment collection, public policy & environmental management collection, tourism & hospitality management collection, health & social Care",
  },
  {
    image: Oxford,
    link: "Oxford",
    desc: "life sciences, mathematics, physical sciences",
  },
  {
    image: Springer,
    link: "Springer",
    desc: "Multidiciplinary (1997 – yang terbaru)",
  },
  {
    image: Cambridge,
    link: "Cambridge",
    desc: "Social Science (1997 – 2013)",
  },
];

const EBook = [
  {
    image: Oxford,
    link: "Oxford",
    desc: "Business and Management, Classical Studies, Economics and Finance, History, Law, Linguistics, Philosophy, Political Science, Psychology, Religion, Social Work",
  },
  {
    image: IGLibrary,
    link: "IG Library",
    desc: "Business & Economics, Computers, Design, Education, Law, Mathematics,Medical, Psychology, Reference, Science, Self-Help, Technology & Engineering, Travel",
  },
  {
    image: MathSolution,
    link: "Math Solutions",
    desc: "Education, Mathematics",
  },
  {
    image: Anmol,
    link: "Anmol",
    desc: "Education, Reference",
  },
  {
    image: Springer,
    link: "Springer",
    desc: "Multidiciplinary",
  },
  {
    image: Emerald,
    link: "Emerald",
    desc: "Multidiciplinary",
  },
  {
    image: IEEE,
    link: "IEEE Explore",
    desc: "Computer Science",
  },
  {
    image: SageKnowledge,
    link: "Sage Books",
    desc: "Business & Management, Counseling & Psychotherapy, Criminology & Criminal Justice, Education, Geography, Earth & Environmental Science, Health & Social Care, Media, Communication & Cultural Studies, Politics & International Relations, Psychology, Social Work, Sociology",
  },
];

const Lokal = [
  {
    image: "e-Resources\nPerpusnas",
    link: "Sage",
    desc: "Bahan perpustakaan digital online (e-Resources) seperti jurnal , ebook, dan karya-karya referensi online lainnya. Terdiri dari 4 penerbit lokal dan 27 penerbit internasional. Untuk mendapatkan layanan e-Resources ini, silahkan daftar menjadi anggota Perpustakaan Nasional Republik Indonesia (Perpusnas) melalui link berikut: https://keanggotaan.perpusnas.go.id",
  },
  {
    image: "e-Journal SINTA",
    link: "Emerald",
    desc: "Jurnal yang diterbitkan oleh perguruan tinggi di Indonesia yang telah terindex oleh sinta. Saat ini terdapat 5148 jurnal",
  },
  {
    image: "e-Journal Kemendikbud",
    link: "Oxford",
    desc: "Jurnal elektronik kemendikbud dengan berbagai subjek dari provinsi di Indonesia. Saat ini terdapat 88 e-Journal yang dapat diakses secara online.",
  },
  {
    image: "e-Journal Internasional Kemendikbud",
    link: "Springer",
    desc: "Jurnal internasional  yang dilanggan kemendikbud. Saat ini terdapat 9 jurnal. Untuk mendapatkan artikel, Anda dapat mengajukan permohonal artikel melalui email ke Perpustakaan Kemendikbud",
  },

];

export default function EJournalPage() {
  return (
    <div className="container mx-auto">
      <div className="my-4 text-center">
        <Typography variant="h4" className="text-redPrimary font-bold">
          E-Journal dan E-Book
        </Typography>
        <Typography variant="paragraph" className="my-2 w-3/4 mx-auto leading-normal font-medium text-redPrimary text-justify">
          Temukan koleksi lengkap jurnal dan E-book dari berbagai bidang ilmu dengan akses mudah dan terpercaya. Jelajahi artikel terkini dan kumpulan E-book untuk meningkatkan pengetahuan dan pemahaman Anda. Dapatkan manfaatnya dengan mengunduh E-book favorit Anda dan tetap terhubung dengan perkembangan terkini dalam dunia penelitian. Mari mulai petualangan membaca dengan konten yang menginspirasi dan mendidik.
        </Typography>
      </div>
      <Card className="h-full mx-auto w-4/5 mb-4">
        <CardBody className="px-0">
          {/* E-Journal */}
          <div className="mx-auto mb-10 w-5/6">
            <p className='font-semibold text-redPrimary mb-2'> Daftar E-Journals  dan E-Books yang dilanggan Perpustakaan Universitas Pendidikan Indonesia (UPI). </p>
            <table className=" bg-creamPrimary w-full min-w-max table-auto text-left rounded-lg">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th key={head} className="border-b rounded-t-lg text-center bg-creamSecondary border-redPrimary p-4">
                      <Typography
                        variant="h6"
                        className="font-bold text-redPrimary leading-none"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {EJournal.map(({ image, link, desc }, index) => (
                  <tr key={image} className="even:bg-creamSecondary">
                    <td className="p-4">
                      <img src={image} className='w-48 h-28 mx-auto' alt="" />
                    </td>
                    <td className="p-4 text-center">
                      <Button size='sm' className='bg-creamSecondary shadow-none border-solid border-[1.5px] border-redPrimary text-redPrimary hover:bg-redPrimary hover:text-creamSecondary'>
                        {link}
                      </Button>
                    </td>
                    <td className="p-4 w-96 text-justify">
                      <Typography variant="paragraph" className="font-medium text-redPrimary">
                        {desc}
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Various Resources */}
          <div className="mx-auto mb-10 w-5/6">
            <p className='font-semibold text-redPrimary mb-2'> Various Resource </p>
            <table className=" bg-creamPrimary w-full min-w-max table-auto text-left rounded-lg">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th key={head} className="border-b rounded-t-lg text-center bg-creamSecondary border-redPrimary p-4">
                      <Typography
                        variant="h6"
                        className="font-bold text-redPrimary leading-none"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-creamSecondary">
                  <td className="p-4">
                    <img src={SageResearch} alt="" className='w-48 h-28 mx-auto' />
                  </td>
                  <td className="p-4 text-center">
                    <Button size='sm' className='bg-creamSecondary shadow-none border-solid border-[1.5px] border-redPrimary text-redPrimary hover:bg-redPrimary hover:text-creamSecondary'>
                      Research <br /> Methods
                    </Button>
                  </td>
                  <td className="p-4 w-96 text-justify">
                    <Typography variant="paragraph" className="font-medium text-redPrimary">
                      Situs sumber daya online ini dibuat untuk membantu mahasiswa dan peneliti di bidang ilmu sosial, perilaku, dan kesehatan dalam merancang proyek penelitian, memahami metode atau menemukan metode baru, melakukan penelitian, dan menuliskan temuan mereka.
                      <div className='my-3'>
                        Isi dan Fitur:
                      </div>
                      <ul className='list-disc mb-2'>
                        <li>Lebih dari 220.000 halaman konten buku, jurnal, dan referensi dari SAGE dalam metode penelitian</li>
                        <li>
                          Alat pencarian dan penemuan yang canggih mendukung penjelajahan dan penemuan materi.

                        </li>
                        <li>
                          Peta Metode memvisualisasikan hubungan antara taksonomi lengkap istilah metode.
                        </li>
                        <li>
                          Daftar Metode dapat digunakan untuk mengumplikan buku, bab buku, dan artikel jurnal terpilih untuk ditinjau kemudian atau dibagikan melalui situs.
                        </li>
                        <li>
                          Seluruh seri Quantitative Applications in the Social Sciences ("The Little Green Books") dan Qualitative Research Methods Series ("The Little Blue Books") dari SAGE tersedia secara online dalam format teks lengkap.
                        </li>
                        <li>Baca konten teks lengkap secara online, cetak, atau kirim melalui email, termasuk lebih dari 840 buku metode penelitian dari SAGE.</li>
                        <li>Manfaatkan saran terkait, metode, dan tautan ke penulis terkait dari perpustakaan lengkap SAGE Research Methods dan fitur uniknya.</li>
                        <li>
                          Jelajahi konten jurnal online terkait dengan widget Jurnal SAGE.
                        </li>
                      </ul>

                      Tonton 58 video khusus yang dikomisikan tentang metode penelitian dengan beberapa penulis terkemuka dari SAGE.
                    </Typography>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* E-Book */}
          <div className="mx-auto mb-10 w-5/6">
            <p className='font-semibold text-redPrimary mb-2'> E-Book </p>
            <table className=" bg-creamPrimary w-full min-w-max table-auto text-left rounded-lg">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th key={head} className="border-b rounded-t-lg bg-creamSecondary border-redPrimary text-center p-4">
                      <Typography
                        variant="h6"
                        className="font-bold text-redPrimary leading-none"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {EBook.map(({ image, link, desc }, index) => (
                  <tr key={image} className="even:bg-creamSecondary">
                    <td className="p-4">
                      <img src={image} alt="" className='w-48 h-28 mx-auto' />
                    </td>
                    <td className="p-4 text-center">
                      <Button size='sm' className='bg-creamSecondary shadow-none border-solid border-[1.5px] border-redPrimary text-redPrimary hover:bg-redPrimary hover:text-creamSecondary'>
                        {link}
                      </Button>
                    </td>
                    <td className="p-4 w-96 text-justify">
                      <Typography variant="paragraph" className="font-medium text-redPrimary">
                        {desc}
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mx-auto mb-10 w-5/6">
            <p className='font-semibold text-redPrimary mb-2'> Daftar E-Journals  dan E-Books Partner Perpustakaan Universitas Pendidikan Indonesia (UPI) </p>
            <table className=" bg-creamPrimary w-full min-w-max table-auto text-left rounded-lg">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th key={head} className="border-b rounded-t-lg bg-creamSecondary border-redPrimary p-4">
                      <Typography
                        variant="h6"
                        className="font-bold text-redPrimary text-center leading-none"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Lokal.map(({ image, link, desc }, index) => (
                  <tr key={image} className="even:bg-creamSecondary">
                    <td className="p-4">
                      <Typography variant="paragraph" className="text-redPrimary">
                        {image}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Button size='sm' className='bg-creamSecondary shadow-none border-solid border-[1.5px] border-redPrimary text-redPrimary hover:bg-redPrimary hover:text-creamSecondary'>
                        Buka
                      </Button>
                    </td>
                    <td className="p-4 w-96 text-justify">
                      <Typography variant="paragraph" className="font-medium text-redPrimary">
                        {desc}
                      </Typography>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mx-auto mb-10 w-5/6">
            <table className=" bg-creamPrimary w-full min-w-max table-auto text-left rounded-lg">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th key={head} className="border-b rounded-t-lg text-center bg-creamSecondary border-redPrimary p-4">
                      <Typography
                        variant="h6"
                        className="font-bold text-redPrimary leading-none"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-creamSecondary">
                  <td className="p-4">
                    <img src={SageResearch} alt="" className='w-48 h-28 mx-auto' />
                  </td>
                  <td className="p-4 text-center">
                    <Button size='sm' className='bg-creamSecondary shadow-none border-solid border-[1.5px] border-redPrimary text-redPrimary hover:bg-redPrimary hover:text-creamSecondary'>
                      Download
                    </Button>
                  </td>
                  <td className="p-4 w-96 text-justify">
                    <Typography variant="paragraph" className="font-medium text-redPrimary">
                      Potret Pendidikan Tinggi di Masa Covid-19
                    </Typography>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
