import React, { use, useState } from "react";
import { CiVideoOn } from "react-icons/ci";
import { FaArchive, FaBell, FaEnvelopeOpenText, FaArrowLeft } from "react-icons/fa";
import { MdAddCall, MdDelete } from "react-icons/md";
import { useParams, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const profilePromise = fetch("/data.json").then((res) => res.json());

const CardDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const people = use(profilePromise);
  const expectedCard = people.find((p) => p.id === Number(id));

  const [timeline, setTimeline] = useState([]);

  if (!expectedCard) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h2 className="text-2xl font-bold text-error">User not found</h2>
        <button onClick={() => navigate(-1)} className="btn btn-ghost mt-4">Go Back</button>
      </div>
    );
  }
// generate this design from chat start 
  const handleCheckIn = (type) => {
    const icons = { Call: "📞", Text: "✉️", Video: "🎥" };
    const messages = {
      Call: `📞 Call with ${expectedCard.name} logged!`,
      Text: `✉️ Text to ${expectedCard.name} logged!`,
      Video: `🎥 Video call with ${expectedCard.name} logged!`,
    };
    // end genarate desing

    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric", month: "short", day: "numeric",
      }),
      type,
      icon: icons[type],
      title: `${type} with ${expectedCard.name}`,
    };

    setTimeline((prev) => [newEntry, ...prev]);
    toast.success(messages[type], {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const statusColor =
    expectedCard.status === "ok"
      ? "badge-success"
      : expectedCard.status === "overdue"
      ? "badge-error"
      : "badge-warning";

  return (
    <div className="min-h-screen bg-base-200 p-4 md:p-10">
     
      <ToastContainer />

     
      <button
        onClick={() => navigate(-1)}
        className="btn btn-sm btn-ghost mb-6 gap-2 hover:bg-base-300"
      >
        <FaArrowLeft /> Back to Connections
      </button>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="card bg-base-100 shadow-xl p-8 flex flex-col items-center text-center h-fit sticky top-6">
       
          <div className="avatar mb-4">
            <div className="w-32 rounded-full ring-4 ring-primary ring-offset-base-100 ring-offset-4 shadow-lg">
              <img src={expectedCard.picture} alt={expectedCard.name} />
            </div>
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight">{expectedCard.name}</h2>

        
          <div className={`badge ${statusColor} badge-outline my-2 uppercase tracking-widest text-xs font-bold px-3 py-2`}>
            {expectedCard.status}
          </div>

         
          <div className="flex flex-wrap gap-2 justify-center my-3">
            {expectedCard.tags.map((tag) => (
              <span key={tag} className="badge badge-ghost text-xs font-medium">#{tag}</span>
            ))}
          </div>

        
          <p className="text-base-content/60 italic text-sm mb-6 border-l-4 border-primary pl-3 text-left">
            "{expectedCard.bio}"
          </p>

          <div className="divider"></div>

          
          <div className="w-full space-y-3">
            <button
              onClick={() => toast.info("Reminder snoozed!", { position: "top-center" })}
              className="btn btn-outline btn-block btn-sm gap-2 hover:btn-warning"
            >
              <FaBell className="text-warning" /> Snooze Reminder
            </button>
            <button
              onClick={() => toast.info("Contact archived!", { position: "top-center" })}
              className="btn btn-outline btn-block btn-sm gap-2 hover:btn-info"
            >
              <FaArchive className="text-info" /> Archive
            </button>
            <button
              onClick={() => toast.error("Contact deleted!", { position: "top-center" })}
              className="btn btn-outline btn-error btn-block btn-sm gap-2"
            >
              <MdDelete /> Delete
            </button>
          </div>
        </div>

   
        <div className="lg:col-span-2 space-y-6">

        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="stats shadow bg-base-100 border border-primary/20">
              <div className="stat">
                <div className="stat-figure text-primary text-2xl">📅</div>
                <div className="stat-title text-xs">Last Contact</div>
                <div className="stat-value text-primary text-2xl">{expectedCard.days_since_contact}d</div>
                <div className="stat-desc">days ago</div>
              </div>
            </div>
            <div className="stats shadow bg-base-100 border border-secondary/20">
              <div className="stat">
                <div className="stat-figure text-secondary text-2xl">🎯</div>
                <div className="stat-title text-xs">Goal</div>
                <div className="stat-value text-secondary text-2xl">{expectedCard.goal}d</div>
                <div className="stat-desc">contact interval</div>
              </div>
            </div>
            <div className="stats shadow bg-base-100 border border-accent/20">
              <div className="stat">
                <div className="stat-figure text-accent text-2xl">⏳</div>
                <div className="stat-title text-xs">Next Due</div>
                <div className="stat-value text-accent text-lg">{expectedCard.next_due_date}</div>
                <div className="stat-desc">reach out by then</div>
              </div>
            </div>
          </div>

  
          <div className="card bg-base-100 shadow-xl p-8 border border-base-300">
            <div className="flex justify-between items-center border-b border-base-300 pb-3 mb-4">
              <h3 className="text-xl font-bold">🎯 Relationship Goal</h3>
              <button
                onClick={() => toast.info("✏️ Edit coming soon!", { position: "top-center" })}
                className="btn btn-sm btn-outline btn-primary"
              >
                 Edit
              </button>
            </div>
            <p className="text-base text-base-content/80">
              Stay in touch with <b>{expectedCard.name}</b> every{" "}
              <span className="badge badge-primary badge-lg font-bold">{expectedCard.goal} days</span>{" "}
              to keep the relationship strong.
            </p>
          </div>

      
          <div className="card bg-gradient-to-br from-base-100 to-base-200 shadow-xl p-8 border border-base-300">
            <h3 className="text-xl font-bold mb-2 border-b border-base-300 pb-3">
               Quick Check-In
            </h3>
            <p className="text-sm text-base-content/50 mb-5">
              Log an interaction — it will appear in the timeline below.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleCheckIn("Call")}
                className="btn btn-primary gap-2 shadow-md hover:scale-105 transition-transform"
              >
                <MdAddCall size={20} /> Call
              </button>
              <button
                onClick={() => handleCheckIn("Text")}
                className="btn btn-secondary gap-2 shadow-md hover:scale-105 transition-transform"
              >
                <FaEnvelopeOpenText size={18} /> Text
              </button>
              <button
                onClick={() => handleCheckIn("Video")}
                className="btn btn-accent gap-2 shadow-md hover:scale-105 transition-transform"
              >
                <CiVideoOn size={22} /> Video
              </button>
            </div>
          </div>

        
          {timeline.length > 0 && (
            <div className="card bg-base-100 shadow-xl p-8 border border-base-300">
              <h3 className="text-xl font-bold mb-6 border-b border-base-300 pb-3">
                📜 Timeline
              </h3>
              <ul className="space-y-4">
                {timeline.map((entry) => (
                  <li
                    key={entry.id}
                    className="flex items-start gap-4 p-4 rounded-xl bg-base-200 border border-base-300 hover:shadow-md transition-shadow"
                  >
                   
                    <div className="w-10 h-10 rounded-full bg-base-100 shadow flex items-center justify-center text-xl shrink-0">
                      {entry.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-base-content">{entry.title}</p>
                      <p className="text-xs text-base-content/50 mt-0.5"> {entry.date}</p>
                    </div>
                    <span className="badge badge-outline badge-sm self-center capitalize">
                      {entry.type}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CardDetails;