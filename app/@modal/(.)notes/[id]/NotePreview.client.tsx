"use client";

import { useEffect } from "react";
import css from "./NotePreview.client.module.css";

interface NotePreviewProps {
  id: string;
  onClose: () => void;
}

export default function NotePreview({ id, onClose }: NotePreviewProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <h2>Note ID: {id}</h2>
        <p>Here you can render note details...</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
