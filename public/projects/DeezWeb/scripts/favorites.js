import {getFavoritesFromStorage, renderSongs} from './functions.js';

const FAVORITES = getFavoritesFromStorage();

const favsContainer = document.querySelector('#favorites');

const html = renderSongs(FAVORITES);

favsContainer.innerHTML = html;
