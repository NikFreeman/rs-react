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
    this.state = {
      data: [],
      isErrorFirstName: true,
      isErrorLastName: true,
      isErrorBirthday: true,
      isErrorSex: true,
      isErrorPersonalData: true,
      isErrorAvatar: true,
      formValid: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.validateField();
    this.validateForm();
    if (this.state.formValid) {
      alert('Form submitted');
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
        this.resetForm();
      }
    }
  }

  resetForm() {
    if (this.firstNameRef.current) this.firstNameRef.current.value = '';
    if (this.lastNameRef.current) this.lastNameRef.current.value = '';
    if (this.birthdayRef.current) this.birthdayRef.current.value = '';
    if (this.avatarRef.current) this.avatarRef.current.value = '';
    if (this.sexMaleRef.current) this.sexMaleRef.current.checked = false;
    if (this.sexFemaleRef.current) this.sexFemaleRef.current.checked = false;
    if (this.personalDataRef.current) this.personalDataRef.current.checked = false;
    this.setState({ formValid: false });
  }

  validateField() {
    const firstName = this.firstNameRef.current;
    const regExpFirstName = new RegExp('(^[A-ZА-ЯЁ][a-zа-яё]{3,})');
    if (firstName) {
      this.setState({ isErrorFirstName: regExpFirstName.test(firstName.value) });
    }

    const lastName = this.lastNameRef.current;
    const regExpLastName = new RegExp('(^[A-ZА-ЯЁ][a-zа-яё]{3,})');
    if (lastName) {
      this.setState({ isErrorLastName: regExpLastName.test(lastName.value) });
    }

    const birthday = this.birthdayRef.current;
    if (birthday) {
      this.setState({ isErrorBirthday: birthday.value !== '' });
    }

    const sexMale = this.sexMaleRef.current;
    const sexFemale = this.sexFemaleRef.current;
    if (sexMale && sexFemale) {
      this.setState({ isErrorSex: sexMale.checked || sexFemale.checked });
    }

    const personalData = this.personalDataRef.current;
    if (personalData) {
      this.setState({ isErrorPersonalData: personalData.checked });
    }
    const avatarFile = this.avatarRef.current;
    if (avatarFile) {
      this.setState({ isErrorAvatar: avatarFile.value !== '' });
    }
  }

  validateForm() {
    const isValidateForm =
      this.state.isErrorFirstName &&
      this.state.isErrorLastName &&
      this.state.isErrorBirthday &&
      this.state.isErrorPersonalData &&
      this.state.isErrorSex &&
      this.state.isErrorAvatar;
    this.setState({ formValid: isValidateForm });
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
                {!this.state.isErrorFirstName && <span className="text-red-500">Error</span>}
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
                {!this.state.isErrorLastName && <span className="text-red-500">Error</span>}
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
              {!this.state.isErrorBirthday && <span className="text-red-500">Error</span>}
            </label>
            <hr />
            <label className="text-sm" htmlFor="country">
              Country:
            </label>
            <select
              className='
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
                invalid:border-b-1"'
              name="country"
              id=""
              ref={this.birthplaceRef}
            >
              {countries.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <hr />
            <label htmlFor="checkPerson">
              I consent to my personal data
              <input
                className="mx-3"
                type="checkbox"
                name="checkPerson"
                id=""
                ref={this.personalDataRef}
              />
              {!this.state.isErrorPersonalData && <span className="text-red-500">Error</span>}
            </label>
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
              {!this.state.isErrorSex && <span className="text-red-500">Error</span>}
            </fieldset>
            <input type="file" name="avatar" ref={this.avatarRef} accept="image/png, image/jpeg" />
            {!this.state.isErrorAvatar && <span className="text-red-500">Error</span>}
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
