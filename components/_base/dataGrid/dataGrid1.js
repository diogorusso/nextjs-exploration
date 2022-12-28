import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'name',
    cellClassName: 'bg-gray-300 text-gray-800 font-bold',
  },
  {
    field: 'score',
    type: 'number',
    width: 140,
    cellClassName: (params) => {
      if (params.value == null) {
        return '';
      }

      return `${params.value < 0 ? 'bg-green-100 text-green-800 font-bold' : 'bg-red-100 text-red-800 font-bold'}`;
    },
  },
];

const rows = [
  {
    id: 1,
    name: 'Jane',
    score: 100,
  },
  {
    id: 2,
    name: 'Jack',
    score: -100,
  },
  {
    id: 3,
    name: 'Gill',
    score: -50,
  },
];

export default function StylingCellsGrid() {
  return (
    <div className="w-full h-[300px] bg-gray-200">
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
