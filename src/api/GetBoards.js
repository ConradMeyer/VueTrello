export default async function GetBoards() {
    try {
        const res = await fetch(' http://localhost:3000/boards')
        const data = await res.json()
        console.log(data);
        return data
    }
    catch (err) {
        console.log(err);
    }
}