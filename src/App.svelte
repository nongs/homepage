<script>
  import Header from './layouts/commons/Header.svelte'
  import Footer from './layouts/commons/Footer.svelte'

  import MainVisual from './layouts/blocks/MainVisual.svelte'
  import Skills from './layouts/blocks/Skills.svelte'
  import Projects from './layouts/blocks/Projects.svelte'
  import Career from './layouts/blocks/Career.svelte'
</script>

<Header />
<main>
  <MainVisual />
  <Skills />
  <Projects />
  <Career />
</main>
<Footer />

<style>
  main {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 80px 40px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
</style>