export type Filters = Array<{
  text: string;
  active?: boolean;
  onClick: () => void;
}>;

export type Authors = {
  name: string;
  email: string;
  image: string;
};
