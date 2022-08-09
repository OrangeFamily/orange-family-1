import Notiflix from 'notiflix';
const uah = document.querySelector('.uah');
const hrn = document.querySelector('.hrn');

const ClickHrn = () => {
  navigator.clipboard.writeText(hrn.value);
  Notiflix.Notify.success('done');
};
uah.addEventListener('click', ClickHrn);

const eur = document.querySelector('.eur');
const eru = document.querySelector('.eru');

const ClickEur = () => {
  navigator.clipboard.writeText(eru.value);
  Notiflix.Notify.success('done');
};
eur.addEventListener('click', ClickEur);

const usd = document.querySelector('.usd');
const dol = document.querySelector('.dol');

const ClickUsd = () => {
  navigator.clipboard.writeText(dol.value);
  Notiflix.Notify.success('done');
};
usd.addEventListener('click', ClickUsd);
dol;
