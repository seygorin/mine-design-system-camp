import { cn } from "cn"

function Spinner({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      className={cn("cubist-portrait cubist-portrait-live size-4 shadow-cubist", className)}
      {...props}
    />
  )
}

export { Spinner }
