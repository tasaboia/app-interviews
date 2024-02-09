import { forwardRef } from "react";
import { IMaskInput } from "react-imask";

interface CustomProps {
  onChange: (value: string) => void;
  mask: string;
  value?: string;
  className?: string;
  placeholder?: string;
  "data-testid"?: string;
}

// eslint-disable-next-line react/display-name
export default forwardRef<HTMLElement, CustomProps>(function (props, ref) {
  const { onChange, mask, className, placeholder, value, ...others } = props;
  return (
    <IMaskInput
      {...others}
      mask={mask}
      inputRef={ref as any}
      placeholder={placeholder}
      data-testid={others["data-testid"]}
      onAccept={(v) => onChange(v as any)}
      value={value}
      defaultValue={value}
      overwrite
      className={className}
    />
  );
});
