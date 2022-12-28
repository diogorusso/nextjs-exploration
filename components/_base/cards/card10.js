import React from "react";

function CodeBlock(props) {
  const { text } = props;

  return (
    <div className="text-white bg-gray-900 rounded-lg shadow-xl">
      <div className="px-8 py-3 border-b border-gray-800">
        <div className="inline-block w-3 h-3 mr-2 bg-red-500 rounded-full"></div>
        <div className="inline-block w-3 h-3 mr-2 bg-yellow-300 rounded-full"></div>
        <div className="inline-block w-3 h-3 mr-2 bg-green-400 rounded-full"></div>
      </div>
      <div className="px-8 py-6">
        <pre>
          <code
            className="text-gray-100"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </pre>
      </div>
    </div>
  );
}

export default CodeBlock;
