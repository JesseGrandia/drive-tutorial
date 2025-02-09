"use client"

import { useState } from "react";
import { type File, type Folder, mockData, mockFolders } from "../lib/mockData";
import { Folder as FolderIcon, FileIcon, ChevronRight, Upload } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function GoogleDriveClone() {
  // Initialize state with the root folder
  const rootFolder = mockFolders.find((folder) => folder.id === "root")!;
  const [currentFolder, setCurrentFolder] = useState<Folder>(rootFolder);
  const [breadcrumbs, setBreadcrumbs] = useState<Folder[]>([rootFolder]);

  // Function to navigate to a folder
  const navigateToFolder = (folder: Folder) => {
    setCurrentFolder(folder);
    setBreadcrumbs((prev) => [...prev, folder]);
  };

  // Function to navigate back using breadcrumbs
  const navigateToBreadcrumb = (index: number) => {
    if (index >= 0 && index < breadcrumbs.length) {
      const folder = breadcrumbs[index];
      if (folder) {
        setCurrentFolder(folder);
        setBreadcrumbs(breadcrumbs.slice(0, index + 1));
      }
    }
  };

  // Get folders and files inside the current folder
  const childFolders = mockFolders.filter((folder) => folder.parent === currentFolder.id);
  const childFiles = mockData.filter((file) => file.parent === currentFolder.id);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Google Drive Clone</h1>
        {/* Breadcrumb navigation and Upload button */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center overflow-x-auto">
            {breadcrumbs.map((item, index) => (
              <div key={item.id} className="flex items-center whitespace-nowrap">
                <button onClick={() => navigateToBreadcrumb(index)} className="text-blue-400 hover:underline">
                  {item.name}
                </button>
                {index < breadcrumbs.length - 1 && <ChevronRight className="mx-2" size={16} />}
              </div>
            ))}
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Upload className="mr-2 h-4 w-4" /> Upload
          </Button>
        </div>

        {/* Folder and file list */}
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-700 font-semibold">
            <div className="col-span-6">Name</div>

            <div className="col-span-3">Size</div>
            <div className="col-span-3">Actions</div>
          </div>
          {childFolders.map((folder) => (
            <div
              key={folder.id}
              className="grid grid-cols-12 gap-4 p-4 border-b border-gray-700 hover:bg-gray-700 transition-colors cursor-pointer"
              onClick={() => navigateToFolder(folder)}
            >
              <div className="col-span-6 flex items-center">
                <FolderIcon className="mr-2 text-yellow-500" />
                <span>{folder.name}</span>
              </div>
              <div className="col-span-3">-</div>
              <div className="col-span-3">-</div>
            </div>
          ))}
          {childFiles.map((file) => (
            <div
              key={file.id}
              className="grid grid-cols-12 gap-4 p-4 border-b border-gray-700 hover:bg-gray-700 transition-colors"
            >
              <div className="col-span-6 flex items-center">
                <Link href={file.url} className="flex items-center">
                  <FileIcon className="mr-2 text-gray-400" />
                  <span>{file.name}</span>
                </Link>
              </div>
              <div className="col-span-3">{file.size}</div>
              <div className="col-span-3">-</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

