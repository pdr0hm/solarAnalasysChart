import React, { useState } from "react";
import CsvUploader from "./components/CsvUploader";
import TableData from "./components/TableData";
import ChartLine from "./components/ChartLine";
import Header from "./components/Header";

function App() {
  const [parsedData, setParsedData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [values, setValues] = useState([]);

  return (
    <div className="bg-zinc-200 w-screen h-screen">
      <Header />
      <div className="flex">
        <div className="flex-col w-1/3 mr-16 ">
          <CsvUploader
            setParsedData={setParsedData}
            setColumns={setColumns}
            setValues={setValues}
          />
          {/*<TableData
            parsedData={parsedData}
            columns={columns}
            values={values}
  />*/}
        </div>
        <div className="flex-col w-full">
          {/*
          <ChartLine data={parsedData} typeChart={"radiance"} />
          <ChartLine data={parsedData} typeCHart={"voltage"} />
          */}
        </div>
      </div>
    </div>
  );
}

export default App;
