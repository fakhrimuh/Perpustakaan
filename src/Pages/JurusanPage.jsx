import { Input, Typography, Card, CardHeader, CardBody, Button } from '@material-tailwind/react';
import FakultasList from '../Components/FakultasList';

export default function JurusanPage() {
  return (
    <div className="text-center mt-[110px]">
      {/* Title and Search bar */}
      <div className="mt-28">
        <h1 className="text-3xl font-extrabold text-redPrimary mb-6">Rekayasa Perangkat Lunak</h1>
        <div>
          <div className="w-1/2 mx-auto mb-16 bg-redPrimary border-solid border-2 border-creamSecondary py-4 px-8 rounded-lg">
            <div className="flex gap-2 ">
              <Input
                type="text"
                placeholder="Kata Kunci"
                // icon={<MagnifyingGlassIcon className="h-5 w-5 text-creamSecondary" />}
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
                className="!border-2 !border-creamSecondary  text-creamSecondary  placeholder-creamSecondary"
                labelProps={{
                  className: 'hidden',
                }}
              />
              <button className="bg-creamSecondary font-semibold text-redPrimary border-2 px-6 rounded-lg hover:bg-redPrimary hover:text-creamSecondary"> Cari </button>
            </div>
            <div className="bg-creamSecondary w-1/3 mt-3 rounded-md">
              <Typography className="text-redPrimary font-semibold text-sm my-2">Rekayasa Perangkat Lunak</Typography>
            </div>
          </div>
        </div>
      </div>

      <body className="container">
        <Card className="w-1/4 flex-row">
          <CardHeader shadow={false} floated={false} className="m-0 w-1/5 shrink-0 rounded-r-none">
            <div className="bg-redPrimary rounded-lg w-10 h-10 py-2 mt-10 mx-auto">
              <Typography className="text-creamSecondary  ">1</Typography>
            </div>
          </CardHeader>
          <CardBody>
            <Typography variant="h6" color="gray" className="mb-4 uppercase">
              startups
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Lyft launching cross-platform service this week
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
              Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story
            </Typography>
            <a href="#" className="inline-block">
              <Button variant="text" className="flex items-center gap-2">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Button>
            </a>
          </CardBody>
        </Card>
      </body>

      <div>
        <FakultasList />
      </div>
    </div>
  );
}
