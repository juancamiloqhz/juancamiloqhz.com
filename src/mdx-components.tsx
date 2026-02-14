import * as React from "react"
import Image from "next/image"
import { Link } from "next-view-transitions"
import { highlight } from "sugar-high"

import { cn } from "@/lib/utils"

const components = {
  h1: ({ className, ...props }: React.ComponentProps<"h1">) => (
    <h1
      className={cn("font-medium pt-12 mb-0 fade-in", className)}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.ComponentProps<"h2">) => (
    <h2
      className={cn("font-medium mt-8 mb-3 tracking-tight", className)}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3
      className={cn("font-medium mt-8 mb-3 tracking-tight", className)}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.ComponentProps<"h4">) => (
    <h4
      className={cn("font-medium mt-8 tracking-tight", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.ComponentProps<"p">) => (
    <p
      className={cn("leading-relaxed [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.ComponentProps<"ul">) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.ComponentProps<"ol">) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.ComponentProps<"li">) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  strong: ({ className, ...props }: React.ComponentProps<"strong">) => (
    <strong className={cn("font-medium", className)} {...props} />
  ),
  a: ({
    className,
    href,
    children,
    ...props
  }: React.ComponentProps<"a">) => {
    const styles = cn("font-medium underline underline-offset-4", className)
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={styles} {...props}>
          {children}
        </Link>
      )
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={styles} {...props}>
          {children}
        </a>
      )
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
        {...props}
      >
        {children}
      </a>
    )
  },
  blockquote: ({ className, ...props }: React.ComponentProps<"blockquote">) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-border pl-6 text-muted-foreground italic",
        className
      )}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }: React.ComponentProps<"img">) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }: React.ComponentProps<"hr">) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  table: ({ className, ...props }: React.ComponentProps<"table">) => (
    <div className="my-6 w-full overflow-y-auto rounded-xl border">
      <table
        className={cn(
          "relative w-full overflow-hidden border-none text-sm [&_tbody_tr:last-child]:border-b-0",
          className
        )}
        {...props}
      />
    </div>
  ),
  tr: ({ className, ...props }: React.ComponentProps<"tr">) => (
    <tr className={cn("m-0 border-b", className)} {...props} />
  ),
  th: ({ className, ...props }: React.ComponentProps<"th">) => (
    <th
      className={cn(
        "px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.ComponentProps<"td">) => (
    <td
      className={cn(
        "px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.ComponentProps<"pre">) => (
    <pre
      className={cn(
        "overflow-x-auto rounded-lg px-4 py-3.5",
        className
      )}
      {...props}
    />
  ),
  code: ({ className, children, ...props }: React.ComponentProps<"code">) => {
    if (typeof children === "string" && !className?.includes("language-")) {
      return (
        <code
          className={cn(
            "bg-muted relative rounded-md px-[0.3rem] py-[0.2rem] font-mono text-[0.85em]",
            className
          )}
          {...props}
        >
          {children}
        </code>
      )
    }

    if (typeof children !== "string") {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      )
    }

    const codeHTML = highlight(children)
    return (
      <code
        className={className}
        dangerouslySetInnerHTML={{ __html: codeHTML }}
        {...props}
      />
    )
  },
  Image: ({
    className,
    alt,
    ...props
  }: React.ComponentProps<typeof Image>) => (
    <Image className={cn("mt-6 rounded-md border", className)} alt={alt} {...props} />
  ),
}

declare global {
  type MDXProvidedComponents = typeof components
}

export function getMDXComponents(): MDXProvidedComponents {
  return components
}

export function useMDXComponents(): MDXProvidedComponents {
  return components
}
