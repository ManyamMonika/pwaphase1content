function getfile(file,callback){
	var htp=new XMLHttpRequest();
	htp.overrideMimeType("application/json");
	htp.open('GET',file,true);
	htp.onreadystatechange=function () {
		if(htp.readyState===4 && htp.status=="200"){
			callback(htp.responseText);

	}
		}
		htp.send(null);
}
getfile("dynamic.json",function(text) {
let data=JSON.parse(text);
console.log(data);
profile(data.profile);
career(data.career);
educationaldetails(data.education);
languages(data.languages);
})
var left=document.querySelector(".left");
function  profile(p) {
    var pimg=document.createElement("img");
    pimg.src=p.img;
    left.appendChild(pimg);
    var ph3=document.createElement("h3");
    ph3.textContent=p.name;
    left.appendChild(ph3);
    var ppar=document.createElement("h4");
    ppar.textContent=p.roll;
    left.appendChild(ppar);
    var  pint=document.createElement("h4");
    pint.textContent=p.institute;
    left.appendChild(pint);
   var ppla=document.createElement("p");
   ppla.textContent=p.place;
   left.appendChild(ppla);
}
   var right=document.querySelector(".right");
function  career(c) {
	var ch=document.createElement("h2");
	ch.innerHTML="Resume";
	right.appendChild(ch);

    var cc=document.createElement("h2");
    cc.innerHTML="career objective";
    right.appendChild(cc);
    var chr=document.createElement("hr");
	right.appendChild(chr);
    var cinfo=document.createElement("h4");
    cinfo.textContent=c.info;
    right.appendChild(cinfo);
}
function educationaldetails(e){
	var ed=document.createElement("h2");
	ed.innerHTML="educational details";
	right.appendChild(ed);
	var ehr=document.createElement("hr");
	right.appendChild(ehr);
	var etable=document.createElement("table");
	etable.border="1";
	var tr1="<tr><td>s</td><td>degree</td><td>institute</td><td>yearofpassing</td></tr>";
var tr2="";
	for(var i=0;i<e.length;i++){
     tr2=tr2+"<tr><td>"+e[i].s+"</td><td>"+e[i].degree+"</td><td>"+e[i].institute+"</td><td>"+e[i].yearofpassing+"</td></tr>";
    }
    etable.innerHTML=tr1+tr2;
    right.appendChild(etable);
}
function languages(l){
	var lan=document.createElement("h2");
    lan.textContent="languages known";
	right.appendChild(lan);
	var lhr=document.createElement("hr");
	right.appendChild(lhr);
	var ul=document.createElement("ul");
	right.appendChild(ul);
	for(var i=0;i<l.length;i++){
		var li=document.createElement("li"); 
		li.textContent=l[i].lang;
        ul.appendChild(li);
    
}

}