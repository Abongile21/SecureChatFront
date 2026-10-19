export default function Analytics() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-2xl font-bold sm:text-3xl">Analytics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg bg-white p-5 shadow sm:p-6">
          <h2 className="text-xl font-semibold mb-4">Engagement Over Time</h2>
          <p className="text-gray-500">Chart will be rendered here</p>
        </div>
        <div className="rounded-lg bg-white p-5 shadow sm:p-6">
          <h2 className="text-xl font-semibold mb-4">Training Completion Rate</h2>
          <p className="text-gray-500">Chart will be rendered here</p>
        </div>
      </div>
    </div>
  );
}
