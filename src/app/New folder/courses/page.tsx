import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/courses/university/">University</Link>
        </li>
      </ul>
    </div>
  );
}
