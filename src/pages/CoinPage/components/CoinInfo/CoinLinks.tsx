import React from "react";
import LinkItem from "./LinkItem";
import { getUrlSiteName } from "@/utils/formatUrl";
import s from "./CoinInfo.module.scss";
import type { CryptoLinks } from "@/api/types";

type CoinLinksT = {
  links: CryptoLinks;
};

const CoinLinks = ({ links }: CoinLinksT) => {
  const {
    homepage,
    whitepaper,
    official_forum_url,
    subreddit_url,
    repos_url,
    twitter_screen_name,
    facebook_username,
    telegram_channel_identifier,
  } = links;

  const displayData = [
    {
      title: "Официальный сайты",
      links: [
        {
          name: getUrlSiteName(homepage[0]),
          url: homepage[0],
          existing: homepage.length > 0,
        },
        { name: "WhitePaper", url: whitepaper, existing: !!whitepaper },
      ],
    },
    {
      title: "Сообщества",
      links: [
        {
          name: getUrlSiteName(subreddit_url),
          url: subreddit_url,
          existing: !!subreddit_url,
        },
        {
          name: "Facebook",
          url: `https://www.facebook.com/${facebook_username}`,
          existing: !!facebook_username,
        },
        {
          name: "Telegram",
          url: `https://t.me/${telegram_channel_identifier}`,
          existing: !!telegram_channel_identifier,
        },
        {
          name: "Twitter",
          url: `https://twitter.com/${twitter_screen_name}`,
          existing: !!twitter_screen_name,
        },
        {
          name: getUrlSiteName(official_forum_url[0]),
          url: official_forum_url[0],
          existing: official_forum_url.length > 0,
        },
      ],
    },
  ];
  return (
    <div className={s.coinLinks}>
      {displayData.map((data) => (
        <div className={s.coinLinks_item}>
          <h2 className={s.coinLinks_title}>{data.title}</h2>
          <div className={s.coinLinks_links}>
            {data.links.map((link) => {
              if (link.existing) {
                return <LinkItem url={link.url} text={link.name} />;
              }
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoinLinks;
