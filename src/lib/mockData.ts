export interface File {
  id: string
  name: string
  type: "file" | "folder"
  url?: string
  size?: string
  modifiedAt: string
  children?: File[]
}

export const mockData: File = {
  id: "root",
  name: "My Drive",
  type: "folder",
  modifiedAt: "2023-05-01",
  children: [
    {
      id: "1",
      name: "Documents",
      type: "folder",
      modifiedAt: "2023-05-15",
      children: [
        {
          id: "1-1",
          name: "Resume.pdf",
          type: "file",
          url: "/files/resume.pdf",
          size: "2.5 MB",
          modifiedAt: "2023-05-20",
        },
        {
          id: "1-2",
          name: "Cover Letter.docx",
          type: "file",
          url: "/files/cover-letter.docx",
          size: "1.2 MB",
          modifiedAt: "2023-05-18",
        },
      ],
    },
    {
      id: "2",
      name: "Photos",
      type: "folder",
      modifiedAt: "2023-05-10",
      children: [
        {
          id: "2-1",
          name: "Vacation.jpg",
          type: "file",
          url: "/files/vacation.jpg",
          size: "5.7 MB",
          modifiedAt: "2023-05-12",
        },
        {
          id: "2-2",
          name: "Family.png",
          type: "file",
          url: "/files/family.png",
          size: "3.2 MB",
          modifiedAt: "2023-05-11",
        },
      ],
    },
    {
      id: "3",
      name: "Project Proposal.pptx",
      type: "file",
      url: "/files/project-proposal.pptx",
      size: "4.8 MB",
      modifiedAt: "2023-05-05",
    },
  ],
}

