import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Donate from "./pages/Donate";
import ContactUs from "./pages/ContactUs";
import DirectorshipPositions from "./pages/DirectorshipPositions";
import PastPresidents from "./pages/PastPresidents";
import NewsEventsPage from "./pages/NewsAndEvents";
import DetailPage from "./pages/NewsAndEventDetailPage";

// Community Service
import CommunityService from "./pages/projects/community-service/CommunityService";
import BloodDonation from "./pages/projects/community-service/BloodDonation";
import SanitaryPad from "./pages/projects/community-service/SanitaryPad";
import SchoolFeeding from "./pages/projects/community-service/SchoolFeeding";
import SchoolPainting from "./pages/projects/community-service/SchoolPainting";
import YewedekutinAnsu from "./pages/projects/community-service/YewedekutinAnsu";
import ExtendingLove from "./pages/projects/community-service/ExtendingLove";
import AddisHoliday from "./pages/projects/community-service/AddisHoliday";
import BlanketDonation from "./pages/projects/community-service/BlanketDonation";
import EyeVision from "./pages/projects/community-service/EyeVision";
import BranaProject from "./pages/projects/community-service/BranaProject";

// Professional Development
import ProfessionalDevelopment from "./pages/projects/professional-development/ProfessionalDevelopment";
import Activities from "./pages/projects/professional-development/Activities";
import FifteenMinuteGuest from "./pages/projects/professional-development/FifteenMinuteGuest";
import GuestSpeakers from "./pages/projects/professional-development/GuestSpeakers";
import Trainings from "./pages/projects/professional-development/Trainings";
import Visits from "./pages/projects/professional-development/Visits";

// Fellowship
import Fellowship from "./pages/projects/fellowship/Fellowship";
import Trips from "./pages/projects/fellowship/Trips";
import BuheFellowship from "./pages/projects/fellowship/BuheFellowship";
import CoffeeTime from "./pages/projects/fellowship/CoffeeTime";
import Sleepover from "./pages/projects/fellowship/Sleepover";
import IveAMessage from "./pages/projects/fellowship/IveAMessage";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AdminDashboard from "./Admin/Dashboard";
import Gallery from "./pages/Gallery";


export default function App() {
  const HomeLayout = () => {
    return (
      <>
        <NavBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    );
  };
  const AdminLayout = () => {
    return (
      <>
        <main>
          <Outlet />
        </main>
      </>
    );
  };
  return (
    <Router>
      <Routes>
      <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
        {/* Home Layout */}
        <Route element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/about" element={<About />}/>
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="/directorship-positions"
            element={<DirectorshipPositions />}
          />
          <Route path="/past-presidents" element={<PastPresidents />} />

          {/* News and Events */}
          <Route path="/events" element={<NewsEventsPage />} />
          <Route path="/news" element={<NewsEventsPage />} />
          <Route path="/news/:id" element={<DetailPage type="news" />} />
          <Route path="/events/:id" element={<DetailPage type="event" />} />
          <Route path="/gallery" element={<Gallery/>} />
          


          {/* Community Service */}
          <Route path="/community-service" element={<CommunityService />} />
          <Route
            path="/community-service/projectDetail/bloodDonation"
            element={<BloodDonation />}
          />
          <Route
            path="/community-service/projectDetail/sanitaryPadDonation"
            element={<SanitaryPad />}
          />
          <Route
            path="/community-service/projectDetail/schoolPainting"
            element={<SchoolPainting />}
          />
          <Route
            path="/community-service/projectDetail/schoolFeeding"
            element={<SchoolFeeding />}
          />
          <Route
            path="/community-service/projectDetail/yewedekutinAnsu"
            element={<YewedekutinAnsu />}
          />
          <Route
            path="/community-service/projectDetail/extendingLove"
            element={<ExtendingLove />}
          />
          <Route
            path="/community-service/projectDetail/addisHolidayLunch"
            element={<AddisHoliday />}
          />
          <Route
            path="/community-service/projectDetail/blanketDonation"
            element={<BlanketDonation />}
          />
          <Route
            path="/community-service/projectDetail/eyeVision"
            element={<EyeVision />}
          />
          <Route
            path="/community-service/projectDetail/branaProject"
            element={<BranaProject />}
          />

          {/* Professional Development */}
          <Route
            path="/professional-development"
            element={<ProfessionalDevelopment />}
          />
          <Route
            path="/professional-development/projectDetail/activities"
            element={<Activities />}
          />
          <Route
            path="/professional-development/projectDetail/fifteenMinuteGuest"
            element={<FifteenMinuteGuest />}
          />
          <Route
            path="/professional-development/projectDetail/guestSpeakers"
            element={<GuestSpeakers />}
          />
          <Route
            path="/professional-development/projectDetail/trainings"
            element={<Trainings />}
          />
          <Route
            path="/professional-development/projectDetail/visits"
            element={<Visits />}
          />

          {/* Fellowship */}
          <Route path="/fellowship" element={<Fellowship />} />
          <Route path="/fellowship/projectDetail/trips" element={<Trips />} />
          <Route
            path="/fellowship/projectDetail/coffeeTime"
            element={<CoffeeTime />}
          />
          <Route
            path="/fellowship/projectDetail/buheFellowship"
            element={<BuheFellowship />}
          />
          <Route
            path="/fellowship/projectDetail/sleepover"
            element={<Sleepover />}
          />
          <Route
            path="/fellowship/projectDetail/iHaveAMessage"
            element={<IveAMessage />}
          />
        </Route>
      </Routes>
    </Router>
  );
}
