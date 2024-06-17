export interface IDocsModel {
  id: string;
  name: string;
  type: string;
}

export interface DataTablesResponse {
  draw?: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: any[];
}

export interface IResModel {
  id: number;
  name: string;
  created_at?: string;
  updated_at?: string;
  docs: IDocsModel[];
}
