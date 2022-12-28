import * as React from "react";
import { DataGrid, gridClasses } from "@mui/x-data-grid";

const ODD_OPACITY = 0.2;

const data = [
  { name: "John", age: 30, city: "New York", rating: "★★★☆☆", avatar: "J" },
  { name: "Jane", age: 25, city: "Chicago", rating: "★★★☆☆", avatar: "J" },
  { name: "Bob", age: 35, city: "Los Angeles", rating: "★★★★★", avatar: "B" },
  {
    name: "Alice",
    age: 28,
    city: "San Francisco",
    rating: "★★★★☆",
    avatar: "A",
  },
];

const columns = [
  { field: "name", headerName: "Name" },
  { field: "age", headerName: "Age" },
  { field: "city", headerName: "City" },
  { field: "rating", headerName: "Rating", cellClassName: "text-yellow-500" },
  {
    field: "avatar",
    headerName: "Avatar",
    renderCell: (params) => (
      <span
        className="bg-gray-600 rounded-full text-center pt-3 h-[44px] w-[44px]"
        >
          {params.value}
        </span>
      ),
    },
  ];
  

export default function StripedGrid() {
  return (
    <div className="w-full h-[400px]">
      <DataGrid
        columns={columns}
        rows={data}
        getRowId={(row) => row.name}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0
            ? "bg-gray-800 hover:bg-opacity-25"
            : "bg-gray-900 hover:bg-opacity-75"
        }
      />
    </div>
  );
}
