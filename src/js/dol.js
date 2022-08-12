import Notiflix from 'notiflix';

const usdONE = document.querySelector('.usdONE');
const usdTWO = document.querySelector('.usdTWO');
const usdTHREE = document.querySelector('.usdTHREE');
const dolONE = document.querySelector('.dolONE');
const dolTWO = document.querySelector('.dolTWO');
const dolTHREE = document.querySelector('.dolTHREE');

const ClickUsdONE = () => {
  navigator.clipboard.writeText(dolONE.value);
  Notiflix.Notify.success('done');
};
usdONE.addEventListener('click', ClickUsdONE);

const ClickUsdTWO = () => {
  navigator.clipboard.writeText(dolTWO.value);
  Notiflix.Notify.success('done');
};
usdTWO.addEventListener('click', ClickUsdTWO);

const ClickUsdTHREE = () => {
  navigator.clipboard.writeText(dolTHREE.value);
  Notiflix.Notify.success('done');
};
usdTHREE.addEventListener('click', ClickUsdTHREE);
