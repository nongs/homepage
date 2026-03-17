<script>
  // import { state } from "svelte/src/internal/client";
  import Project from './Project.svelte'
  import { projects } from '../../data/projects'

  const projectList = projects
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