
// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'



// Composables
import { createVuetify } from 'vuetify'

export default createVuetify(
  {
    icons: {
      iconfont: 'mdi' || 'md' || 'fa' 
    },
    theme: {
      themes: {
        dark: {
        background: '#121212',
      }
      }
    }
  }
)
