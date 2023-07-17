import {
  Input,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";

export default function BookForm() {
  return (
    <div className=" text-redPrimary">
      <Typography variant="h4" className="text-center">
        Form Usulan Buku
      </Typography>
      <Typography className="mt-1 mx-auto font-normal text-justify w-1/2">
        Mohon rekomendasikan buku yang Anda perlukan dengan mengisi formulir
        yang telah kami siapkan. Kami menyambut usulan buku yang terkait dengan
        disiplin ilmu program studi di UPI maupun buku dengan cakupan yang lebih
        umum. Terima kasih atas partisipasi dan kontribusi Anda
      </Typography>
      <form className="mx-auto mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Nama Lengkap" required />
          <Input size="lg" label="NIM" />
          <Select label="Pilih Fakultas">
            <Option>FIP</Option>
            <Option>FPMIPA</Option>
            <Option>FPIPS</Option>
            <Option>FPBS</Option>
            <Option>FPTK</Option>
            <Option>FPOK</Option>
            <Option>FPEB</Option>
            <Option>FPSD</Option>
            <Option>SPS</Option>
            <Option>KD CIBIRU</Option>
            <Option>KD SUMEDANG</Option>
            <Option>KD TASIKMALAYA</Option>
            <Option>KD PURWAKARTA</Option>
            <Option>KD SERANG</Option>
          </Select>
          <Input type="lg" size="lg" label="Email" />
          <Input type="lg" size="lg" label="No HP/Whatsapp" />
          <Input type="lg" size="lg" label="Judul" />
          <Input type="lg" size="lg" label="Pengarang" />
          <Input type="lg" size="lg" label="Penerbit" />
          <Input type="lg" size="lg" label="Harga Buku" />
          <Input type="lg" size="lg" label="Catatan/Pesan" />
        </div>

        <div className="text-center">
          <Button className="mt-6 border-2 border-redPrimary hover:bg-creamSecondary hover:text-redPrimary w-1/2 shadow-none text-creamSecondary hover:border-2-redPrimary bg-redPrimary">
            Usulkan
          </Button>
        </div>
      </form>
    </div>
  );
}
