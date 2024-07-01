import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Graphicdesign from "./pages/Graphic_design";
import Home from "./pages/Home";
// import Websitedesign from "./pages/Website_design";
// import Appdesign from "./pages/App_design";
import ViewPortfolioPage from "./components/View_Portfolio_Page";
import DesignPage from "./components/Design_Page";
import MenuNavigations from "./components/Menu_Navigations";
import UiuxMenuPage from "./components/Ui_ux_Menu_Page";
import SociamediadesignPage from "./components/Social_media_design_Page";
import SocialmediaBranding from "./components/Socialmedia_Branding";
import Consultation from "./pages/Consultation";
import ScrollToTop from "./context/ScrollToTop";
import { useEffect } from "react";
import Services from "./pages/Services";
function App() {

  // useEffect(() => {
  //   const handleContextMenu = (event) => {
  //     if (event.target.tagName === 'IMG') {
  //       event.preventDefault();
  //     }
  //   };

  //   document.addEventListener('contextmenu', handleContextMenu);
  //   return () => {
  //     document.removeEventListener('contextmenu', handleContextMenu);
  //   };
  // }, []);

  useEffect(() => {
    let touchStartTime = 0;

    const handleContextMenu = (event) => {
      if (event.target.tagName === 'IMG') {
        event.preventDefault();
      }
    };

    const handleTouchStart = (event) => {
      if (event.target.tagName === 'IMG') {
        touchStartTime = new Date().getTime();
      }
    };

    const handleTouchEnd = (event) => {
      if (event.target.tagName === 'IMG') {
        const touchDuration = new Date().getTime() - touchStartTime;
        if (touchDuration > 500) { 
          event.preventDefault();
        }
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/viewportfolio" element={<ViewPortfolioPage />} />
          <Route path="/viewportfolio/:id" element={<DesignPage />} />
          <Route path="/designs" element={<MenuNavigations />} />
          <Route path="/designs/:id" element={<MenuNavigations />} />
          <Route path="/designs/:id/:designs" element={<UiuxMenuPage />} />
          <Route
            path="/social_media_designs"
            element={<SocialmediaBranding />}
          />
          <Route
            path="/social_media_designs/:id"
            element={<SociamediadesignPage />}
          />
          {/* <Route exact path="/Graphic_design" element={<Graphicdesign />} /> */}
          <Route exact path="/contacts" element={<Consultation />} />
          <Route exact path="/services" element={<Services />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
