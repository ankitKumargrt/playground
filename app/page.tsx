import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold">Welcome to Agent Task</h1>
        <div className="space-x-4">
          <Link href="/agent" className="bg-[#6938EF] hover:bg-[#6938EF]/90 text-white px-6 py-3 rounded-lg">
            Go to Agent Page
          </Link>
          <Link href="/tasker" className="bg-[#6938EF] hover:bg-[#6938EF]/90 text-white px-6 py-3 rounded-lg">
            Go to Tasker Page
          </Link>
        </div>
      </div>
    </div>
  )
}

