import LinkItem from "./LinkItem";
import s from "./CoinLinks.module.scss";
import type { CryptoLinks } from "@/api/types";
import { createCoinLinks } from "./createCoinLinks";

type CoinLinksT = {
  links: CryptoLinks;
};

const CoinLinks = ({ links }: CoinLinksT) => {
  const displayData = createCoinLinks(links);
  return (
    <div className={s.coinLinks}>
      {displayData.map((data) => (
        <div className={s.coinLinks_item}>
          <h2 className={s.coinLinks_title}>{data.title}</h2>
          <div className={s.coinLinks_links}>
            {data.links.map((link) => {
              if (link.existing) {
                return (
                  <LinkItem url={link.url} text={link.name} Icon={link.Icon} />
                );
              }
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoinLinks;
