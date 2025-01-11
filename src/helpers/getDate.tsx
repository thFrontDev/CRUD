export default function getCurrentFormatedDate() {
    const date = new Date(Date.now());
    const dayMonthYear = date.toLocaleDateString();
    const hours = date.getHours().toString();
    const mins = date.getMinutes().toString();
    const formatedDate = `${dayMonthYear}, ${hours.length === 1? "0" + hours : hours}:${mins.length === 1? "0" + mins : mins}`;
    return formatedDate;
}