import slugify from "slugify";
import IconRandom from "../../components/IconRandom";


function makeData({ baseUrl,links }) {
  return links.map((link) => ({
    slug: slugify(link,{lower:true}),
    title: link,
    icon: <IconRandom />,
    link: baseUrl+slugify(link,{lower:true}),
    view:"view"
  }));
}

const links = ["Overview","Footprint","Programs","History","Settings"]
const baseUrl="carbon/"
export const asideCarbon = makeData({baseUrl,links });