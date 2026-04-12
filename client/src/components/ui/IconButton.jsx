import React from "react";

export default function IconButton({
  title,
  "aria-label": ariaLabel,
  active = false,
  children,
  className = "",
  onClick,
}) {
  return (
    <button
      type="button"
      title={title}
      aria-label={ariaLabel || title}
      onClick={onClick}
      className={[
        "h-9 w-9 inline-flex items-center justify-center rounded-md transition",
        active ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/10 hover:text-white",
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}

