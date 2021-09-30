import * as yup from "yup";

const schema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  address: yup.string().required(),
  age: yup.number().required().positive().integer().min(18),
  email: yup.string().email(),
});

export default schema;
