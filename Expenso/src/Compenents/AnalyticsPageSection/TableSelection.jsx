import React, { useEffect } from "react";
import "./GraphSection.css";

export const TableSelection = ({
  years,
  filterMonth,
  setFilterMonth,
  filterYear,
  setFilterYear,
  mainVals,
  setReqVals,
  mainValSavings,
  setReqValSavings,
}) => {
  const handleFilterChange = () => {
    const newReqVala = mainVals.filter((val) => {
      const [year, month] = val.date.split("-");
      console.log(filterMonth, filterYear);
      if (
        (filterMonth == "" || filterMonth == month) &&
        (filterYear == "" || filterYear == year)
      )
        return val;
    });
    setReqVals(newReqVala);

    const newReqVala2 = mainValSavings.filter((val) => {
      const [year, month] = val.date.split("-");
      console.log(filterMonth, filterYear);
      if (
        (filterMonth == "" || filterMonth == month) &&
        (filterYear == "" || filterYear == year)
      )
        return val;
    });
    setReqValSavings(newReqVala2);
  };

  useEffect(() => {
    handleFilterChange();
  }, [mainVals, filterMonth, filterYear]);

  // const years = ["2022", "2023", "2024", "2025"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthValues = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  return (
    <div className="filterContainer filterContainerTable">
      <select
        className="filterSelect"
        value={filterYear}
        onChange={(e) => setFilterYear(String(e.target.value))}
      >
        <option value="">All Years</option>
        {years.map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))}
      </select>

      <select
        className="filterSelect"
        value={filterMonth}
        onChange={(e) => setFilterMonth(e.target.value)}
      >
        <option value="">All Months</option>
        {months.map((month, index) => (
          <option key={index} value={monthValues[month]}>
            {month}
          </option>
        ))}
      </select>
      {/* <button onClick={handleFilterChange} className="filterButtonSelect">
        Apply Filter
      </button> */}
    </div>
  );
};
