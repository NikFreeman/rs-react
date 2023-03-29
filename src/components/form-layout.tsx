import { Component, createRef } from 'react';
import { FormLayoutState, InformForm } from '../models/inform-form';
import { checkValidFields } from '../utils/validation';
import DetailForm from './card-form';
import Toast from './toast';

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
      valid: {
        isErrorFirstName: false,
        isErrorLastName: false,
        isErrorBirthday: false,
        isErrorSex: false,
        isErrorPersonalData: false,
        isErrorAvatar: false,
        formValid: false,
      },
      isShowToast: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.validateForm();

    if (this.validateForm()) {
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
        this.setState({
          isShowToast: true,
        });
        this.resetForm();
      }
    }
  }

  resetForm() {
    if (this.firstNameRef.current) {
      this.firstNameRef.current.value = '';
    }
    if (this.lastNameRef.current) {
      this.lastNameRef.current.value = '';
    }
    if (this.birthdayRef.current) {
      this.birthdayRef.current.value = '';
    }
    if (this.avatarRef.current) {
      this.avatarRef.current.value = '';
    }
    if (this.sexMaleRef.current) {
      this.sexMaleRef.current.checked = false;
    }
    if (this.sexFemaleRef.current) {
      this.sexFemaleRef.current.checked = false;
    }
    if (this.personalDataRef.current) {
      this.personalDataRef.current.checked = false;
    }
    const startValid = {
      isErrorFirstName: false,
      isErrorLastName: false,
      isErrorBirthday: false,
      isErrorSex: false,
      isErrorPersonalData: false,
      isErrorAvatar: false,
      formValid: false,
    };
    this.setState({ valid: startValid });
  }

  validateForm() {
    const fields = {
      firstName: this.firstNameRef.current!.value,
      lastName: this.lastNameRef.current!.value,
      birthday: this.birthdayRef.current!.value,
      male: this.sexMaleRef.current!.checked,
      female: this.sexFemaleRef.current!.checked,
      personalData: this.personalDataRef.current!.checked,
      avatar: this.avatarRef.current!.value,
    };
    const resultCheck = checkValidFields(fields);
    this.setState({ valid: resultCheck });
    return resultCheck.formValid;
  }

  render() {
    const countries = ['Belarus', 'Ukraine', 'Poland', 'Other'];
    return (
      <div className="mx-auto max-w-5xl">
        <div className=" my-4 rounded-lg  border bg-slate-100 p-4">
          <form className="flex flex-col gap-3" onSubmit={this.handleSubmit}>
            <fieldset className="flex gap-6">
              <label htmlFor="first-name">
                First name:
                <input
                  className="
                    text-md
                    invalid:border-b-1
                    peer
                    block
                    w-full
                    appearance-none
                    rounded-md
                    bg-neutral-700
                    px-6
                    pb-1
                    text-white
                    focus:outline-none
                    focus:ring-0"
                  type="text"
                  required
                  id="first-name"
                  ref={this.firstNameRef}
                />
                {this.state.valid.isErrorFirstName && <span className="text-red-500">Error</span>}
              </label>
              <label htmlFor="last-name">
                Last name:
                <input
                  className="
                    text-md
                    invalid:border-b-1
                    peer
                    block
                    w-full
                    appearance-none
                    rounded-md
                    bg-neutral-700
                    px-6
                    pb-1
                    text-white
                    focus:outline-none
                    focus:ring-0"
                  id="last-name"
                  type="text"
                  required
                  ref={this.lastNameRef}
                />
                {this.state.valid.isErrorLastName && <span className="text-red-500">Error</span>}
              </label>
            </fieldset>
            <hr />
            <label htmlFor="birthday">
              Birthday:
              <input
                className="
                  text-md
                  invalid:border-b-1
                  peer                
                  block
                  w-1/6
                  appearance-none
                  rounded-md
                  bg-neutral-700
                  px-6
                  pb-1
                  text-white
                  focus:outline-none
                  focus:ring-0"
                id="birthday"
                type="date"
                ref={this.birthdayRef}
              />
              {this.state.valid.isErrorBirthday && <span className="text-red-500">Error</span>}
            </label>
            <hr />
            <label className="text-sm" htmlFor="country">
              Country:
            </label>
            <select
              className='
                text-md
                invalid:border-b-1"
                peer                
                block
                w-1/6
                appearance-none              
                rounded-md
                bg-neutral-700
                px-6
                pb-1
                text-white
                focus:outline-none
                focus:ring-0'
              name="country"
              id="country"
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
                id="checkPerson"
                ref={this.personalDataRef}
              />
              {this.state.valid.isErrorPersonalData && <span className="text-red-500">Error</span>}
            </label>
            <fieldset className="flex w-1/2 flex-col border">
              <legend>Sex:</legend>
              <label htmlFor="male">
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
              <label htmlFor="female">
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
              {this.state.valid.isErrorSex && <span className="text-red-500">Error</span>}
            </fieldset>
            <input type="file" name="avatar" ref={this.avatarRef} accept="image/png, image/jpeg" />
            {this.state.valid.isErrorAvatar && <span className="text-red-500">Error</span>}
            <button
              className="mx-auto w-20 rounded-lg border px-2 hover:bg-slate-700 hover:text-slate-100 active:text-lime-500"
              type="submit"
            >
              Submit
            </button>
          </form>

          {<Toast message="The data has been saved" />}
        </div>
        {this.state.data.map((item, index) => {
          return <DetailForm key={index} detail={item} />;
        })}
      </div>
    );
  }
}

export default FormLayout;
