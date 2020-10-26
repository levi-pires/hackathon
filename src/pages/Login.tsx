import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/Login.scss';

export default function Login(){
	return (
		<div id='login-page'>
			<aside>
				<span>LOGIN</span>
			</aside>

			<form>
				<label>
					E-MAIL
					<input type='email' required placeholder='E-mail' name='user' />
				</label>

				<label>
					SENHA
					<input type='password' required minLength={8} placeholder='Senha' name='password' />
				</label>

				<div className='buttons'>
					<button>ENTRAR</button>

					<div>
						<Link to='/signup' >CADASTRE-SE</Link>
					</div>
				</div>
			</form>
		</div>
	);
}
