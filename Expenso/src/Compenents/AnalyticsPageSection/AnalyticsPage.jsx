import React, { useState, useContext, useEffect } from "react";
import { userDetailsContext } from "../../Contexts/UserDetailsContext";
import "./AnalyticsPage.css";
import { NavbarAn } from "../HomePageData/NavbarAn";
import { GraphArea } from "./GraphArea";
import { TableArea } from "./TableArea";
import { TableSelection } from "./TableSelection";
import { GraphSection } from "./GraphSelection";
import { GraphSectionAvg } from "./GraphSelectionAvg";
import { AddData } from "../AddDataSection/AddData";
import axios from "axios";
import { Navbar } from "../HomePageData/Navbar";
import { useNavigate } from "react-router-dom";

export const AnalyticsPage = () => {
  const navigate = useNavigate();
  const { setUserEmail } = useContext(userDetailsContext);
  const { userEmail } = useContext(userDetailsContext);
  const [scrollHeight, setScrollHeight] = useState(0);
  const { setGoToFooter } = useContext(userDetailsContext);

  const checkStart = () => {
    if (userEmail != "") {
      navigate("/AnalyticsPage");
    } else {
      navigate("/LogIn");
    }
  };

  const handleLogin = () => {
    if (userEmail != "") {
      setUserEmail("");
    } else {
      navigate("/LogIn");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollHeight(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [years, setYears] = useState();

  const [addDataVisible, setAddDataVisible] = useState(false);

  const [userExpenseData, setUserExpenseData] = useState([]);
  const [userExpenseDataNew, setUserExpenseDataNew] = useState([]);
  const [userExpenseDataNewTable, setUserExpenseDataNewTable] = useState([]);

  const [userSavingsData, setUserSavingsData] = useState([]);
  const [userSavingsDataNew, setUserSavingsDataNew] = useState([]);
  const [userSavingsDataNewTable, setUserSavingsDataNewTable] = useState([]);

  useEffect(() => {
    axios
      .post(import.meta.env.VITE_REACT_APP_API_URL + "/GetExpense", { userEmail })
      .then((result) => {
        setUserExpenseData(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const uniqueYears = new Set();
  useEffect(() => {
    console.log(userExpenseData); // Log userExpenseData inside useEffect
    const expenses = userExpenseData;
    const convertedExpenses = [];

    expenses.forEach((expense) => {
      const existingExpenseIndex = convertedExpenses.findIndex(
        (convertedExpense) => convertedExpense.date === expense.date
      );

      if (existingExpenseIndex !== -1) {
        convertedExpenses[existingExpenseIndex].amount += expense.value;
      } else {
        const [year] = expense.date.split("-");
        uniqueYears.add(year);

        convertedExpenses.push({
          date: expense.date,
          name: expense.name,
          amount: expense.value,
        });
      }
    });
    setUserExpenseDataNew(convertedExpenses);

    const expenses1 = userExpenseData;
    const convertedExpenses1 = expenses.map((expense1) => ({
      date: expense1.date,
      name: expense1.name,
      amount: expense1.value,
    }));

    setYears(Array.from(uniqueYears));
    setUserExpenseDataNewTable(convertedExpenses1);
  }, [userExpenseData]);

  useEffect(() => {
    axios
      .post(import.meta.env.VITE_REACT_APP_API_URL + "/GetSaving", { userEmail })
      .then((result) => {
        setUserSavingsData(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // const [years, setYears] = useState([]);
  useEffect(() => {
    console.log(userSavingsData); // Log userExpenseData inside useEffect
    const expenses = userSavingsData;
    const convertedExpenses = [];

    expenses.forEach((expense) => {
      const existingExpenseIndex = convertedExpenses.findIndex(
        (convertedExpense) => convertedExpense.date === expense.date
      );

      if (existingExpenseIndex !== -1) {
        convertedExpenses[existingExpenseIndex].amount += expense.value;
      } else {
        convertedExpenses.push({
          date: expense.date,
          name: expense.name,
          amount: expense.value,
        });
      }
    });
    setUserSavingsDataNew(convertedExpenses);

    const expenses1 = userSavingsData;
    const convertedExpenses1 = expenses1.map((expense1) => ({
      date: expense1.date,
      amount: expense1.value,
    }));
    setUserSavingsDataNewTable(convertedExpenses1);
  }, [userSavingsData]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollHeight(scrollTop * 3);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //................GRAPH VALUES...........................//

  const [graphValue, setGraphValue] = useState();

  //................GRAPH VALUES...........................//

  //..................TABLE VLUES...........................//
  const [filterYear, setFilterYear] = useState(""); // State for filter year
  const [filterMonth, setFilterMonth] = useState(""); // State for filter month

  const [mainVals, setMainVals] = useState();

  const [mainValsTable, setMainValsTable] = useState();

  useEffect(() => {
    {
      console.log(years);
    }
  }, [filterYear]);

  useEffect(() => {
    setMainVals(userExpenseDataNew);
    setMainValsTable(userExpenseDataNewTable);
    const yearSet = new Set();

    // Extract unique years from mainVals
    // mainVals.forEach((val) => {
    //   const [year] = val.date.split("-");
    //   yearSet.add(year);

    //   setYears([...yearSet]);
    // });
  }, [userExpenseDataNew]);

  useEffect(() => {
    setMainValSavings(userSavingsDataNew);
    setMainValSavingsTable(userSavingsDataNewTable);
  }, [userSavingsDataNew]);

  const [reqVals, setReqVals] = useState(mainVals);
  const tableFormat = [
    { Header: "Date", accessor: "date" },
    { Header: "Name", accessor: "name" },
    { Header: "Amount", accessor: "amount" },
  ];

  const [mainValSavings, setMainValSavings] = useState();

  const [mainValSavingsTable, setMainValSavingsTable] = useState();
  const [reqValSavings, setReqValSavings] = useState(mainValSavings);
  const tableFormatSavings = [
    { Header: "Date", accessor: "date" },
    { Header: "Amount", accessor: "amount" },
  ];
  //..................TABLE VLUES DONE...........................//
  const contactChange = () => {
    navigate("/");
    setGoToFooter(true);
  };
  return (
    <div>
      <AddData
        setAddDataVisible={setAddDataVisible}
        addDataVisible={addDataVisible}
        userEmail={userEmail}
      />

      {/* <userDetailsContext.Provider value={{ scrollHeight, setAddDataVisible }}>
        <NavbarAn />
      </userDetailsContext.Provider> */}
      <userDetailsContext.Provider
        value={{
          handleLogin,
          checkStart,
          userEmail,
          scrollHeight,
          contactChange,
        }}
      >
        <Navbar />
      </userDetailsContext.Provider>
      <div className="MainSectionAn">
        <div className="bodySectionAn">
          {mainVals && mainValSavings && (
            <>
              <GraphSection
                years={years}
                filterMonth={filterMonth}
                setFilterMonth={setFilterMonth}
                filterYear={filterYear}
                setFilterYear={setFilterYear}
                mainVals={mainVals}
                setReqVals={setReqVals}
                mainValSavings={mainValSavings}
                setReqValSavings={setReqValSavings}
                setGraphValue={setGraphValue}
              />

              {graphValue && (
                <>
                  <GraphArea
                    graphValue={graphValue}
                    setGraphValue={setGraphValue}
                  />
                </>
              )}
            </>
          )}

          {mainValsTable && mainValSavingsTable && (
            <>
              <TableSelection
                years={years}
                filterMonth={filterMonth}
                setFilterMonth={setFilterMonth}
                filterYear={filterYear}
                setFilterYear={setFilterYear}
                mainVals={mainValsTable}
                setReqVals={setReqVals}
                mainValSavings={mainValSavingsTable}
                setReqValSavings={setReqValSavings}
              />

              {reqVals && (
                <div className="tableAreaTogether">
                  <TableArea
                    reqVals={reqVals}
                    tableFormat={tableFormat}
                    heading={"Expenses"}
                  />
                  <TableArea
                    reqVals={reqValSavings}
                    tableFormat={tableFormatSavings}
                    heading={"Saving"}
                  />
                </div>
              )}
            </>
          )}

          {/* <GraphSectionAvg
            filterMonth={filterMonth}
            setFilterMonth={setFilterMonth}
            filterYear={filterYear}
            setFilterYear={setFilterYear}
            monthlyAvgVals={monthlyAvgVals}
            yearlyAvgVals={yearlyAvgVals}
            setGraphValue={setGraphValueAvg}
          />

          <GraphArea
            graphValue={graphValueAvg}
            setGraphValue={setGraphValueAvg}
          /> */}

          <button
            className="AddDataButton"
            onClick={() => {
              setAddDataVisible(true);
            }}
          >
            Add Data
          </button>
          {/* 
          <div className="tableAreaTogether">
            <TableArea
              reqVals={reqValsAvg.yearlyAvg}
              tableFormat={tableFormat}
              heading={"Expenses"}
            />
            <TableArea
              reqVals={reqValsAvg.yearlyAvgSavings}
              tableFormat={tableFormatSavings}
              heading={"Saving"}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};
