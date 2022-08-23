import s from './mainPage.module.css';

const MainPage = () => {
  return (
    <div className={s.mainPage}>
      <div className={s.mainPage__backFirst}>
        <div className={s.cabbageVector}></div>
        <h1 className={s.title}>Kapusta</h1>
        <p className={s.tittleText}>SMART FINANCE</p>
      </div>
      <div className={s.mainPage__backSecond}></div>
    </div>
  );
};
export default MainPage;
