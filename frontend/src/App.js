import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Content from "./pages/Article-page/Content";
import ScrollToTopButton from "./components/ScrollToTopButton";
import CategoryJoin from "./pages/Category-page/CategoryJoin";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserDashboard from "./pages/Dashboard/UserDashboard";
import UserProfileAdmin from "./pages/Admin-Dashboard/UserProfileAdmin";
import DashComment from "./pages/Admin-Dashboard/DashComment";
import Setting from "./pages/Admin-Dashboard/setting/Setting";
import LoginForm from "./pages/Login/LoginForm";
import UserPage from "./pages/Admin-Dashboard/Add-user/UserPage";
import CreatePost from "./pages/Dashboard/createPostPage/CreatePost";
import Posts from "./pages/Admin-Dashboard/Post";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/article" element={<Content />} exact />
          <Route path="/category" element={<CategoryJoin />} exact />
          <Route path="/dashboard" element={<Dashboard />} exact />
          <Route path="/udashboard" element={<UserDashboard />} exact />
          <Route path="/create-post" element={<CreatePost/>} exact />
          <Route path="/cms-admin" element={<LoginForm />} exact />
          <Route
            path="/cms-admin/Profile"
            element={<UserProfileAdmin />}
            exact
          />
          <Route path="/cms-admin/Comments" element={<DashComment />} exact />
          <Route path="/cms-admin/Settings" element={<Setting />} exact />
          <Route path="/cms-admin/Users" element={<UserPage />} exact />
          <Route path="/cms-admin/Posts" element={<Posts />} exact />
        </Routes>
        <ScrollToTopButton />
      </BrowserRouter>
    </>
  );
}

export default App;
