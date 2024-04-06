import Image from "next/image";

const SceneCard = ({ title, description, image }) => {
  return (
    <div className="card bg-background p-4">
			<Image src={image} alt={`${title} scene`} width={500} height={300} />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-text">{description}</p>
    </div>
  );
}

export default SceneCard;
