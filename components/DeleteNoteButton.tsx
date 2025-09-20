"use client";
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
    <button
      onClick={clickHandler}
      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium text-sm rounded-md transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-800"
    >
      Delete Note
    </button>
  );
}