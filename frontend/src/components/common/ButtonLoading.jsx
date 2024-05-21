import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ButtonLoading({
  isLoading,
  className,
  children,
  variant = "default",
  disabled = false,
  ...props
}) {
  return (
    <Button
      disabled={isLoading || disabled}
      variant={variant}
      type="submit"
      className={className}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </>
      ) : (
        <>{children}</>
      )}
    </Button>
  );
}
