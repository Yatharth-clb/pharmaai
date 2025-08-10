import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Pharma AI Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-sm text-gray-500">Stock Value</h2>
          <p className="text-2xl font-bold">₹ 12.5L</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-sm text-gray-500">% Near Expiry</h2>
          <p className="text-2xl font-bold text-red-500">7%</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-sm text-gray-500">Forecast Accuracy</h2>
          <p className="text-2xl font-bold text-green-500">82%</p>
        </div>
      </div>

      <div className="space-x-4">
        <Link href="/inventory" className="bg-blue-500 text-white px-4 py-2 rounded">Inventory</Link>
        <Link href="/forecast" className="bg-green-500 text-white px-4 py-2 rounded">Forecasting</Link>
        <Link href="/reports" className="bg-purple-500 text-white px-4 py-2 rounded">Reports</Link>
      </div>
    </div>
  )
}
