import { Component } from 'react';
import { InformForm } from '../models/inform-form';

interface DetailProps {
  detail: InformForm;
}

export default class DetailForm extends Component<DetailProps> {
  constructor(props: DetailProps) {
    super(props);
  }
  render() {
    const { firstName, lastName, birthday, birthplace, sex, personalData, avatar } =
      this.props.detail;
    return (
      <div>
        <div className="px-4 py-2">
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Birthday: {birthday}</p>
          <p>Birthplace: {birthplace}</p>
          <p>Sex: {sex}</p>
          <p>Consent to the processing of personal data: {personalData ? 'Yes' : 'No'}</p>
          <p>Avatar: {avatar}</p>
        </div>
        <hr />
      </div>
    );
  }
}
