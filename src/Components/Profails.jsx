import React, { use, Suspense } from "react";

const profilePromise = fetch("/data.json").then((res) => res.json());

const ProfileList = () => {
  const profiles = use(profilePromise);

  return (
    <div className="min-h-screen bg-base-200 p-6">
      {/* Responsive grid */}
      <div className="grid gap-6 
                      grid-cols-1 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-4 
                      justify-items-center">

        {profiles.map((person) => {
          const isActive = person.days_since_contact < 5;
          const badge = isActive ? "badge-success" : "badge-ghost";
          const label = isActive ? "Active" : "Inactive";

          return (
            <div
              key={person.id}
              className="card bg-base-100 w-full max-w-xs shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Profile Picture */}
              <figure className="px-6 pt-6">
                <img
                  src={person.picture}
                  alt={person.name}
                  className="rounded-full w-24 h-24 object-cover ring-4 ring-primary ring-offset-2"
                />
              </figure>

              <div className="card-body items-center text-center gap-2 pt-3">

                {/* Name */}
                <h2 className="card-title text-lg">{person.name}</h2>

                {/* Status Badge */}
                <span className={`badge ${badge} badge-md font-semibold mt-1`}>
                  {label}
                </span>

                {/* Days since contact */}
                <p className="text-xs text-base-content/50">
                  Last contact:{" "}
                  <span className="font-bold text-base-content">
                    {person.days_since_contact}d ago
                  </span>
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 justify-center">
                  {person.tags.map((tag, i) => (
                    <span key={i} className="badge badge-outline badge-sm">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Suspense wrapper
const Profails = () => (
  <Suspense
    fallback={
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    }
  >
    <ProfileList />
  </Suspense>
);

export default Profails;