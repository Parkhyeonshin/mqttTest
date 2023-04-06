import { useEffect } from "react";
import mqtt from "mqtt";
import { useRecoilState } from "recoil";
import { mqttMessage } from "@/states/recoilAtom";

export default function Testpagethree() {
    const [tatatata, setTatata] = useRecoilState<any>(mqttMessage);
    useEffect(() => {
        const client = mqtt.connect("ws://121.136.13.39", {
            port: 9003,
        });

        const onConnect = () => {
            console.log("클라이언트 연결됌");
            client.subscribe("testtopic/test1");
        };

        const onMessage = (topic: any, message: any) => {
            console.log(topic);
            setTatata(message.toString());
        };

        client.on("connect", onConnect);
        client.on("message", onMessage);

        // useEffect 함수의 반환 함수는 컴포넌트가 언마운트될 때 실행됩니다.
        // 여기서는 MQTT 클라이언트 연결을 종료합니다.
        return () => {
            client.end();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {}, [tatatata]);
    const testfunc = () => {
        console.log(tatatata);
    };

    return (
        <>
            <div>
                <h1>MQTT TEST PAGE </h1>
                <ul>
                    <li>{tatatata}</li>
                </ul>
            </div>
            <button onClick={testfunc}>리코일확인용</button>
        </>
    );
}
