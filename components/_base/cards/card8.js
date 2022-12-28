import React from 'react';

function CourseCard(props) {
  const { text } = props;

  return (
    <article className="hover:scale-105 transition-all relative h-[300px] w-[350px]  overflow-auto rounded-xl bg-gradient-to-t from-pink-700 to-orange-300 p-5">
      <h1 className="text-3xl font-bold leading-10 text-white mt-9">
        {text}
      </h1>
    </article>
  );
}

export default CourseCard;
