import ChoiceBox from "./sub/ChoiceBox.jsx"
import ForumBox from "./sub/ForumBox.jsx"
import { useState, useEffect } from "react"

function MiddleColumn() {
    const [data, setData] = useState([])
    const [category, setCategory] = useState()
    const [topic, setTopic] = useState()

    useEffect(() => {
        getData(),
        getCategory(),
        getTopic()
    }, [])

    //get and set data
    const getData = async() => {
        const response = await fetch("https://sonic.dawsoncollege.qc.ca/~nasro/js320/project2/forum-data.php")
        const data = await response.json()
        setData(data.categories)
    }

    function getCategory(e){
        setCategory(e)
    }

    function getTopic(e){
        setTopic(e)
    }
    
    //if it's not ready yet, return loading
    if (!data.length) {
        return <p>Loading...</p>
    }
    
    return (
        <div id="middle-column">
            <ChoiceBox data={data} getCategory={getCategory} getTopic={getTopic}/>
            <ForumBox data={data}/>
        </div>
    )
}

export default MiddleColumn