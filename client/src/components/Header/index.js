import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
        <div>
            <Link to="/">Home</Link>
        </div>
      <nav>
        <ul>
          <li>
            <Link to="/happy">Happy</Link>
          </li>
          <li>
            <Link to="/okay">Okay</Link>
          </li>
          <li>
            <Link to="/anxious">Anxious</Link>
          </li>
          <li>
            <Link to="/sad">Sad</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
