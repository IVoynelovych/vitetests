import { GetTask } from './js/task-make';
import { finishTask } from './js/task/finishtask';
import { openchat } from './js/task/chat';
import { toggleMenu } from './js/task/modal';
import { send_message } from './js/task/send_message';
import { delete_chat } from './js/task/deletechat';
import { create_chat } from './js/task/createchat';
const close_modal = document.querySelector('.close-btn');
const chat_btn = document.querySelector('.chat-svg');
const finish_btn = document.querySelector('.finish-task');
const message_send = document.querySelector('.send-messege-btn');
const delete_chat_btn = document.querySelector('.delete-chat-btn');
let chat_exist;
chat_btn.addEventListener('click', () => {
  toggleMenu();
  if(localStorage.getItem('isChatExist') == 'false' || localStorage.getItem('isChatExist')==null){
    create_chat()
  }
});
delete_chat_btn.addEventListener('click', () => {
  delete_chat();
  toggleMenu();
});
window.addEventListener('load', () => {
  if (localStorage.getItem('isChatExist') == 'true') {
    openchat();
  }
});
message_send.addEventListener('click', () => {
  send_message();
});
close_modal.addEventListener('click', () => {
  delete_chat();
  toggleMenu();
});
window.addEventListener('load', () => {
  GetTask();
});
finish_btn.addEventListener('click', () => {
  finishTask();
});
