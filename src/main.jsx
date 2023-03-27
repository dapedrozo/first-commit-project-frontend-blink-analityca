import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './i18nextConf'
import HeroLoading from './componentsLoading/HeroLoading'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<HeroLoading/>}>
      <App />
    </Suspense>
  </React.StrictMode>,
)
