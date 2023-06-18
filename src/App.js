import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Accessibility from "./Components/Common/Accessibility";
import BangladeshGovWebsite from "./Components/Common/BangladeshGovWebsite";
import EducationBCC from "./Components/Common/EducationBCC";
import ExamInfo from "./Components/Common/ExamInfo";
import FAQs from "./Components/Common/FAQs";
import Feedback from "./Components/Common/Feedback";
import FormsofBangladeshGov from "./Components/Common/FormsofBangladeshGov";
import Members from "./Components/Common/Members";
import PrivacyPolicy from "./Components/Common/PrivacyPolicy";
import Sitemap from "./Components/Common/Sitemap";
import TermsofService from "./Components/Common/TermsofService";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/education-board-computer-center"
            element={<EducationBCC />}
          />
          <Route path="/exam-info-bank" element={<ExamInfo />} />
          <Route path="/site-map" element={<Sitemap />} />
          <Route
            path="/bangladesh-gov-website"
            element={<BangladeshGovWebsite />}
          />
          <Route path="/members" element={<Members />} />
          <Route
            path="/forms-of-bangladesh-gov"
            element={<FormsofBangladeshGov />}
          />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/terms-of-service" element={<TermsofService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/accissibillity" element={<Accessibility />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
