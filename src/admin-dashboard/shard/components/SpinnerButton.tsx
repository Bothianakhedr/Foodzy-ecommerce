import { Spinner } from "@/components/ui/spinner";

export function SpinnerButton() {
  return (
    <div className="flex  items-center gap-4">
      <Spinner data-icon="inline-start" />
      <span> Loading...</span>
    </div>
  );
}
