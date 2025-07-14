import css from "./Header.module.css";
import Link from "next/link";
import TagsMenu from "../TagsMenu/TagsMenu";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link href="/" className={css.a} aria-label="Home">
          NoteHub
        </Link>
        <nav className={css.navigation} aria-label="Filter notes by tag">
          <TagsMenu />
        </nav>
      </div>
    </header>
  );
}
