import {useState, useEffect} from 'react'
function ChoiceBox(data) {
    const [category, setCategory] = useState('1')
    const [topic, setTopic] = useState('1')

    useEffect(() => {
        data.getCategory(),
        data.getTopic()
    }, [])

    function changeCategory(e){
        setCategory(e.target.value)
    }

    function changeTopic(e){
        setTopic(e.target.value)
    }
    
    return (
        <fieldset id="choice-box">
            <legend>Filter Posts</legend>
            <form>
                <div>
                    <label htmlFor="firstSelect">Choose Category</label>
                    <select name="firstSelect" onChange={changeCategory}>
                        <option value="1"></option>
                        <option value="2">Category 2 - Project Management </option>
                        <option value="3">Category 3 - Communication </option>
                    </select>
                </div>
                <div>
                    <label htmlFor="secondSelect">Choose Topic</label>
                    <select name="secondSelect">
                        <option value="e"onClick={changeTopic}>The Number One Reason You Should (Do) Coding using REactJS</option>
                    </select>
                </div>
            </form>
        </fieldset>
    )
}

export default ChoiceBox