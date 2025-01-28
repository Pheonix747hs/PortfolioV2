import { FileWarning } from "lucide-react";

interface PDFViewerProps {
  fileId: string;
  title?: string;
}

export function PDFViewer({ fileId, title }: PDFViewerProps) {
  // Convert Google Drive file ID to embedded viewer URL
  const pdfUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <div className="w-full max-w-4xl md:mx-auto  p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden ml-11 calc(h-screen - 8rem) md:h-[95vh] ">
        {title && (
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          </div>
        )}

        <div className="relative bg-gray-50">
          <iframe
            src={pdfUrl}
            className="w-full h-[500px] md:h-[900px] overflow-y-auto"
            allow="autoplay"
            loading="lazy"
          />

          <a
            href={`https://drive.google.com/file/d/${fileId}/view`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            <FileWarning className="w-5 h-5" />
            <span className="hidden md:inline">Open in Drive</span>
          </a>
        </div>
      </div>
    </div>
  );
}
