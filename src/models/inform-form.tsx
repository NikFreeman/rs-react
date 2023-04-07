export enum BirthplaceEnum {
  belarus = 'Belarus',
  ukraine = 'Ukraine',
  poland = 'Poland',
  other = 'other',
}

export interface FormInput {
  firstName: string;
  lastName: string;
  birthday: string;
  birthplace: BirthplaceEnum;
  sex: string;
  personalData: boolean;
  picture: string;
}

export interface CheckForm {
  firstName: string;
  lastName: string;
  birthday: string;
  birthplace: BirthplaceEnum;
  sex: string;
  personalData: boolean;
  picture: FileList;
}
