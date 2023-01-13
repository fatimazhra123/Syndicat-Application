import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import {
  LoginPage,
} from './pages/auth/indexAuth'
import {
  HomePage,
  AppartementsPage,
  ClientsPage,
  PaiementsPage,
  ReglagesPage, 
} from './pages/dashboard/indexDashboard'
import Layout from './components/dashboard/shared/Layout';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path="dashboard/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="appartement" element={<AppartementsPage />} />
          <Route path="client" element={<ClientsPage />} />
          <Route path="paiement" element={<PaiementsPage />} />
          <Route path="reglage" element={<ReglagesPage />} />
        
        </Route>
      </Routes>


{/* 

      <Routes>
        <Route path='/' element={<LoginPage />} />

        // Syndicat url = admin Dash Component
        <Route element={<RequireAuth Roles={["Syndicat"]} />}>
        <Route path="dashboard/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="appartement" element={<AppartementsPage />} />
          <Route path="client" element={<ClientsPage />} />
          <Route path="paiement" element={<PaiementsPage />} />
          <Route path="reglage" element={<ReglagesPage />} />
          <Route path="updateAppartement/:id" element={<UpdateAppartement />} />
          <Route path="updateClient/:id" element={<UpdateClient />} />
        </Route>
        </Route>

        

  
      </Routes> */}
    </div>
  );
}

export default App;
