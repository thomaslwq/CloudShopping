import {QUERY_INDEX_FOCUS_MAP,
    QUERY_INDEX_GOODS_LIST,
    QUERY_INDEX_ABOUT_TO_ANNOUNCED_GOODS,
    QUERY_INDEX_POPULARITY_GOODS,
    QUERY_INDEX_NEWEST_GOODS,
    QUERY_INDEX_MOST_VALUE_GOODS
} from "./IndexQueryType"
import { getQueryDataByQueryType } from "../common/AjaxUtil"

export function queryIndexFocusMap(){
    return getQueryDataByQueryType(QUERY_INDEX_FOCUS_MAP,[]);
}
export function queryIndexGoodsList(){
    return getQueryDataByQueryType(QUERY_INDEX_GOODS_LIST,[]);
}
export function queryIndexAboutToAnnouncedGoods(){
    return getQueryDataByQueryType(QUERY_INDEX_ABOUT_TO_ANNOUNCED_GOODS,[]);
}
export function queryIndexPopularityGoods(){
    return getQueryDataByQueryType(QUERY_INDEX_POPULARITY_GOODS,[]);
}
export function queryIndexNewestGoods(){
    return getQueryDataByQueryType(QUERY_INDEX_NEWEST_GOODS,[]);
}
export function queryIndexMostValueGoods(){
    return getQueryDataByQueryType(QUERY_INDEX_MOST_VALUE_GOODS,[]);
}

