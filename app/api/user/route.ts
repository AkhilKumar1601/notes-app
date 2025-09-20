import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { title, content } = await req.json();

    await prisma.note.create({
      data: { title, content },
    });

    return NextResponse.json(
      { message: "Note created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating note:", error);
    return NextResponse.json(
      { error: "Failed to create note" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {

    const notes = await prisma.note.findMany();

    return NextResponse.json({
      message : "All notes fetched successfully",
      data : notes
    }, { status : 201})

  } catch (e) {
    console.error("Error while fetching the Notes",e);
    return NextResponse.json(
      { error : "Failed to fetch the notes" },
      { status : 500}
    )
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const idParam = searchParams.get("id");

    if (!idParam) {
      return NextResponse.json({ error: "Note ID is required" }, { status: 400 });
    }

    const id = parseInt(idParam, 10);

    await prisma.note.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: `Note with id ${id} deleted successfully` },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting note:", error);
    return NextResponse.json({ error: "Failed to delete note" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, title, content } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "Note ID is required" }, { status: 400 });
    }

    const updatedNote = await prisma.note.update({
      where: { id: Number(id) },
      data: { title, content },
    });

    return NextResponse.json(
      { message: "Note updated successfully", note: updatedNote },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating note:", error);
    return NextResponse.json(
      { error: "Failed to update note" },
      { status: 500 }
    );
  }
}