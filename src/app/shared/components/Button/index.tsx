import { CgSpinner } from "react-icons/cg";
import { twMerge } from "tailwind-merge";
import { tv, VariantProps } from "tailwind-variants";

const baseConfigButton = tv({
  base: "rounded-full flex items-center justify-center gap-x-2 transition duration-300 ease-in-out w-fit font-workSans",
  variants: {
    variant: {
      contained:
        "text-white bg-primary-500 hover:bg-primary-400 focus:ring-primary-300 focus:ring-2 focus:outline-none disabled:bg-neutral-300 disabled:text-neutral-200 disabled:cursor-not-allowed",
      outlined:
        "border border-neutral-600 text-neutral-600 hover:bg-neutral-100 focus:ring-neutral-100 focus:ring-2 focus:outline-none disabled:bg-neutral-300 disabled:text-neutral-200 disabled:cursor-not-allowed disabled:border-neutral-700 disabled:text-neutral-600",
      text: "text-neutral-600 disabled:cursor-not-allowed disabled:text-opacity-50 p-0 h-auto bg-transparent",
      icon: "bg-white p-0 bg-transparent text-gray-300",
    },
    size: {
      xs: "h-[34px] px-3 text-xs font-medium",
      sm: "h-[37px] px-3 text-sm font-medium",
      base: "h-[41px] px-5 text-sm font-bold",
      lg: "h-12 px-5 text-base font-bold",
      xl: "h-[52px] px-6 text-base font-bold",
      icon: "h-auto",
    },
  },
  defaultVariants: {
    size: "base",
    variant: "contained",
  },
});

type ButtonVariants = VariantProps<typeof baseConfigButton>;

interface ButtonProps
  extends ButtonVariants,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  loading?: boolean;
}

export default function Button({
  children,
  variant = "contained",
  size,
  className,
  loading,
  ...rest
}: ButtonProps) {
  const conditionColorSpinner = {
    contained: "full-white",
    outlined: "full-gray-500",
  };

  return (
    <button
      className={twMerge(baseConfigButton({ variant, size }), className)}
      {...rest}
    >
      {children}
      {loading && (
        <CgSpinner
          size={24}
          data-testid="spinner"
          className={twMerge(
            conditionColorSpinner[variant as "contained" | "outlined"],
            "animate-spin"
          )}
        />
      )}
    </button>
  );
}

const stepperConfigButton = tv({
  base: "w-10 h-2 rounded-full",
  variants: {
    variant: {
      pending: "bg-gray-100 shadow-sm ",
      current: " bg-[#A1AD91]",
      completed: " bg-primary-500 ",
      loading: "bg-gray-100",
    },
  },
  defaultVariants: {
    variant: "pending",
  },
});

type StepButtonVariants = VariantProps<typeof stepperConfigButton>;

interface StepButtonProps
  extends StepButtonVariants,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  loading?: boolean;
}

export function StepButton({
  children,
  variant = "pending",
  className,
  loading,
  ...rest
}: StepButtonProps) {
  const conditionColorSpinner = {
    contained: "full-white",
    outlined: "full-gray-500",
  };

  return (
    <button
      className={twMerge(stepperConfigButton({ variant }), className)}
      {...rest}
    />
  );
}
