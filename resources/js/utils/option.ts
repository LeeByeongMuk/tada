import { formatDigit } from '@/utils/dateFormat';

const timeOptions = (() => {
    const options = [];

    for (let i = 0; i < 24; i++) {
        for (let s = 0; s < 60; s = s + 5) {
            const value = `${formatDigit(i)}:${formatDigit(s)}`;
            const option = {
                value: value,
                text: value,
            };

            options.push(option);
        }
    }

    return options;
})();

const difficultyOptions = (() => {
    const options: any = [
        {
            value: 'beginner',
            text: '초보자',
        },
        {
            value: 'intermediate',
            text: '중급자',
        },
        {
            value: 'advanced',
            text: '숙련자',
        },
    ];

    return options;
})();

const altitudeOptions = (() => {
    return [
        {
            value: 'flat',
            text: '평지',
        },
        {
            value: 'uphill',
            text: '업힐',
        },
        {
            value: 'mountain',
            text: '산',
        },
    ];
})();

export { timeOptions, difficultyOptions, altitudeOptions };
