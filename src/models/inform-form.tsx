export interface InformForm {
  firstName: string;
  lastName: string;
  birthday: string;
  birthplace: string;
  sex: string;
  personalData: boolean;
  avatar: string;
}
export interface CheckForm {
  firstName: string;
  lastName: string;
  birthday: string;
  male: boolean;
  female: boolean;
  personalData: boolean;
  avatar: string;
}

export interface ValidForm {
  isErrorFirstName: boolean;
  isErrorLastName: boolean;
  isErrorBirthday: boolean;
  isErrorSex: boolean;
  isErrorPersonalData: boolean;
  isErrorAvatar: boolean;
  formValid: boolean;
}
export interface FormLayoutState {
  data: InformForm[];
  valid: ValidForm;
  isShowToast: boolean;
}
