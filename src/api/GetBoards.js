export default function GetBoards() {
    try {
        const res = await fetch(' http://localhost:3000/boards')
        const data = await res.json()
        return data
    }
    catch (err) {
        console.log(err);
    }
}