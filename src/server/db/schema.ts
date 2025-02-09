import { int, text, singlestoreTableCreator, index, bigint } from "drizzle-orm/singlestore-core";

export const createTable = singlestoreTableCreator(
  (name) => 'drive_tutorial_' + name,
);

export const files = createTable(
  "jg_files_table", 
  {
  id: bigint("id", {mode: "number", unsigned: true}).primaryKey().autoincrement(),
  name: text("name").notNull(), 
  size: text("size").notNull(),
  url: text("url").notNull(), 
  parent: bigint("parent", { mode: "number", unsigned: true}).notNull(),
  }, 
  (t) => {
    return [index("parent_index").on(t.parent)];
  },
);

export const folders = createTable(
  "jg_folders_table", 
  {
  id: bigint("id", {mode: "number", unsigned: true}).primaryKey().autoincrement(),
  name: text("name").notNull(), 
  parent: bigint("parent", { mode: "number", unsigned: true}).notNull(),
  }, 
  (t) => {
    return [index("parent_index").on(t.parent)];
  },
);