
import slugify from "slugify";
import IconRandom from "../../components/IconRandom";

function makeData({ baseUrl,links }) {
  return links.map((link) => ({
    title: link,
    icon: <IconRandom />,
    link: baseUrl+slugify(link,{lower:true}),
  }));
}

const links = ["Summary","Results","History","Medications","Appointments","Staff","Settings"]
const baseUrl="health/"
export const asideHealth = makeData({baseUrl,links });