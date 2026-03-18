function CollaborationCard({ brand, requirement }) {
  return (

    <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">

      <h2 className="text-lg font-semibold">{brand}</h2>

      <p className="text-gray-600 mt-2">{requirement}</p>

      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Accept Collaboration
      </button>

    </div>

  );
}

export default CollaborationCard;