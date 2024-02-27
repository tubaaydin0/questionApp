import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import login from "../../assets/images/login.png";


function Login() {

    const navigate = useNavigate();


    const handleStartButton = () => {
        navigate(`/questions`)
    }
    return (
        <div className='container'>
            <div className="login-space">

                <img src={login} width="50%" alt="login-image" />
                <div className="rules">

                    <h2>TEST KURALLARI</h2>

                    <ul>
                        <li> Toplam 10 soru mevcuttur.</li>
                        <li> Teste başladığınızda ilk 10sn cevap şıkları görünmeyecektir.</li>
                        <li> Cevap şıklarından biri tıklandıktan ya da 30sn tamamlandıktan sonra yeni soruya geçilecektir.</li>
                        <li> Geçmiş sorulara dönülemeyecektir.</li>
                    </ul>
                    <button onClick={handleStartButton} id='start'>Hazırsan Başla</button>
                </div>

            </div>

        </div>
    )
}

export default Login