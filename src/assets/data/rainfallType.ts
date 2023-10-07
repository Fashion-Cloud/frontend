export default function rainfallType(type: string | undefined): string {
    let rainType = 'NONE';

    switch(type) {
        case 'CLEAR': 
            rainType = 'CLEAR'
            break;
        case 'RAIN':
            rainType = 'RAIN';
            break;
        case 'RAIN_SNOW':
            rainType = 'RAIN_SNOW';
            break;
        case 'SNOW':
            rainType =  'SNOW';
            break;
        case 'RAINDROP':
            rainType =  'RAINDROP';
            break;
        case 'RAINDROP_FLURRY':
            rainType =  'RAINDROP_FLURRY';
            break;
        case 'FLURRY':
            rainType =  'FLURRY';   
            break;
    }

    return rainType
}