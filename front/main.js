const getUsers = async ()=>{
    const {data} = await axios.get('http://localhost:3000/users');
}