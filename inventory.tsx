import { useState } from 'react'

const mockInventory = [
  { id: 1, name: 'Paracetamol 500mg', stock: 120, expiry: '2025-02-12' },
  { id: 2, name: 'Amoxicillin 250mg', stock: 45, expiry: '2024-11-05' },
  { id: 3, name: 'Cough Syrup', stock: 200, expiry: '2025-04-20' },
]

export default function Inventory() {
  const [search, setSearch] = useState('')

  const filtered = mockInventory.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Inventory</h1>
      <input
        type="text"
        placeholder="Search medicine..."
        className="p-2 border rounded mb-4 w-full"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Medicine</th>
            <th className="p-2 text-left">Stock</th>
            <th className="p-2 text-left">Expiry</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(item => (
            <tr key={item.id} className="border-b">
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.stock}</td>
              <td className="p-2">{item.expiry}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
