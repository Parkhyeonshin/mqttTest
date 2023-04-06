// import type { NextApiRequest, NextApiResponse } from "next";
// // 데이터형식 정해진거 (테스트 다하고 타입지정하기 / 일단은 any)
// // type Data = {
// //     message: string
// //   }

// //   export default function handler(
// //     req: NextApiRequest,
// //     res: NextApiResponse<Data>
// //   )

// export default function test(req: any, res: any) {
//     // res.status(200).json({ name: "John Doe_test" });
//     if (req.method === "POST") {
//         console.log(req);
//         const postData = req.body; // 요청에서 데이터 추출
//         console.log(postData); // 받은 데이터 출력
//         res.status(200).json({ success: res });
//     } else {
//         res.status(404).json({ success: false });
//     }
// }

// pages/api/test.ts

// 이거쓰기 ㅇㅇㅇ
import { NextApiRequest, NextApiResponse } from "next";
let postData: any = {};
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        postData = req.body;

        // 쿠키나 세션 등을 사용하여 받은 데이터 저장
        res.status(200).json({ success: postData, result: "T_T" });
    } else if (req.method === "GET") {
        res.status(200).json({ success: postData, result: "^_^" });
    } else {
        res.status(404).json({ success: false });
    }
}

// import { NextApiRequest, NextApiResponse } from "next";
// import { postHandling } from "../../states/recoilAtom";
// let postData: any = {};
// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === "POST") {
//         postData = req.body;

//         // 쿠키나 세션 등을 사용하여 받은 데이터 저장
//         res.status(200).json({ success: postData, result: "T_T" });
//     }
// }
