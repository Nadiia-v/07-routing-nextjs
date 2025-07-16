import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function FilteredNotesPage({ params }: PageProps) {
  const resolvedParams = await params;
  const tag = resolvedParams.slug?.[0] || "All";

  const initialData = await fetchNotes({ tag, page: 1 });

  return <NotesClient initialData={initialData} tag={tag} />;
}
