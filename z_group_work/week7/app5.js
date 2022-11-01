import Hikes from './hikes.js';
import Comments from "./comment.js";
//on load grab the array and insert it into the page
const myHikes = new Hikes('hikes');
const myComments = new Comments('comments');
window.addEventListener('load', () => {
  myHikes.showHikeList();
  myComments.showCommentList();
});


