import { observer } from "mobx-react-lite";
import './style.scss';

import TestStore from './index'

const Test = observer(()=>{
    const state = TestStore.state
    return state.show ?(
        <div className="test">
            <div className="container">
                <div className="head">
                    {
                        state.items.map((item, i)=>(
                            <div className="btn" key={i}><span>{item.btn_name}</span></div>
                        ))
                    }
                </div>
                <div className="content">

                </div>
            </div>
        </div>
    ):null
})
export default Test