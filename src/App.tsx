import Store from './providers/store/index.tsx';
import AppRoutes from './providers/routes/index.tsx';
import Design from './providers/design/index.tsx';
import AppLayout from './components/AppLayout/index.tsx';
import './App.css';

function App() {
  return (
    <Store>
      <Design>
        <AppRoutes Layout={AppLayout} />
      </Design>
    </Store>
  );
}

export default App;
