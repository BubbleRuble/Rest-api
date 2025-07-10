import { ImSpinner } from 'react-icons/im';
import pendingImage from './pending.png'
import DataView from './DataView';

const PendingView = ({ pokemonName }) => {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        }
      }
    },
    stats: []
  }

  return (
    <div role="alert">
      <div>
        <ImSpinner size={32} />
        Downloading...
      </div>
      <DataView pokemon={pokemon}/>
    </div>
  );
};

export default PendingView;