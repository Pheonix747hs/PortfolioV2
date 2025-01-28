import React from "react";

const ContactGlassCard: React.FC = () => {
  return (
    <div className="bg-[rgba(34,29,29,0.51)] backdrop-blur-lg border border-[rgba(34,29,29,0.3)] rounded-2xl shadow-lg p-6 text-white max-w-md mx-auto">
      <h3 className="text-xl font-bold mb-4">Contact Me</h3>
      <p className="text-sm">
        Feel free to reach out for collaboration or any queries.
      </p>
      <button className="mt-4 bg-[#b99757] hover:bg-[#a8854c] text-white font-bold py-2 px-4 rounded">
        Get in Touch
      </button>
    </div>
  );
};

export default ContactGlassCard;
