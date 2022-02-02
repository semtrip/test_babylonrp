import { useState } from "react";
import { observer } from "mobx-react-lite";
import './style.scss';

import TestStore from './index'

const Test = observer(()=>{
    const state = TestStore.state
    const {eventHandler} = TestStore
    let [path, setPath] = useState(0)
    let [navPath, setNavPath] = useState(0)
    let [searchData, setSearchData] = useState('')
    const isAccess = state.playerLVL >= state.items[path].access
    const typeBlock = state.items[path].type

    return state.show ?(
        <div className="test">
            <div className="container">
                <span className="playerAcces">Your access level: {state.playerLVL}</span>
                <div className="head">
                    {
                        state.items.map((item, i)=>(
                            <div className={path === i ? 'btn active': 'btn'} key={i} onClick={()=>{setPath(i); setNavPath(0)}}><span>{item.title}</span></div>
                        ))
                    }
                </div>
                <div className="top">
                            <div className="text">
                                <span className="title">
                                    {state.items[path].title}
                                </span>
                                <span className="access">
                                    {state.items[path].access}-уровень
                                </span>
                            </div>
                            {isAccess  && 
                            typeBlock === 'list' ?
                                <div className="search">
                                    <input type="text" placeholder="Search..." onChange={(e)=> setSearchData(e.target.value)}/>
                                    <div className="btn"/>
                                </div>:null
                            }

                </div>
                {
                    isAccess ?
                    <div className="page">
                        {
                            typeBlock === 'list' ?
                            <div className="content">
                                <div className="nav">
                                    {
                                        state.items[path].data.map((item, i) => (
                                            <div className={navPath === i ? `item active ${item.ico}`: `item ${item.ico}` } key={i} onClick={()=>setNavPath(i)}><span>{item.title}</span></div>
                                        ))
                                    }
                                </div>
                                <div className="text-block">
                                    {
                                        state.items[path].data[navPath].content.map((item, i) => (
                                            item.title.toLowerCase().includes(searchData) ||
                                            item.description.toLowerCase().includes(searchData) ||
                                            item.text.toLowerCase().includes(searchData) ? 
                                            <div key={i}>
                                                <span className="title"key={i}>{item.title}</span>
                                                <span className="description">{item.description}</span>
                                                <p>{item.text}</p>
                                            </div>:null
                                        ))
                                    }
                                </div>
                            </div>
                            :null
                        }
                        {
                            typeBlock === 'btns' ? 
                            <div className="content">
                                {
                                    state.items[path].data.map((item, i)=>(
                                        <div className={`item-btn bg_${item.bg}`} key={i}>
                                            <span>{item.text}</span>
                                            {
                                                item.btns !== undefined ?
                                                <div className="item-btn-additional">
                                                    {
                                                        item.btns.map((el, b)=>(
                                                            <div className="additional-btn" key={b} onClick={(e) => el.confir !== undefined ? e.target.classList.add('active') :eventHandler('click btn', [i,b])}>
                                                                <span className="name">{el.name}</span>
                                                                {
                                                                    el.confir !== undefined ?
                                                                    <div className="confirmation">
                                                                        <span className="answer no" onClick={(e)=> {e.target.parentNode.parentNode.classList.remove('active'); eventHandler('click btn confirmation no', [i,b])}}>- Нет</span>
                                                                        <span className="answer ok" onClick={(e)=> {e.target.parentNode.parentNode.classList.remove('active'); eventHandler('click btn confirmation ok', [i,b])}}>- Ok</span>
                                                                    </div>:null 
                                                                }
                                                                
                                                            </div>
                                                        ))
                                                    }
                                                </div>:null
                                            }
                                        </div>
                                    ))
                                } 
                            </div>
                            :null
                        }
                    </div>:
                    <div className="noAccess">
                        <span className="noAcces-text">У ВАС НЕТ ДОСТУПА , ПОВЫСЬТЕ УРОВЕНЬ ЧТОБЫ ПОЛЬЗОВАТЬСЯ ЭТИМ МЕНЮ</span>
                    </div>
                }

            </div>
        </div>
    ):null
})
export default Test