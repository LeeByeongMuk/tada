function convertDate(date: string): string {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = formatDigit(newDate.getMonth() + 1);
    const day = formatDigit(newDate.getDate());
    const hour = formatDigit(newDate.getHours());
    const minute = formatDigit(newDate.getMinutes());
    return `${year}-${month}-${day} ${hour}:${minute}`;
}

function formatKR(date: string): string {
    const [a, b] = date.split(' ');
    const [year, month, day] = a.split('-');
    const [hour, minute] = b.split(':');
    return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;
}

function formatDate(date: Date, time: string): string | null {
    if (!date) return null;
    const year = date.getFullYear();
    const month = formatDigit(date.getMonth() + 1);
    const day = formatDigit(date.getDate());
    return `${year}-${month}-${day} ${time}:00`;
}

function formatNaturalDate(date: string): Date {
    if (!date) return new Date();
    const [a, b] = date.split(' ');
    const [year, month, day] = a.split('-');
    const [hour, minute] = b.split(':');
    return new Date(
        parseInt(year),
        parseInt(month) - 1,
        parseInt(day),
        parseInt(hour),
        parseInt(minute),
        0,
    );
}

function getTime(date: string): string {
    if (!date) return '00:00';
    const newDate = date.split(' ');
    const [hour, minute] = newDate[1].split(':');
    return `${hour}:${minute}`;
}

function formatDigit(num: number): string {
    return num.toString().padStart(2, '0');
}

export {
    convertDate,
    formatKR,
    formatDate,
    formatNaturalDate,
    getTime,
    formatDigit,
};
