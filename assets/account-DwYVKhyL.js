import{c as t}from"./changetorigistrated-DiyhUFzb.js";const o="https://harry-potter-test-preparation-backend.onrender.com/",n=document.querySelector(".user_progress-value"),s=document.querySelector(".user_avatar"),a=document.querySelector(".user_name"),c=document.querySelector(".user_mail");function u(){let r=localStorage.getItem("token");console.log(r),fetch(`${o}auth/getInfo`,{method:"GET",headers:{Authorization:"Bearer "+r,"ngrok-skip-browser-warning":"69420","Content-Type":"application/json"},body:JSON.stringify()}).then(e=>{if(!e.ok)throw new Error(`HTTP Error: ${e.status}`);return e.json()}).then(e=>{n.style.width=`${e.user.progress}%`,s.setAttribute("src",e.user.avatar),a.innerHTML=`${e.user.lastName} ${e.user.firstName}`,c.innerHTML=`${e.user.email}`}).catch(e=>{alert("Помилка авторизації"),console.error("Помилка авторизації:",e),localStorage.setItem("account_status",!1),t(),window.location.href="index.html"})}window.addEventListener("load",()=>{u(),t()});
