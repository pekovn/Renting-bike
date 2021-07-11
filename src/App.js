import style from './App.module.css';
import Header from './Header/Header';
import Body from './Body/Body';
function App() {
  return (
    <div className={style.app}>
    <Header/>
    <Body/>
    </div>
  );
}

export default App;
