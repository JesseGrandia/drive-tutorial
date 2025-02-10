import { db } from "~/server/db";
import { mockFolders, mockFiles } from "~/lib/mockData";
import { files_table, folders_table } from "~/server/db/schema";

export default function SandboxPage() {
    return (
        <div className="flex flex-col gap-4">
            Seed Function
            <form
                action={async () => {
                    "use server";

                    console.log("sup nerds");

                    await db.insert(folders_table).values(
                        mockFolders.map((folder, index) => ({
                            id: index + 1,
                            name: folder.name,
                            parent: index !== 0 ? 1 : null,
                        })),
                    );

                    await db.insert(files_table).values(
                        mockFiles.map((file, index) => ({
                            id: index + 1,
                            name: file.name,
                            size: 50000,
                            url: file.url,
                            parent: (index % 3) + 1,
                        })),
                    );

                    const folderInsert = await db.insert(folders_table).values(
                        mockFolders.map((folder, index) => ({
                            id: index + 1,
                            name: folder.name,
                            parent: index !== 0 ? 1 : null,
                        })),
                    );

                    console.log(folderInsert);

                    const fileInsert = await db.insert(files_table).values(
                        mockFiles.map((file, index) => ({
                            id: index + 1,
                            name: file.name,
                            size: 50000,
                            url: file.url,
                            parent: (index % 3) + 1,
                        })),
                    );

                    console.log(fileInsert);
                }}
            >
                <button type="submit">Seed</button>
            </form>
        </div>
    );
}
