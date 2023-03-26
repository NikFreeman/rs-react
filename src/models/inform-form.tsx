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
  firstNameValid: boolean;
  lastNameValid: boolean;
  birthdayValid: boolean;
  birthplaceValid: boolean;
  sexValid: boolean;
  personalDataValid: boolean;
  avatarValid: boolean;
  formValid: boolean;
}
