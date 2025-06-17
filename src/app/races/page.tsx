'use client'

import { useState, useEffect } from "react";
import { fetchPageRaceData } from "../lib/data/fetch-data";
import { Race } from "../lib/interfaces";
import RaceList from "./race-list";
import './race-list.css';
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Page() {
    const [page, setPage] = useState(1);
    const [data, setData] = useState<Race[]>([]);

     useEffect(() => {
        const fetchData = async () => {
            const racesData = await fetchPageRaceData(page);
            if (racesData !== null) setData(racesData);
        }

        fetchData();
    }, [page]);

    // console.log('race page data', data);

    function prevPage() {
        if (page === 1) {
            return;
        } else {
            setPage(page + 1);
        }
    }

    return (
        <div>
            <h1 className="text-center font-bold text-3xl mt-5 mb-5">Race List</h1>
            <div className="flex justify-center items-center">
                <button className="mr-10 bg-blue-900 p-3" onClick={() => prevPage()}><ArrowLeftIcon className="size-6" /></button>
                <p>Page {page}</p>
                <button className="ml-10 bg-blue-900 p-3" onClick={() => setPage(page + 1)}><ArrowRightIcon className="size-6" /></button>
            </div>
            <div className="race-list-container">
                <RaceList races={data} />
            </div>
            
        </div>
    );
}