const btnEl = document.getElementById("btn");

const birthdayEl = document.getElementById("birthday");

const resultEl = document.getElementById("result");

function calculateAge() {
  const birthDayValue = birthdayEl.value;
  if (birthDayValue == "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthDayValue);
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;

  }
}
function getAge(birthdayvalue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayvalue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  return age;
}

btnEl.addEventListener("click", calculateAge);
