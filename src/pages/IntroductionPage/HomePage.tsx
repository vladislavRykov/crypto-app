import s from "./HomePage.module.scss";
import SavedCurrencies from "./components/SavedCurrencies/SavedCurrencies";

const HomePage = () => {
  return (
    <div className={s.home}>
      <div className={s.home_intro}>
        <h2 className={s.home_title}>
          Добро пожаловать в <br />
          <span>Crypto App</span>
        </h2>
        <p className={s.home_desc}>
          Следите за рынком криптовалют в реальном времени, анализируйте
          динамику цен и находите лучшие возможности для инвестиций — всё в
          одном удобном интерфейсе.
        </p>
      </div>
      <SavedCurrencies />
    </div>
  );
};

export default HomePage;
