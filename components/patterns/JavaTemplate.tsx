import { CodeBlock } from "@/components/ui/CodeBlock";

export function JavaTemplate({ code }: { code: string }) {
  return (
    <section className="mt-6">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold tracking-[0]">Java Template</h2>
        <span className="label">JetBrains Mono</span>
      </div>
      <CodeBlock code={code} language="java" />
    </section>
  );
}
