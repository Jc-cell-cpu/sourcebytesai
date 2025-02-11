import type React from "react"
import { cn } from "@/lib/utils"

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "small" | "medium" | "large"
}

export function Loader({ size = "medium", className, ...props }: LoaderProps) {
    return (
        <div
            className={cn(
                "inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
                {
                    "h-4 w-4 border-2": size === "small",
                    "h-8 w-8 border-4": size === "medium",
                    "h-12 w-12 border-4": size === "large",
                },
                className,
            )}
            role="status"
            {...props}
        >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
            </span>
        </div>
    )
}

