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
import ProjectPage from "./pages/projects/ProjectPage"; // Adjust the path if necessary

// Projects
import CommunityService from "./pages/projects/community-service/CommunityService";
import ProfessionalDevelopment from "./pages/projects/professional-development/ProfessionalDevelopment";
import Fellowship from "./pages/projects/fellowship/Fellowship";

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
          <Route path="/about" element={<About />} />
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

          {/* Gallery */}
          <Route path="/gallery" element={<Gallery />} />
          
          {/* Projects */}
          <Route path="/community-service" element={<CommunityService />} />
          <Route path="/professional-development" element={<ProfessionalDevelopment />}/>
          <Route path="/fellowship" element={<Fellowship />} />

          {/* Project Details */}
          <Route path="/community-service/projectDetail/:id" element={<ProjectPage />}/>
          <Route path="/professional-development/projectDetail/:id"element={<ProjectPage />}/>
          <Route path="/fellowship/projectDetail/:id" element={<ProjectPage />}/>
        </Route>
      </Routes>
    </Router>
  );
}
