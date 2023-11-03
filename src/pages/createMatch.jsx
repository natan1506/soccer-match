
import Navbar from '../components/Navbar';
import { useCustomizationHook } from '../utils/useHook';

export function CreateMatch() {
  const { saveData } = useCustomizationHook()

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    let submitData = {
      date: data.get('date'),
      player1: data.get('player1'),
      player2: data.get('player2'),
      player3: data.get('player3'),
      player4: data.get('player4'),
      player5: data.get('player5'),
      player6: data.get('player6'),
    }
    saveData(submitData)

  }

  return (
    <div className="h-full flex flex-col gap-4">
      <Navbar />
      <div className='px-5 flex items-center justify-center'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
          <input className="border px-2 py-1 rounded-lg" type="date" name="date" />
          <input className="border px-2 py-1 rounded-lg" type="text" name="player1" />
          <input className="border px-2 py-1 rounded-lg" type="text" name="player2" />
          <input className="border px-2 py-1 rounded-lg" type="text" name="player3" />
          <input className="border px-2 py-1 rounded-lg" type="text" name="player4" />
          <input className="border px-2 py-1 rounded-lg" type="text" name="player5" />
          <input className="border px-2 py-1 rounded-lg" type="text" name="player6" />
          <button className='bg-purple-400 rounded-lg px-4 py-3 hover:bg-purple-900 hover:text-white transition-colors'>Salvar</button>
        </form>
      </div>

    </div>
  )
}