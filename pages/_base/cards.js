import Layout from "../../layouts/Base";

import MiniCard from "../../components/_base/cards/miniCard";
import PostCard from "../../components/_base/cards/postCard";
import CardThumb from "../../components/_base/cards/cardThumb";
import ProfileCard from "../../components/_base/cards/profileCard";
import CardBg from "../../components/_base/cards/CardBg";
import CardChart from "../../components/_base/cards/cardChart";

import Card1 from "../../components/_base/cards/card1";
import Card2 from "../../components/_base/cards/card2";
import Card3 from "../../components/_base/cards/card3";
import Card4 from "../../components/_base/cards/card4";
import Card5 from "../../components/_base/cards/card5";
import Card6 from "../../components/_base/cards/card6";
import Card7 from "../../components/_base/cards/card7";
import Card8 from "../../components/_base/cards/card8";
import Card9 from "../../components/_base/cards/card9";
import Card10 from "../../components/_base/cards/card10";
import Card11 from "../../components/_base/cards/card11";
import Card12 from "../../components/_base/cards/card12";
import Card13 from "../../components/_base/cards/card13";
import Card14 from "../../components/_base/cards/card14";
import Card15 from "../../components/_base/cards/card15";
import Card16 from "../../components/_base/cards/card16";
import Card17 from "../../components/_base/cards/card17";
import Card18 from "../../components/_base/cards/card18";
import Card19 from "../../components/_base/cards/card19";
import Card20 from "../../components/_base/cards/card20";
import Card21 from "../../components/_base/cards/card21";
import Card22 from "../../components/_base/cards/card22";
import Card23 from "../../components/_base/cards/card23";
import Card24 from "../../components/_base/cards/card24";
import Card25 from "../../components/_base/cards/card25";
import Card26 from "../../components/_base/cards/card26";
import Card27 from "../../components/_base/cards/card27";

import dynamic from "next/dynamic";
const Map = dynamic(() => import("../../components/_base/maps/map1"), {
  ssr: false,
});

const card1Svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
    />
  </svg>
);

const card2Svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-12 h-12"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
  </svg>
);

const buttonSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const headerSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 -ml-2 rotate-90"
    viewBox="0 0 24 24"
    stroke="#b91c1c"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M20 12H4"
    />
  </svg>
);

const button2Svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 ml-1 duration-200 ease-in-out delay-100 group-hover:translate-x-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const bgUrl = "https://picsum.photos/200/300?random=1";
const avatarUrl =
  "https://raw.githubusercontent.com/shibbirweb/public-asset/master/shibbir.jpg";
const title = "Your Story";

const svg3 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 fill-white"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
  </svg>
);

const lorem =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto dignissimos quis tempora autem vel a!";

const text = `
    <p><em class="text-blue-400">const</em> <span class="text-green-400">aboutMe</span> <span class="text-pink-500">=</span> <em class="text-blue-400">function</em>() {</p>
    <p>&nbsp;&nbsp;<span class="text-pink-500">return</span> {</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;name: <span class="text-yellow-300">'Scott Windon'</span>,</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;position: <span class="text-yellow-300">'fullstack-developer'</span>,</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;website: <span class="text-yellow-300">'<a href="https://scottwindon.com" target="_blank" class="text-yellow-300 hover:underline focus:border-none">https://scottwindon.com</a>'</span>,</p>
    <p>&nbsp;&nbsp;}</p>
    <p>}</p>
  `;

const h2Text = "574 Messages";
const pText = "Last opened 4 days ago";
const svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-blue-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
    />
  </svg>
);

export default function Cards() {
  return (
    <Layout>
      <div className="p-8">
        <Card12 />
      </div>

      <div className="grid grid-cols-4 gap-4 p-4 columns-4">
        <CardChart />
        <PostCard
          avatarUrl="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          name="Brad Adams"
          joinDate="22h ago"
          description="Joined 12 SEP 2012."
          likes={12}
          comments={8}
          shares={5}
        />
        <ProfileCard
          imageUrl="https://i.imgur.com/dYcYQ7E.png"
          profileUrl="https://i.imgur.com/8Km9tLL.jpg"
          name="Olivia Dunham"
          bio="Hello, I'm from the other side!"
          photos={34}
          friends={42}
        />
        <CardBg
          backgroundImage="https://picsum.photos/seed/1840/1000/600"
          companyLogo="https://github.githubassets.com/images/modules/site/enterprise/launchpad/logos/logo-dowjones.svg"
          quote="GitHub helps us ensure that we have our security controls baked into our pipelines all the way from the first line of code we're writing."
          photo="https://picsum.photos/50/50"
          title="Chief Information Security Officer"
          company="Dow Jones"
        />
        <MiniCard h2Text={h2Text} pText={pText} svg={svg} />
        <CardThumb
          title="Noteworthy technology acquisitions 2021"
          description="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          imgUrl="https://flowbite.com/docs/images/blog/image-1.jpg"
          buttonText="Read Less"
          buttonUrl="#"
        />
        <div className="overflow-hidden bg-white shadow-md rounded-lg h-[200px]">
          <Map />
        </div>
        <Card1
          title="Elegant Dark Mode"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet"
          link="#"
          svg={card1Svg}
          buttonSvg={buttonSvg}
        />
        <Card2 downloads="Downloads" number="622k" svg={card2Svg} />
        <Card3
          headerSvg={headerSvg}
          headerText="TECH BLOG"
          title="Rapid Event Notification System at Netflix"
          author1="By: Ankush Gulati, David Gevorkyan"
          author2="Additional credits: Michael Clark, Gokhan Ozer"
          intro="Intro"
          description="Netflix has more than 220 million active members who perform a variety of actions throughout each session, ranging from renaming a profile to watchi..."
          buttonText="READ MORE"
          buttonSvg={button2Svg}
        />
        <Card4
          title="EARNINGS (ANNUAL)"
          earnings="$215,000"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          }
        />
        <Card5 bgUrl={bgUrl} avatarUrl={avatarUrl} title={title} />
        <Card6
          title="Create Story"
          imageUrl="https://raw.githubusercontent.com/shibbirweb/public-asset/master/shibbir.jpg"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          }
        />
        <Card7
          imageUrl="https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050"
          altText="A beautiful landscape with mountains and a lake"
          text="Your adventure starts today."
        />
        <Card8 text="Check out our most popular courses!" />
        <Card9 text="Animation" svg={svg3} lorem={lorem} />
        <Card10 text={text} />
        <Card11 value={8430} change={12.6} label="Revenue last 30 days" />
        <Card11 value={211} change={-8.1} label="Sales last 30 days" />
        <Card13
          dark={true}
          post={{
            title:
              "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
          }}
          category="My Category"
          learnMoreText="Learn More"
          kText="1.2K"
          countText="6"
          svgPlaceholder1=""
          svgPlaceholder2=""
        />
        <Card14
          percentage="95"
          description="Descriptyion your product here. menggomballah seperlunya agar meraka minat terhadap produk anda"
          learnMoreText="Learn more"
        />
        <Card15
          text="How to stop wasting time and start exploring the opportunities around you"
          image="https://images.pexels.com/photos/4033403/pexels-photo-4033403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
        <Card16
          title="RxJS Basics"
          language="JavaScript"
          status="Active"
          description="RxJS is an incredible tool for reactive programming, and today we’re going to dive a little deeper into what Observables and Observers are - as well as learn how to create our own operators. This class will teach you everything ground-level that you need to understand Observables!"
          lessons="47"
          hours="5"
          progress="75"
        />
        <Card17
          title="How to write a funny cold romance novel"
          genre="romance lit"
          imageUrl="https://source.unsplash.com/featured/?space,moon"
        />
        <Card18
          title="Facebook and Instagram encryption plans delayed by Meta until 2023"
          description="Plans to roll out end-to-end encryption on Facebook and Instagram have been delayed amid a row over child safety."
          imageUrl="https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=384&q=80"
          buttonText="Read More"
          buttonUrl="#"
        />
        <Card19
          title="1. Product"
          description="Metus potenti velit sollicitudin porttitor magnis elit lacinia tempor varius, ut cras orci vitae parturient id nisi vulputate consectetur, primis venenatis cursus tristique malesuada viverra congue risus."
          svg={
            <svg
              className="inline-block w-12 h-12 text-indigo-500 hi-outline hi-template"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              />
            </svg>
          }
        />
        <Card20
          title="25"
          description="The outline is positioned absolute and before the div content, the relation is to the parent div. The elements order is important to the stack starting with the foreground"
          svg={
            <svg
              className="w-4 h-4 ml-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          }
          linkText="Contact Us"
          linkUrl="#"
        />
        <Card21
          title="Chocolate cake"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
          imageUrl="https://images.unsplash.com/photo-1570922552666-4c7b62225409?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          avatarUrl="https://randomuser.me/api/portraits/men/92.jpg"
          name="Jonathan Reinink"
          date="Aug 18"
        />
        <Card22
          month="March"
          day="17"
          dayOfWeek="Sunday"
          time="8:00 am to 5:00 pm"
        />
        <Card23
          title="The Ultimate JavaScript Course"
          description="The JavaScript course for everyone! Master JavaScript with projects, challenges and theory."
          cancelText="Cancel"
          previewText="Preview"
          buyNowText="Buy Now"
        />
        <Card24
          followers="1,320"
          increase="+8%"
          timeFrame="last 14 days"
          icon='<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />'
          followersText="Followers"
          increaseText="last 14 days"
          timeFrameText="+8%"
        />
        <Card25
          imageUrl="https://srv-cdn.onedio.com/store/bf2cbc886120f284ef46fd92a48f5fb58c62e6a50fbdf8fa796d057dd0ddc242.png"
          title="iPhone 11 Pro Max"
          description="And then there was Pro."
          price="$1099,00"
          buttonText="Add to Cart"
        />
        <Card26
          imageUrl="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
          title="Peace Lily"
          description="Indoor"
          price="$36.00"
          backgroundColor="#FFA07A"
        />
        <Card27/>
      </div>
    </Layout>
  );
}
