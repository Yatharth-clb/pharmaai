import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/dashboard')
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Pharma AI</h1>
        <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" required />
        <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" required />
        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  )
}
