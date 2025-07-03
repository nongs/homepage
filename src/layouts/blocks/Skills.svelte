<script>

</script>

<div id='Skill' class='area-skills'>
  <h2 class='hidden'>Skills</h2>
  <ul class='wrapper-skills'>
    <li>
      <h3>웹 퍼블리싱 및 DOM Script</h3>
      <p>좋은 코딩을 위한 마크업구조를 고민하는 편이고 CSS와 자바스크립트를 활용하여 DOM 변경 및 시각적인 효과 작업을 진행할 수 있습니다.</p>
    </li>
    <li>
      <h3>라이브러리 및 프레임워크</h3>
      <p>주로 React를 사용하여 작업하고 있습니다. 이전에는 AngularJS를 주로 사용했고 Vue.js와 Svelte에도 관심을 가지고 있습니다.</p>
    </li>
    <li>
      <h3>데이터 활용</h3>
      <p>RESTful API 통신으로 데이터를 관리하여 동적인 페이지를 제작할 수 있고 필요한 DB Table 구조를 제안하거나 간단한 DB Query를 작성할 수 있습니다.<span class='hidden'>주로 PHP 환경에서 DB 연결 함수를 사용한 API를 작성하여 작업을 진행했습니다.</span></p>
    </li>
  </ul>
</div>

<style>
  .hidden {
    display: none;
  }
  .area-skills {
    margin-top: 40px;
    padding: 40px 0;
  }
  .wrapper-skills {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    column-gap: 40px;
  }
  .wrapper-skills li {
    flex: 1;
    padding: 0 20px;
  }
  .wrapper-skills li h3 {
    font-size: 15px;
    font-weight: 600;
  }
  .wrapper-skills li p {
    margin-top: 10px;
    line-height: 1.45;
  }
  @media screen and (max-width: 767px) {
    .area-skills {
      padding: 20px 0;
    }
    .wrapper-skills {
      flex-direction: column;
      row-gap: 30px;
    }
    .wrapper-skills li {
      padding: 0;
    }
  }
</style>