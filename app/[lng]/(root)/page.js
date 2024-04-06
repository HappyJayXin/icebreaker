import CardGrid from './CardGrid';
import data from './data';

const HomePage = () => {
  return (
    <div>
      <CardGrid scenes={data} />
    </div>
  );
};

export default HomePage;
