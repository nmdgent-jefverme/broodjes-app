/* eslint-disable no-new */
/* eslint-disable no-console */
import '../styles/main.css';
// declaration Global variables
const toDo = [];
const input = document.getElementById('ToDo');
const submit = document.getElementById('submit');
const addDatabase = () => {
  new Promise((resolve, reject) => {
    const runCode = true;
    if (runCode) setTimeout(resolve, 4000);
    else reject();
  });
};
const addCalendar = () => {
  new Promise((resolve, reject) => {
    const runCode = true;
    if (runCode) setTimeout(resolve, 2000);
    else reject();
  });
};
const mailUser = () => {
  new Promise((resolve, reject) => {
    const runCode = true;
    if (runCode) setTimeout(resolve, 1000);
    else reject();
  });
};
const runPromises = async () => {
  await addDatabase();
  console.log('added to db');
  await addCalendar();
  console.log('added to calendar');
  await mailUser();
  console.log('mailed user');
};
submit.addEventListener('click', () => {
  runPromises();
  const val = input.value;
  toDo.push(val);
  console.log(toDo);
});
