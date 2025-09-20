"use client";
import axios from "axios";
import { useState } from "react";

interface UpdateNoteButtonProps {
  id: number;
}

export default function UpdateNoteButton({ id }: UpdateNoteButtonProps) {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleUpdate() {
    try {
      await axios.put("/api/user", { id, title, content });
      alert(`Note ${id} updated successfully`);
      setTitle("");
      setContent("");
      setShowForm(false); // hide the form after update
    } catch (error) {
      console.error("Failed to update note:", error);
      alert("Failed to update note");
    }
  }

  return (
    <div style={{ marginTop: "0.5rem" }}>
      {!showForm && (
        <button onClick={() => setShowForm(true)}>Edit Note</button>
      )}

      {showForm && (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter new title"
          />
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter new content"
          />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => setShowForm(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

