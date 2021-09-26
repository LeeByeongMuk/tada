import { DifficultyItem, DifficultyText } from '@/types/difficulty';
import { formatDigit } from '@/utils/dateFormat';
import { AltitudeItem, AltitudeText } from '@/types/altitude';

interface Item {
    value: string;
    text: string;
}

const timeOptions = () => {
    const options: Item[] = [];

    for (let i = 0; i < 24; i++) {
        for (let s = 0; s < 60; s = s + 5) {
            const value = `${formatDigit(i)}:${formatDigit(s)}`;
            const option: Item = {
                value: value,
                text: value,
            };

            options.push(option);
        }
    }

    return options;
};

const timeItems: Item[] = timeOptions();

const difficultyItems: Item[] = [
    {
        value: DifficultyItem.beginner,
        text: DifficultyText.beginner,
    },
    {
        value: DifficultyItem.intermediate,
        text: DifficultyText.intermediate,
    },
    {
        value: DifficultyItem.advanced,
        text: DifficultyText.advanced,
    },
];

const altitudeItems: Item[] = [
    {
        value: AltitudeItem.flat,
        text: AltitudeText.flat,
    },
    {
        value: AltitudeItem.uphill,
        text: AltitudeText.uphill,
    },
    {
        value: AltitudeItem.mountain,
        text: AltitudeText.mountain,
    },
];

export { timeItems, difficultyItems, altitudeItems };
