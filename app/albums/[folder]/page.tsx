"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Image {
  id: string;
  url: string;
  publicId: string;
}

export default function AlbumPage() {
  const params = useParams();
  const folder = decodeURIComponent(params.folder as string);

  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(`/api/folders/${encodeURIComponent(folder)}`);
        const data = await res.json();

        if (data.error) {
          console.error("Error fetching images:", data.error);
          return;
        }

        setImages(data.images || []);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [folder]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">Loading images...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-purple-600 mb-10">
          {folder} Album
        </h1>

        {images.length === 0 ? (
          <p className="text-center text-gray-500">No images in this folder.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((img) => (
              <div
                key={img.id}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={img.url}
                  alt={img.publicId}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
