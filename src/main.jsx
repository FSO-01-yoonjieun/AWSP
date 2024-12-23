import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Articles from './pages/Articles.jsx'
import ArticleDetail from './pages/ArticleDetail.jsx'
import { AuthProvider } from './context/AuthProvider.jsx'
import ArticleForm from './pages/ArticleForm.jsx'

// Path별 router를 정의
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/articles',
    element: <Articles />
  },
  {
    // `:` 기호로 동적 parameter를 제공할 수 있다.
    path: '/articles/:id',
    element: <ArticleDetail />
  },
  {
    path: '/articles/new',
    element: <ArticleForm />
  },
  // article 수정 페이지
  {
    path: '/articles/edit/:id',
    element: <ArticleForm />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 인증상태 값을 전달하기 위한 Provider, 하위 컴포넌트들은 `user` 값에 접근할 수 있다 (ref. AuthProvider.jsx) */}
    <AuthProvider>
      {/* React Router의 기능을 제공하는 Provider 컴포넌트 */}
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
