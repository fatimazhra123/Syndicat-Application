import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import {
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
  ForgetPasswordPage,
} from './pages/auth/indexAuth'
import {
  HomePage,
  AppartementsPage,
  ClientsPage,
  ImmeublesPage,
  MessagesPage,
  PaiementsPage,
  ReglagesPage, 
} from './pages/dashboard/indexDashboard'
import Layout from './components/dashboard/shared/Layout';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='resetpassword' element={<ResetPasswordPage />} />
        <Route path='forgetpassword' element={<ForgetPasswordPage />} />
        <Route path="dashboard/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="appartement" element={<AppartementsPage />} />
          <Route path="client" element={<ClientsPage />} />
          <Route path="immeuble" element={<ImmeublesPage />} />
          <Route path="message" element={<MessagesPage />} />
          <Route path="paiement" element={<PaiementsPage />} />
          <Route path="reglage" element={<ReglagesPage />} />
        
        </Route>
      </Routes>
    </div>
  );
}

export default App;
