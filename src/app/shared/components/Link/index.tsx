import LinkNext, { LinkProps } from "next/link"
import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"
import { VariantProps, tv } from "tailwind-variants"

const baseConfigLink = tv({
  base: "rounded-full flex items-center justify-center gap-x-2 transition duration-300 ease-in-out w-fit font-workSans",
  variants: {
    variant: {
      default: "text-sm text-gray-800 underline",
      contained:
        "text-white bg-primary-600 hover:bg-primary-500 focus:ring-primary-400 focus:ring-2 focus:outline-none disabled:bg-neutral-700 disabled:text-neutral-50 disabled:cursor-not-allowed",
      outlined:
        "border border-primary-700 text-neutral-500 hover:bg-primary-500 focus:text-white hover:text-white focus:ring-primary-400 focus:ring-2 focus:outline-none",
      menu: "h-fit font-normal text-neutral-500 text-sm font-workSans flex items-center justify-center hover:text-primary-600",
    },

    size: {
      xs: "h-[34px] px-3 text-xs font-medium",
      sm: "h-[37px] px-3 text-sm font-medium",
      base: "h-[41px] px-5 text-sm font-semibold",
      lg: "h-12 px-5 text-base font-semibold",
      xl: "h-[52px] px-6 text-base font-semibold",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

type LinkVariants = VariantProps<typeof baseConfigLink>

interface Props extends LinkVariants, LinkProps {
  children: ReactNode
  className?: string
  external?: boolean
}

export default function Link({
  href,
  children,
  variant,
  size,
  className,
  external,
  ...rest
}: Props) {
  return (
    <LinkNext
      className={twMerge(baseConfigLink({ variant, size }), className)}
      href={href}
      target={external ? "_blank" : "_self"}
      {...rest}
    >
      {children}
    </LinkNext>
  )
}
