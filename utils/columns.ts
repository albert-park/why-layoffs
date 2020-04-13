// type FormatterCell = {
//   cell: number | string
// }

interface ColumnsData {
  dataField: string;
  text: string;
  sort: boolean;
  align: "left" | "center" | "right";
  formatter?: (cell: number) => JSX.Element | string;
  style?: any;
}

const cashFormatter = (cell: number) => {
  return `$${new Intl.NumberFormat("en-US").format(cell)}`;
};

const numberFormatter = (cell: number) => {
  return new Intl.NumberFormat("en-US").format(cell);
};

const percentFormatter = (cell: number) => {
  return `${(cell * 100).toFixed(2)} %`;
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
    align: "left",
  },
  {
    dataField: "layoffs",
    text: "Number of Employees Laid Off",
    sort: true,
    align: "center",
    formatter: numberFormatter,
    style: (cell: number) => {
      if (cell < 10000) {
        return {
          fontWeight: "bold",
          color: "white",
          backgroundColor: "lightpink"
        }

      } else if (cell > 10000 && cell < 25000) {
        return {
          fontWeight: "bold",
          color: "white",
          backgroundColor: "lightcoral"
        }
      } else {
        return {
          fontWeight: "bold",
          color: "white",
          backgroundColor: "red"
        }
      }
    }
  },
  {
    dataField: "costToKeep",
    text: "Cost to Keep Employees (Median $40k/employee)",
    sort: true,
    align: "center",
    formatter: cashFormatter
  },
  {
    dataField: "cash",
    text: "Company's Cash on Hand (most recent quarter)",
    sort: true,
    align: "center",
    formatter: cashFormatter,
    style: (cell: number) => {
      if (cell < 100000000) {
        return {
          fontWeight: "bold",
          color: "white",
          backgroundColor: "darkseagreen"
        }

      } else if (cell > 100000000 && cell < 1000000000) {
        return {
          fontWeight: "bold",
          color: "white",
          backgroundColor: "forestgreen"
        }
      } else {
        return {
          fontWeight: "bold",
          color: "white",
          backgroundColor: "darkgreen"
        }
      }
    }
  },

  {
    dataField: "percentCash",
    text: "Percentage of Cash on Hand Needed to Keep Employees",
    sort: true,
    align: "center",
    formatter: percentFormatter,
    style: (cell: number) => {
      if (cell < 0.10) {
        return {
          fontWeight: "bold",
          backgroundColor: "lightgreen"
        }

      } else if (cell > 0.10 && cell < 0.50) {
        return {
          fontWeight: "bold",
          backgroundColor: "khaki"
        }
      } else {
        return {
          fontWeight: "bold",
          backgroundColor: "indianred"
        }
      }
    }
  }
];

export default columns;
