import { SubmitHandler, useForm } from 'react-hook-form';
import DetailForm from './card-form';
import Toast from './toast';
import { BirthplaceEnum, CheckForm, FormInput } from '../models/inform-form';
import { useDispatch } from 'react-redux';
import { addDataForm } from '../store/formDataSlice';
import { useSelector } from '../store';

function FormLayout() {
  const {
    register,
    reset,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
  } = useForm<CheckForm>({
    defaultValues: {
      firstName: '',
      lastName: '',
      birthday: '',
      birthplace: BirthplaceEnum.belarus,
      personalData: false,
      sex: '',
      picture: undefined,
    },
  });
  const dispatch = useDispatch();
  const items = useSelector((store) => store.dataForm.data);
  const onSubmit: SubmitHandler<CheckForm> = (data) => {
    const tempData: FormInput = { ...data, picture: String(data.picture[0].name) };
    dispatch(addDataForm(tempData));
    reset();
  };

  const countries: BirthplaceEnum[] = [
    BirthplaceEnum.belarus,
    BirthplaceEnum.ukraine,
    BirthplaceEnum.poland,
    BirthplaceEnum.other,
  ];
  return (
    <div className="mx-auto max-w-5xl">
      <div className=" my-4 rounded-lg  border bg-slate-100 p-4">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
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
                id="first-name"
                placeholder="First Name"
                {...register('firstName', {
                  required: 'required field',
                  pattern: {
                    value: /(^[A-ZА-ЯЁ][a-zа-яё]{2,})/,
                    message: 'First capital letter and at least three',
                  },
                })}
              />
              {errors?.firstName && (
                <span className="text-red-500">{errors?.firstName.message}</span>
              )}
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
                placeholder="Last Name"
                {...register('lastName', {
                  required: 'required field',
                  pattern: {
                    value: /(^[A-ZА-ЯЁ][a-zа-яё]{2,})/,
                    message: 'First capital letter and at least three',
                  },
                })}
              />
              {errors?.lastName && <span className="text-red-500">{errors?.lastName.message}</span>}
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
              {...register('birthday', {
                required: 'required field',
              })}
            />
            {errors?.birthday && <span className="text-red-500">{errors?.birthday.message}</span>}
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
            id="country"
            {...register('birthplace', { required: 'required field' })}
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
              id="checkPerson"
              {...register('personalData', { required: 'required field' })}
            />
            {errors?.personalData && (
              <span className="text-red-500">{errors?.personalData.message}</span>
            )}
          </label>
          <fieldset className="flex w-1/2 flex-col border">
            <legend>Sex:</legend>
            <label htmlFor="male">
              male
              <input
                className="mx-2"
                type="radio"
                id="male"
                value="male"
                {...register('sex', { required: 'required field' })}
              />
            </label>
            <label htmlFor="female">
              female
              <input
                className="mx-2"
                type="radio"
                id="female"
                value="female"
                {...register('sex', { required: 'required field' })}
              />
            </label>
            {errors?.sex && <span className="text-red-500">{errors?.sex.message}</span>}
          </fieldset>
          <input
            type="file"
            {...register('picture', { required: 'required field' })}
            accept="image/png, image/jpeg"
          />
          {errors?.picture && <span className="text-red-500">{errors?.picture.message}</span>}
          <button
            className="mx-auto w-20 rounded-lg border px-2 hover:bg-slate-700 hover:text-slate-100 active:text-lime-500"
            type="submit"
          >
            Submit
          </button>
        </form>

        {isSubmitSuccessful && <Toast message="The data has been saved" />}
      </div>
      {items.map((item, index) => {
        return <DetailForm key={index} detail={item} />;
      })}
    </div>
  );
}

export default FormLayout;
