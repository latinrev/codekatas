const { expect } = require("chai");

function domainName(url){
  return url.replace(/https|http|www\.|:\/\/|/g,"").split(".")[0]
}
const a = Boolean(expect(domainName("http://google.com")).to.eq("google"));
const b = Boolean(expect(domainName("http://google.co.jp")).to.eq("google"));
const c = Boolean(expect(domainName("www.xakep.ru")).to.eq("xakep"));
const d = Boolean(expect(domainName("https://youtube.com")).to.eq("youtube"));

module.exports = () =>  {return a&b&c&d}