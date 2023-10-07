export default function weatherSky(sky: string | undefined) {
    let skyName = 'NONE';

    switch(sky) {
        case 'SUNNY':
            skyName = 'SUNNY';
            break;
        case 'CLOUDY':
            skyName =  'CLOUDY';
            break;
        case 'OVERCAST':
            skyName =  'OVERCAST';
            break;
    }

    return skyName
}