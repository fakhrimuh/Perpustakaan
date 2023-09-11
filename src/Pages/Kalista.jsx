import { Card, Button, CardBody, CardFooter } from "@material-tailwind/react";
import { NewspaperIcon } from "@heroicons/react/24/outline"

export default function Kalista() {
  return (
    <body className="container mx-auto mb-4 text-redPrimary font-medium">
      <div>
        <section>
          <div >
            <div className="my-2">
              <h1 className="text-5xl text-center tracking-widest font-bold">KALISTA</h1>
            </div>
            <div className="my-2">
              <p className="font-medium leading-7 text-lg text-justify mx-auto w-3/4">
                KALISTA adalah layanan Literasi Informasi Terbuka di Perpustakaan Universitas Pendidikan Indonesia (UPI) untuk meningkatkan literasi informasi sivitas akademika dan masyarakat umum. Dapatkan akses Sumber Daya Pembelajaran KALISTA melalui Youtube, Instagram, dan Podcast dengan format video, audio, dan teks. Topik yang dipelajari termasuk Layanan Perpustakaan UPI, Repository UPI, Media Sosial Perpustakaan UPI, Strategi Penelusuran Online (Ebook dan Ejournal), dan Layanan Mahasiswa Tingkat Akhir. Pelajari rangkaian topik KALISTA untuk optimalisasi penelusuran dan akses informasi di Perpustakaan UPI.
              </p>
            </div>
          </div>


          {/* <div>
            <img decoding="async" width="868" height="598" src="http://perpustakaan.upi.edu/wp-content/uploads/2021/02/hero_d8532248d57bebf17942d093b4398800.png" className="attachment-large size-large wp-image-2863" alt="" loading="lazy" srcset="http://perpustakaan.upi.edu/wp-content/uploads/2021/02/hero_d8532248d57bebf17942d093b4398800.png 868w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/hero_d8532248d57bebf17942d093b4398800-300x207.png 300w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/hero_d8532248d57bebf17942d093b4398800-768x529.png 768w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/hero_d8532248d57bebf17942d093b4398800-610x420.png 610w" sizes="(max-width: 868px) 100vw, 868px" />
          </div> */}


        </section>


        {/* Profil Perpustakaan */}
        <section className="mb-2">
          <div>
            <div className="mb-4">
              <h2 className="font-bold text-center text-5xl">Profil Perpustakaan UPI</h2>
            </div>
            <div className="mx-auto w-11/12">
              <iframe className="mx-auto my-2 w-11/12  rounded-lg" src="https://www.youtube.com/embed/53iJQjj4Quo" height="600" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>
          </div>
        </section>

        {/* Layanan Perpustakaan */}
        <section className="mb-2">
          <div className="mb-2">
            <h2 className="text-5xl font-bold text-center mb-4" >Layanan Perpustakaan UPI</h2>
            <p className="w-1/2 text-center mx-auto">Topik yang pembahasan meliputi seluruh layanan yang diberikan oleh Perpustakaan UPI secara online maupun offline seperti layanan peminjaman, layanan referensi, fasilitas layanan, serta layanan berbagai koleksi</p>
          </div>
          <div className="mb-2 ">
            <iframe className="mx-auto rounded-lg" width="1280" height="720" src="https://www.youtube.com/embed/YI4f3oOTZYY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </div>
          <div className="flex gap-4">
            {/* Booklet perpus ID */}
            <Card className="w-1/4 border-b-8 border-b-redPrimary">
              <CardBody>
                <NewspaperIcon className="w-12 h-12" />

                <div>
                  <h3 className="font-bold">
                    Booklet Perpustakaan (id)
                  </h3>
                  <p className="font-medium">
                    Informasi layanan Perpustakaan UPI dalam bahasa Indonesia
                  </p>
                </div>
              </CardBody>
              <CardFooter>
                <a href="http://perpustakaan.upi.edu/booklet" target="_blank" rel="noreferrer">
                  <Button>
                    Click here
                  </Button>
                </a>

              </CardFooter>
            </Card>

            {/* Booklet perpus EN */}
            <Card className="w-1/4 border-b-8 border-b-redPrimary">
              <CardBody>
                <NewspaperIcon className="w-12 h-12" />
                <div>
                  <h3 className="font-bold">
                    Booklet Perpustakaan (en)
                  </h3>
                  <p className="font-medium">
                    Informasi layanan Perpustakaan UPI dalam bahasa Inggris
                  </p>
                </div>
              </CardBody>
              <CardFooter>
                <a href="http://perpustakaan.upi.edu/booklet-en" target="_blank" rel="noreferrer">
                  <Button>
                    Click here
                  </Button>
                </a>
              </CardFooter>
            </Card>

            {/* Buku Saku Layanan Daring ID */}
            <Card className="w-1/4 border-b-8 border-b-redPrimary">
              <CardBody>
                <NewspaperIcon className="w-12 h-12" />

                <div>
                  <h3 className="font-bold">
                    Buku Saku Layanan Daring (id)
                  </h3>
                  <p className="font-medium">Buku saku layanan daring Perpustakaan UPI dalam bahasa Indonesia
                  </p>
                </div>
              </CardBody>
              <CardFooter>
                <a href="http://perpustakaan.upi.edu/bukusaku" target="_blank" rel="noreferrer">
                  <Button>
                    Click here
                  </Button>
                </a>
              </CardFooter>
            </Card>

            {/* Buku saku layanan daring EN */}
            <Card className="w-1/4 border-b-8 border-b-redPrimary">

              <CardBody>
                <NewspaperIcon className="w-12 h-12" />
                <div >
                  <h3 className="font-bold">
                    Buku Saku Layanan Daring (en)
                  </h3>
                  <p className="font-medium">
                    Buku saku layanan daring Perpustakaan UPI dalam bahasa Inggris
                  </p>
                </div>
              </CardBody>
              <CardFooter>
                <a href="http://perpustakaan.upi.edu/bukusaku-en" target="_blank" rel="noreferrer">
                  <Button>
                    Click here
                  </Button>
                </a>
              </CardFooter>
            </Card>

          </div>
        </section>

        {/* Repository UPI */}
        <section className="mb-2">
          <div>
            <h2 className="text-5xl font-bold text-center mb-4">Repository UPI dan Optimasi Tools untuk Akses Online​</h2>
            <p className="w-1/2 text-center mx-auto">Topik pembahasan meliputi jenis dan cara mengakses koleksi yang ada pada Repository UPI serta perangkat lunak yang digunakan untuk dapat mengakses semua layanan koleksi Perpustakaan UPI secara online</p>
          </div>
          <div className="imageGroup mx-auto">
            <div>
              <img decoding="async" width="1280" height="720" src="http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Tutorial-Daring-Repository-UPI-dan-Optimalisasi-VPN.png" className="mx-auto rounded-lg" alt="" loading="lazy" srcset="http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Tutorial-Daring-Repository-UPI-dan-Optimalisasi-VPN.png 1280w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Tutorial-Daring-Repository-UPI-dan-Optimalisasi-VPN-300x169.png 300w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Tutorial-Daring-Repository-UPI-dan-Optimalisasi-VPN-1024x576.png 1024w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Tutorial-Daring-Repository-UPI-dan-Optimalisasi-VPN-768x432.png 768w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Tutorial-Daring-Repository-UPI-dan-Optimalisasi-VPN-610x343.png 610w" sizes="(max-width: 1280px) 100vw, 1280px" />
            </div>
            <h2 className="text-xl text-center font-bold my-4">Panduan VPN &amp; MyLOFT</h2>
            <div className="grid gap-4 grid-cols-2">
              <div>
                <img decoding="async" width="1280" height="720" src="http://perpustakaan.upi.edu/wp-content/uploads/2021/02/VPN-Windows.png" className="mx-auto rounded-lg" alt="" loading="lazy" srcset="http://perpustakaan.upi.edu/wp-content/uploads/2021/02/VPN-Windows.png 1280w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/VPN-Windows-300x169.png 300w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/VPN-Windows-1024x576.png 1024w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/VPN-Windows-768x432.png 768w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/VPN-Windows-610x343.png 610w" sizes="(max-width: 1280px) 100vw, 1280px" />
              </div>
              <div>
                <img decoding="async" width="1280" height="720" src="http://perpustakaan.upi.edu/wp-content/uploads/2021/02/VPN-MacOS.png" className="mx-auto rounded-lg" alt="" loading="lazy" srcset="http://perpustakaan.upi.edu/wp-content/uploads/2021/02/VPN-MacOS.png 1280w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/VPN-MacOS-300x169.png 300w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/VPN-MacOS-1024x576.png 1024w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/VPN-MacOS-768x432.png 768w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/VPN-MacOS-610x343.png 610w" sizes="(max-width: 1280px) 100vw, 1280px" />
              </div>
              <div>
                <img decoding="async" width="1280" height="720" src="http://perpustakaan.upi.edu/wp-content/uploads/2021/02/VPN-Android.png" className="mx-auto rounded-lg" alt="" loading="lazy" srcset="http://perpustakaan.upi.edu/wp-content/uploads/2021/02/VPN-Android.png 1280w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/VPN-Android-300x169.png 300w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/VPN-Android-1024x576.png 1024w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/VPN-Android-768x432.png 768w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/VPN-Android-610x343.png 610w" sizes="(max-width: 1280px) 100vw, 1280px" />
              </div>
              <div>
                <img decoding="async" width="1280" height="720" src="http://perpustakaan.upi.edu/wp-content/uploads/2021/02/MyLOFT.png" className="mx-auto rounded-lg" alt="" loading="lazy" srcset="http://perpustakaan.upi.edu/wp-content/uploads/2021/02/MyLOFT.png 1280w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/MyLOFT-300x169.png 300w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/MyLOFT-1024x576.png 1024w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/MyLOFT-768x432.png 768w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/MyLOFT-610x343.png 610w" sizes="(max-width: 1280px) 100vw, 1280px" />
              </div>
            </div>
            {/* Card  */}
            <div className="grid mt-4 gap-4 grid-cols-3">
              <Card className="border-b-8 border-b-redPrimary">
                <CardBody>
                  <NewspaperIcon className="w-12 h-12" />

                  <div>
                    <h3 className="font-bold">
                      SORA VPN
                    </h3>
                    <p className="font-medium">
                      Sosialisasi layanan dan literasi informasi secara daring Mengenai tutorial repository dan optimalisasi VPN
                    </p>
                  </div>
                </CardBody>
                <CardFooter>
                  <a href="https://anchor.fm/perpustakaan-upi/episodes/Perpustakaan-UPI-Gelar-Tutorial-Repository-dan-Optimaslisasi-VPN-ei3b4s" target="_blank" rel="noreferrer">
                    <Button>
                      Click here
                    </Button>
                  </a>
                </CardFooter>
              </Card>

              <Card className="border-b-8 border-b-redPrimary">
                <CardBody>
                  <NewspaperIcon className="w-12 h-12" />
                  <div>
                    <h3 className="font-bold">
                      Panduan Instalasi Library Assist
                    </h3>
                    <p className="font-medium">
                      Panduan Instalasi Library Assist untuk pemustaka Universitas Pendidikan Indonesia
                    </p>
                  </div>
                </CardBody>
                <CardFooter>
                  <a href="http://perpustakaan.upi.edu/assist" target="_blank" rel="noreferrer">
                    <Button>
                      Click here
                    </Button>
                  </a>
                </CardFooter>
              </Card>

              <Card className="border-b-8 border-b-redPrimary">
                <CardBody>
                  <NewspaperIcon className="w-12 h-12" />

                  <div>
                    <h3 className="font-bold">
                      My LOFT User Guide
                    </h3>
                    <p className="font-medium">
                      Panduan Aplikasi My LOFT untuk pemustaka Universitas Pendidikan Indonesia
                    </p>
                  </div>
                </CardBody>
                <CardFooter>
                  <a href="https://drive.google.com/drive/folders/1oNJ9OEs4IwprBYrBANvCGcv60Vi5Du6b?usp=sharing" target="_blank" rel="noreferrer">
                    <Button>
                      Click here
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Bincang Media sosial */}
        <section className="mb-2">
          <div>
            <h2 className="text-5xl font-bold text-center mb-4">Media Sosial​</h2>
            <p className="w-1/2 text-center mx-auto">Topik bahasan meliputi media sosial secara umum, cara berinteraksi di media sosial khususnya Perpustakaan UPI</p>
          </div>
          <div className="imageGroup mx-auto">
            <div>
              <img decoding="async" width="1280" height="720" src="http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Bincang-Medsos-perpustakaan-UPI.png" className="mx-auto rounded-lg" alt="" loading="lazy" srcset="http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Bincang-Medsos-perpustakaan-UPI.png 1280w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Bincang-Medsos-perpustakaan-UPI-300x169.png 300w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Bincang-Medsos-perpustakaan-UPI-1024x576.png 1024w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Bincang-Medsos-perpustakaan-UPI-768x432.png 768w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Bincang-Medsos-perpustakaan-UPI-610x343.png 610w" />
            </div>
          </div>
        </section>

        {/* Strategi penelusuran online */}
        <section className="mb-2">
          <div>
            <h2 className="text-5xl font-bold text-center mb-4">Strategi Penelusuran Online (Ebook dan Ejournal)</h2>
            <p className="w-1/2 text-center mx-auto">Topik bahasan meliputi akses terhadap e-resources yang disediakan perpustakaan UPI serta cara penelusurannya agar dapat efektif</p>
          </div>
          <div className="imageGroup  mb-4">
            <div>
              <img decoding="async" width="1280" height="720" src="http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Literasi-Informasi-Strategi-Penelusuran-Online.png" className="mx-auto rounded-lg" alt="" loading="lazy" srcset="http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Literasi-Informasi-Strategi-Penelusuran-Online.png 1280w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Literasi-Informasi-Strategi-Penelusuran-Online-300x169.png 300w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Literasi-Informasi-Strategi-Penelusuran-Online-1024x576.png 1024w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Literasi-Informasi-Strategi-Penelusuran-Online-768x432.png 768w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Literasi-Informasi-Strategi-Penelusuran-Online-610x343.png 610w" sizes="(max-width: 1280px) 100vw, 1280px" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img decoding="async" width="1280" height="720" src="http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Tutorial-daring-Emerald.png" className="mx-auto rounded-lg" alt="" loading="lazy" srcset="http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Tutorial-daring-Emerald.png 1280w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Tutorial-daring-Emerald-300x169.png 300w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Tutorial-daring-Emerald-1024x576.png 1024w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Tutorial-daring-Emerald-768x432.png 768w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Tutorial-daring-Emerald-610x343.png 610w" sizes="(max-width: 1280px) 100vw, 1280px" />
            <img decoding="async" width="1280" height="720" src="http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Tutorial-Daring-Springerlink.png" className="mx-auto rounded-lg" alt="" loading="lazy" srcset="http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Tutorial-Daring-Springerlink.png 1280w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Tutorial-Daring-Springerlink-300x169.png 300w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Tutorial-Daring-Springerlink-1024x576.png 1024w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Tutorial-Daring-Springerlink-768x432.png 768w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Tutorial-Daring-Springerlink-610x343.png 610w" sizes="(max-width: 1280px) 100vw, 1280px" />
          </div>

          {/* Card */}
          <div className="grid mt-4 gap-4 grid-cols-3">
            <Card className="border-b-8 border-b-redPrimary">
              <CardBody>
                <NewspaperIcon className="w-12 h-12" />

                <div>
                  <h3 className="font-bold">
                    SORA Emerald
                  </h3>
                  <p className="font-medium">
                    Audio Tutorial Daring Emerald oleh Perpustakaan Universitas Pendidikan Indonesia
                  </p>
                </div>
              </CardBody>
              <CardFooter>
                <a href="https://anchor.fm/perpustakaan-upi/episodes/Pelaksanaan-Tutorial-Daring-Emerald-oleh-Perpustakaan-UPI-ei3cfr" target="_blank" rel="noreferrer">
                  <Button> Click here </Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="border-b-8 border-b-redPrimary">
              <CardBody>
                <NewspaperIcon className="w-12 h-12" />
                <div>
                  <h3 className="font-bold">
                    SORA Springerlink
                  </h3>
                  <p className="font-medium">
                    Audio Tutorial Daring Springerlink oleh Perpustakaan Universitas Pendidikan Indonesia
                  </p>
                </div>
              </CardBody>
              <CardFooter>
                <a href="https://anchor.fm/perpustakaan-upi/episodes/Pelaksanaan-Tutorial-Daring-Springer-oleh-Perpustakaan-UPI-equum1" target="_blank" rel="noreferrer">
                  <Button>Click here</Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="border-b-8 border-b-redPrimary">
              <CardBody>
                <NewspaperIcon className="w-12 h-12" />

                <div>
                  <h3 className="font-bold">
                    eBook
                  </h3>
                  <p className="font-medium">
                    Data berupa pdf, ppt dll untuk kebutuhan pemustaka Perpustakaan Universitas Pendidikan Indonesia
                  </p>
                </div>
              </CardBody>
              <CardFooter>
                <a href="http://perpustakaan.upi.edu/download" target="_blank" rel="noreferrer">
                  <Button>Click here</Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Panduan melakukan penelitian */}
        <section className="mb-2">
          <div>
            <h2 className="text-5xl font-bold text-center mb-4">Panduan Melakukan Penelitian</h2>
            <p className="w-1/2 text-center mx-auto">Topik bahasan meliputi penggunaan tools sage methode research dalam penelitian seperti penentuan topik penelitian, menentukan metode dan Teknik analisis penelitian</p>
          </div>
          <div className="imageGroup mx-auto">
            <div>
              <img decoding="async" width="1280" height="720" src="http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Panduan-SRM.png" className="mx-auto rounded-lg" alt="" loading="lazy" srcset="http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Panduan-SRM.png 1280w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Panduan-SRM-300x169.png 300w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Panduan-SRM-1024x576.png 1024w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Panduan-SRM-768x432.png 768w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Panduan-SRM-610x343.png 610w" sizes="(max-width: 1280px) 100vw, 1280px" />
            </div>
          </div>


          {/* Card */}
          <div className="grid mt-4 gap-4 grid-cols-2">
            <Card className="border-b-8 border-b-redPrimary">
              <CardBody>
                <NewspaperIcon className="w-12 h-12" />

                <div>
                  <h3 className="font-bold">
                    SORA SAGE Research Method
                  </h3>
                  <p className="font-medium">
                    Audio Panduan Daring SAGE Research Method (SRM) oleh Perpustakaan UPI
                  </p>
                </div>
              </CardBody>
              <CardFooter>
                <a href="https://anchor.fm/perpustakaan-upi/episodes/Pelaksanaan-Tutorial-Daring-SAGE-Research-Methods-ei3coa" target="_blank" rel="noreferrer">
                  <Button>Click here</Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="border-b-8 border-b-redPrimary">
              <CardBody>
                <NewspaperIcon className="w-12 h-12" />
                <div>
                  <h3 className="font-bold">
                    Materi SRM
                  </h3>
                  <p className="font-medium">
                    Materi persentasi SAGE Research Method (SRM) oleh Perpustakaan UPI
                  </p>
                </div>
              </CardBody>
              <CardFooter>
                <a href="https://anchor.fm/perpustakaan-upi/episodes/Pelaksanaan-Tutorial-Daring-Springer-oleh-Perpustakaan-UPI-equum1" target="_blank" rel="noreferrer">
                  <Button>Click here</Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Tutorial Plagiarism */}
        <section className="mb-2">
          <div>
            <h2 className="text-5xl font-bold text-center mb-4">Tutorial Plagiarsm Checker (Turnitin)</h2>
            <p className="w-1/2 text-center mx-auto">Topik bahasan meliputi tatacara dan analisis pengecekan similarity sebuah karya ilmiah secara online menggunakan Turnitin</p>
          </div>
          <div className="imageGroup mx-auto">
            <div>
              <img decoding="async" width="1280" height="720" src="http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Tutorial-daring-turnitin-untuk-dosen.png" className="mx-auto rounded-lg" alt="" loading="lazy" srcset="http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Tutorial-daring-turnitin-untuk-dosen.png 1280w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Tutorial-daring-turnitin-untuk-dosen-300x169.png 300w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Tutorial-daring-turnitin-untuk-dosen-1024x576.png 1024w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Tutorial-daring-turnitin-untuk-dosen-768x432.png 768w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Tutorial-daring-turnitin-untuk-dosen-610x343.png 610w" sizes="(max-width: 1280px) 100vw, 1280px" />
            </div>
          </div>


          {/* Card */}
          <div className="grid mt-4 gap-4 grid-cols-2">
            <Card className="border-b-8 border-b-redPrimary">
              <CardBody>
                <NewspaperIcon className="w-12 h-12" />

                <div>
                  <h3 className="font-bold">
                    SORA Turnitin
                  </h3>
                  <p className="font-medium">
                    Audio Panduan Daring Turnitin oleh Perpustakaan UPI
                  </p>
                </div>
              </CardBody>
              <CardFooter>
                <a href="https://anchor.fm/perpustakaan-upi/episodes/Pelaksanaan-Tutorial-Daring-Turnitin-ei3cu1" target="_blank" rel="noreferrer">
                  <Button>Click here</Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="border-b-8 border-b-redPrimary">
              <CardBody>
                <NewspaperIcon className="w-12 h-12" />
                <div>
                  <h3 className="font-bold">
                    Panduan Turnitin
                  </h3>
                  <p className="font-medium">
                    Panduan Turnitin untuk Dosen dan Instruktur
                  </p>
                </div>
              </CardBody>
              <CardFooter>
                <a href="http://perpustakaan.upi.edu/tutorturnitin" target="_blank" rel="noreferrer">
                  <span className="elementor-button-text">Click here</span>

                </a>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Layanan Mahasiswa Tingkat akhir  */}
        <section className="mb-2">
          <div>
            <h2 className="text-5xl font-bold text-center mb-4">Layanan Mahasiswa Tingkat Akhir</h2>
            <p className="w-1/2 text-center mx-auto">Topik bahasan meliputi semua layanan perpustakaan yang berhubungan dengan mahasiswa tingkat akhir, seperti layanan bebas pinjam dan sistem unggah mandiri tugas akhir mahasiswa</p>
          </div>
          <div className="imageGroup mx-auto">
            <div>
              <img decoding="async" width="1280" height="720" src="http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Layanan-Mahasiswa-Tingkat-Akhir.png" className="mx-auto rounded-lg" alt="" loading="lazy" srcset="http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Layanan-Mahasiswa-Tingkat-Akhir.png 1280w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Layanan-Mahasiswa-Tingkat-Akhir-300x169.png 300w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Layanan-Mahasiswa-Tingkat-Akhir-1024x576.png 1024w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Layanan-Mahasiswa-Tingkat-Akhir-768x432.png 768w, http://perpustakaan.upi.edu/wp-content/uploads/2021/02/Layanan-Mahasiswa-Tingkat-Akhir-610x343.png 610w" sizes="(max-width: 1280px) 100vw, 1280px" />
            </div>
          </div>


          {/* Card */}
          <div className="grid mt-4 gap-4 grid-cols-2">
            <Card className="border-b-8 border-b-redPrimary">
              <CardBody>
                <NewspaperIcon className="w-12 h-12" />

                <div>
                  <h3 className="font-bold">
                    SORA Layanan Daring
                  </h3>
                  <p className="font-medium">
                    Audio Panduan Daring Layanan Perpustaan UPI untuk mahasiswa tingkat Akhir
                  </p>
                </div>
              </CardBody>
              <CardFooter>
                <a href="https://anchor.fm/perpustakaan-upi/episodes/Sosialisasi-Layanan-untuk-Mahasiswa-Tingkat-akhir-ei46hk" target="_blank" rel="noreferrer">
                  <Button>Click here</Button>
                </a>
              </CardFooter>
            </Card>

            <Card className="border-b-8 border-b-redPrimary">
              <CardBody>
                <NewspaperIcon className="w-12 h-12" />
                <div>
                  <h3 className="font-bold">
                    Panduan Unggah Mandiri
                  </h3>
                  <p className="font-medium">
                    Panduan untuk melakukan unggah mandiri ke SUMa (sistem unggah mandiri) Perpustakaan UPI
                  </p>
                </div>
              </CardBody>
              <CardFooter>
                <a href="http://perpustakaan.upi.edu/suma" target="_blank" rel="noreferrer">
                  <Button>Click here</Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>


    </body >
  );
}
