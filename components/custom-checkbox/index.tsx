import { Checkboxes, CheckboxLabel } from "./styles";

interface CheckboxOption {
  name: string;
  id: number;
}

interface CustomCheckboxProps {
  options: CheckboxOption[];
  name: string;
}

export default function CustomCheckbox({
  options,
  name: fieldName,
}: CustomCheckboxProps) {
  return (
    <Checkboxes>
      {options.map(({ id, name }) => (
        <CheckboxLabel key={id} htmlFor={`${id}`}>
          <input type="checkbox" name={fieldName} id={`${id}`} value={id} />
          {name}
        </CheckboxLabel>
      ))}
    </Checkboxes>
  );
}
