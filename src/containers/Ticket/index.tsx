/*
 * @Date: 2023-07-19 13:42:21
 * @Author: Bruce Hsu
 * @Description: 
 */
const Ticket = () => {
    return (
      <div className="mt-20 mx-auto max-w-screen-lg">
        <h2 className="text-5xl font-bold dark:text-zinc-100">Tickets</h2>
        <table className="mt-5 table w-full border border-zinc-500 border-collapse">
          <thead className="text-lg font-bold">
            <td className="border border-zinc-500 p-3 dark:text-zinc-100">Tickets</td>
            <td className="border border-zinc-500 p-3 dark:text-zinc-100">Price</td>
          </thead>
          <tbody>
            <tr>
              <td className="border border-zinc-500 py-2 px-3 dark:text-zinc-100">Single day ticket</td>
              <td className="border border-zinc-500 py-2 px-3 dark:text-zinc-100">$30</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 py-2 px-3 dark:text-zinc-100">Do you love me</td>
              <td className="border border-zinc-500 py-2 px-3 dark:text-zinc-100">$70</td>
            </tr>
          </tbody>
          <caption className="dark:text-zinc-100">
            Once they're gone
          </caption>
        </table>
        <div className="mt-50 h-[300px]"></div>
      </div>   
    )
}

export default Ticket;