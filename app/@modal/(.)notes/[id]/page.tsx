"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";
import { fetchNoteById } from "@/lib/api";
import { Note } from "@/types/note";

export default function NoteModalPage() {
  const { id } = useParams();
  const [note, setNote] = useState<Note | null>(null);

  useEffect(() => {
    if (typeof id === "string") {
      fetchNoteById(Number(id)).then(setNote);
    }
  }, [id]);

  if (!note) return null;

  return (
    <Modal onClose={() => history.back()}>
      <NotePreview note={note} onBack={() => history.back()} />
    </Modal>
  );
}
