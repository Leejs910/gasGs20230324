// 왼쪽 네비 
// 왼쪽 Navi
// const API_KEY = ('F230111010');
// const url =`http://www.opinet.co.kr/api/avgAllPrice.do?out=xml&code=${API_KEY}`;

// fetch(url).then(response => response.json()).then(data => {
//     console.log()
// });

let navi = document.querySelectorAll('.left_navi');


// 오른쪽 콘텐츠 
let rightContent = document.querySelectorAll('.right_contents');
// 오른쪽 콘텐츠 아래 문구
let rightContentDown = document.querySelector('contents_right_down')

// 오른쪽 콘텐츠 아래 버튼
let rightContentBt = document.querySelectorAll('.belowBt')
// 오른쪽 콘텐츠 아래 버튼 내용
// let previousBT = rightContentBt[0].getAttribute('onclick')

// 푸터
let footer = document.querySelectorAll('.footer')

// index2_터치확인 
let touch_confirm = ('no')

// 다음 페이지 이동
function go_next(num) {
    if (num == 0) {
        location.replace('index2.html');
    }

    if (num == 1 && touch_confirm == 'yes') {
        location.replace('index3.html');
    }
}


// 모달  터치완료
function confirmText(num) {
    // let container2 = document.querySelector('.container2');

    let contents_text = document.querySelector('.contents_text');
    if (num == 1) {
        // container2.style.display=('none');
        contents_text.innerHTML = ("터치완료<br>'확인버튼'을<br>꼭 눌러 주세요.");
        // location.replace('/index3.html')
        touch_confirm = ('yes');
    }
    // index3 카드 삽입완료
    if (num == 2){
        rightContent[3].classList.add('nonactive');
        rightContent[4].classList.remove('nonactive');
        footer[3].classList.add('nonactive');
        footer[4].classList.remove('nonactive');
        // 페이지 넘버 5
        pagenum = (pagenum + 1);
      
    }
    // index 보너스 카드
    if (num == 3 || num == 4){
        rightContent[4].classList.add('nonactive');
        rightContent[5].classList.remove('nonactive');
        rightContentBt[0].classList.add('nonactive');
        rightContentBt[1].classList.add('nonactive');
        
        setTimeout(()=>{
            rightContent[5].classList.add('nonactive');
            rightContent[6].classList.remove('nonactive');
            navi[3].innerHTML = ('주 유');
            navi[3].classList.add('bg-dark','text-light');
            
        },1500);
        setTimeout(()=>{
            Swal.fire({
                imageUrl: '/img/fuel.png',
                imageHeight: 100,
                title: '주유 완료',
                icon: 'success',
                text: '주유 완료 되었습니다',
                backdrop: 'rgba(0,0,0,0.6)',
                confirmButtonColor: '#3085d6',
                confirmButtonText: '&nbsp&nbsp&nbsp 확 인 &nbsp&nbsp&nbsp',
                showClass: {popup: 'animate__animated animate__fadeInDown'},
                hideClass: {popup: 'animate__animated animate__fadeOutUp'},
              }).then((result) => 
              {if (result.isConfirmed) 
                { home(0);
                    }
                })
        },2200);
       
    }
};

// index3 신용카드 조회 -> 주유 준비중입니다. 잠시만 기다려 주세요. 
    // function fuel


//index3 초기화면
rightContent[1].classList.add('nonactive')
rightContent[2].classList.add('nonactive')
rightContent[3].classList.add('nonactive')
rightContent[4].classList.add('nonactive')
rightContent[5].classList.add('nonactive')
rightContent[6].classList.add('nonactive')

footer[1].classList.add('nonactive')
footer[2].classList.add('nonactive')
footer[3].classList.add('nonactive')
footer[4].classList.add('nonactive')


//index3 유종선택
function gasOrdisel(val) {
    
    rightContent[0].classList.add('nonactive');
    rightContent[1].classList.remove('nonactive');
    footer[0].classList.add('nonactive');
    footer[1].classList.remove('nonactive');
    navi[0].innerHTML = (val);
    navi[0].classList.add('bg-dark','text-light');
    //페이지 넘버는 2
    pagenum = (pagenum + 1)

 
}
//index3 지불방법 

function howToPay(val) {
    rightContent[1].classList.add('nonactive');
    rightContent[2].classList.remove('nonactive');
    footer[1].classList.add('nonactive');
    footer[2].classList.remove('nonactive');
    navi[1].innerHTML = (val);
    navi[1].classList.add('bg-dark','text-light');
     //페이지 넘버는 3
     pagenum = (pagenum + 1)
    
}

// index3 주유금액 주유량
let moneyBtn = document.querySelectorAll("#moneyBt .money_bt");

moneyBtn[0].addEventListener('click', btn_listener); 
moneyBtn[1].addEventListener('click', btn_listener); 
moneyBtn[2].addEventListener('click', btn_listener); 
moneyBtn[3].addEventListener('click', btn_listener); 
moneyBtn[4].addEventListener('click', btn_listener); 
moneyBtn[5].addEventListener('click', btn_listener); 
moneyBtn[6].addEventListener('click', btn_listener); 
moneyBtn[7].addEventListener('click', btn_listener); 
moneyBtn[8].addEventListener('click', btn_listener); 
moneyBtn[9].addEventListener('click', btn_listener); 
moneyBtn[10].addEventListener('click', btn_listener); 
moneyBtn[11].addEventListener('click', btn_listener); 
moneyBtn[12].addEventListener('click', btn_listener); 

function btn_listener() {
    let fuel_price = this.dataset['number'];
    //페이지 넘버는 4
    pagenum = (pagenum + 1)
    if(fuel_price <= 100000){
        let fuel_priceResult = fuel_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        rightContent[2].classList.add('nonactive');
        rightContent[3].classList.remove('nonactive');
        footer[2].classList.add('nonactive');
        footer[3].classList.remove('nonactive');
        navi[2].innerHTML = (`${fuel_priceResult} <br> 원`);
        navi[2].classList.add('bg-dark','text-light');
    }
    else{
        rightContent[1].classList.add('nonactive');
        rightContent[2].classList.remove('nonactive');
        footer[1].classList.add('nonactive');
        footer[2].classList.remove('nonactive');
    }
       
}

// index3 




// 이전페이지 이동

// let greenBt = rightContentBt.setAttribute('onclick', previous(1))
let pagenum = (1);

function previous() {
    if (pagenum == 1) {
        location.replace('./index.html');
    }
    if (pagenum == 2) {
        location.reload('./index3.html');
    }
    if (pagenum == 3) {
        pagenum = (pagenum-1);
        rightContent[2].classList.add('nonactive');
        rightContent[1].classList.remove('nonactive');
        footer[2].classList.add('nonactive');
        footer[1].classList.remove('nonactive');
        navi[1].innerHTML = ('지불방법');
        navi[1].classList.remove('bg-dark','text-light');
    }
    if(pagenum == 4){
        pagenum = (pagenum-1);
        rightContent[3].classList.add('nonactive');
        rightContent[2].classList.remove('nonactive');
        footer[3].classList.add('nonactive');
        footer[2].classList.remove('nonactive');
        navi[2].innerHTML = ('주유금액<br>/주유량');
        navi[2].classList.remove('bg-dark','text-light');
    }
    if(pagenum == 5){
        pagenum = (pagenum-1);
        rightContent[4].classList.add('nonactive');
        rightContent[3].classList.remove('nonactive');
        footer[4].classList.add('nonactive');
        footer[3].classList.remove('nonactive');
    }
}

// 홈으로 이동 

function home() {
    location.replace('./index.html')
}