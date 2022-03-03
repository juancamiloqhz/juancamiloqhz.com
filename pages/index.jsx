import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Meta, Post } from "../components";
import { posts } from "../scripts/getAllPosts";
import Link from 'next/link';
import Header from '../components/Header';


export default function Home() {
  console.dir(posts, { depth: null})
  return (
    <div className="prose container mx-auto max-w-5xl flex flex-col min-h-screen px-4">
      <Meta />
      <Header />
      <main className="">
        <h2 className="">
          All Posts
        </h2>

        <div className="">
          {posts.map((post) => (
            <Post key={post.link} post={post} />
          ))}          
        </div>
      </main>

      <footer className="">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
