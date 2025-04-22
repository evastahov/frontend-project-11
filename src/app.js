import * as yup from 'yup';






















export default () => {
  const state = {
    form: {
      state: 'filling',
      error: null,
    },
  };
  const elements = {
    form: document.querySelector('.rss-form'),
    urlInput: document.querySelector('#url-input'),
    submitButton: document.querySelector('[type="submit"]'),
    feedback: document.querySelector('.feedback'),
  };

  const schema = yup.string().trim().url();

schema.validate('https://lorem-rss.hexlet.app/feed').then(() =>
  
).catch((error) => {
  console.log(error)
})









};
