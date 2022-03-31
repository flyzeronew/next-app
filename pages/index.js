import Link from 'next/link'
export default function Home() {
  return(
    <ul>
    <li>
      <Link href="/">
        <a>Home1</a>
      </Link>
    </li>
    <li>
      <Link href="/about">
        <a>About Us1</a>
      </Link>
    </li>
    <li>
      <Link href="/blog/hello-world">
        <a>Blog Post1</a>
      </Link>
    </li>
  </ul>
  )
}