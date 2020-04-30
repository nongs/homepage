/* Variables */
let winMode = null;
let mediaQueryMobile = 767;
let scrollPosition = 0;
let introTxtEng1 = 'Hi! I`m Geonhong Lim,';
let introTxtEng2 = 'a front-end developer.';
let introTxtKor1 = '안녕하세요!';
let introTxtKor2 = '프론트엔드 개발자 임건홍입니다.';
let headerNav = document.querySelector('.menu');
let headerNavItem = document.querySelectorAll('.menu-item-main');
let headerMenuBtn = document.querySelector('.menu-button');
let introWrap = document.querySelector('.article-intro .introdution');

/* Events */
// DOM loaded
window.addEventListener('load', windowLoad);
// Resize
window.addEventListener('resize', winResize);
winResize();
// Scroll
window.addEventListener('scroll', winScroll);
winScroll();

for ( let idx = 0; idx < headerNavItem.length; idx++ ) {
  headerNavItem[idx].addEventListener('click', menuScroll);
}

headerMenuBtn.addEventListener('click', menuToggle);

/* Functions */
function windowLoad () {
  setTimeout( switchWrite('eng'), 1000);
}

function winResize () {
  var mode = null;
  if( window.innerWidth > mediaQueryMobile ){
    mode = 'pc';
  } else {
    mode = 'mo';
  }
  if ( winMode == mode ) return false;
  winMode = mode;
}

function winScroll () {
  scrollPosition = window.pageYOffset !== undefined ? window.pageYOffset : ((document.compatMode || "") === "CSS1Compat") ? document.documentElement.scrollTop : document.body.scrollTop;
  if ( winMode == 'pc' ){
  } else {
  }
}

function menuScroll (e) {
  e.preventDefault();
  if ( winMode == 'pc' ){
    scrollAnimateTo(document.querySelector(this.getAttribute('href')).offsetTop, 750);
  } else {
    menuToggle();
    scrollAnimateTo(document.querySelector(this.getAttribute('href')).offsetTop, 750);
  }
}

function menuToggle (e) {
  if ( e ) e.preventDefault();
  if ( headerMenuBtn.className.includes('menu-open') ) {
    headerMenuBtn.classList.remove('menu-open');
    headerNav.classList.remove('menu-open');
  } else {
    headerMenuBtn.classList.add('menu-open');
    headerNav.classList.add('menu-open');
  }
}

function switchWrite ( lang ) {
  if ( lang == 'eng' ) {
    if ( introWrap.className.includes('kor') ) introWrap.classList.remove('kor');
    introWrap.classList.add(lang);
    typeWrite(introTxtEng1, 0, lang, typeWriteNewLine);
  } else {
    if ( introWrap.className.includes('eng') ) introWrap.classList.remove('eng');
    introWrap.classList.add(lang);
    typeWrite(introTxtKor1, 0, lang, typeWriteNewLine);
  }
}

function typeWrite ( txt, idx, lang, func ) {
  if ( idx < txt.length ) {
    introWrap.innerHTML += txt.charAt(idx);
    idx++;
    setTimeout(function() { typeWrite( txt, idx, lang, func ); }, 100);
  } else if ( func ) {
    func(lang);
  }
}
function typeWriteNewLine ( lang ) {
  introWrap.innerHTML += '<br>';
  if ( lang == 'eng' ) {
    setTimeout(function() { typeWrite( introTxtEng2, 0, lang, typeRemove ); }, 100);
  } else {
    setTimeout(function() { typeWrite( introTxtKor2, 0, lang, typeRemove ); }, 100);
  }
}
function typeRemove ( lang, boo ) {
  if ( !boo ) {
    return setTimeout(function() { typeRemove(lang, true) }, 1000);
  }
  let getTxt = introWrap.innerHTML;
  if ( getTxt[getTxt.length - 1] == '>' ) {
    introWrap.innerHTML = getTxt.split('<br')[0];
    setTimeout(function() { typeRemove( lang, true ); }, 100);
  } else if ( getTxt.length ) {
    introWrap.innerHTML = getTxt.slice(0, getTxt.length - 1);
    setTimeout(function() { typeRemove( lang, true ); }, 100);
  } else {
    setTimeout(function() { switchWrite( lang == 'eng' ? 'kor' : 'eng' ); }, 1000);
  }
}

/* Libs */
/*
    animatedScrollTo.js
    https://gist.github.com/andjosh/6764939
 */
function scrollAnimateTo (to, duration, callback) {
  let start = scrollPosition,
      change = to - start,
      currentTime = 0,
      increment = 20;
  var animateScroll = function(){
      currentTime += increment;
      var val = Math.easeInOutQuad( currentTime, start, change, duration );
      window.scrollTo(0, val);
      if ( currentTime < duration ) {
          setTimeout( animateScroll, increment );
      } else {
          if( callback ) callback();
      }
  };
  animateScroll();
}
//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};
