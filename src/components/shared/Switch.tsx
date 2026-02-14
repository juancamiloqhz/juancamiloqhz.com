import React from "react"
import { Switch as SwitchPrimitive } from "radix-ui"
import cx from "classnames"

const Switch = ({
  fn,
  trackDimensions = "h-4 w-8",
  thumbDimensions = "h-3 w-3",
  thumbTranslate = "translate-x-4",
  checked = true,
  disabled = false,
}: {
  fn: React.Dispatch<React.SetStateAction<boolean>> | (() => void)
  trackDimensions?: string
  thumbDimensions?: string
  thumbTranslate?: string
  checked?: boolean
  disabled?: boolean
}) => {
  return (
    <SwitchPrimitive.Root
      defaultChecked={checked}
      onCheckedChange={(checked) => fn(checked)}
      disabled={disabled}
      className={cx(
        disabled
          ? "cursor-not-allowed bg-gray-200"
          : "cursor-pointer radix-state-checked:bg-primary-focus radix-state-unchecked:bg-primary-focus",
        `relative inline-flex ${trackDimensions} flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out`,
        "focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75"
      )}
    >
      <SwitchPrimitive.Thumb
        className={cx(
          `radix-state-checked:${thumbTranslate}`,
          "radix-state-unchecked:translate-x-0",
          `pointer-events-none ${thumbDimensions} transform ${thumbTranslate} rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export default Switch
