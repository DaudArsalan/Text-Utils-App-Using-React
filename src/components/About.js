import React from "react";

export default function About() {
  return (
    <div className="md:h-screen">
      <h1 className="text-3xl font-bold text-center">About App</h1>
      <p className="my-6 md:px-10">
        TextUtils is a word counter and a character counting utility which can
        be used to manipulate your text in the way you want.Textutils gives you
        a way to analyze your text quickly and efficently.It let you to count
        word, count charecters or reading time required.It has both light and
        dark mode for better compartable.You can remove extra spaces, copy the
        manipulated text as well as convert your text from Uppercase to
        Lowercase and Lowercase to Uppercase.
      </p>
      <hr className="mt-10" />

      <h1 className="text-2xl underline font-bold text-center mt-10">FAQ</h1>
      <div className="question1 flex mt-8">
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <h3 className="text-xl font-semibold ml-2">Is it free to use?</h3>
      </div>
      <p className="my-1 ml-8">
        TextUtils is a free charecter counter tool that provided instant
        charecter count and word count statics for a given text. TextUtils
        reports the number of words and charecter. Thus it is suitable for
        writing text with word / charecter limit.
      </p>

      <div className="question2 flex mt-8">
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <h3 className="text-xl font-semibold ml-2">
          Is it Browser Compatible?
        </h3>
      </div>
      <p className="my-1 ml-8">
        This word counter software works in any web browser such as Chrome ,
        Firefox ,Internet Explorer ,Safari,Opera etc.
      </p>
    </div>
  );
}
