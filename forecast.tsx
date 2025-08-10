import { useState } from 'react'

export default function Forecast() {
  const [loading, setLoading] = useState(false)
  const [forecast, setForecast] = useState<string | null>(null)

  const runForecast = () => {
    setLoading(true)
    setTimeout(() => {
      setForecast('Expected demand next month: +12% increase.')
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">AI Demand Forecast</h1>
      <button
        onClick={runForecast}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Run Forecast
      </button>

      {loading && <p className="mt-4 text-gray-500">Running AI model...</p>}
      {forecast && <p className="mt-4 text-lg font-semibold">{forecast}</p>}
    </div>
  )
}
