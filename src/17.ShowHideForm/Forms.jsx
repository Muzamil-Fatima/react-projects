export default function Forms() {
  return (
    <>
      <div className="w-1/2 flex justify-center items-center">
        <input
          type="text"
          placeholder="Enter Name"
          className="border-white/25 text-2xl"
        />
        <input
          type="text"
          placeholder="Enter Middle Name"
          className="border-white/25 text-2xl"
        />
        <input
          type="text"
          placeholder="Enter Last Name"
          className="border-white/25 text-2xl"
        />
        <input
          type="text"
          placeholder="Enter Mobile Number"
          className="border-white/25 text-2xl"
        />
        <input
          type="text"
          placeholder="Enter Address"
          className="border-white/25 text-2xl"
        />
        <button className="bg-amber-500 px-2 py-3 rounded-2xl w-full">
          Submit
        </button>
      </div>
    </>
  );
}
