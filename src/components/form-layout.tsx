import { Component, createRef } from 'react';
import { FormLayoutState, InformForm } from '../models/inform-form';
import DetailForm from './card-form';

class FormLayout extends Component<unknown, FormLayoutState> {
  private firstNameRef = createRef<HTMLInputElement>();
  private lastNameRef = createRef<HTMLInputElement>();
  private birthdayRef = createRef<HTMLInputElement>();
  private birthplaceRef = createRef<HTMLSelectElement>();
  private sexMaleRef = createRef<HTMLInputElement>();
  private sexFemaleRef = createRef<HTMLInputElement>();
  private personalDataRef = createRef<HTMLInputElement>();
  private avatarRef = createRef<HTMLInputElement>();

  constructor(props: unknown) {
    super(props);
    this.state = { data: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const firstName = this.firstNameRef.current;
    const lastName = this.lastNameRef.current;
    const birthday = this.birthdayRef.current;
    const birthplace = this.birthplaceRef.current;
    const sexMale = this.sexMaleRef.current;
    const personalData = this.personalDataRef.current;
    const avatarFile = this.avatarRef.current;
    if (avatarFile?.files) {
      const formData: InformForm = {
        firstName: firstName ? firstName.value : '',
        lastName: lastName ? lastName.value : '',
        birthday: birthday ? birthday.value : '',
        birthplace: birthplace ? birthplace.value : '',
        personalData: personalData ? personalData.checked : false,
        sex: sexMale ? (sexMale.checked ? 'male' : 'female') : '',
        avatar: avatarFile ? avatarFile.files[0].name : '',
      };
      this.setState({
        data: [...this.state.data, formData],
      });
    }
  }

  render() {
    const countries = ['Belarus', 'Ukraine', 'Poland', 'Other'];
    return (
      <div className="max-w-5xl mx-auto">
        <div className=" rounded-lg border  my-4 p-4 bg-slate-100">
          <form className="flex flex-col gap-3" onSubmit={this.handleSubmit}>
            <fieldset className="flex gap-6">
              <label htmlFor="first-name">
                First name:
                <input
                  className="
                block
                rounded-md
                px-6
                pb-1
                w-full
                text-md
              text-white
              bg-neutral-700
                appearance-none
                focus:outline-none
                focus:ring-0
                peer
                invalid:border-b-1"
                  type="text"
                  required
                  ref={this.firstNameRef}
                />
              </label>
              <label htmlFor="last-name">
                Last name:
                <input
                  className="
                block
                rounded-md
                px-6
                pb-1
                w-full
                text-md
              text-white
              bg-neutral-700
                appearance-none
                focus:outline-none
                focus:ring-0
                peer
                invalid:border-b-1"
                  id="first-name"
                  type="text"
                  required
                  ref={this.lastNameRef}
                />
              </label>
            </fieldset>
            <hr />
            <label htmlFor="birthday">
              Birthday:
              <input
                className="
                block
                rounded-md
                px-6                
                pb-1
                w-1/6
                text-md
              text-white
              bg-neutral-700
                appearance-none
                focus:outline-none
                focus:ring-0
                peer
                invalid:border-b-1"
                id="first-name"
                type="date"
                ref={this.birthdayRef}
              />
            </label>
            <hr />
            <label className="text-sm" htmlFor="country">
              Country:
            </label>
            <select name="country" id="" ref={this.birthplaceRef}>
              {countries.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <label htmlFor="checkPerson">I consent to my personal data</label>
            <input type="checkbox" name="checkPerson" id="" ref={this.personalDataRef} />
            <fieldset className="border flex flex-col w-1/2">
              <legend>Sex:</legend>
              <label>
                male
                <input
                  className="mx-2"
                  type="radio"
                  name="sex"
                  id="male"
                  required
                  ref={this.sexMaleRef}
                />
              </label>
              <label>
                female
                <input
                  className="mx-2"
                  type="radio"
                  name="sex"
                  id="female"
                  required
                  ref={this.sexFemaleRef}
                />
              </label>
            </fieldset>
            <input type="file" name="" id="" ref={this.avatarRef} />

            <button
              className="border mx-auto px-2 w-20 hover:bg-slate-700 hover:text-slate-100 rounded-lg "
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        {this.state.data.map((item, index) => {
          return <DetailForm key={index} detail={item} />;
        })}
      </div>
    );
  }
}

export default FormLayout;
