function validateForm(){
  const name = document.forms['messageForm']['name'].value;
  const birthDate = document.forms['messageForm']['birthDate'].value;
  const gender = document.forms['messageForm']['gender'].value;
  const pesan = document.forms['messageForm']['pesan'].value;

  if (name === '' || birthDate === '' || gender === '' || pesan === ''){
    alert('tidak boleh ada yang kosong');
    return false;
  }

  setSenderUI(name, birthDate, gender, pesan);

  return false;
}

function setSenderUI(name, birthDate, gender, pesan){
  document.getElementById('senderFullName').innerHTML = name;
  document.getElementById('senderBirthDate').innerHTML = birthDate;
  document.getElementById('senderGender').innerHTML = gender;
  document.getElementById('senderMessages').innerHTML = pesan;
}