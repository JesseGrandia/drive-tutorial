import "server-only";

import { db } from "~/server/db";
import {
  files_table as filesSchema,
  folders_table as foldersSchema,
} from "~/server/db/schema";
import { eq } from "drizzle-orm";
export const QUERIES = {
    getAllParentsForFolder: async function (folderId: number) {
        const parents = [];
        const visited = new Set(); // Track visited folders
        let currentId: number | null = folderId;

    while (currentId !== null) {
        if (visited.has(currentId)) break; // Prevent infinite loop
        visited.add(currentId);

        const folder = await db
            .select()
            .from(foldersSchema)
            .where(eq(foldersSchema.id, currentId))
            .limit(1); // Ensure only one result

        if (!folder[0]) break; // Stop if no folder found

        parents.unshift(folder[0]);
        currentId = folder[0]?.parent;
    }

    return parents;
    },
    
    getFolders: function (folderId: number) {
        return db
            .select()
            .from(foldersSchema)
            .where(eq(foldersSchema.parent, folderId));
    },      

    getFiles: function (folderId: number) {
        return db
            .select()
            .from(filesSchema)
            .where(eq(filesSchema.parent, folderId));
    },
};