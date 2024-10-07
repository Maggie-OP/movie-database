import { RadioWrapper, Radio } from "./styles";

interface RadioOption {
  label: string;
  value: string;
}

interface CustomRadioProps {
  options: RadioOption[];
}

export default function CustomRadio({ options }: CustomRadioProps) {
  return options.map(({ label, value }) => (
    <RadioWrapper key={value}>
      <Radio type="radio" id={value} name="show_me" value={value} />
      <label htmlFor={value}>{label}</label>
    </RadioWrapper>
  ));
}
