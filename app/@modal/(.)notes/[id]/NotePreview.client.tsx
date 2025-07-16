"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import { Note } from "@/types/note";
import Modal from "@/components/Modal/Modal";
import css from "./NotePreview.client.module.css";

interface NotePreviewModalProps {
  id: number;
}

export default function NotePreviewModal({ id }: NotePreviewModalProps) {
  const router = useRouter();

  const {
    data: note,
    isLoading,
    error,
  } = useQuery<Note>({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") router.back();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [router]);

  if (isLoading) {
    return (
      <Modal onClose={() => router.back()}>
        <div className={css.modal}>Loading...</div>
      </Modal>
    );
  }

  if (error || !note) {
    return (
      <Modal onClose={() => router.back()}>
        <div className={css.modal}>Error loading note.</div>
      </Modal>
    );
  }

  return (
    <Modal onClose={() => router.back()}>
      <div className={css.modal}>
        <h2>Note ID: {note.id}</h2>
        <p>
          <strong>Title:</strong> {note.title}
        </p>
        <p>
          <strong>Content:</strong> {note.content}
        </p>
        <p>
          <strong>Tag:</strong> {note.tag}
        </p>
        <p>
          <strong>Created:</strong> {note.createdAt}
        </p>
      </div>
    </Modal>
  );
}
