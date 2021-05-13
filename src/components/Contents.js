/* eslint-disable */

import {useState, useEffect} from 'react'
import {Bar, Doughnut, Line} from 'react-chartjs-2'
import axios from 'axios';
import List from './List.jsx'

const Contents = () => {
    const [loading, setLoading] = useState(false);
    const [coinData, setCoinData] = useState([]);

    const ratesSearch = async (coin) => {
        const coinData = await axios.get("https://api.upbit.com/v1/ticker?markets="+coin);
        return coinData.data;
    }

    useEffect(()=>{
        const fetchEvents = async () => {
            const res = await axios.get("https://api.upbit.com/v1/market/all");
            makeData(res.data);
        }

        const makeData = (items)=>{
            setLoading(true);
            const arr = items.reduce((acc, cur)=>{
                if(cur.market.match("KRW-")) {
                    const market = cur.market;
                    const korName = cur.korean_name;
                    const engName = cur.english_name;
                    acc.push(korName);
                }
                return acc;
            }, [])
            
            setCoinData(arr);
            setLoading(false);
        }
        
        fetchEvents();
    }, [])
    
    const chartStyle = {width: '50vw', maxWidth: 500};

    return (
        <section>
            <h2>KRW Info</h2>
            <div className="contents">
                {coinData}
            </div>
        </section>
    )
}

export default Contents
