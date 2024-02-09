"use client";

import {
  Label,
  TextInput,
  TextInputProps,
  Textarea as FlowTextarea,
  TextareaProps,
} from "flowbite-react";
import { FormEventHandler, ReactNode, useState } from "react";
import { Controller, FormProvider, useFormContext } from "react-hook-form";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { twMerge } from "tailwind-merge";
import { VariantProps, tv } from "tailwind-variants";
import Button from "../Button";
import InputMask from "./InputMask";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  methods: any;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

function Form({ children, onSubmit, methods, ...rest }: FormProps) {
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={onSubmit}
        autoComplete="off"
        autoCapitalize="off"
        {...rest}
      >
        {children}
      </form>
    </FormProvider>
  );
}

interface InputProps extends TextInputProps {
  name: string;
  label?: string;
  helperText?: string;
  "data-testid"?: string;
}

export function Input({
  name,
  label,
  helperText,
  className,
  ...rest
}: InputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <div
            className="flex flex-col w-full gap-y-2"
            data-cy={`field-control-${name}`}
          >
            {label && <Label htmlFor={name} value={label} />}
            <TextInput
              {...field}
              className={className}
              value={field.value}
              data-testid={rest["data-testid"]}
              {...rest}
              color={error ? "failure" : "gray"}
              helperText={error ? error?.message : helperText || ""}
            />
          </div>
        );
      }}
    />
  );
}

interface ITextarea extends TextareaProps {
  name: string;
  label?: string;
  helperText?: string;
}

export function Textarea({
  name,
  label,
  helperText,
  className,
  ...rest
}: ITextarea) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <div
            className="flex flex-col w-full gap-y-2"
            data-cy={`field-control-${name}`}
          >
            {label && <Label htmlFor={name} value={label} />}
            <FlowTextarea
              {...field}
              className={className}
              value={field.value}
              {...rest}
              color={error ? "failure" : "gray"}
              helperText={error ? error?.message : helperText || ""}
            />
          </div>
        );
      }}
    />
  );
}

export function InputPassword({
  name,
  label,
  helperText,
  className,
  type,
  ...rest
}: InputProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <div className="relative flex flex-col w-full gap-y-2">
            {label && <Label htmlFor={name} value={label} />}
            <TextInput
              {...field}
              className={className}
              value={field.value}
              {...rest}
              type={visible ? "text" : "password"}
              color={error ? "failure" : "gray"}
              helperText={error ? error?.message : helperText || ""}
            />
            <Button
              variant="icon"
              size="icon"
              type="button"
              data-testid="field-password-button-toggle-visible"
              className="absolute top-[45px] right-4"
              onClick={() => setVisible(!visible)}
            >
              {visible ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
            </Button>
          </div>
        );
      }}
    />
  );
}

const baseConfigInputMask = tv({
  base: "w-full px-4 h-[50px] font-inter rounded-lg transition duration-300 ease-in-out",
  variants: {
    colors: {
      gray: "text-neutral-600 font-medium bg-neutral-100 border-2 border-neutral-200 focus:border-2 placeholder:text-neutral-500 focus:border-neutral-400 px-4 focus:ring-0 focus:outline-none focus-visible:outline-none",
      failure:
        "bg-neutral-100 border border-red-500 text-red-500 font-medium placeholder:text-red-500 text-base focus:border-2 focus:ring-0 focus:outline-none focus:placeholder:text-red-500 focus:border-red-400 focus:outline-none focus-visible:outline-none outline-none",
    },
    group: {
      on: "rounded-lg",
      off: "rounded-lg",
    },
  },
  defaultVariants: {
    colors: "gray",
    group: "off",
  },
});

type InputMaskVariants = VariantProps<typeof baseConfigInputMask>;

interface InputMaskProps extends InputMaskVariants {
  name: string;
  mask: string;
  label?: string;
  className?: string;
  placeholder?: string;
  "data-testid"?: string;
}

export function MaskInput({
  name,
  mask,
  colors,
  label,
  className,
  group,
  placeholder,
  ...rest
}: InputMaskProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <div className="relative flex flex-col w-full gap-y-2">
            {label && <Label htmlFor={name} value={label} />}
            <InputMask
              onChange={(e) => onChange(e)}
              mask={mask}
              {...rest}
              data-testid={rest["data-testid"]}
              value={value}
              placeholder={placeholder}
              className={twMerge(
                className,
                baseConfigInputMask({
                  colors: error?.message ? "failure" : "gray",
                  group,
                })
              )}
            />
            {error?.message && (
              <span className="mt-0 font-inter text-sm text-red-500">
                {error.message}
              </span>
            )}
          </div>
        );
      }}
    />
  );
}

export default Form;
