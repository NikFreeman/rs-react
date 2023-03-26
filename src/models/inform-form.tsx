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
}
