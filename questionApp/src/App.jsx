
import './App.css'
import Login from './components/login/Login'
import Questions from './components/questions/Questions'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


function App() {


    return (
        <>
            <div className='login'>
                <Router>
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/questions' element={<Questions />} />
                    </Routes>
                </Router>

            </div>
        </>
    )
}

export default App
