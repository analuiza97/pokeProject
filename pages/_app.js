import { ThemeProvider } from 'styled-components'
import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/global.css'
import { theme } from '../styles/tokens'

  export default function App({ Component, pageProps }) {
    return (
      <>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
  }