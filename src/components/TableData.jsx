import React from "react";

export default function TableData({ parsedData, columns, values }) {
  return (
    <>
      {parsedData.length > 0 && (
        <div className="flex flex-col bg-zinc-100 rounded-sm ml-6 h-[600px]">
          <div className="scrollbar scrollbar-thumb-zinc-300 scrollbar-track-gray-100 rounded-sm">
            <table className="border-collapse text-sm font-sans sh  adow-md">
              <thead className="border-b">
                <tr>
                  {columns.map((rows, index) => {
                    return (
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left bg-zinc-100"
                        key={index}
                      >
                        {rows}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {values.map((value, index) => {
                  return (
                    <tr key={index}>
                      {value.map((val, i) => {
                        return (
                          <td
                            className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                            key={i}
                          >
                            {val}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
