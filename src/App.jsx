import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { myRoutes } from './Route'

const App = () => {
    return <RouterProvider router={myRoutes}></RouterProvider>
}

export default App
