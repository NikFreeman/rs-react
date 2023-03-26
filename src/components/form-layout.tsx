import { Component, createRef, RefObject } from 'react';
import Input from './input';

interface FormLayoutState {
  firstName: string;
  lastName: string;
}

class FormLayout extends Component<unknown, FormLayoutState> {
  firstNameRef: RefObject<HTMLInputElement & null>;
  constructor(props: unknown) {
    super(props);
    this.state = { firstName: '', lastName: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.firstNameRef = createRef();
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  render() {
    const countries = ['Belarus', 'Ukraine', 'Poland', 'Other'];
    return (
      <div className=" rounded-lg border max-w-5xl mx-auto my-4 p-4 bg-slate-100">
        <form className="flex flex-col gap-3" onSubmit={this.handleSubmit}>
          <fieldset className="flex gap-6">
            <Input
              id="first-name"
              onChange={() => console.log('click-first')}
              value={this.state.firstName}
              label="First name"
              type="text"
              ref={this.firstNameRef}
            />
            <Input
              id="last-name"
              onChange={() => console.log('click')}
              value="last-name"
              label="Last name"
              type="text"
            />
          </fieldset>
          <hr />
          <Input
            id="birthday"
            onChange={() => console.log('click Birthday')}
            value="birthday"
            label="Birthday"
            type="date"
          />
          <hr />
          <label className="text-sm" htmlFor="country">
            Country:
          </label>
          <select name="country" id="">
            {countries.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
          <label htmlFor="checkPerson">I consent to my personal data</label>
          <input type="checkbox" name="checkPerson" id="" />
          <fieldset className="border flex flex-col w-1/2">
            <legend>Sex:</legend>
            <label>
              male
              <input className="mx-2" type="radio" name="sex" id="male" />
            </label>
            <label>
              female
              <input className="mx-2" type="radio" name="sex" id="female" />
            </label>
          </fieldset>
          <input type="file" name="" id="" />

          <button
            className="border mx-auto px-2 w-20 hover:bg-slate-700 hover:text-slate-100 rounded-lg "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default FormLayout;
