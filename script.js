const buttons = document.querySelectorAll('button');
const sections = document.querySelectorAll('section');

buttons.forEach(button => {
  button.addEventListener('click',   
 () => {
    const targetId   
 = button.id.replace('btn', '');
    sections.forEach(section => {
      section.classList.remove('active', 'slide-in');
      section.classList.add('hidden');
    });
    document.getElementById(targetId).classList.remove('hidden');
    document.getElementById(targetId).classList.add('active', 'slide-in');
  });
});

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;
  
    if (name === "" || birthDate === "" || gender === "" || messages === "") {
      alert("Tidak boleh ada yang kosong");
      return false;
    }
  
    setSenderUI(name, birthDate, gender, messages);
    return false;
  }