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
    const { firstName, lastName, birthday } = this.props.detail;
    return (
      <div>
        <div className="px-4 py-2">
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Birthday: {birthday}</p>
        </div>
        <hr />
      </div>
    );
  }
}
