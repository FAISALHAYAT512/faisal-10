"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <ul className="flex gap-6">
        <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
        <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
        <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
      </ul>
    </nav>
  )
}
