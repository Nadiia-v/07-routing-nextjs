import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

interface PageProps {
  params: {
    slug: string[];
  };
}

export default async function FilteredNotesPage({ params }: PageProps) {
  const tag = params.slug?.[0] || "All";

  const initialData = await fetchNotes({ tag, page: 1 });

  return <NotesClient initialData={initialData} tag={tag} />;
}
