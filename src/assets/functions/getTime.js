export default function getTime(){
    let date = new Date();
    let minutes = date.getMinutes().toString().length < 2 ? `0${date.getMinutes()}` : date.getMinutes();
    let hours = date.getHours().toString().length < 2 ? `0${date.getHours()}` : date.getHours();
    return [minutes, hours];
}