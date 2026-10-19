export default function Leaderboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-2xl font-bold sm:text-3xl">Leaderboard</h1>
      <div className="overflow-x-auto rounded-lg">
      <table className="w-full min-w-[520px] border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-3">Rank</th>
            <th className="border p-3">Name</th>
            <th className="border p-3">Points</th>
            <th className="border p-3">Badges</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border p-3">{i + 1}</td>
              <td className="border p-3">User {i + 1}</td>
              <td className="border p-3">{(10 - i) * 250}</td>
              <td className="border p-3">{10 - i}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
