import { Tooltip } from "@material-tailwind/react";
import React, { useState } from "react";

// Import image Local E-journal
import SageJournals from "../Asset/Tabs/E-Journal/Sage Journals.png";
import SageResearch from "../Asset/Tabs/E-Journal/Sage research Method.png";
import Cambridge from "../Asset/Tabs/E-Journal/Cambridge.png";
import Upi from "../Asset/Tabs/E-Journal/UPI.png";

//Import image local E- Books
import SageKnowledge from "../Asset/Tabs/E-Books/Sage Knowledge.png";
import Anmol from "../Asset/Tabs/E-Books/Anmol Publication.png";
import Emerald from "../Asset/Tabs/E-Books/Emerald.png";
import Ieee from "../Asset/Tabs/E-Books/IEEE.png";
import Springer from "../Asset/Tabs/E-Books/Springer.png";
import Oxford from "../Asset/Tabs/E-Books/Oxford.png";
import IgPublishing from "../Asset/Tabs/E-Books/image 1.png";
import MathSolution from "../Asset/Tabs/E-Books/Mathsolution.png";

// import Links partner
import Ipusnas from "../Asset/Tabs/Links Partner/Ipusnas.png";
import Sinta from "../Asset/Tabs/Links Partner/Sinta.png";
import Garuda from "../Asset/Tabs/Links Partner/Garuda Jurnal.png";
import Rama from "../Asset/Tabs/Links Partner/Rama Repo.png";
import OneSearch from "../Asset/Tabs/Links Partner/Indonesia onesearch.png";
import BankIndonesia from "../Asset/Tabs/Links Partner/Bank Indonesia.png";

const Tab = ({ label, activeTab, onClick }) => {
  const isActive = activeTab === label;

  return (
    <button
      className={`relative p-4 rounded-t-lg font-bold text-2xl ${
        isActive ? "text-redPrimary" : "text-gray-700"
      }`}
      onClick={() => onClick(label)}
    >
      {label}
      <div
        className={`absolute bottom-0 left-0 h-0.5 w-full bg-redPrimary transform-gpu transition-transform ${
          isActive ? "scale-x-100" : "scale-x-0"
        }`}
      ></div>
    </button>
  );
};

const Tabs = ({ tabs, defaultActiveTab, content }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  return (
    <div>
      <div className="mx-auto">
        {tabs.map((tab) => (
          <Tab
            key={tab}
            label={tab}
            activeTab={activeTab}
            onClick={handleTabClick}
            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          />
        ))}
      </div>
      <div className="mt-4 text-center mx-4 content-center grid xl:grid-cols-3  md:grid-cols-2">
        {content[activeTab].map((item) => (
          <Tooltip content={item.altText}>
            <img
              key={item.id}
              src={item.imageUrl}
              alt={item.altText}
              className="w-10/12 mb-2 bg-white cursor-pointer"
            />
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

const PartnerTab = () => {
  const tabs = ["E-Journal", "E-Books", "Links Partner"];

  const content = {
    "E-Journal": [
      {
        id: 1,
        imageUrl: SageJournals,
        altText: "Sage Journals",
      },
      {
        id: 2,
        imageUrl: SageResearch,
        altText: "Sage Research Method",
      },
      {
        id: 3,
        imageUrl: Emerald,
        altText: "Emerald Publishing",
      },
      {
        id: 4,
        imageUrl: Springer,
        altText: "Springer",
      },
      {
        id: 5,
        imageUrl: Oxford,
        altText: "Oxford Academic",
      },
      {
        id: 6,
        imageUrl: Cambridge,
        altText: "Cambridge University",
      },
      { id: 7, imageUrl: Upi, altText: "UPI" },
    ],
    "E-Books": [
      {
        id: 8,
        imageUrl: IgPublishing,
        altText: "IG Publishing",
      },
      {
        id: 9,
        imageUrl: Anmol,
        altText: "Anmol Publications",
      },
      {
        id: 10,
        imageUrl: Emerald,
        altText: "Emerald publishing",
      },
      {
        id: 11,
        imageUrl: Springer,
        altText: "Springer",
      },
      {
        id: 12,
        imageUrl: Oxford,
        altText: "Oxford",
      },
      {
        id: 13,
        imageUrl: MathSolution,
        altText: "Math Solutions",
      },
      {
        id: 14,
        imageUrl: Ieee,
        altText: "IEEE",
      },
      {
        id: 15,
        imageUrl: SageKnowledge,
        altText: "Sage Knowledge",
      },
    ],
    "Links Partner": [
      {
        id: 16,
        imageUrl: Ipusnas,
        altText: "IPusnas",
      },
      {
        id: 17,
        imageUrl: Sinta,
        altText: "Sinta",
      },
      {
        id: 18,
        imageUrl: Garuda,
        altText: "Garuda",
      },
      {
        id: 19,
        imageUrl: Rama,
        altText: "Rama repository",
      },
      {
        id: 20,
        imageUrl: OneSearch,
        altText: "One Search",
      },
      {
        id: 21,
        imageUrl: BankIndonesia,
        altText: "Bank Indonesia",
      },
    ],
  };

  return (
    <div className="container mx-auto py-8">
      <Tabs tabs={tabs} defaultActiveTab={tabs[0]} content={content} />
    </div>
  );
};

export default PartnerTab;
