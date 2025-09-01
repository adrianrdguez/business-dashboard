export default function TestTailwind() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tailwind CSS Test
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            If you can see this styled text, Tailwind CSS is working correctly!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-500 text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Blue Card</h3>
              <p>This should be blue with white text</p>
            </div>
            
            <div className="bg-green-500 text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Green Card</h3>
              <p>This should be green with white text</p>
            </div>
            
            <div className="bg-red-500 text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Red Card</h3>
              <p>This should be red with white text</p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-yellow-100 border border-yellow-400 rounded-lg">
            <p className="text-yellow-800">
              <strong>Note:</strong> If you see unstyled text or basic browser styling, 
              there might be an issue with Tailwind CSS loading.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
