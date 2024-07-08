import Image from "next/image";
import dataset, { sizeMapping } from "./data";

const Icon = ({ type, size = "medium" }) => {
  const iconPath = dataset[type] || null;
  const imageSize = sizeMapping[size];

  if (!iconPath) return null;

  return <Image src={iconPath} alt={`icon-${type}`} width={imageSize} height={imageSize} />;
};

export default Icon;
