export default function TokensTestPage() {
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-h1 text-primary">Semantic Token Test</h1>

      <section className="space-y-2">
        <h2 className="text-h2">Typography + Color Tokens</h2>

        <p className="text-body">
          text-body → should inherit <code>--color-body</code>
        </p>

        <p className="text-caption">
          text-caption → should inherit <code>--color-caption</code>
        </p>

        <p className="text-primary">
          text-primary → should inherit <code>--color-primary</code>
        </p>

        <p className="text-secondary">
          text-secondary → should inherit <code>--color-secondary</code>
        </p>

        <p className="text-accent">
          text-accent → should inherit <code>--color-accent</code>
        </p>

        <p className="text-success">
          text-success → should inherit <code>--color-success</code>
        </p>

        <p className="text-warning">
          text-warning → should inherit <code>--color-warning</code>
        </p>

        <p className="text-error">
          text-error → should inherit <code>--color-error</code>
        </p>
      </section>

      <section className="space-y-2 p-4 rounded-lg bg-muted">
        <h2 className="text-h2">Background + Muted</h2>
        <div className="p-4 bg-background rounded">bg-background box</div>
        <div className="p-4 bg-muted rounded">bg-muted box</div>
      </section>

      <section className="space-y-2 p-4 rounded-lg bg-gray-100">
        <h2 className="text-h2">Gray Scale</h2>
        <div className="flex flex-wrap gap-4">
          <div className="w-24 h-12 bg-gray-50">gray-50</div>
          <div className="w-24 h-12 bg-gray-100">gray-100</div>
          <div className="w-24 h-12 bg-gray-200">gray-200</div>
          <div className="w-24 h-12 bg-gray-400">gray-400</div>
          <div className="w-24 h-12 bg-gray-600">gray-600</div>
          <div className="w-24 h-12 bg-gray-800 text-white">gray-800</div>
        </div>
      </section>
    </main>
  );
}
