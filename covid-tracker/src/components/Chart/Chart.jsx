import React , {useState,useEffect} from  'react';
const Chart= () =>{
    const [dailyData,setDailyData] = useState({});
    useEffect(
        ()=>{
            const fetchDailyData = async ()=>{
                setDailyData(await fetchDailyData());
            }
            fetchAPI();
        }
    );
    return(
        <h1>Chart</h1>
    )
}
export default Chart;