export default function Dashboard() {
  return (
    <div className="px-4 py-6 sm:px-0">
      <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Dashboard Home
          </h1>
          <p className="text-gray-600 mb-8">
            Navigate to any page to manage your username
          </p>
          <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
            <a
              href="/dashboard/page-one"
              className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Go to Page One
            </a>
            <a
              href="/dashboard/page-two"
              className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Go to Page Two
            </a>
            <a
              href="/dashboard/page-three"
              className="inline-block bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              Go to Page Three
            </a>
            <a
              href="/dashboard/page-four"
              className="inline-block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Go to Page Four
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
