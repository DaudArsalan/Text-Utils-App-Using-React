import React, { useState } from "react";

export default function TextForm() {
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const convertToUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const convertToLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
  };

  const copyToClipboard = () => {
    let newText = document.getElementById("textarea");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  };

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("");
  return (
    <div>
      <form>
        <h1 className="text-2xl font-bold">Enter Your Text Here:</h1>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-900 dark:border-gray-600">
          <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-900">
            <textarea
              id="textarea"
              rows="10"
              className="textarea block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-900 focus:ring-0 dark:text-white dark:placeholder-gray-400 outline-none"
              placeholder="Write an article..."
              value={text}
              onChange={handleOnChange}
              required
            ></textarea>
          </div>
        </div>
      </form>

      <div className="buttons">
        <button
          onClick={clearText}
          disabled={text.length === 0}
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Clear Text
        </button>

        <button
          onClick={convertToUppercase}
          disabled={text.length === 0}
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Convert To Uppercase
        </button>

        <button
          onClick={convertToLowercase}
          disabled={text.length === 0}
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Convert To Lowercase
        </button>

        <button
          onClick={copyToClipboard}
          disabled={text.length === 0}
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Copy To Clipboard
        </button>

        <button
          onClick={removeExtraSpaces}
          disabled={text.length === 0}
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Remove Extra Spaces
        </button>
      </div>

      <div className="my-16">
        <h1 className="text-2xl font-bold">Summary of your Text</h1>
        <p>
          <span className="font-semibold">Numbers of Words: </span>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
        </p>
        <p>
          <span className="font-semibold">Numbers of Characters: </span>
          {text.length}
        </p>
        <p>
          <span className="font-semibold">Reading Time: </span>
          {0.004 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minute
        </p>
      </div>

      <div className="my-16">
        <h1 className="text-2xl font-bold text-center">Preview Document</h1>
        <p className="border h-48 overflow-auto p-3 my-4 dark:bg-gray-900 ">
          {text.length > 0 ? text : "Enter something to preview it here..."}
        </p>
      </div>
    </div>
  );
}
