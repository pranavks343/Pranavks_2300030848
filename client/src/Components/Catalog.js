import React from 'react';

const Document = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl shadow-xl border border-gray-300 rounded-lg overflow-hidden">
        <iframe
          src="http://localhost:5060/handout.pdf"
          width="100%"
          height="600px"
          title="PDF Document"
        />
      </div>
    </div>
  );
};

export default Document;
