// ### FORM YES/NO START ###
// ### FORM YES/NO START ###
const form_yes_no = document.getElementsByClassName('form-yes-no')[0];
const choices = document.getElementsByTagName('input');
const icon_yes_no = document.querySelector('.switch .icon');
const switch_form = document.getElementsByClassName('switch')[0];

for (let i=0; i<choices.length; i++) {
  choices[i].addEventListener('change', () => {

    // disable both inputs
    for (let j=0; j<choices.length; j++) {
      choices[j].disabled=true
    }

    // show icon
    icon_yes_no.classList.add('active');

    // fade out
    setTimeout(() => {
      form_yes_no.classList.add('animate__fadeOutDown')
      // delete switch+inputs
      setTimeout(() => {
        switch_form.remove();
        for (let k=choices.length-1; k>=0; k--) {
          choices[k].remove();
        }
      }, 1000);
    }, 400);

    // submit if user selected yes
    if(choices[0].checked == true) {
      setTimeout(() => {
        form_yes_no.submit();
      }, 1000);
    }
    
    // else: bring up modal
  })
}
// ### FORM YES/NO ENDS ###
// ### FORM YES/NO ENDS ###