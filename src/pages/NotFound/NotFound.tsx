import { Button } from "@/components/Button/Button";

export function NotFound() {
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
