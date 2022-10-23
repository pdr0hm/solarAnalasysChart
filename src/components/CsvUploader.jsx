import Papa from "papaparse";
import React from "react";

export default function CsvUploader({ setParsedData, setColumns, setValues }) {
  const changeHandler = (e) => {
    Papa.parse(e.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        setParsedData(results.data);
        setColumns(rowsArray[0]);
        setValues(valuesArray);
      },
    });
  };
  return (
    <>
      <div className="ml-6">
        <input
          type="file"
          name="file"
          accept=".csv"
          onChange={changeHandler}
          className="display-block my-2 mx-0 text-black"
        />
      </div>
    </>
  );
}
