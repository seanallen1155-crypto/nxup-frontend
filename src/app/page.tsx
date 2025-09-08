import { AppLayout } from "../components/layout/AppLayout";
import { Button } from "../components/ui/Button";

export default function HomePage() {
  return (
    <AppLayout>
      <section className="flex flex-col items-center justify-center text-center space-y-6 py-16">
        <h1 className="text-4xl font-bold">Welcome to NXUP</h1>
        <p className="max-w-md text-text-secondaryLight dark:text-text-secondaryDark">
          This is a demo of your design system in action — using the AppLayout
          (with NavBar, Footer, and BottomNav) and the Button component styled
          via tokens.
        </p>

        <div className="space-x-4">
          <Button variant="primary">Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </section>
    </AppLayout>
  );
}
