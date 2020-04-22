import React from "react";
import { HeartOutlined } from "@ant-design/icons";
import { useTabState, Tab, TabList, TabPanel } from "reakit/Tab";
import items from "./data.js";
import "./styles.css";

function ListItem({ item }) {
  return (
    <div className="flex justify-between py-4 items-center">
      <div className="flex items-center">
        <div className="flex items-center justify-center text-green-500 text-xl h-10 w-10 bg-green-100 rounded-full mr-2">
          <HeartOutlined />
        </div>
        <span className="text-gray-700 text-lg">{item.description}</span>
      </div>
      <div className="flex flex-col items-end text-xs text-gray-500">
        <strong className="text-lg text-gray-700 d-block">{item.value}</strong>
        {item.data}
      </div>
    </div>
  );
}

function List({ data }) {
  return (
    <div className="divide-y">
      {data.map(item => (
        <ListItem {...{ item }} />
      ))}
    </div>
  );
}

function TabComponent({ dataCash, dataRecurrence, dataParceled }) {
  const tab = useTabState();

  return (
    <>
      <TabList
        {...tab}
        className="flex bg-gray-300 justify-between rounded"
        aria-label="Total Balance"
      >
        <Tab
          className="flex-1 m-1 py-1 rounded text-gray-600 focus:outline-none focus:shadow-outline"
          {...tab}
        >
          Crédito
        </Tab>
        <Tab
          className="flex-1 m-1 py-2 rounded text-gray-600 focus:outline-none focus:shadow-outline"
          {...tab}
        >
          Parcelado
        </Tab>
        <Tab
          className="flex-1 m-1 py-2 rounded text-gray-600 focus:outline-none focus:shadow-outline"
          {...tab}
        >
          Recorrência
        </Tab>
      </TabList>
      <TabPanel className="focus:outline-none focus:shadow-outline" {...tab}>
        <List data={dataCash} />
      </TabPanel>
      <TabPanel {...tab}>
        <List data={dataParceled} />
      </TabPanel>
      <TabPanel {...tab}>
        <List data={dataRecurrence} />
      </TabPanel>
    </>
  );
}

export default function App() {
  const dataCash = items().filter(item => item.type === "CASH");
  const dataRecurrence = items().filter(item => item.type === "RECURRENCE");
  const dataParceled = items().filter(item => item.type === "PARCELED");

  return (
    <div className="p-3 bg-gray-100 min-h-screen">
      <div className="max-w-screen-md mx-auto">
        <div className="rounded-md bg-white border border-gray-300 mt-6 md:mt-32 px-4 py-3 shadow-sm">
          <header>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-sm leading-7 font-medium tracking-tight text-gray-500">
                Total Balance
              </h1>
              <p className="text-2xl leading-7 font-medium tracking-tight text-gray-700">
                R$ 0,00
              </p>
            </div>
          </header>
          <TabComponent
            {...{ dataCash }}
            {...{ dataRecurrence }}
            {...{ dataParceled }}
          />
        </div>
      </div>
    </div>
  );
}
