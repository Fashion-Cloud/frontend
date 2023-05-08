export default function weatherSky(sky: number): string {
    let skyName: string;

    switch(sky) {
        case 1:
            skyName = '맑음';
            break;
        case 3:
            skyName =  '구름많음';
            break;
        case 4:
            skyName =  '흐림';
            break;
        case 5:
            skyName =  '눈';
            break;
        default:
            skyName = 'none';
    }

    return skyName
}