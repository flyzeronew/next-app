import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home 更新惹</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us 更新惹</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/hello-world">
          <a>Blog Post 更新惹</a>
        </Link>
      </li>
    </ul>
  )
}
export default Home
