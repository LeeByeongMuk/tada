export function formatDifficulty(difficulty: string): string {
    switch (difficulty) {
        case 'beginner':
            return '초보자';
        case 'intermediate':
            return '중급자';
        case 'advanced':
            return '숙련자';
        default:
            return '';
    }
}

export function formatAltitude(altitude: string): string {
    switch (altitude) {
        case 'flat':
            return '평지';
        case 'uphill':
            return '업힐';
        case 'mountain':
            return '산';
        default:
            return '';
    }
}
