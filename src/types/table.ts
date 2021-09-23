export type ColumnTitle = string;
export type RowTitle = string;

export type Column = {
    id: UniqueId;
    name: ColumnTitle;
}
export type Row = {
    id: UniqueId;
    name: RowTitle;
    tags: [];
    created: string;
}
