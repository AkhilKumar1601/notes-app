import CreateNote from "@/components/CreateNote";
import ReadNote from "@/components/ReadNote";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-2">
            📝 Notes App
          </h1>
          <p className="text-gray-600 text-center">
            Manage your notes with ease
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Create Note Section */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">✍️</span>
                Create New Note
              </h2>
              <CreateNote />
            </div>
          </div>

          {/* Read Notes Section */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-2">📚</span>
                Your Notes
              </h2>
              <ReadNote />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-600">
          <p>Built with ❤️ using Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}