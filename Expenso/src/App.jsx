import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { SignUp } from "./Compenents/LogInSignData/SignUp";
import { LogIn } from "./Compenents/LogInSignData/LogIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./Compenents/HomePageData/Homepage";
import { userDetailsContext } from "./Contexts/UserDetailsContext";
import { AnalyticsPage } from "./Compenents/AnalyticsPageSection/AnalyticsPage";
import { AddData } from "./Compenents/AddDataSection/AddData";
import { EnterEmail } from "./Compenents/LogInSignData/EnterEmail";
import AboutPage from "./Compenents/AboutPage/AboutPage";

function App() {
  const [count, setCount] = useState(0);
  const storedEmail = localStorage.getItem("userEmail");
  const [goToFooter, setGoToFooter] = useState(false);

  const [userEmail, setUserEmail] = useState(storedEmail);

  // useEffect(() => {
  //   const storedEmail = localStorage.getItem("userEmail");
  //   console.log(storedEmail, "gg1", userEmail);
  //   if (storedEmail) {
  //     setUserEmail(storedEmail);
  //   }
  //   console.log(storedEmail, "gg2".userEmail);
  // }, []);

  useEffect(() => {
    localStorage.setItem("userEmail", userEmail);
  }, [userEmail]);

  return (
    <div>
      {/* <Homepage/> */}
      {/* <EnterEmail /> */}

      <userDetailsContext.Provider
        value={{ userEmail, setUserEmail, goToFooter, setGoToFooter }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/AnalyticsPage" element={<AnalyticsPage />} />
            <Route path="/AddDataPage" element={<AddData />} />
            <Route path="/EnterEmailPage" element={<EnterEmail />} />
            <Route path="/AboutPage" element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
      </userDetailsContext.Provider>
    </div>
  );
}

export default App;
