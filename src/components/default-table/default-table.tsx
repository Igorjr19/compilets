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
  );
}

export default DefaultTable;
