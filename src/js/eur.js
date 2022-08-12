import Notiflix from 'notiflix';
const eur1 = document.querySelector('.eurONE');
const eur2 = document.querySelector('.eurTWO');
const eur3 = document.querySelector('.eurTHREE');
const eru1 = document.querySelector('.eruONE');
const eru2 = document.querySelector('.eruTWO');
const eru3 = document.querySelector('.eruTHREE');
const ClickHrn1 = () => {
  navigator.clipboard.writeText(eru1.value);
  Notiflix.Notify.success('done');
};
eur1.addEventListener('click', ClickHrn1);

const ClickHrn2 = () => {
  navigator.clipboard.writeText(eru2.value);
  Notiflix.Notify.success('done');
};
eur2.addEventListener('click', ClickHrn2);

const ClickHrn3 = () => {
  navigator.clipboard.writeText(eru3.value);
  Notiflix.Notify.success('done');
};
eur3.addEventListener('click', ClickHrn3);
