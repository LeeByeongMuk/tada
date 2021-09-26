import { DifficultyItem, DifficultyText } from '@/types/difficulty';
import { AltitudeItem, AltitudeText } from '@/types/altitude';

function formatDifficulty(difficulty: DifficultyItem): string {
    switch (difficulty) {
        case DifficultyItem.beginner:
            return DifficultyText.beginner;
        case DifficultyItem.intermediate:
            return DifficultyText.intermediate;
        case DifficultyItem.advanced:
            return DifficultyText.advanced;
        default:
            return '';
    }
}

function formatAltitude(altitude: AltitudeItem): string {
    switch (altitude) {
        case AltitudeItem.flat:
            return AltitudeText.flat;
        case AltitudeItem.uphill:
            return AltitudeText.uphill;
        case AltitudeItem.mountain:
            return AltitudeText.mountain;
        default:
            return '';
    }
}

export { formatDifficulty, formatAltitude };
