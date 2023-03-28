import { ValidForm, CheckForm } from '../models/inform-form';

export function checkValidFields(value: CheckForm): ValidForm {
  const result: ValidForm = {
    isErrorFirstName: false,
    isErrorLastName: false,
    isErrorBirthday: false,
    isErrorSex: false,
    isErrorPersonalData: false,
    isErrorAvatar: false,
    formValid: false,
  };

  const regExp = new RegExp('(^[A-ZА-ЯЁ][a-zа-яё]{3,})');
  result.isErrorFirstName = !regExp.test(value.firstName);

  const regExpLastName = new RegExp('(^[A-ZА-ЯЁ][a-zа-яё]{3,})');
  result.isErrorLastName = !regExpLastName.test(value.lastName);

  result.isErrorBirthday = value.birthday === '';

  result.isErrorSex = !(value.male || value.female);

  result.isErrorPersonalData = !value.personalData;

  result.isErrorAvatar = value.avatar === '';
  result.formValid =
    !result.isErrorFirstName &&
    !result.isErrorLastName &&
    !result.isErrorBirthday &&
    !result.isErrorPersonalData &&
    !result.isErrorSex &&
    !result.isErrorAvatar;

  return result;
}
