import{c as o}from"./changetorigistrated-B8TaOUy0.js";const r="https://harry-potter-test-preparation-backend.onrender.com/";function n(){let t=localStorage.getItem("token");fetch(`${r}auth/logout`,{method:"POST",headers:{Authorization:"Bearer "+t,"ngrok-skip-browser-warning":"69420","Content-Type":"application/json"}}).then(e=>{if(!e.ok)throw new Error(`HTTP Error: ${e.status}`);return e.json()}).then(e=>{localStorage.setItem("token"," "),localStorage.setItem("account_status","false"),window.location.href="index.html"}).catch(e=>{alert("Помилка виходу"),console.error("Помилка виходу:",e)})}const a="https://harry-potter-test-preparation-backend.onrender.com/",s=document.querySelector(".user_progress-value"),c=document.querySelector(".user_avatar"),l=document.querySelector(".user_name"),u=document.querySelector(".user_mail"),i=document.querySelector(".logout-btn");i.addEventListener("click",()=>{n()});function h(){let t=localStorage.getItem("token");console.log(t),fetch(`${a}auth/getInfo`,{method:"GET",headers:{Authorization:"Bearer "+t,"ngrok-skip-browser-warning":"69420","Content-Type":"application/json"},body:JSON.stringify()}).then(e=>{if(!e.ok)throw new Error(`HTTP Error: ${e.status}`);return e.json()}).then(e=>{console.log(e),s.style.width=`${e.user.progress*100}%`,c.setAttribute("src",e.user.avatar),l.innerHTML=`${e.user.lastName} ${e.user.firstName}`,u.innerHTML=`${e.user.email}`}).catch(e=>{alert("Помилка авторизації"),console.error("Помилка авторизації:",e),localStorage.setItem("account_status",!1),o(),window.location.href="index.html"})}window.addEventListener("load",()=>{h(),o()});
