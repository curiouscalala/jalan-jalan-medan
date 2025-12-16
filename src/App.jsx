import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ProfilePage from "./pages/ProfilePage"
import PreviousBooking from "./pages/PreviousBooking"
import FutureBooking from "./pages/FutureBooking"
import TermsAndCondition from "./pages/TermsAndCondition"
import { AuthProvider } from "./components/AuthProvider"
import AuthPage from "./pages/AuthPage"

export default function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Home />} />
            <Route path="/previousBooking" element={<PreviousBooking />} />
            <Route path="/futureBooking" element={<FutureBooking />} />
            <Route path="/termsAndCondition" element={<TermsAndCondition />} />
            <Route path="/authPage" element={<AuthPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>

  )
}