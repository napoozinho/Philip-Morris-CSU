// ### TOMA DE DATOS START ###
// ### TOMA DE DATOS START ###
const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form .form-section input');
const selects = document.querySelectorAll('#form .form-section select');
const inputs_email = [];

// get inputs with type 'email'
inputs.forEach(input => {
  if(input.type == 'email') {
    inputs_email.push(input)
  }
})

// on submit
form.addEventListener('submit', (e) => {
  // check if both emails inputs are the same
  if(inputs_email[0].value != inputs_email[1].value) {
    e.preventDefault();
    inputs_email.forEach(input => {
      input.classList.add('error')
    });
  }

  // check if select tags where filled
  for (let i=0; i<selects.length; i++) {
    if(selects[i].value == 0) {
      selects[i].classList.add('error')
      e.preventDefault();
    }
  }
})

// remove '.error' from select
inputs_email.forEach(input => {
  input.addEventListener('click', () => {
    inputs_email.forEach(input => {
      input.classList.remove('error');
    });
  })
});
// remove '.error' from both email
selects.forEach(select => {
  select.addEventListener('click', () => {
    select.classList.remove('error');
  })
});
// ### TOMA DE DATOS ENDS ###
// ### TOMA DE DATOS ENDS ###