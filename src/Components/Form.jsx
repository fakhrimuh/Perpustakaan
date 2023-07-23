import {
  Input,
  Button,
  Typography,
  Select,
  Option,
  Card,
  CardBody,
} from "@material-tailwind/react";

export default function BookForm() {
  return (
    <div className="m-4 ">
      <Card className="w-1/2 mx-auto text-creamSecondary bg-redPrimary">
        <Typography variant="h4" className="text-center mt-6">
          Form Usulan Buku
        </Typography>
        <Typography className="mt-1 mx-auto font-semibold text-justify w-3/4">
          Mohon rekomendasikan buku yang Anda perlukan dengan mengisi formulir
          yang telah kami siapkan. Kami menyambut usulan buku yang terkait
          dengan disiplin ilmu program studi di UPI maupun buku dengan cakupan
          yang lebih umum. Terima kasih atas partisipasi dan kontribusi Anda
        </Typography>

        <form className="mx-auto mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <CardBody className="bg-creamSecondary rounded-xl">
            <div className="mb-4 flex flex-col gap-6">
              <Input size="lg" label="Nama Lengkap" required />
              <Input size="lg" label="NIM" required />
              <Select label="Pilih Fakultas " required>
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
              <Input type="lg" size="lg" label="Email" required />
              <Input type="lg" size="lg" label="No HP/Whatsapp" required />
              <Input type="lg" size="lg" label="Judul" required />
              <Input type="lg" size="lg" label="Pengarang" required />
              <Input type="lg" size="lg" label="Penerbit" required />
              <Input type="lg" size="lg" label="Harga Buku" required />
              <Input type="lg" size="lg" label="Catatan/Pesan" required />
            </div>
          </CardBody>

          <div className="text-center">
            <Button className="my-6 border-2 border-creamSecondary hover:bg-creamSecondary hover:text-redPrimary w-1/2 shadow-none text-creamSecondary hover:border-2-redPrimary bg-transparent">
              Usulkan
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
