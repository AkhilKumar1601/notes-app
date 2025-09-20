import prisma from "@/db";
import DeleteNoteButton from "./DeleteNoteButton"
import UpdateNoteButton from "./UpdateNoteButton"

export default async function ReadNote() {
  const notes = await prisma.note.findMany();

  return (
    <div>
      <h2>All Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <strong>{note.title}</strong>: {note.content}
            <DeleteNoteButton id={note.id}/>
            <UpdateNoteButton id={note.id}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
