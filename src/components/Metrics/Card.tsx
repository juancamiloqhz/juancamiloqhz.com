interface MetricCardProps {
  header: string
  link: string
  metric: number
  isCurrency?: boolean
}

export default function MetricCard({
  header,
  link,
  metric,
  isCurrency,
}: MetricCardProps) {
  return (
    <div className="metric-card max-w-72 w-full rounded-[var(--rounded-btn)] border border-primary p-4">
      <a
        aria-label={header}
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        <div className="flex items-center text-primary">
          {header}
          <svg
            className="ml-1 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </a>
      <p className="spacing-sm mt-2 text-3xl font-bold text-primary">
        {metric > 0 && isCurrency && "$"}
        {metric > 0 ? metric.toLocaleString() : "-"}
      </p>
    </div>
  )
}
