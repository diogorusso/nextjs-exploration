import React from 'react';

function CourseCard(props) {
  const { text, svg, lorem } = props;

  return (
    <article className="hover:scale-105 hover:border-orange-500 transition-all relative flex items-center h-[300px] w-[350px] rounded-xl border bg-gradient-to-t from-red-900 to-orange-400 p-5 drop-shadow-2xl">
      <div className="absolute flex items-center justify-center p-3 rounded-full -top-6 w-fit bg-gradient-to-t from-pink-700 to-orange-300">
        {svg}
      </div>
      <div className="flex flex-col justify-start gap-5">
        <h1 className="text-3xl font-bold leading-10 text-black/75">{text}</h1>
        <p>{lorem}</p>
        <button className="py-2 text-xl font-bold text-red-600 w-fit">Get Started</button>
      </div>
    </article>
  );
}

export default CourseCard;
