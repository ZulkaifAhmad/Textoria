import React from 'react';

const UserReachBadge = () => {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64",
    "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=64&h=64"
  ];

  return (
    <div className="inline-flex items-center gap-4 bg-gray-50 p-1.5 pr-6 rounded-full shadow-sm">
      
      <div className="flex -space-x-3">
        {avatars.map((src, index) => (
          <img
            key={index}
            className={`w-10 h-10 rounded-full object-cover border-2 ${
              index === avatars.length - 1 
                ? 'border-yellow-400'
                : 'border-white'      
            }`}
            src={src}
            alt={`User ${index + 1}`}
          />
        ))}
      </div>

      <span className="text-base font-normal text-gray-900">
        1K+ Reach Daily Users
      </span>
      
    </div>
  );
};

export default UserReachBadge;