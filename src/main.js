import { mount } from 'svelte'
import './styles/reset.css'
import './styles/font.css'
import './styles/app.css'
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
