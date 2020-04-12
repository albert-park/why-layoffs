interface ColumnsData {
  dataField: string;
  text: string;
  sort: boolean;
  align: "left" | "center" | "right";
  formatter?: (cell: number) => string;
  style?: any;
}

const cashFormatter = (cell: number) => {
  return `$${new Intl.NumberFormat("en-US").format(cell)}`;
};

const numberFormatter = (cell: number) => {
  return new Intl.NumberFormat("en-US").format(cell);
};

const percentFormatter = (cell: number) => {
  return `${(cell * 100).toFixed(1)} %`;
};

const columns: Array<ColumnsData> = [
  {
    dataField: "company",
    text: "Company Name",
    sort: true,
    align: "left"
  },
  {
    dataField: "symbol",
    text: "Stock Symbol",
    sort: true,
    align: "left"
  },
  {
    dataField: "layoffs",
    text: "Number of Employees Laid Off",
    sort: true,
    align: "left",
    formatter: numberFormatter
  },
  {
    dataField: "costToKeep",
    text: "Cost to Keep Employees ($40k/employee)",
    sort: true,
    align: "left",
    formatter: cashFormatter
  },
  {
    dataField: "cash",
    text: "Cash on Hand",
    sort: true,
    align: "left",
    formatter: cashFormatter
  },

  {
    dataField: "percentCash",
    text: "Percentage of Cash on Hand Needed to Keep Employees",
    sort: true,
    align: "left",
    formatter: percentFormatter,
    style: {
      fontWeight: "bold",
      backgroundColor: "palegreen"
    }
  },
  {
    dataField: "equivalentCost",
    text: "Equivalent Cost to Average American",
    sort: true,
    align: "left",
    formatter: cashFormatter
  }
];

export default columns;
