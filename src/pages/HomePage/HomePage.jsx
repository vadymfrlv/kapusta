import s from './homePage.module.css';

const HomePage = () => {
  return (
    <div className={s.homePage}>
      <div className={s.homePage__backFirst}></div>
      <div className={s.homePage__backSecond}></div>
    </div>
  );
};
export default HomePage;
