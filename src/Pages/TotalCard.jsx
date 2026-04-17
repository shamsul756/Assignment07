import React, { use, Suspense } from "react";
import { Link } from "react-router"; 

const profilePromise = fetch("/data.json").then((res) => res.json());

const TotalCardList = () => {
  const profiles = use(profilePromise);


  const total = profiles.length;
  const onTrack = profiles.filter((p) => p.status === "ok").length;
  const needAttention = profiles.filter((p) => p.status === "overdue").length;
  const due = profiles.filter((p) => p.status === "due").length;

  return (
    <div className="min-h-screen bg-base-200 p-6">
      {/* ── Stats Row ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-6 max-w-5xl mx-auto">
        <div className="bg-base-100 border border-cyan-500/20 rounded-2xl px-5 py-6">
          <p className="text-3xl font-black text-cyan-500">{total}</p>
          <p className="text-sm text-gray-400 mt-1">Total Friends</p>
        </div>
        <div className="bg-base-100 border border-green-500/20 rounded-2xl px-5 py-6">
          <p className="text-3xl font-black text-green-500">{onTrack}</p>
          <p className="text-sm text-gray-400 mt-1">On Track</p>
        </div>
        <div className="bg-base-100 border border-yellow-500/20 rounded-2xl px-5 py-6">
          <p className="text-3xl font-black text-yellow-500">{needAttention}</p>
          <p className="text-sm text-gray-400 mt-1">Need Attention</p>
        </div>
        <div className="bg-base-100 border border-purple-500/20 rounded-2xl px-5 py-6">
          <p className="text-3xl font-black text-purple-500">{due}</p>
          <p className="text-sm text-gray-400 mt-1">Due Soon</p>
        </div>
      </div>

      {/* ── All Profile Cards ── */}
      <h1 className="text-3xl font-bold text-center mb-8">
         All Connections
        <span className="ml-3 badge badge-neutral badge-lg">{total}</span>
      </h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {profiles.map((person) => {
          const statusBadge =
            person.status === "ok"
              ? "badge-success"
              : person.status === "overdue"
              ? "badge-error"
              : "badge-warning";

          return (
            
            <Link 
              to={`/CardDetails/${person.id}`} 
              key={person.id} 
              className="w-full max-w-xs transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="card bg-base-100 shadow-xl hover:shadow-2xl h-full">
                <figure className="px-6 pt-6">
                  <img
                    src={person.picture}
                    alt={person.name}
                    className="rounded-full w-24 h-24 object-cover ring-4 ring-primary ring-offset-2"
                  />
                </figure>

                <div className="card-body items-center text-center gap-2 pt-3">
                  <h2 className="card-title text-lg text-base-content">{person.name}</h2>

                  <span className={`badge ${statusBadge} badge-md font-semibold`}>
                    {person.status}
                  </span>

                  <p className="text-xs text-base-content/50">
                    Last contact:{" "}
                    <span className="font-bold text-base-content">
                      {person.days_since_contact} ago
                    </span>
                  </p>

                  <div className="flex flex-wrap gap-1 justify-center">
                    {person.tags.map((tag) => (
                      <span key={tag} className="badge badge-outline badge-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="card-actions w-full mt-2">
                    <button className="btn btn-primary btn-sm w-full">
                       View Details
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};


const TotalCard = () => (
  <Suspense
    fallback={
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    }
  >
    <TotalCardList />
  </Suspense>
);

export default TotalCard;