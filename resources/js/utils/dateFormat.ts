const formatNumber = (num: number): string | number => {
    return (num + '').length === 1 ? '0' + num : num;
};

export function convertDate(date: string | number | Date): string {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    const month = formatNumber(newDate.getMonth() + 1);
    const day = formatNumber(newDate.getDate());
    const hour = formatNumber(newDate.getHours());
    const minute = formatNumber(newDate.getMinutes());

    return `${year}-${month}-${day} ${hour}:${minute}`;
}

export function formatKR(date: string): string {
    const newDate = date.split(' ');
    const splitDate = newDate[0].split('-');
    const splitTime = newDate[1].split(':');

    return `${splitDate[0]}년 ${splitDate[1]}월 ${splitDate[2]}일 ${splitTime[0]}시 ${splitTime[1]}분`;
}

export function formatDate(date: Date, time: string): string | null {
    if (!date) return null;

    const year = date.getFullYear();
    const month = formatDigit(date.getMonth() + 1);
    const day = formatDigit(date.getDate());

    return `${year}-${month}-${day} ${time}:00`;
}

export function formatNaturalDate(date: string): Date {
    if (!date) return new Date();

    const newDate = date.split(' ');

    const splitDate: string[] = newDate[0].split('-');
    const splitTime: string[] = newDate[1].split(':');

    return new Date(
        splitDate[0],
        splitDate[1] - 1,
        splitDate[2],
        splitTime[0],
        splitTime[1],
        0,
    );
}

export function getTime(date: string | string[]): string {
    if (!date) return '00:00';

    if (typeof date === 'string') {
        date = date.split(' ');
    }
    const splitTime = date[1].split(':');

    return `${splitTime[0]}:${splitTime[1]}`;
}

export function formatDigit(date: number): number {
    return date < 10 ? Number(`0${date}`) : date;
}
