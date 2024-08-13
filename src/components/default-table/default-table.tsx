import './default-table.css';

interface DefaultTableProps<T> {
  labels: string[];
  columns: (keyof T)[];
  data: T[];
}

function DefaultTable<T extends object>({
  labels,
  columns,
  data,
}: DefaultTableProps<T>) {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            {labels.map((label) => {
              return <th>{label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            return (
              <tr>
                {columns.map((column) => {
                  return <td>{row[column] as string}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DefaultTable;
