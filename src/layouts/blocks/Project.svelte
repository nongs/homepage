<script>
  let { item } = $props();
  let opend = $state(false);

  let ToggleItem = () => {
    // 하위 컴포넌트로 만들어 folding 이벤트. slide 애니메이션 넣으면 될듯
    opend = !opend;
  }
</script>

<div class={['header-item', opend && 'open']} tabindex='0' onclick={ToggleItem}>
  <h3>{item.title}</h3>
  <span>{item.year}.</span>
</div>
<div class={['detail-item', opend && 'open']}>
  <figure class='cover'>
    <img src={item.cover} alt={item.title + ' 이미지'} />
  </figure>
  <div class='detail'>
    <div>
      <span class='key-detail'>참여역할</span>
      <p class='value-detail'>{item.role}</p>
    </div>
    <div>
      <span class='key-detail'>주요스킬</span>
      <p class='value-detail'>{item.skill}</p>
    </div>
    <div>
      <span class='key-detail'>설명</span>
      <p class='value-detail'>{item.desc}</p>
    </div>
  </div>
</div>

<style>
  .header-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0 10px;
    font-weight: 600;
    font-size: 24px;
    cursor: pointer;
  }
  .header-item span {
    color: #89909d;
  }
  .detail-item {
    display: flex;
    justify-content: flex-start;
    column-gap: 30px;
    height: 0;
    padding-top: 0;
    overflow: hidden;
  }
  .detail-item.open {
    height: auto;
    padding-top: 10px;
  }
  .detail-item .cover {
    flex-basis: 50%;
    flex-shrink: 0;
    flex-grow: 0;
    position: relative;
    width: 50%;
    aspect-ratio: 2 / 1;
    overflow: hidden;
  }
  .detail-item .cover img {
    position: absolute;
    top: 0;
    left: 50%;
    width: auto;
    height: 100%;
    transform: translate(-50%, 0);
  }
  .detail-item .detail > div {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    column-gap: 20px;
    line-height: 1.45;
  }
  .detail-item .detail > div + div {
    margin-top: 6px;
  }
  .detail-item .key-detail {
    color: #555;
    white-space: nowrap;
  }
  @media screen and (max-width: 599px) {
    .detail-item {
      flex-direction: column;
      row-gap: 20px;
    }
    .detail-item .cover {
      width: 100%;
    }
  }
</style>