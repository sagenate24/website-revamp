import * as mountain from './Images/mountain.jpg';
import * as tree from './Images/tree.jpg';
import * as water from './Images/water.jpg';
import * as waterfall from './Images/waterfall.jpg';
import * as ranier from './Images/rainer-min.JPG'
import * as avatar from './Images/avatar.JPG';

const images = {
  water,
  avatar
};

export const getImages = () => {
  return new Promise(res => res(images));
}
