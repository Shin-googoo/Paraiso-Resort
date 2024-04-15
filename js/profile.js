//왼쪽 탭 선택
let tabs = document.querySelectorAll(".tabs h3");
let tabContents = document.querySelectorAll(".tab-content div");

//console.log(tabs, tabContents);
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabContents.forEach(content => {
      content.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabContents[index].classList.add("active");
    tabs[index].classList.add("active"); //왼쪽탭 hover속성
  });
});

//progress Bar
let progressWarp = $('.progress-bar'),
    progressBar = progressWarp.find('.bar'),
    progressText = progressWarp.find('.rate'),
    progressRate = progressText.attr('data-rate');

//bar animation 2.5s width 바뀌는 애니메이트
progressBar.animate({width:progressRate + '%'},2500);

// 일정시간마다 할일 setInterval(할일, 시간);
// 함수명 textAnimation = function(){실제로 할일}
// 실제로 할일 0%-> 1%, 1% - 2% progressText.text('0%');
// 요소의 너비 A.width()
// 요소의 높이 A.height()
// setinterval을 이용한 게이지바 
setInterval(textAnimation, 1000/10);
function textAnimation(){
  let currentRate = progressBar.width() / progressWarp.width() * 100;
  progressText.text(Math.ceil(currentRate) + '%');
}