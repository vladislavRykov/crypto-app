export const getUrlSiteName = (url: string) => {
  let name: string;
  if (!url) return url;
  if (url.includes("https://")) {
    name = url.replace("https://", "");
  } else {
    name = url.replace("http://", "");
  }
  if (name.includes("www.")) {
    name = name.replace("www.", "");
  }
  if (name.includes("/")) {
    name = name.split("/")[0];
  }
  return name;
};
