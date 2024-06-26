import * as React from "react";
import Moon from "./Moon";
import Sun from "./Sun";

import { Button } from "@/components/ui/Button";

export default function ModeToggle() {
  const [theme, setThemeState] = React.useState<"theme-light" | "dark" | "system">("theme-light");

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  React.useEffect(() => {
    const isDark =
      theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  const handleChangeTheme = () => {
    theme === "theme-light" ? setThemeState("dark") : setThemeState("theme-light");
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleChangeTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
