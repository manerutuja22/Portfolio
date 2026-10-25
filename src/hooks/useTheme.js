import { useEffect, useState } from "react";

export default function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
  }, [dark]);

  return { dark, toggle: () => setDark((d) => !d) };
}
