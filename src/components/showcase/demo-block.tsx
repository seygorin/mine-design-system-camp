import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type DemoBlockProps = {
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}

export function DemoBlock({ title, description, children, className }: DemoBlockProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
