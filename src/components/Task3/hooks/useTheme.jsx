import { useCallback, useEffect, useState } from "react";

export function useTheme(initial = "light") {
  const [theme, setTheme] = useState(initial);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current) setTheme(current);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  }, []);

  return { theme, setTheme, toggle };
}
