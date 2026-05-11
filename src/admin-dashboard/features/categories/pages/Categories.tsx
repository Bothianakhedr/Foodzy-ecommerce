import { columns, type Categories } from "../components/columns";
import { DataTable } from "../../../shard/components/DataTable";

 function getData() {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date:"1/1/2015"
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date:"1/1/2015"
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date:"1/1/2015"
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date:"1/1/2015"
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date:"1/1/2015"
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date:"1/1/2015"
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date:"1/1/2015"
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date:"1/1/2015"
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date:"1/1/2015"
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date:"1/1/2015"
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date:"1/1/2015"
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date:"1/1/2015"
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date:"1/1/2015"
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date:"1/1/2015"
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date:"1/1/2015"
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date:"1/1/2015"
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date:"1/1/2015"
    },
    {
      id: "728ed52f",
      name: "Food",
      description: "m@example.com",
      image: "https",
      date:"1/1/2015"
    },
 
   
    {
      id: "728ed52f",
      name: "drink",
      description: "drink.com",
      image: "hthello tps",
      date:"1/6/2026"    },
    // ...
  ];
}

export function Categories() {
  const data = getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable  columns={columns} data={data} />
    </div>
  );
}
