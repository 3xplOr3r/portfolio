(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const s=document.getElementById("menu"),a=document.getElementById("toogle-button");a.addEventListener("click",()=>{s.classList.toggle("translate-y-[-200%]")});const d=document.querySelectorAll(".nav-links");d.forEach(t=>{t.addEventListener("click",()=>{s.classList.add("translate-y-[-200%]")})});document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".cards"),o=document.getElementById("more");t.forEach((i,l)=>{l>=7&&i.classList.add("hidden")}),o.addEventListener("click",function(){t.forEach(i=>i.classList.remove("hidden")),this.classList.add("hidden")})});new Typed(" .type",{strings:["Frontend Developer","Content Writer","Programmer","Gamer"],typeSpeed:30,backSpeed:50,backDelay:2e3,loop:!0});window.sr=ScrollReveal({distance:"90px",duration:"1500",reset:!0});sr.reveal(".r-icon",{delay:100,origin:"top"});sr.reveal(".s-quote",{delay:100,origin:"bottom"});sr.reveal(".sc-img",{delay:300,origin:"left"});sr.reveal(".biplob",{delay:300,origin:"right"});sr.reveal(".type",{delay:200,origin:"left"});sr.reveal(".ab-img",{delay:100,origin:"left"});sr.reveal(".about",{delay:100,origin:"right"});sr.reveal(".about2",{delay:300,origin:"right"});sr.reveal(".one",{delay:100,origin:"left"});sr.reveal(".two",{delay:200,origin:"left"});sr.reveal(".three",{delay:300,origin:"left"});sr.reveal(".four",{delay:400,origin:"left"});sr.reveal(".five",{delay:500,origin:"left"});sr.reveal(".six",{delay:600,origin:"left"});sr.reveal(".seven",{delay:700,origin:"left"});sr.reveal(".eight",{delay:800,origin:"left"});sr.reveal(".nine",{delay:900,origin:"left"});sr.reveal(".ten",{delay:1e3,origin:"left"});sr.reveal(".l-work",{delay:200,origin:"left"});sr.reveal(".frm",{delay:200,origin:"right"});sr.reveal(".footer",{delay:400,origin:"bottom"});
