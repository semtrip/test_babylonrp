import { makeAutoObservable } from "mobx"

class TestStore {
    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }
    state ={
        show: true,
        playerLVL: 1,
        items:[
            {
                btn_name: 'Памятка 1',
            },
            {
                btn_name: 'Памятка 2',
            },
            {
                btn_name: 'Памятка 3',
            },
            {
                btn_name: 'Памятка 4',
            },
            {
                btn_name: 'Памятка 5',
            },
            {
                btn_name: 'Памятка 6',
            }
        ]

    }
}
export default new TestStore()