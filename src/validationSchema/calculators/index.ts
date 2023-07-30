import * as yup from 'yup';

export const calculatorValidationSchema = yup.object().shape({
  password: yup.string().required(),
  user_id: yup.string().nullable(),
});
