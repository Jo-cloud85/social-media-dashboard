import facebook from './images/icon-facebook.svg'
import instagram from './images/icon-instagram.svg'
import twitter from './images/icon-twitter.svg'
import youtube from './images/icon-youtube.svg'

export const formatNumber = (num) => {
    if (num >= 9999) {
      const formatNum = Math.sign(num) * (Math.abs(num) / 1000);
      return `${formatNum.toFixed(1)}k`;
    }
    return num.toString();
};

export const platformImages = {
    Facebook: facebook,
    Twitter: twitter,
    Instagram: instagram,
    Youtube: youtube,
};
