"use client";

type Props = {
  label: string;
  name?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value?: string | number;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
  autoFocus?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
};

const Input = ({
  label,
  name,
  autoComplete,
  autoFocus,
  maxLength,
  minLength,
  pattern,
  className,
  type,
  value,
  required,
  placeholder,
  disabled,
  onChange,
  onBlur,
  onFocus,
}: Props) => {
  return (
    <div className={`my-2 ${className}`}>
      <label htmlFor="email" className="block text-sm font-bold mb-2">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type || "email"}
        name={name}
        id="email"
        className="border border-gray-300 rounded-lg p-2 w-full"
        required={required}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
      />
    </div>
  );
};
export default Input;
