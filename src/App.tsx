import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Album from './pages/albums'
import CreateSong from './pages/createSong'
import Dashboard from './pages/dashboard'
import Genre from './pages/genre'
import Songs from './pages/songs'

export const App = () => {
    return (
       <>
       <Routes>
            <Route element={<Dashboard/>} path='/'/>
            <Route element={<Album/>} path='/albums'/>
            <Route element={<Songs/>} path='/songs'/>
            <Route element={<Genre/>} path='/music/genre'/>
            <Route element={<CreateSong/>} path='/songs/new'/>
       </Routes>
       </>
    )
}