import TableScrollbar from "react-table-scrollbar";

export default function TableData({ parsedData, columns, values }) {
  return (
    <>
      {parsedData.length > 0 ? (
        <div className="flex flex-col bg-zinc-100 rounded-sm ml-6">
          <div className="overflow-hidden rounded-sm">
            <TableScrollbar rows={25}>
              <table className="border-collapse text-sm font-sans shadow-md">
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
            </TableScrollbar>
          </div>
        </div>
      ) : null}
    </>
  );
}
