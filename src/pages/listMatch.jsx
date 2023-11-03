import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useCustomizationHook } from "../utils/useHook";

export function ListMatch() {
  const { getData } = useCustomizationHook()
  const [data, setData] = useState()

  useEffect(() => {
    getData().then(item => {
      setData(item)
    })
  }, []);

  return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <Navbar />
      <div className='px-5 mt-8'>
        <table className="border rounded-lg shadow-md">
          <thead className="bg-purple-300">
            <tr>
              <td className="p-3 border">data</td>
              <td className="p-3 border">1</td>
              <td className="p-3 border">2</td>
              <td className="p-3 border">3</td>
              <td className="p-3 border">4</td>
              <td className="p-3 border">5</td>
              <td className="p-3 border">6</td>
            </tr>
          </thead>
          <tbody>
            {data && data.map(item => (
              <tr key={Math.random()}>
                <td className="p-3 border">{item.date}</td>
                <td className="p-3 border">{item.player1}</td>
                <td className="p-3 border">{item.player2}</td>
                <td className="p-3 border">{item.player3}</td>
                <td className="p-3 border">{item.player4}</td>
                <td className="p-3 border">{item.player5}</td>
                <td className="p-3 border">{item.player6}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}