export type TButtonVariants = 'outlined' | 'primary' | 'secondary' | 'white';

export interface IButtonProps {
  disabled?: boolean;
  variant?: TButtonVariants;
  hidden?: boolean;
}
