import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import HomeFooter from "./Components/Footer";
import HeaderNavbar from "./Components/Navbar";
import NewBookPage from "./Pages/NewBook";
import PeminjamanPage from "./Pages/Peminjaman";
import EJournalPage from "./Pages/EJournalPage";
import Kalista from "./Pages/Kalista";
import OpacPage from "./Pages/OpacPage";
import Upiana from "./Pages/UpianaPage";
import DigitalRepositary from "./Pages/DigitalRepoPage";

function App() {
  return (
    <div className="bg-creamSecondary">
      <HeaderNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/usulanbuku" element={<NewBookPage />} />
        <Route path="/cekpeminjaman" element={<PeminjamanPage />} />
        <Route path="/E-Journal" element={<EJournalPage />} />
        <Route path="/Upiana" element={<Upiana />} />
        <Route path="/Opac" element={<OpacPage />} />
        <Route path="/Kalista" element={<Kalista />} />
        <Route path="/DigitalRepository" element={<DigitalRepositary />} />
      </Routes>
      <HomeFooter />
    </div>
  );
}

export default App;
