import { loadtest } from './js/test/test_load';
import { openchat } from './js/task/chat';
import { toggleMenu } from './js/task/modal';
import { send_message } from './js/task/send_message';
import { delete_chat } from './js/task/deletechat';
import { create_chat } from './js/task/createchat';
import { changeTask } from './js/test/test_load';
import { finishTest } from './js/test/finish_test';
import { finishTestTask } from './js/test/save_ansforquestion';
const save_ans = document.querySelector('.finish-task');
const close_modal = document.querySelector('.close-btn');
const delete_chat_btn = document.querySelector('.delete-chat-btn');
const chat_btn = document.querySelector('.chat-svg');
const message_send = document.querySelector('.send-messege-btn');
const finish_test = document.querySelector('.finish-test')
chat_btn.addEventListener('click', () => {
  toggleMenu();
  if (localStorage.getItem('isChatExist') == 'false') {
    create_chat();
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
  toggleMenu();
});
window.addEventListener('load', () => {
  loadtest();
  save_ans.addEventListener('click', () => {
    let index = localStorage.getItem('currentTaskIndex');
    finishTestTask();
    changeTask(Number(index) + 1);
  });
});
finish_test.addEventListener('click', ()=>{
    finishTest()
})