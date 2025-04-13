import React from 'react';

const Features = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#040c1e] p-5 md:p-20 space-y-10 md:space-y-0">
      
      {/* Feature Box */}
      <div className="w-full md:w-1/2 h-auto bg-gradient-to-br from-[#050c2e] to-[#bababa] flex items-center flex-wrap text-white border-3 border-white rounded-4xl p-5 justify-center">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl mb-4">What is Finance</h1>
          <p className="text-lg md:text-xl">
            Highlight what sets you apart from your competition, whether it's a special feature, a unique philosophy, or awards and recognition that you have received. Think of this as your elevator pitch to get the reader's attention.
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="src/assets/vulp2.png"
          width={600}
          className="mx-auto md:mx-0"
          alt="img"
        />
      </div>

    </div>
  );
}

export default Features;
