import Link from "next/link";

export default function Home() {
  return (
    <div>
        <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/socials">Socials</Link>
      </li>
    </ul>
    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
    </div>
  );
}
