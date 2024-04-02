import React, { useEffect } from "react";
import "./GraphSection.css";

export const GraphSectionAvg = ({
  filterMonth,
  setFilterMonth,
  filterYear,
  setFilterYear,
  monthlyAvgVals,
  yearlyAvgVals,
  setGraphValue,
}) => {
  const handleFilterChange = () => {
    const yearlyObj = {
      xValue: Object.keys(yearlyAvgVals.yearlyAvg),
      Expense: yearlyAvgVals.yearlyAvg,
      Savings: yearlyAvgVals.yearlyAvgSavings,
    };

    const monthlyObj =
      filterYear === ""
        ? {}
        : {
            xValue: Object.keys(monthlyAvgVals[filterYear].monthlyAvg),
            Expense: monthlyAvgVals[filterYear].monthlyAvg,
            Savings: monthlyAvgVals[filterYear].monthlyAvgSavings,
          };

    const newReqVala = filterYear === "" ? yearlyObj : monthlyObj;
    setGraphValue(newReqVala);
    //mainVals.filter((val) => {
    //   const [year, month] = val.date.split("-");
    //   console.log(filterMonth, filterYear);
    //   if (
    //     (filterMonth == "" || filterMonth == month) &&
    //     (filterYear == "" || filterYear == year)
    //   )
    //     return val;
    // });
    // setReqVals(newReqVala);

    // const graphValNew = {
    //   xValue: [],
    //   Expense: [],
    //   Savings: [],
    // };
    // const existingxValuesSet = new Set(graphValNew.xValue);

    // newReqVala.forEach((item) => {
    //   if (!existingxValuesSet.has(item.date)) {
    //     graphValNew.xValue.push(item.date);
    //     graphValNew.Expense.push(0);
    //     graphValNew.Savings.push(0);
    //     existingxValuesSet.add(item.date);
    //   }
    // });

    // const newReqVala2 = mainValSavings.filter((val) => {
    //   const [year, month] = val.date.split("-");
    //   console.log(filterMonth, filterYear);
    //   if (
    //     (filterMonth == "" || filterMonth == month) &&
    //     (filterYear == "" || filterYear == year)
    //   )
    //     return val;
    // });
    // setReqValSavings(newReqVala2);

    // // Iterate through newReqVala2 and add unique values to xValue
    // newReqVala2.forEach((item) => {
    //   if (!existingxValuesSet.has(item.date)) {
    //     graphValNew.xValue.push(item.date);
    //     graphValNew.Expense.push(0);
    //     graphValNew.Savings.push(0);
    //     existingxValuesSet.add(item.date);
    //   }
    // });

    // for (var i = 0; i < graphValNew.xValue.length; i++) {
    //   for (var j = 0; j < newReqVala.length; j++) {
    //     if (graphValNew.xValue[i] == newReqVala[j].date) {
    //       graphValNew.Expense[i] = newReqVala[j].amount;
    //     }
    //   }
    //   for (var j = 0; j < newReqVala2.length; j++) {
    //     if (graphValNew.xValue[i] == newReqVala2[j].date) {
    //       graphValNew.Savings[i] = newReqVala2[j].amount;
    //     }
    //   }
    // }

    // // Zip the arrays together
    // const zippedData = graphValNew.xValue.map((date, index) => ({
    //   date,
    //   Expense: graphValNew.Expense[index],
    //   Savings: graphValNew.Savings[index],
    // }));

    // // Sort the zipped array based on xValue
    // const sortedData = zippedData.sort((a, b) => a.date.localeCompare(b.date));

    // // Unzip the sorted array
    // const sortedxValue = sortedData.map((item) => item.date);
    // const sortedExpense = sortedData.map((item) => item.Expense);
    // const sortedSavings = sortedData.map((item) => item.Savings);

    // // Update graphValNew with sorted arrays
    // graphValNew.xValue = sortedxValue;
    // graphValNew.Expense = sortedExpense;
    // graphValNew.Savings = sortedSavings;

    //setGraphValue(graphValNew);

    // graphValNew.Savings = graphValNew.Savings.concat(
    //   newReqVala2.map((item) => item.amount)
    // );
  };

  // useEffect(() => {
  //   handleFilterChange();
  // }, []);

  const years = ["2022", "2023", "2024", "2025"];
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
      <button onClick={handleFilterChange} className="filterButtonSelect">
        Apply Filter
      </button>
    </div>
  );
};
