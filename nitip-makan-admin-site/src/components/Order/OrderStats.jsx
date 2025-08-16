// components/OrderStats.js
export default function OrderStats({ stats }) {
  return (
    <div className="flex flex-col gap-4">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow rounded-xl px-10 py-6 flex flex-col items-center justify-center text-center"
        >
          <span className="text-sm tracking-wide uppercase">{item.label}</span>
          <span className="text-4xl font-bold">{item.value}</span>
        </div>
      ))}
    </div>
  );
}
