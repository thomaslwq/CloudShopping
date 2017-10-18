import { useMockData } from "./Common"
import allMockData  from "./MockUtil"
let $ = require('jquery')




export function getQueryDataByQueryType(queryType,queryParam){

    //如果是使用mockData,那么直接冲模拟数据中拿数据
    if( useMockData ){
        return allMockData[queryType];
    }else{
        let result=$.ajax(
            {
                url:queryType,
                async:false,//同步请求
                data:queryParam||"",
                dataType:"json"
            }
            );
        
        let responseData = JSON.parse(result.responseText);
        return responseData;
    }



}