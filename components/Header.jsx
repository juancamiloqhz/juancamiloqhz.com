import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='py-4 flex justify-between'>
        <Link href="/"><a className='text-gray-800 hover:text-gray-400'>JuanCamiloQhz</a></Link>
        <Link href="/about"><a className='text-gray-800 hover:text-gray-400'>About</a></Link>
    </header>
  )
}
