import {useState} from "react";
import {createId} from "./lib/createId";

const useTags = () => {             //自定义一个hook（在自定义函数中使用 useState，然后返回一个读写接口到外面去）
    const [tags, setTags] = useState<{id:number, name:string}[]>([
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'}
    ])
    return { tags, setTags }     //通过对象的形式 return 出去

}

export {useTags}