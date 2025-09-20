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
    <div className="mt-2">
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-md transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Edit Note
        </button>
      )}
      
      {showForm && (
        <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="space-y-3">
            <div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter new title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              />
            </div>
            
            <div>
              <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter new content"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              />
            </div>
            
            <div className="flex gap-2 pt-2">
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium text-sm rounded-md transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Update
              </button>
              
              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white font-medium text-sm rounded-md transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
