import type { ReactNode } from 'react';

export function Field({
  label,
  hint,
  required,
  htmlFor,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  htmlFor?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="label-field">
        {label}
        {required && <span className="text-crimson ml-1">*</span>}
      </label>
      {children}
      {hint && <p className="mt-1.5 text-xs text-mute">{hint}</p>}
    </div>
  );
}

export function TextInput({
  name,
  defaultValue,
  placeholder,
  type = 'text',
  required,
  id,
}: {
  name: string;
  defaultValue?: string | number;
  placeholder?: string;
  type?: string;
  required?: boolean;
  id?: string;
}) {
  return (
    <input
      id={id ?? name}
      name={name}
      type={type}
      defaultValue={defaultValue ?? ''}
      placeholder={placeholder}
      required={required}
      className="input-field"
    />
  );
}

export function TextArea({
  name,
  defaultValue,
  rows = 4,
  placeholder,
  id,
  required,
}: {
  name: string;
  defaultValue?: string;
  rows?: number;
  placeholder?: string;
  id?: string;
  required?: boolean;
}) {
  return (
    <textarea
      id={id ?? name}
      name={name}
      rows={rows}
      defaultValue={defaultValue ?? ''}
      placeholder={placeholder}
      required={required}
      className="input-field font-sans"
    />
  );
}

export function Select({
  name,
  defaultValue,
  options,
  id,
  required,
}: {
  name: string;
  defaultValue?: string;
  options: { value: string; label: string }[];
  id?: string;
  required?: boolean;
}) {
  return (
    <select
      id={id ?? name}
      name={name}
      defaultValue={defaultValue ?? ''}
      required={required}
      className="input-field"
    >
      <option value="">Select...</option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

export function Checkbox({
  name,
  defaultChecked,
  label,
  id,
}: {
  name: string;
  defaultChecked?: boolean;
  label: string;
  id?: string;
}) {
  return (
    <label htmlFor={id ?? name} className="flex items-center gap-2 text-sm">
      <input
        id={id ?? name}
        name={name}
        type="checkbox"
        defaultChecked={defaultChecked}
        className="h-4 w-4"
      />
      <span>{label}</span>
    </label>
  );
}
