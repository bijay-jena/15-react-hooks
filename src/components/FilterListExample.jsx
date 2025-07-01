// 1️⃣ useMemo runs the filter only when query changes — not on every render for other reasons.
// 2️⃣ Without useMemo, the filter runs on every render, even if query didn’t change (wasteful for large lists).
// 3️⃣ The console.log shows when the filter runs — handy for debugging.

import { useState, useMemo } from "react";

const items = [
  "React",
  "Angular",
  "Vue",
  "Svelte",
  "SolidJS",
  "Ember",
  "Backbone",
];

export default function FilterListExample() {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    console.log("Filtering...");
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]); // re-run ONLY when query changes

  return (
    <div>
      <input
        placeholder="Search frameworks..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

/**
 * 1️⃣ useMemo runs the filter only when query changes — not on every render for other reasons.
 * 2️⃣ Without useMemo, the filter runs on every render, even if query didn’t change (wasteful for large lists).
 * 3️⃣ The console.log shows when the filter runs — handy for debugging.
 */
