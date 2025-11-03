import Table from "../Table/Table";
import "./DataTable.css";

const DataTable = () => {
  const columns = ["Name", "Email", "Status"];
  const data = [
    ["Alice Johnson", "alice@example.com", "Active"],
    ["Bob Smith", "bob@example.com", "Pending"],
    ["Carol White", "carol@example.com", "Inactive"],
  ];

  return (
    <div className="data-table">
      <h2>User Data Table</h2>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default DataTable;
