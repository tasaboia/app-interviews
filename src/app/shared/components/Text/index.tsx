import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { VariantProps, tv } from "tailwind-variants";

const configHeading = tv({
  base: "m-0 text-neutral-800 font-inter",
  variants: {
    sizes: {
      xl: "text-5xl xs:text-4xl sm:text-4xl md:text-3xl font-extrabold",
      lg: "text-4xl xs:text-2xl sm:text-xl md:text-3xl font-bold",
      base: "text-3xl xs:text-xl sm:text-xl font-bold",
      sm: "text-2xl xs:text-lg font-bold",
      xs: "text-xl xs:text-lg font-bold",
    },
    family: {
      inter: "font-inter",
    },
  },
  defaultVariants: {
    family: "inter",
    sizes: "lg",
  },
});

type HeadingVariants = VariantProps<typeof configHeading>;
interface HeadingProps
  extends HeadingVariants,
    React.LabelHTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

function Heading({
  children,
  sizes,
  family,
  className,
  ...rest
}: HeadingProps) {
  return (
    <h1
      className={twMerge(configHeading({ sizes, family }), className)}
      {...rest}
    >
      {children}
    </h1>
  );
}

const configSubtitle = tv({
  base: "m-0",
  variants: {
    sizes: {
      md: "text-md xs:text-base sm:text-base md:text-base font-medium",
      lg: "text-lg xs:text-base sm:text-base md:text-base font-medium",
      xl: "text-xl xs:text-lg sm:text-lg font-medium",
    },
    family: {
      inter: "font-inter",
    },
  },
  defaultVariants: {
    sizes: "lg",
    family: "inter",
  },
});

type SubtitleVariants = VariantProps<typeof configSubtitle>;
interface SubtitleProps
  extends SubtitleVariants,
    React.LabelHTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

function Subtitle({
  children,
  sizes,
  family,
  className,
  ...rest
}: SubtitleProps) {
  return (
    <h2
      className={twMerge(configSubtitle({ sizes, family }), className)}
      {...rest}
    >
      {children}
    </h2>
  );
}

const configBody = tv({
  base: "leading-5 font-normal",
  variants: {
    variant: {
      caption: "text-xs leading-4 font-normal",
      overline:
        "text-[10px] leading-4 uppercase font-semibold tracking-[1.5px]",
    },
    size: {
      base: "text-base",
      lg: "text-lg",
      sm: "text-sm",
      xs: "text-xs",
      xxs: "text-[10px]",
    },
    family: {
      inter: "font-inter",
    },
  },
  defaultVariants: {
    family: "inter",
    size: "base",
  },
});

type BodyVariants = VariantProps<typeof configBody>;
interface BodyProps
  extends BodyVariants,
    React.LabelHTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

function Body({
  children,
  variant,
  size,
  family,
  className,
  ...rest
}: BodyProps) {
  return (
    <p
      className={twMerge(configBody({ variant, family, size }), className)}
      {...rest}
    >
      {children}
    </p>
  );
}

export default { Heading, Subtitle, Body };
