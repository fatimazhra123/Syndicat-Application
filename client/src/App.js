import './styles/App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
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
import UpdateAppartement from './pages/updatte/updatteAppartement'
import UpdateClient from './pages/updatte/updateClient'
import RequireAuth from './utils/RequireAuth';
import { UserProvider } from './userContext/UserContext';



function App() {
  return (
    <>
   <UserProvider> 
      <Router>

        <Routes>
          <Route path='/' element={<LoginPage />} />

        // Syndicat url = admin Dash Component
          <Route element={<RequireAuth />}>
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
        </Routes>
      </Router>
   </UserProvider> 
    </>
  );
}

export default App;
