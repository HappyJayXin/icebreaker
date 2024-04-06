import SceneCard from "../SceneCard";

const CardGrid = ({ scenes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {scenes.map((scene, index) => (
        <SceneCard key={index} {...scene} />
      ))}
    </div>
  );
}

export default CardGrid;
