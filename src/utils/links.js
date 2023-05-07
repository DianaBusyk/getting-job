import { IoBarChartSharp } from 'react-icons/io5';
import { MdQueryStats } from 'react-icons/md';
import { FaWpforms } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import {AiFillEdit } from 'react-icons/ai'
const links = [
  { id: 1, text: 'Статистика', path: '/', icon: <IoBarChartSharp /> },
  { id: 2, text: 'Всі вакансії', path: 'all-jobs', icon: <MdQueryStats /> },
  { id: 3, text: 'Додати вакансію', path: 'add-job', icon: <FaWpforms /> },
  { id: 4, text: 'Профіль', path: 'profile', icon: <ImProfile /> },
  {id:5,text:"Створити резюме",path:'resume', icon:  <AiFillEdit />}
];

export default links;
