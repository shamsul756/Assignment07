import React from "react";

const HomePage=()=>{

    return(
        <div>
       <div className="min-h-screen bg-base-200 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">My Connections</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {profiles.map((person) => { 
          const isActive = person.days_since_contact < 5;

          return (
            <div
              key={person.id}
              className="card bg-base-100 w-full max-w-xs shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <figure className="px-6 pt-6">
                <img
                  src={person.picture}
                  alt={person.name}
                  className="rounded-full w-24 h-24 object-cover ring-4 ring-primary ring-offset-2"
                />
              </figure>

              <div className="card-body items-center text-center gap-2 pt-3">
                <h2 className="card-title text-lg">{person.name}</h2>

                <span className={`badge ${isActive ? "badge-success" : "badge-ghost"} badge-md font-semibold`}>
                  {isActive ? "Active" : "Inactive"}
                </span>

                <p className="text-xs text-base-content/50">
                  Last contact:{" "}
                  <span className="font-bold text-base-content">
                    {person.days_since_contact} ago
                  </span>
                </p>

                <div className="flex flex-wrap gap-1 justify-center">
                  {person.tags.map((tag) => (
                    <span key={tag} className="badge badge-outline badge-sm">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

 
      <div className="text-center mt-10">
        <Link to="/TotalCard">
          <button className="btn bg-purple-700 text-white btn-wide">
            Show All Connections →
          </button>
        </Link>
      </div>
    </div>
        </div>
    )
}
export default HomePage;