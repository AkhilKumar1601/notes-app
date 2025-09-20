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
    <div>
      <form onSubmit={submitHandler}>
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
        <button type="submit">Create Note</button>
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
    <div>
      {label && <label>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
