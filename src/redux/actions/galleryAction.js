
import axios from "../../utils/axios";
import { addimages , adderror } from "../reducer/galleryReducer";

export const asyncAddImages = () => async (dispatch, getState) => {
    
    try {
        const { data } = await axios.get("/v2/list?limit=100&page=2");
        dispatch(addimages(data));
       // console.log(data)
    } catch (error) {
        dispatch(adderror(error.response.data));
    }
};