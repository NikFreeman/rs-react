export interface InformForm {
  firstName: string;
  lastName: string;
  birthday: string;
  birthplace: string;
  sex: string;
  personalData: boolean;
  avatar: string;
}
export interface FormLayoutState {
  data: InformForm[];
  isErrorFirstName: boolean;
  isErrorLastName: boolean;
  isErrorBirthday: boolean;
  isErrorSex: boolean;
  isErrorPersonalData: boolean;
  isErrorAvatar: boolean;
  formValid: boolean;
}
