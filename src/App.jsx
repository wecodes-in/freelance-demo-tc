import React,{ useState } from "react";
export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Legal Documents</h1>
      
      <div className="flex gap-4">
        <a
          href="/docs/privacy-policy.doc"
          download
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
        >
          Download Privacy Policy                           - 
        </a>

        <a
          href="/docs/terms-of-service.doc"
          download
          className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold shadow-md hover:bg-green-700 transition"
        >
          -        Download Terms of Service
        </a>
      </div>
    </div>
  );
}
