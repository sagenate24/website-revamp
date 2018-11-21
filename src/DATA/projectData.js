import * as FCIcon from '../Images/flashcardsIcon-min.png';
import * as WYRIcon from '../Images/wyrIcon-min.png';
import * as book from '../Images/book.png';
import * as JGIcon from '../Images/headphones-min.png';
import * as DVRIcon from '../Images/food-min.png';

const projects = [
  {
    id: 1,
    title: 'FLASH CARDS',
    icon: FCIcon,
    bgColor: '#3A7F9F',
    width: 120,
  },
  {
    id: 2,
    title: 'WOULD YOU RATHER',
    icon: WYRIcon,
    bgColor: '#F76265',
    width: 125,
  },
  {
    id: 3,
    title: 'MY READS',
    icon: book,
    bgColor: '#2E7C31',
    width: 100,
  },
  {
    id: 4,
    title: 'JAMMING',
    icon: JGIcon,
    bgColor: '#6C41EC',
    width: 115,
  },
  {
    id: 5,
    title: 'DEVOUR',
    icon: DVRIcon,
    bgColor: '#C99971',
    width: 125,
  },
];

export const getProjects = () => {
  return new Promise(res => res([...projects]));
}