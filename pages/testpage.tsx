// import React, { useState } from "react";
// import test from "./api/test";

// const TestPage = () => {
//     const [responseData, setResponseData] = useState<any>(null);

//     setInterval(() => {
//         handleClick();
//         console.log(2);
//     }, 1500);

//     const handleClick = async () => {
//         const response = await fetch("/api/test", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ message: "Hello world!" }),
//         });
//         const data = await response.json();
//         setResponseData(data);
//     };

//     return (
//         <div>
//             <h1>Test Page</h1>
//             <button onClick={handleClick}>Send Request</button>
//             {responseData && <div>Response Data: {responseData?.success}</div>}
//         </div>
//     );
// };

// export default TestPage;

import axios from "axios";
import { useState } from "react";
import { useRecoilValue } from "recoil";
// import { postHandling } from "../states/recoilAtom";

const TestPage = () => {
    // const testData = useRecoilValue(postHandling);
    const [postData, setPostData] = useState<any>([]);
    const [postDataGet, setPostDataGet] = useState<any>([]);

    const handleGetData = async () => {
        try {
            const response = await axios.get("/api/test");
            console.log("ssr");
            console.log(response?.data?.success);
            setPostData(response?.data?.success);
        } catch (error) {
            console.log(error);
        }
    };
    const handleGetDataServer = async () => {
        try {
            const response = await axios.get("http://13.125.250.98/api/rule/johny");
            console.log("기존");
            console.log(response?.data);
            setPostDataGet(response?.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div onClick={handleGetData} style={{ background: "black", color: "white" }}>
                testpage
            </div>
            <div onClick={handleGetDataServer} style={{ background: "black", color: "white" }}>
                testpage_서버로 바로 get요청
            </div>
            <div> 🌸개선안 : POST 방식</div>
            {postData.map((e: any, i: any) => (
                <div key={`data${i}`}> {e?.device_id} </div>
            ))}
            <div> 🌸기존 : 직접 호출 방식</div>
            {postDataGet.map((e: any, i: any) => (
                <div key={`getdata${i}`}> {e?.device_id} </div>
            ))}
        </>
    );
};

export default TestPage;
