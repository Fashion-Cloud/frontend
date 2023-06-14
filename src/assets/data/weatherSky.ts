export default function weatherSky(sky: number | undefined) {
    let skyName: string = 'Clear';

    switch(sky) {
        case 1:
            skyName = 'Clear';
            break;
        case 3:
            skyName =  'Cloudy';
            break;
        case 4:
            skyName =  'Overcast';
            break;
    }

    return skyName
}