import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RootLayout from './layouts/RootLayout.jsx'
import {Route, Routes} from 'react-router-dom'
import Lab1Page from './pages/Lab1Page.jsx'
import PeoplePage from './pages/PeoplePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import Home from './pages/Home.jsx'
import Lab2Page from './pages/Lab2Page.jsx'
import Lab3Page from './pages/Lab3Page.jsx'


function App() {
  const menuItems = [
    {id: 1, label: 'Home', url: '/home', element: <Home/> },
    {id: 2, label: 'Laboratorium 1', url: '/lab1', element: <Lab1Page/>},
    {id: 3, label: 'Laboratorium 2', url: '/lab2/:id', element:<Lab2Page/> },
    {id: 4, label: 'Laboratorium 3', url: '/lab3', element: <Lab3Page/>},
    {id: 5, label: 'People', url: '/people/:id', element: <PeoplePage/>}
  ]

  return (
    <>
      <RootLayout items={menuItems}>
        <Routes>
          {menuItems.map((item) => (
            <Route key={item.id} path={item.url} element={item.element}/>
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </RootLayout>
    </>
  )
}

export default App
