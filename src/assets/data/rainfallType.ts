export default function rainfallType(type: number | undefined): string {
    let rainType: string;

    switch(type) {
        case 0: 
            rainType = 'clear'
            break;
        case 1:
            rainType = 'rain';
            break;
        case 2:
            rainType = 'rain/snow';
            break;
        case 3:
            rainType =  'snow';
            break;
        case 5:
            rainType =  'raindrop';
            break;
        case 6:
            rainType =  'raindrop/snow';
            break;
        case 7:
            rainType =  'snow';
            break;
        default:
            rainType = 'clear';
    }

    return rainType
}