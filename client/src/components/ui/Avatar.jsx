const sizes = {
  sm: "h-7 w-7 text-xs",
  md: "h-8 w-8 text-sm",
  lg: "h-10 w-10 text-base",
};

export default function Avatar({ name, size = "md", className = "" }) {
  const initial = name ? name.charAt(0).toUpperCase() : "?";

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-[var(--accent)] font-semibold text-white shrink-0 ${sizes[size]} ${className}`}
    >
      {initial}
    </div>
  );
}
