import { useEffect } from "react";
import mqtt from "mqtt";
import { useRecoilState } from "recoil";
import { mqttMessage, mqttTopic } from "@/states/recoilAtom";
import clientSetting from "@/states/mqttClient";

export default function Testpagethree() {
    const [tatatata, setTatata] = useRecoilState<any>(mqttMessage);
    const [xxxxx, setxxxx] = useRecoilState<any>(mqttTopic);
    useEffect(() => {
        const client = mqtt.connect("ws://121.136.13.39", {
            port: 9003,
        });
        const onConnect = () => {
            console.log("클라이언트 연결됌");
            client.subscribe("testtopic/test1");
        };
        const onMessage = (topic: any, message: any) => {
            // return topic;
            // return message.toString();
            setTatata(message.toString());
            setxxxx(topic);
            // console.log(message);
            // console.log(message.toString());
            // console.log(`Message received: ${topic}`);
        };

        client.on("connect", onConnect);
        client.on("message", onMessage);

        // // MQTT 클라이언트 연결
        // const client = mqtt.connect("mqtt://121.136.13.39", { port: 1884 });

        // const onConnect = () => {
        //     console.log("클라이언트 연결됌");
        //     client.subscribe("testtopic/test1");
        // };

        // const onMessage = (topic: any, message: any) => {
        //     console.log(`Message received: ${message.toString()}`);
        //     console.log(`Message received: ${topic}`);
        //     setMqttMessages((prevMessages: any) => [...prevMessages, message.toString()]);
        //     setMqttMessages((prevMessages: any) => [...prevMessages, topic]);
        // };

        // client.on("connect", onConnect);
        // client.on("message", onMessage);

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
    // const testStop = () => {
    //     client.end();
    // };
    return (
        <>
            <div>
                <h1>MQTT TEST PAGE </h1>
                {/* <div>test: {tatatata[1]}</div> */}
                <ul>
                    <li>{tatatata}</li>
                </ul>
            </div>
            <div>{xxxxx}</div>
            <button onClick={testfunc}>리코일확인용</button>

            {/* <button onClick={testStop}> 클라이언트 중단</button> */}
        </>
    );
}
