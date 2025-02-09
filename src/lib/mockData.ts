export interface File {
  id: string
  name: string
  type: "file"
  url: string
  parent: string
  size: string
}

export type Folder = {
  id: string
  name: string
  type: "folder"
  parent: string | null
}

export const mockFolders: Folder[] = [
  {
    id: "root",
    name: "MyDrive",
    type: "folder",
    parent: null,
  },
  {
    id: "1",
    name: "Documents",
    type: "folder",
    parent: "root",
  },
  {
    id: "2",
    name: "Photos",
    type: "folder",
    parent: "root",
  },
  {
    id: "3",
    name: "Work",
    type: "folder",
    parent: "root",
  },
  {
    id: "4",
    name: "Presentations",
    type: "folder",
    parent: "3",
  },
];
  

export const mockData: File[] = [
  {
    id: "2-1",
    name: "Vacation.jpg",
    type: "file",
    url: "/files/vacation.jpg",
    parent: "2",
    size: "5.7 MB",
  },
  {
    id: "2-2",
    name: "Family.png",
    type: "file",
    url: "/files/family.png",
    parent: "2",
    size: "1.9 MB",
  },
  {
    id: "1-2",
    name: "Cover Letter.docx",
    type: "file",
    url: "/files/cover-letter.docx",
    parent: "3",
    size: "3.2 MB",
  },
  {
    id: "1-1",
    name: "Resume.pdf",
    type: "file",
    url: "/files/resume.pdf",
    parent: "3",
    size: "2.5 MB",
  },
];

