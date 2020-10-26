import React from 'react';
import { Link } from 'react-router-dom';
//import SignUp1 from './SignUp1'; deletados por engano
//import SignUp2 from './SignUp2';

import '../styles/pages/SignUp.scss';

export default function SignUp(){
	return (
		<div id='signup-page'>
			<aside>
				<span>CADASTRE-SE</span>
			</aside>

		 {/*	{!window.location.href.includes('/signup/2') ? <SignUp1/> : <SignUp2/>} */}

			<form>
				<label>
					EMAIL
					<input type='email' required placeholder='Insira seu e-mail' />
				</label>

				<label>
					SENHA
					<input type='text' minLength={8} required placeholder='Insira uma senha' />
				</label>

				<label>
					REPETIR SENHA
					<input type='text' required minLength={8} placeholder='Repita sua senha' />
				</label>

				<div className='button'>
					<Link to='/'>CADASTRAR</Link>
				</div>
			</form>
		</div>
	);
}
