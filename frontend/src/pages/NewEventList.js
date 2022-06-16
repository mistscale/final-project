import React, { useEffect } from "react";

const NewEventList = () => {
    const [eventList, setEventList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchEvent();
    }, []);

    const fetchEvent = () => {
        setLoading(true);
        fetch('')
            .then(res => res.json())
            .then(data => setEventList(data))
            .catch(error => console.error(error))
            .finally(() => setLoading(false));
    }
    

    return <div>Event Form</div>

}
export default NewEventList;
