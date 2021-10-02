export interface OGPContent {
  id: string;
  title?: string;
  image?: string;
}

export interface OGPContentResult {
  result: boolean;
  content?: OGPContent;
}
