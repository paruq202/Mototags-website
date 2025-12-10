// NAVIGATION
function toggleMenu(){const m=document.getElementById("menu"); m.style.right=m.style.right==="0px"?"-250px":"0px";}
function openPage(name){document.querySelectorAll(".page").forEach(p=>p.classList.remove("active")); document.getElementById(name).classList.add("active"); document.getElementById("menu").style.right="-250px";}

// DARK MODE
function toggleDark(){document.body.classList.toggle("dark");}

// PRODUKTE
let produkte=[]; 
function renderProdukte(){
    const container=document.getElementById("produkt-container");
    container.innerHTML="";
    produkte.forEach((p,i)=>{
        const div=document.createElement("div"); div.className="product";
        div.innerHTML=`${p.sale?'<div class="sale-tag">SALE</div>':''}<img src="${p.img}"><div class="info"><h3>${p.name}</h3><p>${p.old?`<span class="price-old">${p.old}€</span>`:""} <span class="price-new">${p.neu}€</span></p><p class="stock">Auf Lager: ${p.stock}</p></div>`;
        container.appendChild(div);
        setTimeout(()=>div.classList.add("show"),50*i);
    });
}
document.getElementById("produkt-form").addEventListener("submit",function(e){
    e.preventDefault();
    const p={name:document.getElementById("p-name").value, old:document.getElementById("p-price-old").value?parseFloat(document.getElementById("p-price-old").value):null, neu:parseFloat(document.getElementById("p-price-new").value), stock:parseInt(document.getElementById("p-stock").value), img:document.getElementById("p-img").value, sale:document.getElementById("p-sale").checked};
    produkte.push(p); renderProdukte(); this.reset();
});

// KOOPERATIONSPARTNER
let partner=[];
function renderPartner(){
    const container=document.getElementById("partner-container");
    container.innerHTML="";
    partner.forEach((p)=>{
        const div=document.createElement("div"); div.className="partner-card";
        div.innerHTML=`<img src="${p.img}"><h2>${p.name}</h2><p><strong>Kooperation seit:</strong> ${p.since}</p><p>${p.comment}</p><div class="social-links">
        ${p.yt?`<a href="${p.yt}" target="_blank"><img src="icons/youtube.png" width="20"> YouTube</a>`:""}
        ${p.tiktok?`<a href="${p.tiktok}" target="_blank"><img src="icons/tiktok.png" width="20"> TikTok</a>`:""}
        ${p.insta?`<a href="${p.insta}" target="_blank"><img src="icons/instagram.png" width="20"> Instagram</a>`:""}
        </div>`;
        container.appendChild(div);
    });
}
document.getElementById("partner-form").addEventListener("submit",function(e){
    e.preventDefault();
    const p={name:document.getElementById("pa-name").value, img:document.getElementById("pa-img").value, comment:document.getElementById("pa-comment").value, since:document.getElementById("pa-since").value, yt:document.getElementById("pa-yt").value, tiktok:document.getElementById("pa-tiktok").value, insta:document.getElementById("pa-insta").value};
    partner.push(p); renderPartner(); this.reset();
});