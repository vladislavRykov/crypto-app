import s from "./SolfLoading.module.scss";

type SolfLoaderT = {
  text: string;
  color?: string;
  weight?: number;
};
const SolfLoader = ({ text, color = "gray", weight = 400 }: SolfLoaderT) => {
  return (
    <div className={s.softLoading} style={{ fontWeight: weight, color }}>
      {text}
    </div>
  );
};

export default SolfLoader;
