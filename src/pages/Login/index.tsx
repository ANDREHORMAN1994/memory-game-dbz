import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/Provider';

function Login() {
  const [disabled, setDisabled] = useState(true);
  const { name, setName } = useContext(Context);
  const navigate = useNavigate();

  const handleValidation = () => {
    const valName = name.trim().length > 0;
    setDisabled(!valName);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/game');
  };

  useEffect(handleValidation, [name]);

  return (
    <div className="relative flex flex-col items-center justify-center gap-10 mx-auto pt-[8rem] w-fit">
      <div className="flex flex-col items-center justify-center gap-0">
        <img
          className="w-[10rem]"
          src="/images/brain.png"
          alt="Icone da memória"
        />
        <h1 className="text-[5rem] text-white font-title">Memory Game</h1>
      </div>

      <form
        className="flex flex-col items-center justify-center gap-4"
        onSubmit={handleSubmit}
      >
        <input
          className="px-[2rem] py-[1.5rem] rounded-lg focus:outline-none bg-input-background text-[1.5rem]"
          placeholder="Escreva seu nome"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button
          className="w-full px-[2rem] py-[1rem] rounded-lg text-[2.5rem] font-title disabled:cursor-not-allowed disabled:bg-input-background disabled:text-text-placeholder text-text-button bg-button-background hover:brightness-[.8]"
          type="submit"
          disabled={disabled}
        >
          Play
        </button>
      </form>
      <img
        className={`absolute bottom-0 -right-20 w-40 h-auto z-[999]
        ${disabled ? 'grayscale' : 'grayscale-0'}`}
        src="/images/dragon-ball.png"
        alt="Imagem da esfera do dragão de 4 estrelas"
      />
    </div>
  );
}

export default Login;
