import {
    Card,
    CardMedia,
} from '@mui/material'
// import { usePostGMockData } from '../../../assets/mocks/usePostGMockData';
import { type } from '../../../utils/types';

export function DetailImage() {
    // const post: Array<type.PostType> | undefined = usePostGMockData();

    return(
        <div>
            {/* {
                post !== undefined
                ?  <Card 
                        sx={{    
                            width: '230px', borderRadius: '10%',
                            ":hover": { boxShadow: "#807ce6 0px 5px 5px 3px",
                            }
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="280px"
                            image={post[1].image}
                        />
                    </Card>
                : null
            } */}
        </div>
    )
}