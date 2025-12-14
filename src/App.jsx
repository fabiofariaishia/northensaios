import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './components/layout/Layout'
import Loading from './components/shared/Loading'
import ScrollToTop from './components/shared/ScrollToTop'
import { routes } from './routes'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<Loading />}>
            <Routes>
              {routes.map((route, index) => {
                const Component = route.element
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={<Component />}
                  />
                )
              })}
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
