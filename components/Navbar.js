'use client';

import Link from "next/link";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {

    const [username, setUsername] = useState('');
    const router = useRouter();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (username.trim()) {
        router.push(`/users/${username.trim()}`);
      }
    };
  console.log(styles);
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/posts">
          <li>Posts</li>
        </Link>
        <Link href="/users">
          <li>Users</li>
        </Link>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search users"
        />
        <button type="submit">Go</button>
      </form>
      </ul>
    </nav>
  );
}
