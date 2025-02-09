"use client"

import { useState } from "react"
import { type File, mockData } from "../lib/mockData"
import { Folder, FileIcon, ChevronRight, Upload } from "lucide-react"
import Link from "next/link"
import { Button } from "~/components/ui/button"

export default function GoogleDriveClone() {
  const [currentFolder, setCurrentFolder] = useState<File>(mockData)
  const [breadcrumbs, setBreadcrumbs] = useState<File[]>([mockData])

  const navigateToFolder = (folder: File) => {
    setCurrentFolder(folder)
    setBreadcrumbs((prev) => [...prev, folder])
  }

  const navigateToBreadcrumb = (index: number) => {
    // Ensure the index is within bounds and the folder exists.
    if (index >= 0 && index < breadcrumbs.length) {
      const folder = breadcrumbs[index];
      if (folder) {
        setCurrentFolder(folder); // This will now only be called with a valid folder
        setBreadcrumbs(breadcrumbs.slice(0, index + 1));
      }
    }
  }

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
            <div className="col-span-3">Modified</div>
            <div className="col-span-3">Size</div>
          </div>
          {currentFolder.children?.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-12 gap-4 p-4 border-b border-gray-700 hover:bg-gray-700 transition-colors"
            >
              <div className="col-span-6 flex items-center">
                {item.type === "folder" ? (
                  <div onClick={() => navigateToFolder(item)} className="flex items-center cursor-pointer">
                    <Folder className="mr-2 text-yellow-500" />
                    <span>{item.name}</span>
                  </div>
                ) : (
                  <Link href={item.url ?? "#"} className="flex items-center">
                    <FileIcon className="mr-2 text-gray-400" />
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
              <div className="col-span-3">{item.modifiedAt}</div>
              <div className="col-span-3">{item.size ?? "-"}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

