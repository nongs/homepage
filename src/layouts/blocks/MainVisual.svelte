<script>
  let introTxt = 'Developer.';
  let text = 'Developer.';

  // DOM loaded
  // setTimeout( () => typeWrite(introTxt, text.length, typeRemove), 1000);

  // const typeWrite = ( txt, idx, func ) => {
  //   if ( idx < txt.length ) {
  //     text += txt.charAt(idx);
  //     idx++;
  //     setTimeout(function() { typeWrite( txt, idx, func ); }, 100);
  //   } else if ( func ) {
  //     func();
  //   }
  // }
  // const typeRemove = ( boo ) => {
  //   if ( !boo ) {
  //     return setTimeout(function() { typeRemove(true) }, 1000);
  //   }
  //   let getTxt = text;
  //   if ( getTxt.length ) {
  //     text = getTxt.slice(0, getTxt.length - 1);
  //     setTimeout(function() { typeRemove( true ); }, 100);
  //   } else {
  //     setTimeout(function() { typeWrite( introTxt, 0, typeRemove ); }, 1000);
  //   }
  // }
</script>

<div class='area-main_visual'>
  <div class='wrapper-big_title'>
    <h2 class='big_title'>Front-End<span class='animation-cursor'>{text}</span></h2>
    <p class='big_title_desc'>Markup, Style Sheet, DOM Script, Database and Front-End Frameworks.</p>
  </div>
  <p class='description'>웹 프론트엔드 전반적으로 업무를 진행하고, <br/>디자이너와 백엔드 개발자와의 원활한 소통으로 프로젝트의 높은 완성도를 지향합니다.</p>
</div>

<style>
  .area-main_visual {
    margin-top: 50px;
  }
  .wrapper-big_title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
  }
  .wrapper-big_title .big_title {
    max-width: 80%;
    width: 100%;
    font-size: 120px;
  }
  .wrapper-big_title .big_title .animation-cursor {
    display: block;
    min-height: 120px;
  }
  .wrapper-big_title .big_title_desc {
    max-width: 180px;
    padding: 20px 0;
    font-size: 12px;
  }

  .description {
    margin-top: 40px;
    font-size: 14px;
    line-height: 1.45;
  }

  @media screen and (max-width: 767px) {
    .wrapper-big_title {
      flex-wrap: wrap;
      justify-content: flex-start;
    }
    .wrapper-big_title .big_title {
      flex-grow: 1;
      flex-basis: 100%;
      max-width: 100%;
      font-size: 100px;
    }
    .wrapper-big_title .big_title_desc {
      padding: 0;
    }
    .description {
      margin-top: 20px;
    }
  }
</style>