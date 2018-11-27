import { GET_CONTENT_LIST } from  "../actionTypes"
import axios from "axios"

const actionCreators = {
    getContentList () {
        return (dispatch) => {
            axios.get("/mw/app/index/recommendClassifyDetail").then( res => {
                let action = { type: GET_CONTENT_LIST , contentlist: res.data.entity.appRecommendClassifyList }
                dispatch(action)
            } )

        }
    }
}

export default actionCreators