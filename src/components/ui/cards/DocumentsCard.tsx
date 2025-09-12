"use client";

import { useState } from "react";
import { MoreVertical, FileText } from "lucide-react";
import ParentPortalCard from "@/components/ui/cards/ParentPortalCard";
import { ParentCTAButton } from "@/components/ui/actions/ParentCTAButton";
import clsx from "clsx";

interface Document {
  id: string;
  title?: string | null;
  timestamp?: string | null;
  error?: boolean; // If doc failed to load
}

interface DocumentsCardProps {
  childId: string;
  documents?: Document[] | null; // Mock for now, API later
}

export default function DocumentsCard({
  childId,
  documents,
}: DocumentsCardProps) {
  const [retrying, setRetrying] = useState<string | null>(null);

  // Edge case: no docs
  if (!documents || documents.length === 0) {
    return (
      <ParentPortalCard title="Documents">
        <div className="flex flex-col items-center justify-center text-center px-6 py-10 gap-2">
          <FileText
            aria-hidden="true"
            className="w-10 h-10 text-gray-400 mb-2"
          />
          <p className="text-base font-medium text-gray-700">
            No documents available yet.
          </p>
          <p className="text-sm text-gray-500">
            Consent forms and other files will appear here once ready.
          </p>
        </div>
      </ParentPortalCard>
    );
  }

  return (
    <ParentPortalCard title="Documents">
      <ul role="list" className="divide-y divide-gray-200">
        {documents.map((doc) => {
          const title = doc.title ?? "Document"; // fallback
          const date = doc.timestamp ?? null;

          if (doc.error) {
            return (
              <li
                key={doc.id}
                className="flex items-center justify-between py-3 px-1"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-800">
                    {title}
                  </span>
                  <span className="text-sm text-red-600">
                    This document can’t be opened. Please try again later.
                  </span>
                </div>
                <ParentCTAButton
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1"
                  onClick={() => {
                    setRetrying(doc.id);
                    setTimeout(() => {
                      setRetrying(null);
                      console.log("Retrying fetch for doc:", doc.id);
                    }, 1500);
                  }}
                >
                  {retrying === doc.id ? "Retrying…" : "Retry"}
                </ParentCTAButton>
              </li>
            );
          }

          return (
            <li
              key={doc.id}
              className="flex items-center justify-between py-3 px-1"
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-800">
                  {title}
                </span>
                {date && (
                  <span className="text-xs text-gray-500">{date}</span>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                {/* Mobile: View + Overflow */}
                <div className="flex md:hidden">
                  <ParentCTAButton
                    className="px-3 py-1 bg-gray-800 hover:bg-gray-900 text-white"
                    onClick={() => console.log("View doc", doc.id)}
                  >
                    View
                  </ParentCTAButton>
                  <button
                    aria-label="More options"
                    className="ml-2 p-2 rounded-full hover:bg-gray-100"
                    onClick={() =>
                      console.log("Open overflow menu for", doc.id)
                    }
                  >
                    <MoreVertical className="w-4 h-4 text-gray-600" />
                  </button>
                </div>

                {/* Tablet/Desktop: View + Download */}
                <div className="hidden md:flex gap-2">
                  <ParentCTAButton
                    className="px-3 py-1 bg-gray-800 hover:bg-gray-900 text-white"
                    onClick={() => console.log("View doc", doc.id)}
                  >
                    View
                  </ParentCTAButton>
                  <ParentCTAButton
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-800"
                    onClick={() => console.log("Download doc", doc.id)}
                  >
                    Download
                  </ParentCTAButton>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </ParentPortalCard>
  );
}
