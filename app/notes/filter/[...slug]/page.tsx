import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

interface Params {
  slug?: string[];
}

export default async function Page({ params }: { params: Params }) {
  const tag = params.slug?.[0] || "All";

  const initialData = await fetchNotes({ tag, page: 1 });

  return <NotesClient initialData={initialData} tag={tag} />;
}
