<script>
  let ActScroll = (e, to) => {
    e.preventDefault();
    document.querySelector(to).scrollIntoView({
        behavior: 'smooth'
    });
  }
</script>

<header>
  <nav>
    <h1>LIM GEONHONG</h1>
		<ul class='navigation'>
			<!-- <li><a href='#Skill'>Skills</a></li> -->
			<li><a href='#Project' onclick={(e) => {ActScroll(e, '#Project')}}>참여 프로젝트</a></li>
			<li><a href='#Career' onclick={(e) => {ActScroll(e, '#Career')}}>경력</a></li>
		</ul>
	</nav>
</header>

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #f8f0e6;
    background: linear-gradient(to bottom, #f8f0e6 0 50%, transparent);
    background: -webkit-linear-gradient(to bottom, #f8f0e6 0 50%, transparent);
    z-index: 1;
  }
  header nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 20px 40px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  header nav h1 {
    font-size: 18px;
  }
  header nav ul {
    display: flex;
    justify-content: flex-end;
    column-gap: 20px;
  }
  header nav ul a {
    color: #899098;
    text-decoration: none;
  }
  header nav ul a:hover {
    color: #333;
  }
</style>