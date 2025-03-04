export interface Link {
  href: string;
}

export interface Links {
  self: Link;
  breeds: Link;
}

export interface PetType {
  name: string;
  coats: string[];
  colors: string[];
  genders: string[];
  _links: Links;
}

export interface PetTypesResponse {
  types: PetType[];
}
