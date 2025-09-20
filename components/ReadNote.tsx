import prisma from "@/db";
import DeleteNoteButton from "./DeleteNoteButton";
import UpdateNoteButton from "./UpdateNoteButton";

export default async function ReadNote() {
  const notes = await prisma.note.findMany();
  
  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center border-b pb-4">
        All Notes
      </h2>
      
      {notes.length === 0 ? (
        <p className="text-gray-500 text-center py-8">
          No notes found. Create your first note!
        </p>
      ) : (
        <ul className="space-y-4">
          {notes.map((note) => (
            <li
              key={note.id}
              className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow duration-200"
            >
              <div className="mb-3">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {note.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {note.content}
                </p>
              </div>
              
              <div className="flex gap-2 pt-2 border-t border-gray-200">
                <UpdateNoteButton id={note.id} />
                <DeleteNoteButton id={note.id} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
