/* 익명 함수의 정의 함수 이름이 없 이 정의 가능, 인자로 바로 전달
setTimeout(
	function (){
		//함수 내용
	},
	3000 );
  // 익명 함숭 정의 후 바로 호출할때
    function (){
        //함수 내용
    }();*/

    /*  예외 처리
    try 구문 안에서 호출한 함수 안에서 에러가 발생한 경우에도 catch로 이동해 프로그램이 실행됨.
    try{
        // 정상적으로 실행되는 경우 실행될 프로그램 작성
        // try 블록안에서 에러가 발생한 경우 catch 블록으로 이동함
    }
    catch(e){
        // try 블록에서 에러가 발생한 경우
        // 에러를 인자 e로 받아 에러를 처리하는 코드를 작성
    }
    finally{
        // try, catch구문이 실행되고 나서 실행될 코드
    }*/
var req = new XMLHttpRequest();
req.open("GET","./json/image_list.json");
req.onreadystatechange = function(){
    if(this.readyState == 4){
        var data = JSON.parse(this.response);
        for(var i =0;i<data.length;i++){
            var div = document.createElement("div");
            div.setAttribute("class","image");
            div.onclick = function(){
                if(this.getAttribute("class").indexOf("image-selected") == -1){
                    this.setAttribute("class", "image image-selected");
                }
                else{
                     this.setAttribute("class","image");
                }

                this.classList.toggle("image-selected");
            }
            var img = document.createElement("img");
            img.src = data[i];
            div.appendChild(img);
            document.body.appendChild(div);
        }
    }
}
req.send();

function selectAll(){
    var images = document.getElementsByClassName("image");
    for(var i = 0; i<images.length; i++){
        images[i].classList.add("image-selected");
    }
}

function slideShow(btn){
    var images = document.getElementsByClassName("image");
    var index = 0;
    images[index].classList.add("image-magnified");

    var intervalId = setInterval(function(){
        images[index].classList.remove("image-magnified");
        index++;
        if(index < images.length){
            images[index].classList.add("image-magnified");
        }
        else{
            clearInterval(intervalId);
        }
        

    },1000);
}