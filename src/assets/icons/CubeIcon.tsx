export function CubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`text-base leading-none ${className}`}>
      ◈
    </span>
  )
}