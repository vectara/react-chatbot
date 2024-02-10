import classNames from "classnames";
import { forwardRef } from "react";

const SIZE = ["m", "l"] as const;

type Props = {
  className?: string;
  id?: string;
  name?: string;
  isInvalid?: boolean;
  options: {
    text: string;
    value: string;
  }[];
  value: string;
  size?: (typeof SIZE)[number];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select = forwardRef<HTMLSelectElement | null, Props>(
  ({ className, id, name, options, value, size = "m", onChange, isInvalid, ...rest }: Props, ref) => {
    const classes = classNames(
      "vuiSelect",
      `vuiSelect--${size}`,
      {
        "vuiSelect-isInvalid": isInvalid
      },
      className
    );

    const renderedOptions = options.map((option, index) => {
      const { text, ...rest } = option;
      return (
        <option {...rest} key={index}>
          {text}
        </option>
      );
    });

    return (
      <div className={classes}>
        <select ref={ref} id={id} name={name} value={value} onChange={onChange} {...rest}>
          {renderedOptions}
        </select>
      </div>
    );
  }
);
