"use client";

type Props = {
  label: string;
  name?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  value?: string | number;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  autoComplete?: string;
  autoFocus?: boolean;
  maxLength?: number;
  minLength?: number;
};

const Textarea = ({
  label,
  name,
  className,
  autoComplete,
  autoFocus,
  maxLength,
  minLength,
  required,
  placeholder,
  disabled,
  onChange,
  onBlur,
  onFocus,
  value,
}: Props) => {
  return (
    <div className={`my-2 ${className}`}>
      <label htmlFor="message" className="block text-sm font-bold mb-2">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id="message"
        name={name}
        rows={5}
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
      ></textarea>
    </div>
  );
};
export default Textarea;
