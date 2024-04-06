const SceneCard = ({ title, description, image }) => {
  return (
    <div className="card bg-background p-4">
      <img src={image} alt={`${title} scene`} className="w-full h-auto" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-text">{description}</p>
    </div>
  );
}

export default SceneCard;
