import React, {ChangeEventHandler} from 'react'
import styled from 'styled-components'
import {Input} from '../../component/Input'

const Wrapper = styled.section`
  background-color: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
`
type Props = {
    value: string,
    onChange: (value: string) => void
}
const NoteSection: React.FC<Props> = (props) => {
    // const [note, setNote] = useState('')
    const note = props.value
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        props.onChange(e.target.value)
    }
    // 非受控组件
    // const refInput = React.useRef<HTMLInputElement>(null)
    // const onBlurInput = () => {
    //     if(refInput.current!==null){
    //         props.onChange(refInput.current.value)
    //     }
    // }
    return (
        <Wrapper>
            <Input label='备注：' type="text" onChange={onChange} placeholder="点击写备注..." value={note}/>
            {/*受控组件：<input type="text"
                     placeholder="在这里添加备注"
                     value={note}
                     onChange={onChange}/>*/}
            {/* 非受控组件 <input placeholder="在这里添加备注"
                      type="text"
                      defaultValue={props.value}
                      ref={refInput}
                      onBlur={onBlurInput}/>*/}

        </Wrapper>
    )
}
export {NoteSection}