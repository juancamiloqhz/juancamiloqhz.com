import { useRouter } from "next/router"
import { format, parseISO } from "date-fns"
import { es } from "date-fns/locale"

export default function DateFormatter({
  dateString,
  normalSize = false,
}: {
  dateString: string
  normalSize?: boolean
}) {
  const { locale } = useRouter()
  const date = parseISO(dateString)
  return (
    <time
      dateTime={dateString}
      className={`${
        normalSize ? "text-base" : "md:text-lg"
      } text-base-content/60`}
    >
      {format(date, "d MMM yyyy", {
        locale: locale === "es" ? es : undefined,
      })}
    </time>
  )
}
