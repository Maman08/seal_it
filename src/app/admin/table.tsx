

export default function Table() {
    type doc = {
        id: string;
        type: string;
        user_id: string;
        src: string;
        name: string;
    };
    const Docs = [
      {
        id: "1",
        type: "Property Doc",
        user_id: "1",
        src: "user",
        name: "Property Doc",
      },
      {
        id: "2",
        type: "Property Doc",
        user_id: "2",
        src: "user",
        name: "Property Doc",
      },

    ];

    function handleClick(e: any) {
      console.log(e.target.parentElement.firstElementChild.textContent);
      let docId = e.target.parentElement.firstElementChild.textContent;
      
    }
    
    
    if(Docs.length!=0) {
        return (
          <table className=" w-full mx-scroll table-fixed border-separate border-spacing-2 border-2 border-blue-100 overflow-x-scroll overflow-scroll">
          <thead>
            <tr className="border-separate border-spacing-2 border-2 border-blue-100 overflow-x-scroll bg-black">
              <th className="md:text-truncate p-2 border-separate border-spacing-2 border-2 border-blue-100 overflow-x-scroll">
                Document ID
              </th>
              <th className="md:h-fit border-separate border-spacing-2 border-2 border-blue-100 overflow-x-scroll">
                Document Type
              </th>
              <th className="md:h-fit border-separate border-spacing-2 border-2 border-blue-100 overflow-x-scroll">
                User Id
              </th>
              <th className="md:h-fit border-separate border-spacing-2 border-2 border-blue-100 overflow-x-scroll">
                Document Source
              </th>
              <th className="md:h-fit border-separate border-spacing-2 border-2 border-blue-100 overflow-x-scroll">
                Document Name
              </th>
              <th className="md:h-fit border-separate border-spacing-2 border-2 border-blue-100 overflow-x-scroll">
                Approve/Decline
              </th>
            </tr>
          </thead>
          <tbody>
            {Docs.map((Doc: doc) => (
              <tr onClick={handleClick} className="border-separate border-2 border-blue-100 overflow-x-scroll hover:bg-black hover:bg-opacity-10">
                <td className="text-center md:h-fit border-collapse border-2 border-blue-100 overflow-x-scroll text-nowrap">
                  {Doc.id}
                </td>
                <td className="text-center md:h-fit border-collapse border-2 border-blue-100 overflow-x-scroll">
                  {Doc.type}
                </td>
                <td className="text-center md:h-fit border-collapse border-2 border-blue-100 overflow-x-scroll">
                  {Doc.user_id}
                </td>
                <td className="text-center md:h-fit border-collapse border-2 border-blue-100 overflow-x-scroll">
                  {Doc.src}
                </td>
                <td className="text-center md:h-fit border-collapse border-2 border-blue-100 overflow-x-scroll">
                  {Doc.name}
                </td>
                <td className="p-2 text-center md:h-fit flex flex-col items-center justify-center border-2 border-blue-100 overflow-x-scroll">
                  <button className=" m-1 lg:px-3 md:p-1 p-1 sm:text-sm rounded-full lg:text-xl text-green-500 transition ease-in-out delay-100 border-2 border-green-500 hover:-translate-y-1 hover:scale-105 hover:bg-green-500 hover:text-black duration-300 ...">
                    Approve
                  </button>
  
                  <button className="m-1 lg:px-3 md:p-1 py-1 rounded-full sm:text-sm lg:text-xl text-red-600 transition ease-in-out delay-100 border-2 border-red-600 hover:-translate-y-1 hover:scale-105 hover:bg-red-600 hover:text-black duration-300 ...">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
            
          </tbody>
  
        </table>

        );
    } else {
      return(
        <p className="px-4 text-3xl m text-center my-36 w-fit font-bold">There are No Documents to be verified!</p>
      )
    }
}