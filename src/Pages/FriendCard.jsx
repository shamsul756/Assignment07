import React from "react";

const FriendCard = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      
      {/* Hero Section */}
      <div className="text-center max-w-2xl mx-auto">
        
 
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-950 leading-tight mb-4">
          Friends to keep  in your life
        </h1>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>

   
        <button className="btn btn-success text-white btn-md sm:btn-lg shadow-md gap-2">
          <span className="text-xl font-bold">+</span>
          Add a Friend
        </button>


      </div>
    </div>
  );
};

export default FriendCard;