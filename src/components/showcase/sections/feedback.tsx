import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { shimmer } from "@/lib/shimmer";
import { DemoBlock } from "../demo-block";

export function FeedbackSection() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <DemoBlock title="Badge & Avatar" description="Статусы и пользователи.">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarFallback>SG</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>DS</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>UI</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </DemoBlock>

      <DemoBlock title="Spinner" description="Индикатор загрузки в кнопках.">
        <div className="flex flex-wrap items-center gap-4">
          <Spinner />
          <Spinner className="size-6 text-primary" />
          <Button disabled>
            <Spinner />
            Загружаем
          </Button>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Skeleton"
        description="Плейсхолдер контента через animate-pulse."
      >
        <div className="flex items-center gap-4">
          <Skeleton className="size-12 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </DemoBlock>

      <DemoBlock
        title="Shimmer"
        description="Утилита shimmer() — бегущий блик вместо пульсации."
      >
        <div className="flex items-center gap-4">
          <div className={shimmer("size-12 rounded-full")} />
          <div className="flex-1 space-y-2">
            <div className={shimmer("h-4 w-3/4")} />
            <div className={shimmer("h-4 w-1/2")} />
          </div>
        </div>
      </DemoBlock>
    </div>
  );
}
