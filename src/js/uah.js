import Notiflix from 'notiflix';
const uah1 = document.querySelector('.uah1');
const uah2 = document.querySelector('.uah2');
const uah3 = document.querySelector('.uah3');
const hrn1 = document.querySelector('.hrn1');
const hrn2 = document.querySelector('.hrn2');
const hrn3 = document.querySelector('.hrn3');
const ClickHrn1 = () => {
  navigator.clipboard.writeText(hrn1.value);
  Notiflix.Notify.success('done');
};
uah1.addEventListener('click', ClickHrn1);

const ClickHrn2 = () => {
  navigator.clipboard.writeText(hrn2.value);
  Notiflix.Notify.success('done');
};
uah2.addEventListener('click', ClickHrn2);

const ClickHrn3 = () => {
  navigator.clipboard.writeText(hrn3.value);
  Notiflix.Notify.success('done');
};
uah3.addEventListener('click', ClickHrn3);
