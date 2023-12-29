import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    // Button,
} from "@material-tailwind/react";
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
            <div className="mt-20">
                <FakultasList />
            </div>
        </div>
    );
}
