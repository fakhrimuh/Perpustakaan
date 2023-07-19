import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Homepage';
import HomeFooter from './Components/Footer';
import HeaderNavbar from './Components/Navbar';
import NewBookPage from './Pages/NewBook';
import PeminjamanPage from './Pages/Peminjaman';
import EJournalPage from './Pages/EJournalPage';

function App() {
  return (
    <div className="bg-creamSecondary">
      <HeaderNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/usulanbuku" element={<NewBookPage />} />
        <Route path="/cekpeminjaman" element={<PeminjamanPage />} />
        <Route path="/E-Journal" element={<EJournalPage />} />
      </Routes>
      <HomeFooter />
    </div>
  );
}

export default App;
