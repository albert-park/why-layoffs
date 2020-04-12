import React, { FC } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import columns from "../utils/columns";

export type ItemRow = {
  company: string;
  symbol: string;
  cash: number;
  layoffs: number;
  costToKeep: number;
  percentCash: number;
  equivalentCost: number;
};

interface MainTableProps {
  tableData: Array<ItemRow>;
}

const rowRenderer = (row: ItemRow) => <div>this is the {row.company}</div>;

const expandRow = {
  renderer: rowRenderer
};

const defaultSorted = [
  {
    dataField: "percentCash",
    order: "asc"
  }
];

const MainTable: FC<MainTableProps> = ({ tableData }) => {
  return (
    <BootstrapTable
      bootstrap4
      keyField="company"
      data={tableData}
      columns={columns}
      striped
      hover
      bordered={false}
      expandRow={expandRow}
      defaultSorted={defaultSorted}
    />
  );
};

export default MainTable;
