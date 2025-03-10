// src/App.js
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurProgram from "./pages/OurProgram";
import Skyshare from "./pages/Talent";
import Mentor from "./pages/Mentor";
import Parents from "./pages/Parents";
import Article from "./pages/Article";
import TalentActivity from "./pages/TalentActivity";
import ParentsActivity from "./pages/ParentsActivity";
import MentorActivity from "./pages/MentorActivity";
import ContactUs from "./pages/ContactUs";
import ArticleOpennedPage from "./pages/ArticleOpennedPage";
import CmsLogin from "./pages/CmsLogin";
import CmsKelolaAkun from "./pages/CmsKelolaAkun";
import CmsAddAdmin from "./pages/CmsAddAdmin";
import CmsEditAdmin from "./pages/CmsEditAdmin";
import CmsTalentAcademy from "./pages/CmsTalentAcademy";
import CmsMentorAcademy from "./pages/CmsMentorAcademy";
import CmsParentsAcademy from "./pages/CmsParentsAcademy";
import CmsTalentEditSchool from "./pages/CmsTalentEditSchool";
import CmsTalentEditGroup from "./pages/CmsTalentEditGroup";
import CmsPrivateRoute from "./components/CmsPrivateRoute";
import CmsLoginRoute from "./components/CmsLoginRoute";
import CmsArticleDashboard from "./pages/CmsArticleDashboard";
import NotFoundPage from "./pages/NotFoundPage";
import CmsArticleEdit from "./pages/CmsArticleEdit";
import CmsArticleAdd from "./pages/CmsArticleAdd";
import CmsTalentAddSchool from "./pages/CmsTalentAddSchool";
import CmsTalentAddGroups from "./pages/CmsTalentAddGroups";
import { Helmet } from "react-helmet";

function App() {
  const location = useLocation();

  const hideNavbarAndFooterPaths = [
    "/cms",
    "/cms/kelolaakun",
    "/cms/add/admin",
    "/cms/edit/admin/:id",
    "/cms/talentacademy",
    "/cms/mentoracademy",
    "/cms/parentsacademy",
    "/cms/talent/editschool/:id",
    "/cms/talent/addschool",
    "/cms/talent/editgroup/:id",
    "/cms/talent/addgroup",
    "/cms/article",
    "/cms/article/edit/:id",
    "/cms/article/add",
  ];

  const shouldHideNavbarAndFooter = hideNavbarAndFooterPaths.some((path) => {
    if (path.includes(":id")) {
      const regex = new RegExp(`^${path.replace(":id", "[^/]+")}$`);
      return regex.test(location.pathname);
    }
    return path === location.pathname;
  });

  return (
    <>
      <Helmet>
        <title>Skyshare Academy</title>
      </Helmet>
      {!shouldHideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourprogram/talent" element={<Skyshare />} />
        <Route path="/ourprogram/mentor" element={<Mentor />} />
        <Route path="/ourprogram/parents" element={<Parents />} />
        <Route path="/article/:id" element={<ArticleOpennedPage />} />
        <Route
          path="/ourprogram/talent/activities"
          element={<TalentActivity />}
        />
        <Route
          path="/ourprogram/mentor/activities"
          element={<MentorActivity />}
        />
        <Route
          path="/ourprogram/parents/activities"
          element={<ParentsActivity />}
        />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourprogram" element={<OurProgram />} />
        <Route path="/article" element={<Article />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/cms" element={<CmsLoginRoute />}>
          <Route path="/cms" element={<CmsLogin />} />
        </Route>
        <Route element={<CmsPrivateRoute />}>
          <Route path="/cms/kelolaakun" element={<CmsKelolaAkun />} />
          <Route path="/cms/add/admin" element={<CmsAddAdmin />} />
          <Route path="/cms/edit/admin/:id" element={<CmsEditAdmin />} />
          <Route path="/cms/talentacademy" element={<CmsTalentAcademy />} />
          <Route path="/cms/mentoracademy" element={<CmsMentorAcademy />} />
          <Route path="/cms/parentsacademy" element={<CmsParentsAcademy />} />
          <Route path="/cms/article" element={<CmsArticleDashboard />} />
          <Route path="/cms/article/edit/:id" element={<CmsArticleEdit />} />
          <Route path="/cms/article/add" element={<CmsArticleAdd />} />
          <Route
            path="/cms/talent/editschool/:id"
            element={<CmsTalentEditSchool />}
          />
          <Route
            path="/cms/talent/addschool"
            element={<CmsTalentAddSchool />}
          />
          <Route
            path="/cms/talent/editgroup/:id"
            element={<CmsTalentEditGroup />}
          />
          <Route path="/cms/talent/addgroup" element={<CmsTalentAddGroups />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {!shouldHideNavbarAndFooter && <Footer />}
    </>
  );
}

export default App;
