import Link from "next/link";
import css from "./Not-found.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>404</h1>
      <p className={css.description}>Сторінка не знайдена</p>
      <Link href="/" className={css.link}>
        Повернутись на головну
      </Link>
    </div>
  );
}
