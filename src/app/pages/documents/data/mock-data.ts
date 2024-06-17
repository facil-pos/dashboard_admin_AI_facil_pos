// mock-data.ts
import { IResModel, DataTablesResponse } from '../model/doctuments.model';

export const mockDocs: IResModel[] = [
  {
    id: 1,
    name: 'Loom',
    created_at: "",
    updated_at: "",
    docs: []
  },
  {
    id: 2,
    name: 'Youtube',
    created_at: "",
    updated_at: "",
    docs: []
  },
  {
    id: 3,
    name: 'drive',
    created_at: "",
    updated_at: "",
    docs: []
  }
];

export const mockDataTablesResponse: DataTablesResponse = {
  draw: 0,
  recordsTotal: mockDocs.length,
  recordsFiltered: mockDocs.length,
  data: mockDocs
};
