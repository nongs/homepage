<script>
  // import { state } from "svelte/src/internal/client";
  import Project from './Project.svelte'

  let projectList = $state([
    {title: '반카 리뉴얼', role: 'Frontend, API', year: 2023, skill: 'React, Next.js, PHP', desc: '기존 PHP + AngularJs 환경의 홈페이지에 AngularJS 및 복잡한 파일구성등의 유지보수에 대한 어려움이 있어 React + Next.js 환경으로 리뉴얼 진행', cover: '/images/vancar.png', link: 'https://www.vancar.kr/'},
    {title: '반카 파트너스', role: 'Frontend, API', year: 2023, skill: 'React, PHP', desc: '상품 공급업체를 위한 상품 관리 홈페이지로 React를 사용하여 개발 진행. 필요한 API는 PHP에서 작성하여 연결', cover: '/images/vancar-partners.png', link: 'https://partners.vancar.kr/'},
    {title: '박차 리뉴얼', role: 'Frontend, API', year: 2020, skill: 'AngularJS, PHP', desc: '기존 박차 사이트의 UI 변경 및 전체적인 검색 플로우 변경으로 인한 홈페이지 리뉴얼', cover: '/images/bakcha.png', link: 'https://biz.bakcha.com/'},
    {title: 'KISTI EDISON Coursebuilder', role: 'Frontend', year: 2018, skill: 'AngularJS', desc: 'EDISON 강의 저작도구 웹 프론트엔드 작업 진행', cover: '/images/edison_coursebuilder.jpg', link: ''},
    {title: 'GESTURE Coursebuilder', role: 'Frontend', year: 2018, skill: 'AngularJS', desc: 'LMS 강의 저작도구 웹 프론트엔드 작업 진행', cover: '/images/gesture_coursebuilder.jpg', link: ''},
    {title: 'IMOOVE2 Coursebuilder', role: 'Frontend', year: 2017, skill: 'AngularJS', desc: 'MOOC 강의 저작도구 웹 프론트엔드 작업 진행', cover: '/images/imoove2_coursebuilder.jpg', link: ''},
  ]);
  let listLeng = $state(3);
  let LoadList = () => {
    if (listLeng >= projectList.length) return;
    listLeng = listLeng + 3;
  }
</script>

<div id='Project' class='area-projects'>
  <h2 class='area-heading'>참여 프로젝트</h2>
  <ul class='list-projects'>
    {#each projectList.slice(0, listLeng) as item}
    <li class='item-project'>
      <Project item={item} />
    </li>
    {/each}
  </ul>
  {#if projectList.length > listLeng}
  <button type='button' class='btn-more_list' onclick={LoadList}>더보기</button>
  {/if}
</div>

<style>
  .area-projects {
    margin-top: 20px;
    padding: 40px 0;
  }
  .area-heading {
    font-size: 18px;
    font-weight: 600;
  }
  .list-projects {
    margin-top: 10px;
  }
  .item-project {
    padding: 10px 0 20px;
  }
  .item-project + .item-project {
    border-top: 1px solid #f3e6d7;
  }
  .btn-more_list {
    width: 100%;
    padding: 20px 0;
    border: none;
    background: none;
    cursor: pointer;
  }
  @media screen and (max-width: 767px) {
    .area-projects {
      padding: 20px 0;
    }
  }
</style>