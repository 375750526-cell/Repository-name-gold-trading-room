const WORKER_URL =
"https://plain-bar-98a8.aaa375750526.workers.dev";


const loginBtn =
document.getElementById("login");


const editor =
document.getElementById("editor");


const status =
document.getElementById("status");



// GitHub登录

loginBtn.onclick = ()=>{

window.location.href =
WORKER_URL + "/auth";

};




// 登录成功显示后台

const params =
new URLSearchParams(
window.location.search
);


if(params.get("login")==="success"){

loginBtn.style.display="none";

editor.style.display="block";

status.innerHTML =
"GitHub 登录成功";

}





// 发布文章

document
.getElementById("publish")
.onclick = async ()=>{


const title =
document.getElementById("title").value;


const description =
document.getElementById("description").value;


const date =
document.getElementById("date").value;


const content =
document.getElementById("content").value;



if(!title){

alert("请输入文章标题");

return;

}



if(!content){

alert("请输入文章正文");

return;

}



status.innerHTML =
"正在发布...";



const form =
new FormData();


form.append(
"title",
title
);


form.append(
"description",
description
);


form.append(
"date",
date
);


form.append(
"content",
content
);




try{


const res =
await fetch(
WORKER_URL + "/publish",
{

method:"POST",

body:form,

credentials:"include"

}

);



const text =
await res.text();



status.innerHTML =
text;



}

catch(err){


status.innerHTML =
"发布失败："+err.message;


}


};
