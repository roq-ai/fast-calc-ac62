import * as yup from 'yup';

export const lockerValidationSchema = yup.object().shape({
  calculator_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
