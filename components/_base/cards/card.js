

const UserProfileCard = ({ name, username, profileImageUrl }) => {
  return (
    <div className="flex flex-col items-center p-6 rounded-lg shadow-lg">
      <img
        className="w-32 h-32 rounded-full"
        src={profileImageUrl}
        alt={name}
      />
      <h2 className="mt-4 text-xl font-bold">{name}</h2>
      <p className="mt-2 text-sm text-gray-600">@{username}</p>
    </div>
  );
};

export default UserProfileCard;
