import React, { useState } from 'react';
import { Input, Button, Card, CardBody, Typography } from '@material-tailwind/react';
import { MagnifyingGlassIcon, ExclamationCircleIcon, BookOpenIcon } from '@heroicons/react/24/solid';

const TABLE_HEAD = ['No', 'Judul', 'Tanggal Peminjaman', 'Tanggal Pengembalian'];

const TABLE_DATA = {
  1234567: {
    nama: 'John Doe',
    data: [
      {
        judul: 'Menjadi Guru Hebat Di Era Revolusi Industri 4.0',
        peminjaman: '23/04/23',
        pengembalian: '27/04/23',
      },
      {
        judul: 'Daring Duraring Belajar dari Rumah',
        peminjaman: '23/05/24',
        pengembalian: '28/05/24',
      },
      {
        judul: 'Mindset: The New Psychology of Success',
        peminjaman: '23/05/24',
        pengembalian: '28/05/24',
      },
    ],
  },
  7654321: {
    nama: 'Sumardi',
    data: [
      {
        judul: 'Sapiens: A Brief History of Humankind',
        peminjaman: '23/04/23',
        pengembalian: '27/04/23',
      },
      {
        judul: 'The Power of Habit: Why We Do What We Do in Life and Business',
        peminjaman: '23/05/24',
        pengembalian: '28/05/24',
      },
    ],
  },
  3217654: {
    nama: 'Sucipto',
    data: [], // Data kosong
  },
};

export default function PeminjamanPage() {
  const [searched, setSearched] = useState(false);
  const [nim, setNim] = useState('');
  const [error, setError] = useState('');
  const [tableData, setTableData] = useState(null);

  const handleNimChange = (e) => {
    setNim(e.target.value);
  };

  const handleCekButtonClick = () => {
    setError('');

    if (!TABLE_DATA[nim]) {
      setError('NIM tidak ditemukan');
      setTableData(null);
      return;
    }

    setSearched(true);
    setTableData(TABLE_DATA[nim]);
  };

  return (
    <div className="mt-[110px]">
      <div className="text-center text-redPrimary my-4">
        <h1 className="font-bold text-4xl mb-12">Cek Peminjaman</h1>
        <div className="w-1/2 mb-10 flex items-center mx-auto">
          <Input
            type="number"
            placeholder="Masukkan NIM"
            icon={<MagnifyingGlassIcon className="text-redPrimary font-bold" />}
            className="!border-2 !border-redPrimary font-semibold text-base bg-transparent text-redPrimary  placeholder:text-redPrimary appearance-none"
            labelProps={{
              className: 'hidden',
            }}
            containerProps={{ className: 'min-w-[100px]' }}
            value={nim}
            onChange={handleNimChange}
          />

          <Button variant="outlined" className="w-1/4 mx-2 bg-creamSecondary text-redPrimary rounded-lg p-2 border-2 border-redPrimary hover:bg-redPrimary hover:text-creamSecondary text-sm font-semibold" onClick={handleCekButtonClick}>
            Cek
          </Button>
        </div>
        <div className="text-center">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeo8aSUy1UcQYsd3PxLZsAbMWejKXIkQFviQYWnHzs-FT1rCA/viewform" className="underline font-semibold text-base" target="_blank" rel="noreferrer">
            form surat bebas pustaka
          </a>
        </div>
      </div>

      {searched && !error && tableData && (
        <Card className="my-6 mx-auto w-1/2 border-2 bg-transparent border-redPrimary">
          <CardBody>
            {tableData.data.length > 0 ? (
              <div className="overflow-x-auto">
                <Typography className="font-semibold text-lg text-redPrimary mb-4">{tableData.nama}</Typography>
                <table className="w-full min-w-max bg-creamSecondary border-2 border-redPrimary table-auto text-black text-left shadow-lg">
                  <thead>
                    <tr>
                      {TABLE_HEAD.map((head) => (
                        <th key={head} className="border-b bg-redPrimary border-redPrimary p-4">
                          <Typography className="font-bold text-creamSecondary text-center leading-none">{head}</Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.data.map(({ judul, peminjaman, pengembalian }, index) => {
                      const isLast = index === tableData.data.length - 1;
                      const classes = isLast ? 'p-4' : 'p-4 border-b-2 border-redPrimary';

                      return (
                        <tr key={index + 1} className="odd:bg-creamPrimary">
                          <td className={classes}>
                            <Typography className="font-semibold text-base">{index + 1}</Typography>
                          </td>
                          <td className={classes}>
                            <Typography className="font-semibold text-base w-60">{judul}</Typography>
                          </td>
                          <td className={`${classes} w-24`}>
                            <Typography className="font-semibold text-center text-base">{peminjaman}</Typography>
                          </td>
                          <td className={`${classes} w-24`}>
                            <Typography className="font-semibold text-center text-base">{pengembalian}</Typography>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div>
                <Typography className="font-semibold text-lg text-redPrimary mb-2">{tableData.nama}</Typography>
                <div>
                  <BookOpenIcon className="w-28 h-28 mx-auto text-redPrimary" />
                  <Typography className="text-redPrimary text-base text-center font-bold my-6">Tidak ada data peminjaman</Typography>
                </div>
              </div>
            )}
          </CardBody>
        </Card>
      )}

      {error && (
        <Card className="my-6 mx-auto w-1/2 bg-transparent shadow-md border-2 border-redPrimary">
          <CardBody className="text-center">
            <ExclamationCircleIcon className="w-28 h-28 mx-auto text-redPrimary" />
            <Typography className="text-redPrimary text-base font-bold my-6">{error}</Typography>
          </CardBody>
        </Card>
      )}
    </div>
  );
}
