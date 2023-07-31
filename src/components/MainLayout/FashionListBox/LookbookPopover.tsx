/* eslint-disable react-hooks/exhaustive-deps */
import { LookBookBoxType } from "../../../utils/types";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Paper
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRecoilValue } from 'recoil';
import { userIdState } from '../../../utils/Recoil';

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

type LookbookProps = {
    handeLookClick: Function;
    handleMarkClose: Function;
}

export default function LookbookPopover({handeLookClick, handleMarkClose}: LookbookProps) {
    // toastify 알람 실행 함수 만들기
    const success = () => toast.success("이미지 업로드 성공!");
    
    const userId = useRecoilValue(userIdState);
    const [lookbook, setLookbook] = useState<LookBookBoxType[]>([]);

    const lookbookListAPI = async () => {
        try {
            await axios.get(`/api/v1/books/${userId}`,
            {
                headers: {
                    Accept: 'application/json'
                }
            }
        ).then((response) => {
            const data = response.data.data;
            console.log("data: ", data)

            setLookbook(data);
        });
        } catch {
            console.log("api 불러오기 실패")
        };
    }

    useEffect(() => {
        lookbookListAPI()   
    }, [])
    
    return(
        <Paper sx={paperStyle}>
            <List sx={style} component="nav">
                <ListItem divider>
                    <ListItemText primary="룩북"/>
                </ListItem>

                {Array.isArray(lookbook)&&lookbook.map((lookbook, index) => (
                    <ListItem key={index} button onClick={() => {
                        handeLookClick(lookbook.id)
                        handleMarkClose()
                        success()
                    }}>
                        <Box sx={{mr: '10px'}}>
                            <img height="40px" width="40px" src={lookbook.image} alt={lookbook.title}/>
                        </Box>

                        <ListItemText primary={lookbook.title} sx={{mt: '-3px'}}/>
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