import { Badge } from "./ui/badge";

interface Category {
  name: string;
}

const CategoryBadge = ({ category }: { category: Category }) => {
  return <Badge>{category.name}</Badge>;
};

export default CategoryBadge;
