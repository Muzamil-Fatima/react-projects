export default function ProfileImage({ avatar }) {
  return (
    <div className="flex justify-center mb-4">
      <img
        src={avatar}
        alt="Profile"
        className="w-24 h-24 rounded-full object-cover"
      />
    </div>
  );
}