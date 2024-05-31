import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/courses/university/vu/computer-science/">
            Computer Science
          </Link>
        </li>
      </ul>
    </div>
  );
}
