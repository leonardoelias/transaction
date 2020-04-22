import uuid from "@lukeed/uuid";

const items = () => [
  {
    id: uuid(),
    type: "CASH",
    value: "R$ 10,00",
    description: "Coffe",
    data: "30/02/03"
  },
  {
    id: uuid(),
    type: "CASH",
    value: "R$ 10,00",
    description: "Coffe",
    data: "30/02/03"
  },
  {
    id: uuid(),
    type: "CASH",
    value: "R$ 10,00",
    description: "Coffe",
    data: "30/02/03"
  },
  {
    id: uuid(),
    type: "CASH",
    value: "R$ 10,00",
    description: "Coffe",
    data: "30/02/03"
  },
  {
    id: uuid(),
    type: "PARCELED",
    value: "R$ 20,00",
    description: "NetShoes",
    data: "30/02/03"
  },
  {
    id: uuid(),
    type: "PARCELED",
    value: "R$ 20,00",
    description: "NetShoes",
    data: "30/02/03"
  },
  {
    id: uuid(),
    type: "PARCELED",
    value: "R$ 20,00",
    description: "NetShoes",
    data: "30/02/03"
  },
  {
    id: uuid(),
    type: "PARCELED",
    value: "R$ 20,00",
    description: "NetShoes",
    data: "30/02/03"
  },
  {
    id: uuid(),
    type: "RECURRENCE",
    value: "R$ 30,00",
    description: "NetFlix",
    data: "30/02/03"
  },
  {
    id: uuid(),
    type: "RECURRENCE",
    value: "R$ 30,00",
    description: "PlayStation Sub.",
    data: "30/02/03"
  }
];

export default items;