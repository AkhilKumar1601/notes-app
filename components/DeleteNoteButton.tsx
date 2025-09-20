"use client"
import axios from "axios";

interface DeleteNoteButtonProps {
  id: number;
}

export default function DeleteNoteButton({ id }: DeleteNoteButtonProps) {
  async function clickHandler() {
    try {
      await axios.delete(`/api/user?id=${id}`);
      alert(`Note ${id} deleted successfully`);
      // Optionally, you can trigger a re-fetch or state update here
    } catch (error) {
      console.error("Failed to delete note:", error);
      alert("Failed to delete note");
    }
  }

  return (
    <div>
      <button onClick={clickHandler}>Delete Note</button>
    </div>
  );
}
