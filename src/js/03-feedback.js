import throttle from "lodash/throttle";

const FROM_STATE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const formdData = localStorage.getItem(FROM_STATE_KEY);

const onInput = throttle((e) => saveForm(e.currentTarget), 500);

restoreForm(form);

form.addEventListener("input", onInput);

form.addEventListener("submit", onSubmit);

/**
 * Handles form on submit event
 *
 * @param {*} e
 */
function onSubmit(e) {
  e.preventDefault();
  console.log(Object.fromEntries(new FormData(e.target).entries()));
  e.target.reset();
  localStorage.removeItem(FROM_STATE_KEY);
}

/**
 * Saves form data to localStorage
 * @param {*} form
 */
function saveForm(form) {
  if (form instanceof HTMLFormElement) {
    const formData = new FormData(form);
    console.log(12);
    localStorage.setItem(
      FROM_STATE_KEY,
      JSON.stringify(Object.fromEntries(formData.entries()))
    );
  }
}

/**
 * Restores form data from localStorage
 * @param {*} form
 */
function restoreForm(form) {
  try {
    const savedData = localStorage.getItem(FROM_STATE_KEY);
    const savedFormData = savedData ? JSON.parse(savedData) : null;
    if (savedFormData) {
      Object.keys(savedFormData).forEach((key) => {
        if (form[key]) {
          form[key].value = savedFormData[key];
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
}
