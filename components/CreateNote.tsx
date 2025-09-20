"use client";
import React, { useState } from "react";
import axios from "axios";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await axios.post("/api/user", { title, content });
    setTitle("");
    setContent("");
  }

  return (
    
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create New Note</h2>
      <form onSubmit={submitHandler} className="space-y-4">
        <LabelledInput
          type="text"
          placeholder="Enter the title for your note"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="Title"
        />
        <LabelledInput
          type="text"
          placeholder="Enter the content for your note"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          label="Content"
        />
        <button 
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Create Note
        </button>
      </form>
    </div>
  );
}

interface LabelledInputParams {
  type: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
}

function LabelledInput({
  type,
  placeholder,
  value,
  onChange,
  label,
}: LabelledInputParams) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
      />
    </div>
  );
}