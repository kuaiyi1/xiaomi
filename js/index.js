{
	let imgs=document.querySelectorAll(".banner_img  li");
	let pagers=document.querySelectorAll(".banner_dot  li");
	let banner=document.querySelector("#banner");
	let banner_lbtn=document.querySelector(".banner_lbtn");
	let banner_rbtn=document.querySelector(".banner_rbtn");
	console.log(imgs);
	console.log(pagers);
	console.log(banner);
	console.log(banner_lbtn);
	console.log(banner_rbtn);
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
				for(let i=0;i<imgs.length;i++){
					imgs[i].classList.remove("active");
					pagers[i].classList.remove("active");
				}
				ele.classList.add("active");
				imgs[index].classList.add("active");
				k=index;
		}
	});
	var k=0;
	let t=setInterval(move,3000);
	function move(){
		k++;
		// n=n%3;
		if(k===imgs.length){
			k=0;
		}
		if(k<0){
			k=imgs.length-1
		}
		for(let i=0;i<imgs.length;i++){
					imgs[i].classList.remove("active");
					pagers[i].classList.remove("active");
				}
				imgs[k].classList.add("active");
				pagers[k].classList.add("active");
	}
	// onmouseover//鼠标进入
	// onmouseenter //鼠标进入
	// onmouseseleave //鼠标离开事件
		banner.onmouseenter=function(){
			clearInterval(t);
		}
		banner.onmouseleave=function(){
			t=setInterval(move,3000);
		}
		 var flag=true;
		banner_rbtn.onclick=function(){
			if(flag){
				flag=false;
				move();
				}
		}
		banner_lbtn.onclick=function(){
			if(flag){
				k-=2;
				flag=false;
				move();
				}
		}
	//transitionend
	//addEventListener
     imgs.forEach(function(ele,index){
     	ele.addEventListener("transitionend",function(){
     		flag=true;
     	})
     })
}

//闪购部分的结果
{
	function shan(star){const prev=star.querySelector(".star_btn1");
	const next=star.querySelector(".star_btn2");
	const inner=star.querySelector(".star_bottom");
	console.log(prev);
	console.log(next);
	console.log(inner);
	var n=0;
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===2){
			next.classList.add("disable");

		}
		if(n===3){
			n=2;
			return;
		}
		inner.style.marginLeft=-1240*n+"px";
	}
	prev.onclick=function(){
		n--;
		next.classList.remove("disable");
		if(n===0){
			prev.classList.add("disable");
		}
		if(n===-1){
			n=0;
			return;
		}
		inner.style.marginLeft=-1240*n+"px";
	}
	}
	const stars=document.querySelectorAll(".star");
	stars.forEach(function(ele,index){
			shan(ele);
	})
	
}
//内容部分
{
	function content(dapeis){
	const spans=dapeis.querySelectorAll(".dapei_right span");
	const  rights=dapeis.querySelectorAll(".dapei_bottom_right");

	console.log(spans);
	console.log(rights);
	spans.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<spans.length;i++){
				spans[i].classList.remove("dapei_right1");
				rights[i].classList.remove("active");
			}
			ele.classList.add("dapei_right1");
			rights[index].classList.add("active");
		}
	})}
	const dapeis=document.querySelectorAll(".dapei");
	dapeis.forEach(function(ele,index){
			content(ele);
	})
}

//转化开始
{

	function yi(every){
	const left_btn=every.querySelector(".banner_lbtn1");
	const right_btn=every.querySelector(".banner_rbtn1");
	const  inner1=every.querySelector(".neirong_bottom_item1");
	const  lefts=every.querySelectorAll(".neirong_bottom_left");
	const  items=every.querySelectorAll(".neirong_bottom_item");
	var j=0;
	var obj=lefts[0];
	right_btn.onclick=function(){
			j++;
			
			if(j===items.length){
				j=items.length-1;
				return;
			}
			lefts[j].classList.add("neirong_bottom_left2");
			lefts[j-1].classList.remove("neirong_bottom_left2");
			inner1.style.marginLeft=-296*j+"px";
			    obj=lefts[j];
	}
	left_btn.onclick=function(){
		 j--;
		 if(j===-1){
		 	 j=0;
		 	 return;
		 }
		 inner1.style.marginLeft=-296*j+"px";
		 lefts[j+1].classList.remove("neirong_bottom_left2");
		 lefts[j].classList.add("neirong_bottom_left2");
		 obj=lefts[j];
	}


	lefts.forEach(function(ele,index){
		ele.onclick=function(){
			// for(var i=0;i<lefts.length;i++){
			// 	lefts[i].classList.remove("neirong_bottom_left2");
			// }
				obj.classList.remove("neirong_bottom_left2");
				ele.classList.add("neirong_bottom_left2");
				obj=ele;
				inner1.style.marginLeft=-296*index+"px";
				j=index;
			}
		}
	)
	}
	const itemss=document.querySelectorAll(".neirong_bottom_item2");
	itemss.forEach(function(ele,index){
			yi(ele);
	})
	

}
//弹出操作
{
	let pops=document.querySelectorAll(".pop1");
	let lis=document.querySelectorAll(".banner_nav li");
	console.log(pops);
	var obj=pops[0];
	lis.forEach(function(ele,index){
			ele.onmouseenter=function(){
				obj.style.display="none";
				pops[index].style.display="block";
				obj=pops[index];
			}
			ele.onmouseleave=function(){
				pops[index].style.display="none";
			}
	})
}
//gilde
{
	let  spanss=document.querySelectorAll(".nav_wenzi span");
	let  gilders=document.querySelectorAll(".glide");
	  console.log(spanss);
	
	spanss.forEach(function(ele,index){
		ele.onmouseenter=function(){
			gilders[index].style.height="230px";
			gilders[index].style.display="block";
		}
		ele.onmouseleave=function(){
			gilders[index].style.height="0";
			gilders[index].style.display="none";
		}
	})
}