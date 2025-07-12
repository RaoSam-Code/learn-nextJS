"use client";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number>();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer style={{ backgroundColor: "lightblue", padding: "1rem" }}>
      <i>&copy; {year ?? "—"} All Rights Reserved</i>
    </footer>
  );
}
