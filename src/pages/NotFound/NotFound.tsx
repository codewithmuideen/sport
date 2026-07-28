import { Button } from "@/components/Button/Button";
import { useSeo } from "@/hooks/useSeo";

export function NotFound() {
  useSeo({
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist or has been moved.",
    path: "/404",
    noindex: true,
  });

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center container-px text-center">
      <p className="font-display text-8xl gold-text mb-6">404</p>
      <h1 className="font-heading uppercase text-2xl text-parchment mb-4">Page Not Found</h1>
      <p className="text-silver-400 mb-10 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button to="/" variant="primary">
        Back to Home
      </Button>
    </div>
  );
}
