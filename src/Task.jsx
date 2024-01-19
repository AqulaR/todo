import axios from "axios";

export default function Task({ tasks }) {
  const deleteTask = (postIdToDelete) => {
    axios
      .delete(`http://localhost:3000/api/todos/${postIdToDelete}`)
      .then((response) => {
        console.log(`Deleted post with ID ${postIdToDelete}`);
      })
      .catch((error) => {
        console.error(error);
      });
    // setTasks(tasks.filter(el => el.id !== postIdToDelete));
  };

  return (
    <>
      <div className="px-4 py-5 sm:p-6">
        <h1 className="text-base font-semibold leading-6 text-gray-900">
          {tasks.length > 0 ? "Tasks" : "Empty"}
        </h1>
        {tasks.map((task, index) => (
          <div key={index} className="mt-4">
            <div className="rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-center sm:justify-between">
              <div className="sm:flex sm:items-center">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  // onChange={(index) => {
                  //     document.getElementById(index).style.textDecoration = "line-through";
                  // }}
                />
                <div
                  id={index}
                  className="sm:ml-4 text-sm font-medium text-gray-900"
                >
                  {task.name}
                </div>
              </div>
              <div className="mt-4 sm:ml-6 sm:mt-0 sm:flex-shrink-0 gap-3">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mr-3"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  // id="index"
                  onClick={() => {
                    deleteTask(`${index+1}`);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
