import React from "react";
import Address from "../components/Address";

import "../styles/pages/SignUp.scss";

const handleRegister = (event: React.SyntheticEvent) => {
  const cpfEl = document.getElementById("cpf") as HTMLInputElement | null;
  const cnpjEl = document.getElementById("cnpj") as HTMLInputElement | null;

  if (cpfEl?.value.length !== 0 && cnpjEl?.value.length !== 0) {
    cnpjEl?.setCustomValidity("Por favor, preencha o CPF ou o CNPJ");
  } else if (cpfEl?.value.length === 0 && cnpjEl?.value.length === 0) {
    cpfEl?.setCustomValidity("Por favor, preencha um dos campos");
  } else {
    cpfEl?.setCustomValidity("");
    cnpjEl?.setCustomValidity("");

    return;
  }

  event.preventDefault();
};

const validatePasswd = () => {
  const passwordValue = (document.getElementById(
    "password"
  ) as HTMLInputElement).value;

  const confirmPasswd = document.getElementById(
    "confirm-password"
  ) as HTMLInputElement;

  if (passwordValue !== confirmPasswd.value) {
    confirmPasswd.setCustomValidity("Senhas não coincidem");
  } else {
    confirmPasswd.setCustomValidity("");
  }
};

export default function SignUp() {
  return (
    <div id='signup-page'>
      <aside>
        <span>CADASTRE-SE</span>
      </aside>

      <form method='post' action='/signup/finish' onSubmit={handleRegister}>
        <label>
          EU SOU
          <select required name='i-am'>
            <option hidden value=''>
              Selecione uma opção
            </option>
            <option value='0'>Pesquisador (a)</option>
            <option value='1'>Instituição</option>
          </select>
        </label>

        <label>
          NOME COMPLETO
          <input
            type='text'
            minLength={4}
            pattern='[A-Z][a-z]* [A-Z][a-z]*'
            title='Nome inválido'
            required
            placeholder='Digite aqui'
          />
        </label>

        <label>
          CPF
          <input
            id='cpf'
            type='text'
            minLength={11}
            maxLength={11}
            placeholder='Apenas números'
          />
        </label>

        <label>
          CNPJ <small>em caso de PJ</small>
          <input
            id='cnpj'
            type='text'
            minLength={14}
            placeholder='Digite aqui'
          />
        </label>

        <Address />

        <label>
          EMAIL
          <input
            type='email'
            required
            placeholder='Insira seu e-mail'
            name='email'
          />
        </label>

        <label>
          SENHA
          <input
            type='text'
            minLength={8}
            required
            placeholder='8 caracteres ou mais'
            name='password'
            onChange={validatePasswd}
            id='password'
          />
        </label>

        <label>
          REPETIR SENHA
          <input
            id='confirm-password'
            type='text'
            required
            minLength={8}
            placeholder='Repita sua senha'
            onKeyUp={validatePasswd}
          />
        </label>

        <div className='check'>
          <input required type='checkbox' name='agreement' />
          <span>
            Eu concordo com os <a href='#'> termos e condições</a>
          </span>
        </div>

        <button type='submit'>FINALIZAR CADASTRO</button>
      </form>
    </div>
  );
}
