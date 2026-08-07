export default function Card({
  children,
  hoverable = false,
  className = "",
  ...props
}) {
  return (
    <div
      className={`bg-[var(--bg-elevated)] border border-[var(--border-default)] rounded-[var(--radius-md)] p-5 ${
        hoverable
          ? "transition-[border-color] duration-150 hover:border-[#3a3a3d]"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
