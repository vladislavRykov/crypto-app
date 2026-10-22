export type GlobalDataT = {
  data: {
    active_cryptocurrencies: number;
    upcoming_icos: number;
    ongoing_icos: number;
    ended_icos: number;
    markets: number;
    total_market_cap: {
      // "btc": 34086687.96468412,
      // "eth": 1055776163.5883751,
      // "ltc": 49398953667.07678,
      // "bch": 11893047555.408735,
      // "bnb": 3676366270.99866,
      // "eos": 32819836007136.65,
      // "xrp": 1895286366555.9414,
      // "xlm": 13893424570373.414,
      // "link": 233180129706.91336,
      // "dot": 2621401244828.983,
      // "yfi": 1219351004.9045782,
      // "sol": 26098901224.969467,
      usd: number;
      // "aed": 9715591140929.295,
      // "ars": 3991152406853492.5,
      // "aud": 3710525129485.57,
      // "bdt": 326599055180180.25,
      // "bhd": 997969119909.1031,
      // "bmd": 2645497928095.112,
      // "brl": 13556854132523.398,
      // "cad": 3674948473348.5464,
      // "chf": 2162366514474.67,
      // "clp": 2495577560509962,
      // "cny": 17768751383843.63,
      // "czk": 55676988019316.11,
      // "dkk": 17129712840826.758,
      // "eur": 2291538241809.77,
      // "gbp": 1961147296565.8274,
      // "gel": 6878294613047.289,
      // "hkd": 20749447126918.03,
      // "huf": 837324734409805.1,
      // "idr": 46768925195029600,
      // "ils": 8072993540881.258,
      // "inr": 253328627633719.56,
      // "jpy": 408778371602364.4,
      // "krw": 3560997361729440.5,
      // "kwd": 816945633183.3392,
      // "lkr": 870104572782744.1,
      // "mmk": 5554222900035687,
      // "mxn": 45149760759545.16,
      // "myr": 10762414671076.535,
      // "ngn": 3505840309290923.5,
      // "nok": 24686633227886.934,
      // "nzd": 4582669076938.613,
      // "php": 166264256430419.5,
      // "pkr": 733730437655936,
      // "pln": 9950109241259.072,
      // "rub": 222885197792948.88,
      // "sar": 9924519339800.607,
      // "sek": 25863030601054.34,
      // "sgd": 3361594534761.5376,
      // "thb": 87965451607090.56,
      // "try": 128620937311968.55,
      // "twd": 83980807918789.56,
      // "uah": 117892078136611.97,
      // "vef": 219959166238112500000,
      // "vnd": 68749950800420720,
      // "zar": 42949047752602.73,
      // "xdr": 1932038882862.9973,
      // "xag": 42057120771.6434,
      // "xau": 616321652.308318,
      // "bits": 34086687964684.12,
      // "sats": 3408668796468412
    };
    total_volume: {
      // "btc": 828825.2536565263,
      // "eth": 25671427.72853902,
      // "ltc": 1201146334.4840498,
      // "bch": 289182045.702812,
      // "bnb": 89391647.85536532,
      // "eos": 798021471953.0234,
      // "xrp": 46084301447.53259,
      // "xlm": 337821649191.2628,
      // "link": 5669825720.593008,
      // "dot": 63739943110.10644,
      // "yfi": 29648785.677958805,
      // "sol": 634600476.595245,
      // "usd": 64325859220.2613,
      // "aed": 236236717986.40955,
      // "ars": 97045741417278.72,
      // "aud": 90222227951.0133,
      // "bdt": 7941327272222.801,
      // "bhd": 24265836851.236824,
      // "bmd": 64325859220.2613,
      // "brl": 329637865574.229,
      // "cad": 89357173796.21922,
      // "chf": 52578413506.020294,
      // "clp": 60680512778249.09,
      // "cny": 432051066038.80707,
      // "czk": 1353798109272.2068,
      // "dkk": 416512704463.13837,
      // "eur": 55719252234.16799,
      // "gbp": 47685724327.868,
      // "gel": 167247233972.67935,
      // "hkd": 504527333251.5716,
      // "huf": 20359733574265.477,
      // "idr": 1137196618462157.8,
      // "ils": 196296599018.97168,
      // "inr": 6159740842950.596,
      // "jpy": 9939535277925.941,
      // "krw": 86586427659486.9,
      // "kwd": 19864211282.372013,
      // "lkr": 21156782495017.754,
      // "mmk": 135052141432938.58,
      // "mxn": 1097826282002.8802,
      // "myr": 261690460479.86703,
      // "ngn": 85245271897282.48,
      // "nok": 600260872168.8584,
      // "nzd": 111428598286.01607,
      // "php": 4042751664600.841,
      // "pkr": 17840815650255,
      // "pln": 241939076754.5673,
      // "rub": 5419502205330.726,
      // "sar": 241316852718.3297,
      // "sek": 628865230921.065,
      // "sgd": 81737904423.29773,
      // "thb": 2138899144932.9084,
      // "try": 3127446148583.899,
      // "twd": 2042011664427.0693,
      // "uah": 2866571597302.382,
      // "vef": 5348355109779616000,
      // "vnd": 1671670051078852.2,
      // "zar": 1044315465167.4618,
      // "xdr": 46977946898.86747,
      // "xag": 1022628066.0572101,
      // "xau": 14985995.42254427,
      // "bits": 828825253656.5264,
      // "sats": 82882525365652.64
    };
    // "market_cap_percentage": {
    //     "btc": 58.89117452213789,
    //     "eth": 11.560795677762483,
    //     "usdt": 6.913996697217191,
    //     "bnb": 3.6218980804171004,
    //     "xrp": 3.3176156680705575,
    //     "usdc": 2.7978390344293977,
    //     "sol": 2.2489862716508635,
    //     "trx": 1.2172169600786331,
    //     "steth": 0.9155312433667808,
    //     "zec": 0.7260265647311083
    // },
    market_cap_change_percentage_24h_usd: number;
    volume_change_percentage_24h_usd: number;
    updated_at: number;
  };
};
export interface MarketData {
  current_price: Record<string, number>;

  total_value_locked: unknown;
  mcap_to_tvl_ratio: number | null;
  fdv_to_tvl_ratio: number | null;
  roi: unknown;

  ath: Record<string, number>;
  ath_change_percentage: Record<string, number>;
  ath_date: Record<string, string>;

  atl: Record<string, number>;
  atl_change_percentage: Record<string, number>;
  atl_date: Record<string, string>;

  market_cap: Record<string, number>;
  fully_diluted_valuation: Record<string, number>;

  total_volume: Record<string, number>;

  high_24h: Record<string, number>;
  low_24h: Record<string, number>;

  market_cap_fdv_ratio: number;

  market_cap_rank?: number;
  market_cap_rank_with_rehypothecated?: number;
  price_change_percentage_200d_in_currency: Record<CurrencyT, number>;
  price_change_percentage_24h_in_currency: Record<CurrencyT, number>;
}
export type CoinT = {
  id: string;
  symbol: string;
  name: string;
  web_slug: string;

  asset_platform_id: string | null;

  platforms: Record<string, string>;

  detail_platforms: Record<
    string,
    {
      decimal_place: number | null;
      contract_address: string;
    }
  >;

  block_time_in_minutes: number;
  hashing_algorithm: string | null;

  categories: string[];

  preview_listing: boolean;
  public_notice: string | null;
  additional_notices: unknown[];

  localization: { ru: string; en: string };
  description: { en: string };

  links: CryptoLinks;

  image: CryptoImages;

  country_origin: string;
  genesis_date: string | null;

  listing_price: number | null;
  listing_currency: string;
  listing_timestamp: number | null;
  listing_source: string;
  listing_source_url: string;

  has_supply_breakdown: boolean;

  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;

  watchlist_portfolio_users: number;

  market_cap_rank: number;
  market_cap_rank_with_rehypothecated: number;

  market_data: MarketData;
};
export interface CryptoImages {
  thumb: string;
  small: string;
  large: string;
}
export interface CryptoLinks {
  homepage: string[];
  whitepaper: string;
  blockchain_site: string[];
  official_forum_url: string[];
  chat_url: string[];
  announcement_url: string[];
  snapshot_url: string | null;

  twitter_screen_name: string;
  facebook_username: string;

  telegram_channel_identifier: string;

  subreddit_url: string;

  repos_url: {
    github: string[];
    bitbucket: string[];
  };
}
export type CoinChartDataT = {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
};
export type CoinWithMarketDataT = {
  id: string;
  symbol: string;
  name: string;
  image?: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  max_supply: number;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  last_updated: string;
  sparkline_in_7d?: {
    price: number[];
  };
  price_change_percentage_24h?: number;
  price_change_percentage_1h_in_currency?: number;
  price_change_percentage_24h_in_currency?: number;
  price_change_percentage_7d_in_currency?: number;
  price_change_percentage_14d_in_currency?: number;
  price_change_percentage_30d_in_currency?: number;
  price_change_percentage_200d_in_currency?: number;
  price_change_percentage_1y_in_currency?: number;
};
export type SearchResponseDataT = {
  coins: {
    id: string;
    name: string;
    api_symbol: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    large: string;
  }[];
  exchanges: {
    id: string;
    name: string;
    market_type: string;
    thumb: string;
    large: string;
  }[];

  icos: [];
  categories: {
    id: string;
    name: string;
  }[];

  nfts: {
    id: string;
    name: string;
    symbol: string;
    thumb: string;
  }[];
};
export type CurrencyT =
  | "btc"
  | "eth"
  | "ltc"
  | "bch"
  | "bnb"
  | "eos"
  | "xrp"
  | "xlm"
  | "link"
  | "dot"
  | "yfi"
  | "sol"
  | "usd"
  | "aed"
  | "ars"
  | "aud"
  | "bdt"
  | "bhd"
  | "bmd"
  | "brl"
  | "cad"
  | "chf"
  | "clp"
  | "cny"
  | "czk"
  | "dkk"
  | "eur"
  | "gbp"
  | "gel"
  | "hkd"
  | "huf"
  | "idr"
  | "ils"
  | "inr"
  | "jpy"
  | "krw"
  | "kwd"
  | "lkr"
  | "mmk"
  | "mxn"
  | "myr"
  | "ngn"
  | "nok"
  | "nzd"
  | "php"
  | "pkr"
  | "pln"
  | "rub"
  | "sar"
  | "sek"
  | "sgd"
  | "thb"
  | "try"
  | "twd"
  | "uah"
  | "vef"
  | "vnd"
  | "zar"
  | "xdr"
  | "xag"
  | "xau"
  | "bits"
  | "sats";
