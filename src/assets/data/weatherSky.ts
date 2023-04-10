export default function weatherSky(sky: number) {
    switch(sky) {
        case 1:
            return 'clear';
        case 3:
            return 'cloudy';
        case 4:
            return 'rainy';
    }
}