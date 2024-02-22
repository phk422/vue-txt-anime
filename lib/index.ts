import type { App, Plugin } from 'vue'
import VueTxtAnime from './VueTxtAnime.vue'

 type SFCWithInstall<T> = T & Plugin

function withInstall<T>(main: T) {
  (main as SFCWithInstall<T>).install = (app: App) => {
    app.component((main as any).name, main as SFCWithInstall<T>)
  }
  return main as SFCWithInstall<T>
}

export default withInstall(VueTxtAnime)
