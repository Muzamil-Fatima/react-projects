export default function ProfileStats({ booked, sessions }) {
  return (
    <div className="flex justify-around mt-4">
      <div>
        <p className="font-bold">{booked}</p>
        <p className="text-gray-500 text-sm">Classes</p>
      </div>
      <div>
        <p className="font-bold">{sessions}</p>
        <p className="text-gray-500 text-sm">Sessions</p>
      </div>
    </div>
  );
}
