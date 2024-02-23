export type THTMLInputType =
  | 'text'
  | 'password'
  | 'number'
  | 'email'
  | 'url'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'month'
  | 'week'
  | 'color'
  | 'checkbox'
  | 'radio'
  | 'file'
  | 'hidden'
  | 'image'
  | 'range'
  | 'search'
  | 'tel';

export interface IBaseInputProps {
  name?: string;
  modelValue?: string | number | boolean | Date;
  type?: THTMLInputType;
  placeholder?: string;
  label?: string;
  error?: string | boolean;
  disabled?: boolean;
  readonly?: boolean;
  min?: number;
  required?: boolean;
  backGroundColor?: string;
}
