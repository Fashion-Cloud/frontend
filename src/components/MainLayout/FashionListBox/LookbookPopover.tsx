import {
    Box,
    List,
    ListItem,
    ListItemText,
    Paper
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const paperStyle = {
    height: 300,
    width: 200,
    bgcolor: "#FFF",
    boxShadow: 24,
};

const style = {
    width: '100%',
    maxWidth: 400,
    bgcolor: 'background.paper',
};
const primaryText = [
    {
        'name': '봄',
        'imgUrl': 'https://images.onthelook.co.kr/posts/20230317110373751537090.jpeg?w=1200&q=75&f=webp',
    },
    {
        'name': '여름',
        'imgUrl': 'https://images.onthelook.co.kr/posts/2023031912037042632161.jpeg?w=420&q=60&f=webp',
    },
    {
        'name': '가을',
        'imgUrl': 'https://www.womansense.co.kr/upload/woman/article/201909/thumb/42904-386245-sampleM.jpg',
    },
    {
        'name': '겨울',
        'imgUrl': 'https://shop-phinf.pstatic.net/20221026_136/1666775192616mcXHY_JPEG/67911035283532969_380459201.jpg?type=f296_296',
    },

];

type LookbookProps = {
    handeLookClick: Function;
    handleMarkClose: Function;
}

export default function LookbookPopover({handeLookClick, handleMarkClose}: LookbookProps) {
    // toastify 알람 실행 함수 만들기
    const success = () => toast.success("이미지 업로드 성공!");
    const error = () => toast.error("이미지 업로드 실패!");
    
    return(
        <Paper sx={paperStyle}>
            <List sx={style} component="nav">
                <ListItem divider>
                    <ListItemText primary="룩북"/>
                </ListItem>

                {primaryText.map((text, index) => (
                    <ListItem key={index} button onClick={() => {
                        handeLookClick()
                        handleMarkClose()
                        success()
                    }}>
                        <Box sx={{mr: '10px'}}>
                            <img height="40px" width="40px" src={text.imgUrl}/>
                        </Box>

                        <ListItemText primary={text.name} sx={{mt: '-3px'}}/>
                    </ListItem>
                ))}
            </List>

            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </Paper>
    )
}