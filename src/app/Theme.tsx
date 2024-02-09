import type { CustomFlowbiteTheme } from "flowbite-react"
import { Flowbite } from "flowbite-react"
import { ReactNode } from "react"

const customTheme: CustomFlowbiteTheme = {
  textInput: {
    base: "w-full",
    field: {
      input: {
        base: "w-full px-4",
        sizes: {
          md: "h-[50px] font-inter",
        },
        colors: {
          gray: "text-neutral-600 font-medium bg-neutral-100 border-2 border-neutral-200 focus:border-2 placeholder:text-neutral-500 focus:border-neutral-400 px-4 focus:ring-0 focus:outline-none focus-visible:outline-none",
          failure:
            "bg-neutral-100 border border-red-500 text-red-500 font-medium placeholder:text-red-500 text-base focus:border-2 focus:ring-0 focus:outline-none focus:placeholder:text-red-500 focus:border-red-400 focus:outline-none focus-visible:outline-none outline-none",
        },
      },
    },
  },
}

export default function PsiTheme({ children }: { children: ReactNode }) {
  return <Flowbite theme={{ theme: customTheme }}>{children}</Flowbite>
}
