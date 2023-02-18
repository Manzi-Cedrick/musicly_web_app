import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Album from './pages/albums'
import CreateAlbum from './pages/createAlbum'
import CreateSong from './pages/createSong'
import Dashboard from './pages/dashboard'
import Genre from './pages/genre'
import GenreDetails from './pages/genreDetails'
import Login from './pages/login'
import SignUp from './pages/signup'
import Songs from './pages/songs'
import UpdateAlbum from './pages/updateAlbum'
import UpdateSong from './pages/updateSong'

export const App = () => {
    return (
       <>
       <Routes>
            <Route element={<Dashboard/>} path='/'/>
            <Route element={<Album/>} path='/albums'/>
            <Route element={<Songs/>} path='/songs'/>
            <Route element={<Genre/>} path='/music/genre'/>
            <Route element={<CreateSong/>} path='/songs/new'/>
            <Route element={<UpdateSong />} path='/songs/:id/update' />
            <Route element={<CreateAlbum />} path='/album/new'/>
            <Route element={<UpdateAlbum />} path='/albums/:id/update' />
            <Route element={<GenreDetails />} path='/genre/:id/details' />
            <Route element={<Login />} path='/login'/>
            <Route element={<SignUp/>} path='/signup' />
       </Routes>
       </>
    )
}