export default async function GetBoards() {
  console.log('dentro mock');
  const boards =
    [
      {
        "id": 2,
        "name": "Trabajo",
        "boardList": [
          {
            "name": "To Do",
            "taskList": [
              {
                "task": "Aprender Vuex",
                "completed": false
              },
              {
                "task": "Testing",
                "completed": false
              }
            ]
          },
          {
            "name": "Done",
            "taskList": []
          }
        ]
      },
      {
        "id": 3,
        "name": "Casa",
        "boardList": [
          {
            "name": "To Do",
            "taskList": [
              {
                "task": "Aprender Testing",
                "completed": false
              }
            ]
          }
        ]
      }
    ]
  return boards
}