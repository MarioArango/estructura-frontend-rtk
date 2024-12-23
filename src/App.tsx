import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { authSelector, rtkDecrement, rtkIncrement } from './store/features/auth/slice';
import { useAppDispatch, useAppSelector } from './hooks/useRedux';
import { useGetPokemonsQuery } from './store/features/auth/queries';

function App() {
  const { data, isLoading } = useGetPokemonsQuery({ name: 'pikachu' });
  const { value } = useAppSelector(authSelector);

  const dispatch = useAppDispatch();

  console.log(data);

  return (
    <>
      {isLoading ? (
        'CARGANDO...'
      ) : (
        <>
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button>{value}</button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">Click on the Vite and React logos to learn more {value}</p>
          <button
            onClick={() => {
              dispatch(rtkIncrement(1));
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              dispatch(rtkDecrement(1));
            }}
          >
            Decrement
          </button>
        </>
      )}
    </>
  );
}

export default App;
