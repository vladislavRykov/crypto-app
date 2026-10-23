import type { CryptoLinks } from "@/api/types";
import { getUrlSiteName } from "@/utils/formatUrl";
import { FaReddit } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

export function createCoinLinks({
  whitepaper,
  homepage,
  subreddit_url,
  telegram_channel_identifier,
  twitter_screen_name,
  official_forum_url,
  facebook_username,
}: CryptoLinks) {
  return [
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
          Icon: FaReddit,
          existing: !!subreddit_url,
        },
        {
          name: "Facebook",
          url: `https://www.facebook.com/${facebook_username}`,
          existing: !!facebook_username,
          Icon: FaFacebook,
        },
        {
          name: "Telegram",
          url: `https://t.me/${telegram_channel_identifier}`,
          existing: !!telegram_channel_identifier,
          Icon: FaTelegram,
        },
        {
          name: "Twitter",
          url: `https://twitter.com/${twitter_screen_name}`,
          existing: !!twitter_screen_name,
          Icon: FaTwitter,
        },
        {
          name: getUrlSiteName(official_forum_url[0]),
          url: official_forum_url[0],
          existing: official_forum_url.length > 0,
        },
      ],
    },
  ];
}
