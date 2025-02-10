import DriveContents from "../../drive-contents";
import { 
    QUERIES
} from "~/server/db/queries";
  
export default async function GoogleDriveClone({
    params,
  }: { params: { folderId: string } }) { // Hopefully this works is from sjat

  const parsedFolderId = parseInt(params.folderId);
  if (isNaN(parsedFolderId)) {
    return <div>Invalid folder ID</div>;
  }

  const [folders, files, parents] = await Promise.all([
    QUERIES.getFolders(parsedFolderId),
    QUERIES.getFiles(parsedFolderId),
    QUERIES.getAllParentsForFolder(parsedFolderId),
  ]);

  return <DriveContents files={files} folders={folders} parents={parents} />;
}
