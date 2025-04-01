'use client';

import { useState } from 'react';

export default function MatrixCalculator() {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [generated, setGenerated] = useState(false);
  const [addedMatrix, setAddedMatrix] = useState<number[][] | null>(null);

  const generateMatrix = (operation: 'sum' | 'product') => {
    return Array.from({ length: rows }, (_, rowIndex) =>
      Array.from({ length: cols }, (_, colIndex) =>
        operation === 'sum' ? rowIndex + colIndex : rowIndex * colIndex
      )
    );
  };

  const handleAddMatrix = () => {
    const sumMatrix = generateMatrix('sum');
    const productMatrix = generateMatrix('product');
    const newMatrix = sumMatrix.map((row, rowIndex) =>
      row.map((cell, colIndex) => cell + productMatrix[rowIndex][colIndex])
    );
    setAddedMatrix(newMatrix);
  };

  return (
    <div className="p-5 flex flex-col items-center gap-5">
      <h1 className="font-bold text-5xl mb-4">Matrix calculator app</h1>
      <p className="text-3xl mb-4 font-semibold">Add Row and column to generate new Table</p>
      <div className="flex gap-3">
        <label htmlFor="rows">Rows</label>
        <input
          type="number"
          value={rows}
          onChange={(e) => setRows(Number(e.target.value))}
          placeholder="Rows"
          className="border p-2 rounded"
        />
        <label htmlFor="cols">Columns</label>
        <input
          type="number"
          value={cols}
          onChange={(e) => setCols(Number(e.target.value))}
          placeholder="Columns"
          className="border p-2 rounded"
        />
        <button
          onClick={() => {
            setGenerated(true);
            setAddedMatrix(null);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Generate
        </button>
      </div>

      {generated && (
        <div className="flex flex-col gap-5 items-center">
          <div className="flex gap-10">
            <MatrixTable data={generateMatrix('sum')} title="Sum Matrix" rows={rows} cols={cols} />
            <MatrixTable data={generateMatrix('product')} title="Multiplication Matrix" rows={rows} cols={cols} />
          </div>
          <button
            onClick={handleAddMatrix}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add Matrix
          </button>
          {addedMatrix && <MatrixTable data={addedMatrix} title="Added Matrix" rows={rows} cols={cols} />}
        </div>
      )}
    </div>
  );
}

function MatrixTable({ data, title, rows, cols }: { data: number[][]; title: string; rows: number; cols: number }) {
  return (
    <div>
      <h2 className="text-lg font-bold mb-2 text-center">{title}</h2>
      <table className="border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2 text-center"></th>
            {Array.from({ length: cols }, (_, colIndex) => (
              <th key={colIndex} className="border border-gray-400 p-2 text-center">Col {colIndex}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <th className="border border-gray-400 p-2 text-center">Row {rowIndex}</th>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="border border-gray-400 p-2 text-center">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
