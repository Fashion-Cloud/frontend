export default function rainfallType(type: number | undefined): string {
    let rainType: string = 'Clear';

    switch(type) {
        case 0: 
            rainType = 'Clear'
            break;
        case 1:
            rainType = 'Rain';
            break;
        case 2:
            rainType = 'Rain/Snow';
            break;
        case 3:
            rainType =  'Snow';
            break;
        case 5:
            rainType =  'Raindrop';
            break;
        case 6:
            rainType =  'Raindrop/Snow';
            break;
        case 7:
            rainType =  'Snow';
            break;
    }

    return rainType
}