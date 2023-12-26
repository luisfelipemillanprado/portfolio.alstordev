/**
 * @function formValidation
 * @param {Object} values
 * @returns
 */
const formValidation = (email) => {
  const regexEmail = /^(\w+[/./-]?){1,100}@[a-z]+[/.]\w{2,100}$/;
  return !regexEmail.test(email);
};
// --
export default formValidation;
