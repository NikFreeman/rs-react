import { FormInput } from '../models/inform-form';

interface DetailProps {
  detail: FormInput;
}

const DetailForm = (props: DetailProps) => {
  const { firstName, lastName, birthday, birthplace, sex, personalData, picture } = props.detail;
  return (
    <div>
      <div className="px-4 py-2">
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Birthday: {birthday}</p>
        <p>Birthplace: {birthplace}</p>
        <p>Sex: {sex}</p>
        <p>Consent to the processing of personal data: {personalData ? 'Yes' : 'No'}</p>
        <p>Picture: {picture}</p>
      </div>
      <hr />
    </div>
  );
};

export default DetailForm;
