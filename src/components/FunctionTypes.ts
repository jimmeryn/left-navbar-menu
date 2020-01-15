export type UpdatePropertyValue = (
  elementIndex: number,
  newValue: string | boolean
) => void;

export type AddComboboxOption = (index: number, newOption: string) => void;
export type ChangeIsComboboxOpen = (isComboboxOpen: boolean) => void;
export type OptionClick = (
  event: React.MouseEvent,
  elementNumber: number,
  option: string
) => void;

export type ChangeButtonIndex = (newButtonIndex: number) => void;
export type SetInputText = (value: React.SetStateAction<string>) => void;
