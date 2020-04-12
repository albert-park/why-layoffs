import React, { useState, useEffect } from "react";
import Head from "next/head";
import MainTable, { ItemRow } from "../components/MainTable";
import { companies } from "../utils/companies";
import { PER_EMPLOYEE_SALARY, AVERAGE_SAVINGS } from "../utils/constants";

const Home = () => {
  const [tableData, setTableData] = useState<Array<ItemRow>>([]);

  useEffect(() => {
    let companiesData: Array<ItemRow> = [];
    companies.forEach(company => {
      const percentCash =
        (company.layoffs * PER_EMPLOYEE_SALARY) / company.cash;

      const companyData: ItemRow = {
        company: company.name,
        symbol: company.symbol,
        cash: company.cash,
        layoffs: company.layoffs,
        costToKeep: company.layoffs * PER_EMPLOYEE_SALARY,
        percentCash,
        equivalentCost: percentCash * AVERAGE_SAVINGS
      };
      companiesData.push(companyData);
    });
    setTableData(companiesData);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Why Layoffs?</h1>

        <p className="description">
          An examination of the impact of layoffs and furloughs made by public
          companies during the COVID-19 pandemic.
        </p>

        <MainTable tableData={tableData} />
      </main>

      <footer>
        <a
          href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.2rem;
          margin: 2rem auto;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Home;
