import{c as p}from"./changetorigistrated-0usOyNcO.js";import"./main-B9-p8Gvn.js";document.querySelector(".question-elements");document.querySelector(".condition");document.querySelector(".question-elements");const u="https://harry-potter-test-preparation-backend.onrender.com/",h=document.createElement("li");h.style.cursor="pointer";function m(n,t,e){let i=localStorage.getItem("token");return fetch(`${u}topic/tasks/${n}`,{method:"GET",headers:{Authorization:"Bearer "+i,"ngrok-skip-browser-warning":"69420","Content-Type":"application/json"}}).then(r=>{if(!r.ok)throw new Error(`HTTP Error: ${r.status}`);return r.json()}).then(r=>{t.innerHTML="",r.forEach(l=>{const s=document.createElement("li");s.textContent=`${l.condition}`,s.setAttribute("taskId",JSON.stringify(l._id)),s.classList.add("task_item"),s.style.cursor="pointer",s.addEventListener("click",()=>{localStorage.setItem("taskId",l._id),window.location.href="task.html"}),t.appendChild(s)});const o=document.createElement("li");o.textContent=`Тест з теми ${e}`,o.setAttribute("topicId",n),o.classList.add("task_item"),o.classList.add("disablade"),o.style.cursor="pointer",o.style.display="block",t.appendChild(o),t.style.display="block"}).catch(r=>{console.error("Error fetching task details:",r),t.style.display="none"})}const d="https://harry-potter-test-preparation-backend.onrender.com/";function y(n){let t=localStorage.getItem("token");return fetch(`${d}progress/test/${n}`,{method:"GET",headers:{Authorization:"Bearer "+t,"ngrok-skip-browser-warning":"69420","Content-Type":"application/json"}}).then(e=>{if(console.log(`API: ${d}progress/test/${n}`),console.log(`відповідь API (status: ${e.status})`,e),e.status===404)return 0;if(!e.ok)throw new Error(`HTTP Error: ${e.status}`);return e.json()}).then(e=>(console.log(` Прогрес теста по темі ${n}:`,e),!e||typeof e.progress!="number"?(console.error(` Помилка ${n}`,e),0):e.progress)).catch(e=>(console.error("Помилка при отриманні прогресу :",e),0))}const f="https://harry-potter-test-preparation-backend.onrender.com/",k=document.querySelector(".topics_list");function g(n){const t=document.createElement("ul");return t.classList.add("dropdown"),t.style.display="none",t}function E(){let n=localStorage.getItem("token");fetch(`${f}topic/`,{method:"GET",headers:{Authorization:"Bearer "+n,"ngrok-skip-browser-warning":"69420","Content-Type":"application/json"}}).then(t=>{if(!t.ok)throw new Error(`HTTP Error: ${t.status}`);return t.json()}).then(async t=>{if(!t.result||t.result.length===0){console.warn("Немає доступних тем.");return}for(let e=0;e<t.result.length;e++){const i=t.result[e],r=document.createElement("li");r.textContent=`${i.number}. ${i.name}`,r.setAttribute("topicId",i._id),r.classList.add("topics_list_item"),r.style.cursor="pointer";const o=g(i._id);r.appendChild(o);let l=!1,s=!1;if(e>0){let a=t.result[e-1]._id;try{await y(a)<90&&(r.style.opacity="0.5",r.style.pointerEvents="none")}catch{}}r.addEventListener("click",a=>{a.stopPropagation(),!s&&(l?(o.style.display="none",l=!1,document.querySelectorAll(".topics_list_item").forEach(c=>{c.style.display="block"})):(document.querySelectorAll(".topics_list_item").forEach(c=>{c!==r&&(c.style.display="none")}),s=!0,m(i._id,o,i.name).then(()=>{o.style.display="block",l=!0}).catch(c=>{console.error("Error fetching task details:",c)}).finally(()=>{s=!1})))}),k.appendChild(r)}}).catch(t=>{alert("Помилка завантаження"),console.error("Помилка завантаження:",t)})}document.querySelector(".topics_list");window.addEventListener("load",()=>{E(),p()});
