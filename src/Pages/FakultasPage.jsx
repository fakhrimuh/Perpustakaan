import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Input,
    Button
} from "@material-tailwind/react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import { Link } from "react-router-dom";
import FakultasList from "../Components/FakultasList";

export default function FakultasPage() {
    const data = [
        {
            label: "S1",
            value: "s1",
            desc: [
                {
                    name: "Rekayasa Perangkat Lunak",
                    link: "/JurusanPage",
                    tingkat: "S1"
                },
                {
                    name: "PGSD",
                    link: "/a",
                    tingkat: "S1"
                },
                {
                    name: "PGPAUD",
                    link: "/a",
                    tingkat: "S1"
                },
                {
                    name: "Pendidikan Multimedia",
                    link: "/a",
                    tingkat: "S1"
                },
                {
                    name: "Teknik Komputer",
                    link: "/a",
                    tingkat: "S1"
                }
            ]
        },
        {
            label: "S2",
            value: "s2",
            desc: [
                {
                    name: "PGSD",
                    link: "/a",
                    tingkat: "S2"
                },

            ]
        },

    ];

    // Menggabungkan semua deskripsi dari data
    const allDescriptions = data.map(({ desc }) => desc).flat();

    return (
        <div>
            <div className="relative mb-28 h-[480px]">
                <img src="https://rpl.upi.edu/wp-content/uploads/2017/10/17.jpg" alt="Gambar" className="w-full h-[440px] object-cover" />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center mb-16">
                    <h1 className="text-4xl font-black text-creamSecondary">Kampus Cibiru</h1>
                </div>

                <div class="bg-redPrimary border-2 border-creamPrimary shadow-lg rounded-xl absolute inset-x-0 bottom-0 mt-20 text-center w-2/5 mx-auto p-4">
                    <div class="flex items-center mx-auto">
                        <Input
                            type="text"
                            placeholder="Kata Kunci"
                            className="!border-2 !border-creamSecondary font-semibold text-base bg-transparent text-creamSecondary placeholder:text-creamSecondary appearance-none w-full"
                            labelProps={{
                                className: "hidden",
                            }}
                        />
                        <Button
                            variant="outlined"
                            className="w-1/5 bg-creamSecondary text-redPrimary rounded-lg p-2 border-2 border-redPrimary text-sm font-semibold"
                        >
                            Cari
                        </Button>
                    </div>
                </div>
            </div>
            <div className="mb-28">
                <h2 className="text-center font-bold text-4xl text-redPrimary mb-16">Program Studi</h2>
                <Tabs value="all" className=" mx-auto">
                    <TabsHeader
                        className="bg-transparent font-bold mx-auto text-redPrimary max-w-[40rem]"
                        indicatorProps={{
                            className: "bg-creamPrimary shadow-none font-bold",
                        }}
                    >
                        {/* Menambahkan tab "All" */}
                        <Tab key="all" value="all" className="text-redPrimary font-bold hover:bg-creamPrimary rounded-lg">
                            All
                        </Tab>
                        {data.map(({ label, value }) => (
                            <Tab key={value} value={value} className="text-redPrimary font-bold hover:bg-creamPrimary rounded-lg">
                                {label}
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody>
                        {/* Menambahkan TabPanel untuk "All" */}
                        <TabPanel key="all" value="all">
                            <div className="flex w-max gap-4 mx-auto">
                                {allDescriptions.map((desc, index) => (
                                    <div key={index}>
                                        <Link to={desc.link}>
                                            <button className="bg-creamSecondary text-redPrimary rounded-lg p-2 border-2 border-redPrimary hover:bg-redPrimary hover:text-creamSecondary text-sm font-semibold"> {desc.name} - {desc.tingkat} </button>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </TabPanel>
                        {data.map(({ value, desc }) => (
                            <TabPanel key={value} value={value}>
                                <div className="flex w-max gap-4 mx-auto">
                                    {desc.map((item, index) => (
                                        <div key={index}>
                                            <Link to={item.link}>
                                                <button className="bg-creamSecondary text-redPrimary rounded-lg p-2 border-2 border-redPrimary hover:bg-redPrimary hover:text-creamSecondary text-sm font-semibold"> {item.name} - {item.tingkat} </button>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </div>
            <div className="mb-40">
                <FakultasList />
            </div>
        </div>
    );
}
