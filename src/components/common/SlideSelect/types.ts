export interface ISlideSelectModelValue {
  id: string;
  label: string;
}

export interface ISlideSelectProps {
  modelValue: ISlideSelectModelValue;
  options: ISlideSelectModelValue[];
  backgroundColor?: string;
  label?: string;
}
