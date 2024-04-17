import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./StartingPagesRoutes/Home";
import Layout from "./Layout/StartingPageLayout";
import NotFound from "./NotFound";
import SignUpEndUser from "./StartingPagesRoutes/SignUpEndUser";
import BusinessSignUp from "./StartingPagesRoutes/BusinessSignUp";
import Login from "./StartingPagesRoutes/Login";
import CongratulationsSection from "./StartingPagesRoutes/SignUpStepsBusiness/CongratulationSection";
import VerificationSection from "./StartingPagesRoutes/SignUpStepsBusiness/VerificationSection";
import BusinessUserRoutes from "./BusinessUserRoutes/index.jsx";
import EndUserRoutes from "./EndUserRoutes/index.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/private-signup" element={<SignUpEndUser />} />
          <Route path="/business-signup" element={<BusinessSignUp />} />
          <Route path="/business-signup/congratulations" element={<CongratulationsSection />} />
          <Route path="/business-signup/verification" element={<VerificationSection />} />

          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="/business" element={<BusinessUserRoutes />} />
        <Route path="/user" element={<EndUserRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
