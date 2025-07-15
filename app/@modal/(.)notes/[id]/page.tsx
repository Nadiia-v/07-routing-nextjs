"use client";

import { useParams } from "next/navigation";
import NotePreview from "./NotePreview.client";

export default function Page() {
  const { id } = useParams();

  if (typeof id !== "string") return null;

  return <NotePreview id={id} onClose={() => history.back()} />;
}
