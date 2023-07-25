import { Link } from "react-router-dom";
import Row1 from "../Asset/Layanan Mandiri/1.jpg"
import Row2 from "../Asset/Layanan Mandiri/2.jpg"
import Row3 from "../Asset/Layanan Mandiri/3.jpg"
import Row4 from "../Asset/Layanan Mandiri/4.jpg"

export default function LayananMandiri() {
  return (
    <div className="w-5/6 bg-white rounded-lg my-4 mx-auto">
      <div className="my-4">
        <h1 className="w-11/12 mx-auto text-3xl my-2 font-bold text-redPrimary">
          Layanan Sirkulasi Mandiri
        </h1>
        <div className="font-medium text-redPrimary">
          <p className="w-11/12 text-justify mb-2 mx-auto">
            Perpustakaan Universitas Pendidikan Indonesia (UPI) telah menerapkan
            sistem layanan mandiri untuk layanan peminjaman, pengembalian dan
            perpanjangan koleksi sirkulasi. Berikut ilustrasi proses peminjaman
            dan pengembalian melalui <em>self borrowing machine</em> (MPS) dan
            Bookdrop.
          </p>
          <h2 className="text-xl text-center font-bold mb-2 mx-auto">
            Proses Peminjaman Melalui MPS
          </h2>
          <div>
            <img
              className="mx-auto"
              src={Row1}
              alt="tutorial-row-1"
              width="1024"
              height="421"
              srcset="http://perpustakaan.upi.edu/wp-content/uploads/2022/09/transaksi-sirkulasi-mandiri-01-1024x421.jpg 1024w, http://perpustakaan.upi.edu/wp-content/uploads/2022/09/transaksi-sirkulasi-mandiri-01-300x123.jpg 300w, http://perpustakaan.upi.edu/wp-content/uploads/2022/09/transaksi-sirkulasi-mandiri-01-768x316.jpg 768w, http://perpustakaan.upi.edu/wp-content/uploads/2022/09/transaksi-sirkulasi-mandiri-01-610x251.jpg 610w, http://perpustakaan.upi.edu/wp-content/uploads/2022/09/transaksi-sirkulasi-mandiri-01.jpg 1109w"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
          <p>
            <img
              className="mx-auto"
              src={Row2}
              alt=""
              width="1024"
              height="557"
              srcset="http://perpustakaan.upi.edu/wp-content/uploads/2022/09/transaksi-sirkulasi-mandiri-02-1024x557.jpg 1024w, http://perpustakaan.upi.edu/wp-content/uploads/2022/09/transaksi-sirkulasi-mandiri-02-300x163.jpg 300w, http://perpustakaan.upi.edu/wp-content/uploads/2022/09/transaksi-sirkulasi-mandiri-02-768x418.jpg 768w, http://perpustakaan.upi.edu/wp-content/uploads/2022/09/transaksi-sirkulasi-mandiri-02-610x332.jpg 610w, http://perpustakaan.upi.edu/wp-content/uploads/2022/09/transaksi-sirkulasi-mandiri-02.jpg 1108w"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </p>
          <h2 className="text-xl text-center font-bold mb-2 mx-auto">
            Contoh Transaksi yang Gagal
          </h2>
          <p>
            <img
              className="mx-auto"
              src={Row3}
              alt=""
              width="494"
              height="619"
              srcset="http://perpustakaan.upi.edu/wp-content/uploads/2018/10/transaksi-gagal.jpg 494w, http://perpustakaan.upi.edu/wp-content/uploads/2018/10/transaksi-gagal-239x300.jpg 239w"
              sizes="(max-width: 494px) 100vw, 494px"
            />
          </p>
          <p className="w-11/12 text-justify mb-2 mx-auto">
            Catatan: Jika saat proses transaksi peminjaman dan pengembalian
            terdapat
            <span className="font-bold"> tulisan berwarna merah </span>
            harap segera menghubungi petugas sirkulasi.
          </p>
          <h2 className="text-xl text-center font-bold mb-2 mx-auto">
            Proses Pengembalian Melalui Bookdrop
          </h2>
          <p className="w-11/12 text-justify mb-2 mx-auto">
            Bookdrop memiliki fungsi khusus untuk memproses semua pengembalian
            buku dengan status terlambat maupun tidak secara mandiri.
            Penyelesaian sanksi indisipliner untuk buku yang terlambat dapat
            dilakukan saat pemustaka berkunjung kembali ke perpustakaan. Berikut
            ilustrasi proses pengembalian melalui Bookdrop.
          </p>
          <p>
            <img
              className="mx-auto"
              src={Row4}
              alt=""
              width="559"
              height="618"
              srcset="http://perpustakaan.upi.edu/wp-content/uploads/2020/03/tutorial-bookdrop.jpg 559w, http://perpustakaan.upi.edu/wp-content/uploads/2020/03/tutorial-bookdrop-271x300.jpg 271w"
              sizes="(max-width: 559px) 100vw, 559px"
            />
          </p>
          <div className="w-11/12 text-justify mb-2 mx-auto">
            Resi transaksi pengembalian buku melalui Bookdrop saat ini tidak
            berfungsi, jika ada buku yang tidak terdeteksi/gagal akan dilakukan
            pengembalian secara manual oleh petugas. Silahkan cek kembali status
            buku melalui cek pinjaman buku online setelah 1x24 jam di
            <Link to="/cekpeminjaman">
              <span className="underline">Cek Pinjam Buku</span>
            </Link>
            . Terima kasih
          </div>
        </div>
      </div>
    </div>
  );
}
