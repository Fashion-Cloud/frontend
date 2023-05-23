export default function weatherSky(sky: number | undefined) {
    let skyName: string;

    switch(sky) {
        case 1:
            skyName = 'Sunny';
            break;
        case 3:
            skyName =  'Mostly Cloudy';
            break;
        case 4:
            skyName =  'Cloudy';
            break;
        case 5:
            skyName =  'Snow';
            break;
        default:
            skyName = 'none';
    }

    return skyName
}