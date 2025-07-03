<script>
  let careerList = $state([
    {company: '오베네프', team: '솔루션 개발부', period: '2016-2018', period2: '2016.09 ~ 2018.12'},
    {company: '그라픽', team: '프론트엔트 파트', period: '2019', period2: '2019.11 ~ 2020.02'},
    {company: '박차컴퍼니', team: '서비스 개발팀', period: '2020-2024', period2: '2020.06-2024.05'},
  ]);
</script>

<div id='Career' class='area-career'>
  <h2 class='area-heading'>경력</h2>
  <div class='wrap-list-career'>
    <div class='list-rail'></div>
    <ul class='list-career'>
      {#each careerList as career}
      <li class='item-career'>
        <span class='dot'></span>
        <span class='period'>{career.period}</span>
        <span class='company'>{career.company}</span>
        <span class='team'>{career.team}</span>
      </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .hidden {
    display: none;
  }
  .area-career {
    margin-top: 20px;
    padding: 40px 0;
  }
  .area-heading {
    font-size: 18px;
    font-weight: 600;
  }
  .wrap-list-career {
    position: relative;
    margin-top: 30px;
  }
  .list-rail {
    position: absolute;
    top: 0;
    left: 8px;
    width: 4px;
    height: 100%;
    background-color: #8b633e;
  }
  .list-career {
    width: 100%;
    margin: 0;
    padding: 10px 0;
  }
  .list-career .item-career {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    padding-left: 2px;
  }
  .list-career .item-career + .item-career {
    margin-top: 20px;
  }
  .list-career .item-career span {
    white-space: nowrap;
  }
  .list-career .item-career .dot {
    flex-basis: 16px;
    flex-shrink: 0;
    flex-grow: 0;
    position: relative;
    width: 16px;
    height: 16px;
    background-color: #8b633e;
    border-radius: 50%;
  }
  .list-career .item-career .dot:before {
    content: '';
    display: block;
    position: absolute;
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    background-color: #f8f0e6;
    border-radius: 50%;

  }
  .list-career .item-career .period {
    padding-left: 20px;
    color: #555;
    font-size: 16px;
    font-weight: 600;
  }
  .list-career .item-career .company {
    padding-left: 15px;
  }
  .list-career .item-career .team {
    padding-left: 5px;
    color: #89909d;
    font-size: 13px;
  }
  @media screen and (max-width: 767px) {
    .area-career {
      padding: 20px 0;
    }
  }
</style>