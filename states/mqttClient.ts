import mqtt from "mqtt";

const clientSetting = mqtt.connect("ws://121.136.13.39", {
    port: 9003,
});

// const onConnect = () => {
//     console.log("클라이언트 연결됌");
//     client.subscribe("testtopic/test1");
// };

// const onMessage = (topic: any, message: any) => {
//     // return topic;
//     // return message.toString();
//     console.log(`Message received: ${message.toString()}`);
//     // console.log(`Message received: ${topic}`);
// };

// client.on("connect", onConnect);
// client.on("message", onMessage);

export default clientSetting;
