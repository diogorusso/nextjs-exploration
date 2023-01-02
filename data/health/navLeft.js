import slugify from "slugify";
import IconRandom from "../../components/IconRandom";


function makeData({ baseUrl,links }) {
  return links.map((link) => ({
    slug: slugify(link,{lower:true}),
    title: link,
    icon: <IconRandom />,
    link: baseUrl+slugify(link,{lower:true}),
    view:<link/>
  }));
}

const links = ["Dashboard","Health Summary","Medical History","Medications","Appointments","Account Settings"]
const baseUrl="health/"
export const navLeftHealth = makeData({baseUrl,links });