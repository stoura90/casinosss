import * as yup from 'yup'

export const validationSchema = yup.object({
  public: yup.string(),
  password: yup.string().when('public', {
    is: 'false',
    then: yup
      .string()
      .required('Необходимо заполнить это поле')
      .min(6, 'Пароль должен быть не менее 6 символов'),
    otherwise: yup.string().notRequired(),
  }),
  repeat_password: yup.string().when('public', {
    is: 'false',
    then: yup
      .string()
      .required('Необходимо заполнить это поле')
      .oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
    otherwise: yup.string().notRequired(),
  }),
  prizesProgram: yup.string().required('Необходимо выбрать программу'),
  prizesId: yup.string().required('Необходимо выбрать место'),
  prizesCount: yup
    .number()
    .typeError('Количество мест должно быть числом')
    .integer('Количество мест должно быть целым числом')
    .positive('Количество мест должно быть положительной')
    .required('Необходимо заполнить это поле')
    .max(100, 'Максимальное количество участников 100'),
  membersCount: yup
    .number()
    .typeError('Количество участников должно быть числом')
    .integer('Количество участников должно быть целым числом')
    .positive('Количество участников должно быть положительной')
    .required('Необходимо заполнить это поле')
    .max(100, 'Максимальное количество участников 100'),
})
