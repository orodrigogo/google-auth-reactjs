import { auth } from '../../services/firebase';
import { signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";

import './styles.scss';
import { useState } from 'react';

export function SignIn() {
  const [user, setUser] = useState<User>({} as User);

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);

      }).catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="container">

      <div className="user">
        {user.photoURL && <img src={user.photoURL} alt="Foto do usuário" />}

        <strong>{user.displayName}</strong>
        <small>{user.email}</small>
      </div>

      <h1>Acesse sua conta</h1>

      <p>
        Utilizando autenticação social, por exemplo, autenticação com a Google você <br />
        facilita a vida do usuário permitindo utilizar a aplicação sem fazer cadastrado.
      </p>

      <button type="button" onClick={signInWithGoogle} className="signin-button">
        SignIn with Google
      </button>
    </div>
  )
}