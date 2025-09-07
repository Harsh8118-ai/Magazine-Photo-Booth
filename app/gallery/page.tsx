"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Folder {
  name: string;
  path: string;
}

export default function GalleryPage() {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        const res = await fetch("/api/folders");
        const data = await res.json();

        if (data.error) {
          console.error("Error fetching folders:", data.error);
          return;
        }

        setFolders(data.folders || []);
      } catch (error) {
        console.error("Failed to fetch folders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFolders();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">Loading folders...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-10">
          Event Albums
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {folders.length === 0 ? (
            <p className="text-center text-gray-500 col-span-full">
              No folders found.
            </p>
          ) : (
            folders.map((folder, index) => (
              <Link
                key={index}
                href={`/albums/${encodeURIComponent(folder.path)}`}
                className="block p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-gray-500">{folder.name}</span>
                </div>
                <h2 className="text-lg font-semibold text-center">{folder.name}</h2>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
