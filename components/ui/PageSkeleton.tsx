export function PageSkeleton() {
  return (
    <div className="space-y-6">
      <div className="h-24 animate-pulse rounded-card border border-border bg-surface" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="h-28 animate-pulse rounded-card border border-border bg-surface" />
        ))}
      </div>
      <div className="h-96 animate-pulse rounded-card border border-border bg-surface" />
    </div>
  );
}
