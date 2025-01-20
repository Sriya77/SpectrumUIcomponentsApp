import  { useState } from "react";

interface ImagePreviewProps {
  src: string;
  alt?: string;
  width: number;
  height: number;
  className?: string;
}

export default function ImagePreview({
  src = "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  alt = "Preview image",
  width = 400,
  height = 400,
  className = "cursor-pointer rounded-lg hover:opacity-90 transition-opacity",
}: ImagePreviewProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div
            className="absolute inset-0"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="relative z-10 max-w-[90vw] max-h-[90vh] p-0 bg-transparent border-0">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/75 focus:outline-none"
            >
              <span className="sr-only">Close</span>
              ✕
            </button>

            <div className="relative">
              <img
                src={src}
                alt={alt}
                width={width * 2}
                height={height * 2}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
