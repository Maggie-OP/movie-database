interface SelectOption {
  label: string;
  value: string | number;
}

interface CustomSelectProps {
  options: SelectOption[];
  name: string;
  id: string;
}

export default function CustomSelect({ options, name, id }: CustomSelectProps) {
  return (
    <select name={name} id={id}>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
